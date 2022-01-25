import React from "react";
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
  VStack,
  HStack,
} from "@chakra-ui/react";
import "firebase/firestore";
import "firebase/auth";
import { FormSection } from "../../../components/FormSection/FormSection.jsx";
import { SetTheme } from "../../../components/SetTheme/SetTheme.jsx";

export const UpdateTheme = ({ uid, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Edit Theme</Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Theme</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <SetTheme
                uid={uid}
                destination="background"
                purpose="Recent Matches"
                firestoreKey="recentMatches"
              />
              <SetTheme
                uid={uid}
                destination="background"
                purpose="Stream Queue"
                firestoreKey="streamQueue"
              />
              <SetTheme
                uid={uid}
                destination="background"
                purpose="Top 8"
                firestoreKey="topEight"
              />
              <SetTheme
                uid={uid}
                destination="orgLogo"
                purpose="Org Logo 1"
                firestoreKey="orgLogoOne"
              />
              <SetTheme
                uid={uid}
                destination="orgLogo"
                purpose="Org Logo 2"
                firestoreKey="orgLogoTwo"
              />
              <SetTheme
                uid={uid}
                destination="eventLogo"
                purpose="Event Logo"
                firestoreKey="eventLogo"
              />
            </HStack>
            <VStack spacing={1} align="stretch">
              <FormSection uid={uid} destination="background" />
              <FormSection uid={uid} destination="orgLogo" />
              <FormSection uid={uid} destination="eventLogo" />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
