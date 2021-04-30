import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Top8Match from "../Top8Match/Top8Match";

const TopEightRound = ({
  single,
  data,
  ...props
  // single,
  // matchName,
  // p1Org,
  // p2Org,
  // p1Score,
  // p2Sore,
  // p1Name,
  // p2Name,
  // ...props
}) => {
  console.log(data);

  const grandFinalResetExists =
    data.length === 2 && data[0].matchName.includes("Grand Final");
  return (
    <Flex w="full" direction="column" justify="center">
      {single && (
        <VStack spacing="1">
          <Text
            bg="#ae0e0e"
            color="#f6b714"
            fontWeight="bold"
            alignSelf="flex-start"
            pl="5"
            pr="5"
            fontSize={{
              base: "xs",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "2xl",
              "2xl": "4xl",
            }}
            borderRadius="5"
          >
            {}
          </Text>
          <Top8Match />
        </VStack>
      )}
      {!single && (
        <VStack spacing="1">
          <Text
            bg="#ae0e0e"
            color="#f6b714"
            fontWeight="bold"
            alignSelf="flex-start"
            pl="5"
            pr="5"
            fontSize={{
              base: "xs",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "2xl",
              "2xl": "4xl",
            }}
            borderRadius="5"
          >
            {}
          </Text>
          <Top8Match />
          <Box h="5" />
          <Top8Match />
        </VStack>
      )}
    </Flex>
  );
};

export default TopEightRound;
