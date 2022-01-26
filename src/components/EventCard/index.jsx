import React from "react";
import { Box, Image, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { db } from "../../index";
import { concatName } from "../../domains/Top8/Top8Body/utils";
import firebase from "firebase/app";

const EventCard = ({
  eventId,
  eventName,
  location,
  messages,
  top8Id,
  imageUrl,
  tournamentId,
  tournamentName,
  userId,
  isActive,
}) => {
  const toast = useToast();
  const setActiveEvent = async () => {
    await db.collection("users").doc(userId).update({
      activeEvent: {
        eventId,
        eventName,
        location,
        messages,
        top8Id,
        imageUrl,
        tournamentId,
        tournamentName,
      },
    });

    toast({
      title: "Active Event Changed.",
      description: `changed to ${eventName}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const deleteEvent = async () => {
    await db
      .collection("users")
      .doc(userId)
      .update({
        events: firebase.firestore.FieldValue.arrayRemove({
          eventId,
          eventName,
          location,
          messages,
          top8Id,
          imageUrl,
          tournamentId,
          tournamentName,
        }),
      });

    toast({
      title: "Event Deleted.",
      description: `Deleted ${eventName} from history`,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      sx={{ margin: "1" }}
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="gray.800"
    >
      <Image
        height="300px"
        width="300px"
        objectFit="cover"
        src={imageUrl}
        alt={eventName}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {concatName(tournamentName, 36)}
          </Text>
        </Box>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {concatName(eventName, 30)}
        </Text>

        <Text>{location}</Text>
      </Box>
      <Flex width="full" alignItems="space-between" p="2">
        <Button
          onClick={deleteEvent}
          variant="ghost"
          colorScheme="red"
          size="sm"
          mr="auto"
        >
          Delete Event
        </Button>
        <Button
          ml="auto"
          onClick={setActiveEvent}
          variant="ghost"
          colorScheme="blue"
          size="sm"
          disabled={isActive}
        >
          {isActive ? "Event Active" : "Set As Active"}
        </Button>
      </Flex>
    </Box>
  );
};

export default EventCard;
export { default as EventCardList } from "./EventCardList";
