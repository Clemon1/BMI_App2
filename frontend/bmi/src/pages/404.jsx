import { Text, Button, Flex } from "@chakra-ui/react";
// import Lottie from "react-lottie";
import { Link } from "react-router-dom";
// import animationData from "../lotiie/error404.json";
const Error = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      gap={3}
      direction={"column"}
      bg='#EDF2F7'
      alignItems={"center"}
      paddingY={[4, 4, 10, 4]}
    >
      {/* <Lottie options={defaultOptions} height={350} width={"fit-content"} /> */}
      <Text fontSize={17} fontWeight={500} textAlign='center'>
        You don dey go were you no know
      </Text>
      <Link>
        <Button
          bg={"#541db5"}
          color={"gray.100"}
          width={["100%", "85", "30%", "30%"]}
          _hover='none'
        >
          Home
        </Button>
      </Link>
    </Flex>
  );
};

export default Error;
