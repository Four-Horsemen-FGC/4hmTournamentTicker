import React from "react";
import { Button, FormLabel, HStack } from "@chakra-ui/react";
import { db, storage } from "../../index";
import { FileUpload } from "../FileUpload/FileUpload";
import { useForm } from "react-hook-form";

export const FormSection = ({ uid, destination, ...props }) => {
  const { register, watch, handleSubmit } = useForm();
  return (
    <>
      <FormLabel>{`${destination}`}</FormLabel>
      <HStack spacing="24px">
        <FileUpload {...register(destination)} value={watch(destination)} />
        <Button
          onClick={handleSubmit(async (data) => {
            //put in the upload logic from https://firebase.google.com/docs/storage/web/upload-files?authuser=0
            await storage
              .ref()
              .child(`${uid}/${destination}/${data[destination][0].name}`)
              .put(data[destination][0]);
          })}
        >
          submit
        </Button>
      </HStack>
    </>
  );
};
