import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LinChart from "../components/lineChart";
const SingleSuggest = () => {
  const { id } = useParams();
  const [suggests, setSugguests] = useState({});
  const [allbmi, setAllbmi] = useState([]);

  useEffect(() => {
    const handleSuggest = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/app/bmi/all/suggest/${id}`,
        );
        await setSugguests(res.data);

        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleSuggest();
  }, [id]);

  useEffect(() => {
    const handleBMI = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/app/bmi/all/${suggests.userId._id}`,
        );
        await setAllbmi(res.data);

        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleBMI();
  }, [suggests.userId]);
  // console.log(suggests.country._id);
  console.log(allbmi);
  return (
    <Box
      width={"100%"}
      height='fit-content'
      bg='#001523'
      paddingX={[10, 10, 100, 100]}
      paddingY={[10, 10, 10, 10]}>
      <Flex
        justifyContent={"center"}
        direction={"column"}
        width={"100%"}
        height='100vh'>
        <LinChart data={allbmi} axis={"firstname"} pv={"bmiNumber"} />
        <Box
          key={suggests._id}
          width={"100%"}
          height={"fit-content"}
          bg={"#ffffff"}
          padding={[4, 6, 8, 8]}
          borderRadius={18}>
          <Text fontWeight={500} fontSize={[15, 15, 17, 19]} lineHeight={2}>
            {suggests.firstname} {suggests.lastname}
          </Text>
          <Badge fontSize={16} color={"#322659"} bg='#D6BCFA' borderRadius={5}>
            {/* {suggests.country.name} */}
          </Badge>
          <Text fontWeight={500} fontSize={25} paddingBottom={10}>
            BMI: {suggests.bmiNumber}
          </Text>
          <Text fontSize={17} fontWeight={400}>
            {" "}
            {suggests.messages}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleSuggest;
