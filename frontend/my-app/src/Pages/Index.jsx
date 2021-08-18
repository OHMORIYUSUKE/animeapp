import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Index = () => {
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    (async () => {
      const when = "2017/2";
      try {
        const res = await axios.get("http://localhost:3031/api/v1/" + when);
        localStorage.setItem("animeData", JSON.stringify(res.data));
        setAnimeData(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  console.log(animeData);

  if (animeData.length === 0) {
    return (
      <>
        <Header />
        <Box mt={7} mb={7} ml={5} mr={5}>
          <FormControl id="when">
            <FormLabel>アニメの放送時期</FormLabel>
            <Select value={value} onChange={handleChange}>
              <option value={"2016/1"}>2016 / 春</option>
              <option value={"2016/2"}>2016 / 夏</option>
              <option value={"2016/3"}>2016 / 秋</option>
              <option value={"2016/4"}>2016 / 冬</option>
              <option value={"2017/1"}>2017 / 春</option>
              <option value={"2017/2"}>2017 / 夏</option>
              <option value={"2017/3"}>2017 / 秋</option>
              <option value={"2017/4"}>2017 / 冬</option>
            </Select>
          </FormControl>
        </Box>
        <Box mt={7} mb={7} ml={5} mr={5}>
          <Loading />
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box mt={7} mb={7} ml={5} mr={5}>
        <FormControl id="when">
          <FormLabel>アニメの放送時期</FormLabel>
          <Select>
            <option value={"2016/1"}>2016 / 春</option>
            <option value={"2016/2"}>2016 / 夏</option>
            <option value={"2016/3"}>2016 / 秋</option>
            <option value={"2016/4"}>2016 / 冬</option>
            <option value={"2017/1"}>2017 / 春</option>
            <option value={"2017/2"}>2017 / 夏</option>
            <option value={"2017/3"}>2017 / 秋</option>
            <option value={"2017/4"}>2017 / 冬</option>
          </Select>
        </FormControl>
      </Box>
      <Box mt={7} mb={7} ml={5} mr={5}>
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {animeData.map((data) => (
            <Card
              title={data.title}
              titleEn={data.title_en}
              productCompanies={data.product_companies}
              ogpImageUrl={data.ogp_image_url}
              ogpDescription={data.ogp_description}
              publicUrl={data.public_url}
              twitterAccount={data.twitter_account}
              twitterHashTag={data.twitter_hash_tag}
              sex={data.sex}
              sequel={data.sequel}
            />
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Index;
