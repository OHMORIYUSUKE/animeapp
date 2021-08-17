import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import Header from "../components/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <Box mt={7} mb={7} ml={5} mr={5}>
        <FormControl id="when">
          <FormLabel>アニメの放送時期</FormLabel>
          <Select>
            <option>2016 / 春</option>
            <option>2016 / 夏</option>
            <option>2016 / 秋</option>
            <option>2016 / 冬</option>
            <option>2017 / 春</option>
            <option>2017 / 夏</option>
            <option>2017 / 秋</option>
            <option>2017 / 冬</option>
          </Select>
        </FormControl>
      </Box>
      <Box mt={7} mb={7} ml={5} mr={5}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {Array(20)
            .fill("")
            .map((_, i) => (
              <Card />
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Index;
