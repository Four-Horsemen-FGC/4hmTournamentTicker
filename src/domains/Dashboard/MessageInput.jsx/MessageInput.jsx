import React from "react";
import { Input } from "@chakra-ui/react";

const MessageInput = ({ value, key, onClick, onChange }) => {
  let message = value || null;
  return (
    <>
      <Input placeholder="Enter Message" onChange={(e) => onChange(key)}>
        {message}
      </Input>
    </>
  );
};

export default MessageInput;
