import React from "react";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  StackDivider,
  useDisclosure,
  VStack,
  Heading,
} from "@chakra-ui/react";
// import { DeleteIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { db, storage } from "../../../index.js";
// import { FileUpload } from "../../../components/FileUpload/FileUpload.jsx";
// import { useForm } from "react-hook-form";
import { FormSection } from "../../../components/FormSection/FormSection.jsx";

export const UpdateTheme = ({ uid, ...props }) => {
  // const { register, watch, handleSubmit } = useForm();
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
            <VStack
              divider={<StackDivider borderColor="gray.600" />}
              spacing={4}
              align="stretch"
            >
              <Heading size="md"> Upload New Files</Heading>
              <FormSection uid={uid} destination="background" />
              <FormSection uid={uid} destination="orgLogo" />
              <FormSection uid={uid} destination="eventLogo" />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
