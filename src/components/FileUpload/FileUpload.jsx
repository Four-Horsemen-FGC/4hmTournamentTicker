import React, { forwardRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { IconButton, FormLabel } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/input";
import { useRef } from "react";

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
      <IconButton icon={<AiOutlineUpload />} />
      {value && value[0] && value[0].name && (
        <FormLabel>{value[0].name}</FormLabel>
      )}
    </InputGroup>
  );
});
