import { Box, Image, Badge } from "@chakra-ui/react";
import Noimage from "../images/noimage.png";

function Card(props) {
  let imgUrl = "";
  if (props.ogpImageUrl === "not_found") {
    imgUrl = Noimage;
  } else {
    imgUrl = props.ogpImageUrl;
  }
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Image src={imgUrl} alt={props.title} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.productCompanies}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
