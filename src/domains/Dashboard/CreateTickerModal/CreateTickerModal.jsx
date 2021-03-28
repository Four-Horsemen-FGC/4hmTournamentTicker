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
  FormErrorMessage,
  FormHelperText,
  Input,
  Spacer,
} from "@chakra-ui/react";

import React, { useState } from "react";
import TournamentEvent from "../TournamentEvent/TournamentEvent";
import { useLazyQuery, gql } from "@apollo/client";

const TOURNAMENT_EVENTS = gql`
  query getTournamentEvents($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
      city
      name
      events {
        id
        name
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

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tournamentName, setTournamentName] = useState("");
  const [getEventsQuery, { loading, data }] = useLazyQuery(TOURNAMENT_EVENTS, {
    variables: { tourneySlug: slugifyTournamentName(tournamentName) },
  });
  const [dbPayload, setDbPayload] = useState({
    tournamentName: null,
    location: null,
    eventName: null,
    eventId: null,
    top8Id: null,
    messages: [],
  });

  const createTournamentEvents = (queryData) => {
    let tournament = queryData.name;
    let location = queryData.city ?? "online";
    let events = queryData.events;

    return events.map((element) => {
      let top8Id = element.phases[element.phases.length - 1].id;
      return (
        <TournamentEvent
          key={element.id}
          id={element.id}
          name={element.name}
          top8Id={top8Id}
          onClick={() => {
            setDbPayload({
              ...dbPayload,
              tournamentName: tournament,
              location: location,
              eventName: element.name,
              eventId: element.id,
              top8Id: top8Id,
            });
          }}
        />
      );
    });
  };

  console.log(`tournamentName: ${tournamentName}`);
  console.log(dbPayload);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Ticker</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <FormControl id="tourney-name">
                <Input
                  placeholder="Tournament name"
                  onChange={(e) => setTournamentName(e.target.value)}
                />
              </FormControl>
              <Spacer />
              <Button
                colorScheme="purple"
                ml={1}
                onClick={() => getEventsQuery()}
              >
                Get events
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="solid">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
