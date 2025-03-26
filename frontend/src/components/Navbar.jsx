import { Container, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs"; 
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Minimalist color theme
  const buttonBg = colorMode === "light" ? "blue.900" : "blue.100";
  const buttonHoverBg = colorMode === "light" ? "blue.800" : "blue.200";
  const textColor = colorMode === "light" ? "blue.900" : "blue.100";

  return (
    <Container maxW="1140px" px={4}>
      <Flex 
        h={16} 
        alignItems="center" 
        justifyContent="space-between" 
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* Modern & Minimalist Title */}
        <Text 
          fontSize={{ base: "24px", sm: "32px" }} 
          fontWeight="semibold"
          color={textColor}
          fontFamily="Inter, sans-serif"
          letterSpacing="wide"
        >
          <Link to="/">PRODUCT STORE</Link>
        </Text>

        {/* Button Section */}
        <HStack spacing={3} alignItems="center">
          <Link to="/create">
            <IconButton 
              bg={buttonBg} 
              _hover={{ bg: buttonHoverBg }} 
              p={2}
              borderRadius="md"
            >
              <BsPlusSquare size={20} />
            </IconButton>
          </Link>

          <IconButton 
            onClick={toggleColorMode} 
            bg={buttonBg} 
            _hover={{ bg: buttonHoverBg }} 
            p={2}
            borderRadius="md"
          >
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
