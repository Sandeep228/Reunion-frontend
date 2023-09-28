import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap="20px"
      marginLeft={{ base: "5px", sm: "12px", md: "40px", lg: "120px" }}
      marginRight={{ base: "5px", sm: "12px", md: "40px", lg: "120px" }}
      p={4}
    >
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </Grid>
  );
};

export default CardList;
