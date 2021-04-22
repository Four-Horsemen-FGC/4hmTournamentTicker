import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const DashboardLink = (props) => {
  // whatever is in props pass to the component
  // eg: props = {to: '/home', thing: ['hello', 'hi']} spreading the props will make it
  // <Link as={RRLink} to="/home" thing={['hello', 'hi']} />
  return (
    <Button target="_blank" rel="noopener noreferrer" as={RRLink} {...props} />
  );
};
