import React from "react";
import { Box, Image, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { db } from "../../index";
import { concatName } from "../../domains/Top8/Top8Body/utils";

// eventId: 537272
// eventName: "Guilty Gear XX Accent Core +R"
// location: "online"
// messages: (3) ["77", "89888", "99999"]
// top8Id: 895216
// tournamentName: "Frosty Faustings XIII 2021 - Online"

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

  return (
    <Box
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
          {concatName(eventName, 36)}
        </Text>

        <Text>{location}</Text>
      </Box>
      <Flex width="full" alignItems="flex-end" p="2">
        <Button
          onClick={setActiveEvent}
          marginLeft="auto"
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
