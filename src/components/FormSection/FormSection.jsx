import React from "react";
import { Button, FormLabel, HStack, useToast } from "@chakra-ui/react";
import { storage } from "../../index";
import { FileUpload } from "../FileUpload/FileUpload";
import { useForm } from "react-hook-form";

export const FormSection = ({ uid, destination, ...props }) => {
  const toast = useToast();
  const { register, watch, handleSubmit } = useForm();
  return (
    <>
      <FormLabel>upload new {destination}</FormLabel>
      <HStack spacing="24px" justify="center">
        <FileUpload {...register(destination)} value={watch(destination)} />
        <Button
          onClick={handleSubmit(async (data) => {
            await storage
              .ref()
              .child(`${uid}/${destination}/${data[destination][0].name}`)
              .put(data[destination][0]);
            toast({
              title: "File uploaded.",
              description: `uploaded ${data[destination][0].name} to ${destination}`,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          })}
          variant="ghost"
        >
          submit
        </Button>
      </HStack>
    </>
  );
};
