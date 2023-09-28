import React from "react";
import { Box, Divider, Image, Text, Icon } from "@chakra-ui/react";
import { CalendarIcon, CheckCircleIcon, HamburgerIcon } from "@chakra-ui/icons";

const Card = ({
  imageUrl,
  propertyName,
  address,
  rent,
  bedrooms,
  bathrooms,
  area,
}) => {
  return (
    <Box
      width={{
        base: "350px",
        sm: "250px",
        md: "320px",
        lg: "340px",
      }}
      borderRadius="xl"
      border="1px solid gray"
      overflow="hidden"
      marginBottom="10px"
    >
      <Image src={imageUrl} alt={propertyName} height="200px" width="100%" />

      <Box padding="16px" backgroundColor="#D9D9D9">
        <Text fontSize="18px">₹{rent}/month</Text>
        <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="bold">
          {propertyName}
        </Text>
        <Text fontSize="18px" color="#555" marginBottom="4px">
          {address}
        </Text>
        <Divider borderColor="gray" borderWidth="1px" marginBottom="5px" />

        <Box display="flex" alignItems="center">
          <Icon as={CalendarIcon} boxSize={4} mr={1} />
          <Text fontSize="sm">3 beds</Text>

          <Icon as={CheckCircleIcon} boxSize={4} ml={4} mr={1} />
          <Text fontSize="sm">2 Bathrooms</Text>

          <Icon as={HamburgerIcon} boxSize={4} ml={4} mr={1} />
          <Text fontSize="sm">5 x 7 m²</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
