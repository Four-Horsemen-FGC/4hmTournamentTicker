import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const DashboardLink = (props) => {
  return (
    <Button target="_blank" rel="noopener noreferrer" as={RRLink} {...props} />
  );
};
