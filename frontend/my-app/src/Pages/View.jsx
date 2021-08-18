import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import {
  Center,
  Box,
  Container,
  Text,
  Image,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";
import Noimage from "../images/noimage.jpg";
import { RiBuildingFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { BsHash } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const View = () => {
  let { name } = useParams();

  const JSONDATA = JSON.parse(localStorage.getItem("animeData"));

  const getAnimeDataByName = (name) => {
    const animeIndex = JSONDATA.findIndex((data) => data.title === name);
    return JSONDATA[animeIndex];
  };

  const animeDataMatched = getAnimeDataByName(name);

  console.log(animeDataMatched);

  if (animeDataMatched.ogp_image_url === "not_found") {
    animeDataMatched.ogp_image_url = Noimage;
  }
  if (animeDataMatched.ogp_description === "not_found") {
    animeDataMatched.ogp_description = "";
  }

  return (
    <>
      <Header />
      <Center mt={30}>
        <Container maxW="4xl" centerContent>
          <Box padding="4" bg="gray.100" maxW="4xl">
            <Center>
              <Image
                src={animeDataMatched.ogp_image_url}
                alt={animeDataMatched.title}
              />
            </Center>
            <Text fontSize="3xl">{animeDataMatched.title}</Text>
            <Text fontSize="md" color="gray.600">
              {animeDataMatched.title_en}
            </Text>
            <Divider />
            <Text>
              <RiBuildingFill
                style={{ display: "inline-flex", verticalAlign: "middle" }}
              />
              {animeDataMatched.product_companies}
            </Text>
            <Text fontSize="xl">{animeDataMatched.ogp_description}</Text>
            <Flex>
              <Text>
                <BsHash
                  style={{ display: "inline-flex", verticalAlign: "middle" }}
                />
                {animeDataMatched.twitter_account}
              </Text>
              <Text>
                <FaTwitter
                  style={{ display: "inline-flex", verticalAlign: "middle" }}
                />
                {animeDataMatched.twitter_hash_tag}
              </Text>
            </Flex>
            <Text>
              <Link color="teal.500" href={animeDataMatched.public_url}>
                公式サイト
                <BiLinkExternal
                  style={{ display: "inline-flex", verticalAlign: "middle" }}
                />
              </Link>
            </Text>
          </Box>
        </Container>
      </Center>
      <Footer />
    </>
  );
};
export default View;
