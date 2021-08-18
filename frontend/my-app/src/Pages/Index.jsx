import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { whenData, nowYearAndCool } from "../utils/formWen";

const Index = () => {
  const [animeData, setAnimeData] = useState([]);

  const [value, setValue] = React.useState(nowYearAndCool);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3031/api/v1/" + value);
        localStorage.setItem("animeData", JSON.stringify(res.data));
        setAnimeData(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [value]);

  console.log(animeData);

  if (animeData.length === 0) {
    return (
      <>
        <Header />
        <Box mt={7} mb={7} ml={5} mr={5}>
          <FormControl id="when">
            <FormLabel>アニメの放送時期</FormLabel>
            <Select
              onChange={handleChange}
              placeholder="知りたい放送時期を選択してください"
            >
              {whenData.map((data) => (
                <option value={data.year + "/" + data.index}>
                  {data.year} / {data.cool}アニメ
                </option>
              ))}
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
          <Select
            onChange={handleChange}
            placeholder="知りたい放送時期を選択してください"
          >
            {whenData.map((data) => (
              <option value={data.year + "/" + data.index}>
                {data.year} / {data.cool}アニメ
              </option>
            ))}
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
