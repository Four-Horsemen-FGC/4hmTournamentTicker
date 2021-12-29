import React, { forwardRef } from "react";
import { Button, FormLabel } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/input";
import { useRef } from "react";
// import { useForm } from "react-hook-form";

export const FileUpload = forwardRef(({ value, ...props }, ref) => {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        hidden
        {...props}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      {value && value[0] && value[0].name && (
        <FormLabel>{value[0].name}</FormLabel>
      )}
      <Button>upload</Button>
    </InputGroup>
  );
});
