import React from "react";
import { Link } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <div>
      <Center mt={30}>
        <Center bg="teal" h="200px" w="400px" color="white" borderRadius="lg">
          <Text fontSize="4xl">404 NotFound</Text>
        </Center>
      </Center>
      <Center mt={30}>
        <Link to="/">TOPに戻る →</Link>
      </Center>
    </div>
  );
};

export default NotFound;
