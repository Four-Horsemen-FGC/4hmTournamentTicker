import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Top8Match from "../Top8Match/Top8Match";
import TransparentTop8Match from "../Top8Match/TransparentTop8Match";

const TopEightRound = ({ single, data, ...props }) => {
  // console.log(data);

  data.sort((gameA, gameB) => gameA.id.localeCompare(gameB.id));

  // console.log(data);

  const grandFinalResetExists =
    data.length === 2 &&
    data?.[0]?.matchName.includes("Grand Final") &&
    data?.[1]?.p1Name !== ("TBD" || null) &&
    data?.[1]?.p2Name !== ("TBD" || null);

  const grandFinalData = grandFinalResetExists ? data[1] : data[0];

  const transparent =
    data.length === 1 && data?.[0]?.matchName.includes("Losers Round");

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
            {grandFinalData.matchName}
          </Text>
          <Top8Match {...grandFinalData} />
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
            {data[0].matchName}
          </Text>

          {/* conditional that shifts position of Losers Round set if there's only one */}
          {transparent ? <TransparentTop8Match /> : <Top8Match {...data[0]} />}
          <Box h="5" />
          {transparent ? (
            <Top8Match {...data[0]} />
          ) : (
            <Top8Match {...data[1]} />
          )}
        </VStack>
      )}
    </Flex>
  );
};

export default TopEightRound;
