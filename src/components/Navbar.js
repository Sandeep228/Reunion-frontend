import React from "react";
import { Box, Flex, Spacer, Button, Link, Icon } from "@chakra-ui/react";
import { TbDoorEnter } from "react-icons/tb";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#CCCCCC", width: "100%" }}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: "1rem", sm: "2rem", lg: "1rem" }}
        bgColor="#CCCCCC"
        color="black"
      >
        <Box marginLeft="1rem">
          <Icon as={TbDoorEnter} w={8} h={8} color="black" />
        </Box>

        <Box marginLeft="1rem">
          <Link href="/" fontSize={{ base: "lg", sm: "xl" }}>
            Home
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href="/login">
            <Button
              color="black"
              backgroundColor="#A2DDED"
              borderRadius="12px"
              mr={{ base: "1", sm: "2" }}
              variant="solid"
              fontSize={{ base: "sm", sm: "md" }}
              px={{ base: "2", sm: "4" }}
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              color="black"
              borderRadius="12px"
              backgroundColor="#D1EFF7"
              variant="solid"
              fontSize={{ base: "sm", sm: "md" }}
              px={{ base: "2", sm: "4" }}
            >
              Signup
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
