import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Text,
  FormHelperText,
} from "@chakra-ui/react";

import { DeleteIcon, ChevronDownIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useLazyQuery, gql } from "@apollo/client";
import { db } from "../../../index.js";
import { FileUpload } from "../../../components/FileUpload/FileUpload.jsx";
import { useForm } from "react-hook-form";

const TOURNAMENT_EVENTS = gql`
  query getTournamentEvents($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
      id
      city
      name
      events {
        id
        name
        videogame {
          images {
            url
          }
        }
        phases {
          id
          name
        }
      }
    }
  }
`;

//Frosty Fasutings 2021: Frosty Faustings XIII 2021 - Online

// take tournament name and format it for graphql query
const slugifyTournamentName = (TourneyName) => {
  return TourneyName.replace(/(\s|-)+/g, "-").toLowerCase();
};

function BasicUsage({ uid, ...props }) {
  const { register, watch, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tournamentName, setTournamentName] = useState("");
  const [scrollingMessages, setScrollingMessages] = useState([{ value: "" }]);
  const [getEventsQuery, { loading, data }] = useLazyQuery(TOURNAMENT_EVENTS, {
    variables: { tourneySlug: slugifyTournamentName(tournamentName) },
    fetchPolicy: "no-cache",
  });

  const initialState = {
    tournamentId: null,
    tournamentName: null,
    location: null,
    eventName: null,
    eventId: null,
    top8Id: null,
    imageUrl: null,
    messages: [],
  };

  const [dbPayload, setDbPayload] = useState(initialState);

  const parseMessagesAndSend = async (messages, userId) => {
    // console.log(messages);
    let messagesPayload = [];
    messages.forEach((element) => {
      if (element.value) {
        messagesPayload.push(element.value);
      }
    });

    const thing = { ...dbPayload, messages: messagesPayload };

    // If you need messages in state then keep else delete
    setDbPayload({
      ...dbPayload,
      messages: messagesPayload ?? ["Heaven or Hell, let's rock"],
    });

    await db
      .collection("users")
      .doc(userId)
      .update({
        events: firebase.firestore.FieldValue.arrayUnion({ ...thing }),
      });

    setDbPayload(initialState);
    setScrollingMessages([{ value: "" }]);
    onClose();
  };

  const addInput = () => {
    let values = [...scrollingMessages];
    values.push({ value: "" });
    setScrollingMessages(values);
  };

  const removeInput = (i) => {
    let values = [...scrollingMessages];
    values.splice(i, 1);
    setScrollingMessages(values);
  };

  const handleChange = (i, e) => {
    let values = [...scrollingMessages];
    values[i].value = e.target.value;
    setScrollingMessages(values);
  };

  const createScrollingMessages = (messages) => {
    return messages.map((element, idx) => {
      return (
        <Flex key={`flex${idx}`} alignItems="center">
          <Input
            mt={2}
            mb={2}
            id={`input${idx}`}
            maxLength={50}
            placeholder="enter message"
            value={element.value}
            key={`input${idx}`}
            onChange={(e) => handleChange(idx, e)}
          />
          <DeleteIcon
            _hover={{ color: "tomato" }}
            key={`deleteIcon${idx}`}
            ml={3}
            as="button"
            onClick={() => removeInput(idx)}
          ></DeleteIcon>
        </Flex>
      );
    });
  };

  const createTournamentEvents = (queryData) => {
    let tournament = queryData.name;
    let tournamentId = queryData.id;
    let location = queryData.city ?? "online";
    let events = queryData.events;

    return events.map((element, idx) => {
      // console.log(`element.phases`, element.phases);
      let top8id = element.phases[element.phases.length - 1].id;
      let imageUrl = element?.videogame?.images[0]?.url;
      return (
        <MenuItemOption
          key={`${element.name}${idx}`}
          value={idx}
          id={element.id}
          name={element.name}
          top8id={top8id}
          onClick={() => {
            setDbPayload({
              ...dbPayload,
              tournamentName: tournament,
              tournamentId: tournamentId,
              location: location,
              eventName: element.name,
              eventId: element.id,
              top8Id: top8id,
              imageUrl: imageUrl,
            });
          }}
        >
          {element.name}
        </MenuItemOption>
      );
    });
  };

  // console.log(`tournamentName: ${tournamentName}`);
  // console.log(dbPayload);
  // console.table(scrollingMessages);

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Create new ticker
      </Button>

      <Modal
        closeOnOverlayClick={false}
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Ticker</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <FormControl id="tourney-name">
                <Input
                  placeholder={tournamentName || "tournament name"}
                  onChange={(e) => setTournamentName(e.target.value)}
                />
                <FormHelperText ml={2}>
                  e.g. Frosty Faustings XIII 2021 - Online
                </FormHelperText>
              </FormControl>
              <Button
                colorScheme="purple"
                ml={1}
                onClick={() => getEventsQuery()}
              >
                Get events
              </Button>
            </Flex>

            <Flex alignItems="center" mt={3}>
              {loading ? (
                <p>getting tournament events... </p>
              ) : data?.tournament?.events ? (
                <Menu closeOnSelect={true}>
                  <MenuButton as={Button} colorScheme="blue">
                    Select Event <ChevronDownIcon />
                  </MenuButton>

                  <MenuList minWidth="240px">
                    <MenuOptionGroup type="radio">
                      {createTournamentEvents(data.tournament)}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              ) : null}
              <Text ml={3} isTruncated>
                {dbPayload.eventName}
              </Text>
            </Flex>
            <FormControl mt={10}>
              <FormLabel>Scrolling Messages</FormLabel>
              {createScrollingMessages(scrollingMessages)}
              <Button onClick={() => addInput()}>Add Message</Button>
            </FormControl>
            {/* <FileUpload
              {...register("background")}
              value={watch("background")}
            />
            <Button
              onClick={handleSubmit(async (data) => {
                //put in the upload logic from https://firebase.google.com/docs/storage/web/upload-files?authuser=0

                console.log(`${uid}/background/${data.background[0].name}`);
              })}
            >
              submit
            </Button> */}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              onClick={() => parseMessagesAndSend(scrollingMessages, uid)}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
