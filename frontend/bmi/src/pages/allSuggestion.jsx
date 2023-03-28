import {
  Badge,
  Box,
  Flex,
  Input,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import moment from "moment";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";
// import { AuthContext } from "../context/authContext";
const AllSuggest = () => {
  // const { user } = useContext(AuthContext);
  const [suggest, setSugguest] = useState([]);
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  useEffect(() => {
    const getCountries = async (e) => {
      const res = await axios.get("http://localhost:5000/countries");
      setCountries(res.data);
    };
    getCountries();
  }, []);
  useEffect(() => {
    const handleAllSuggest = async () => {
      const res = await axios.get(
        `http://localhost:5000/app/bmi/all?country=${filterCountry}`,
      );
      await setSugguest(res.data);

      console.log(res.data);
    };
    handleAllSuggest();
  }, [filterCountry]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const grap = suggest.map((m) => m.bmiNumber);

  const data = {
    datasets: [
      {
        label: "Number of BMI users",
        data: [grap],
        color: "#ffffff",
        backgroundColor: "#ffffff",
      },
    ],
  };
  return (
    <Box w={"100%"} height={"100vh"} bg='#001523'>
      <Box w={"100%"} height={"fit-content"} bg='#001523'>
        <Flex w={"100%"} height={"fit-content"}>
          <Box width={"50%"} height={"40vh"}></Box>
          <Box width={"50%"} height={"40vh"}>
            <Scatter options={options} data={data} />
          </Box>
        </Flex>
        <Box
          w={"100%"}
          height={"20%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={[4, 5, 19, 20]}>
          <Input
            onChange={(e) => setQuery(e.target.value)}
            w={["70%", "48%", "28%", "28%"]}
            padding={4}
            height={"8vh"}
            outline={"none"}
            fontSize={15}
            fontWeight={500}
            placeholder={"Search for BMI Number"}
            border={"2px solid #1a202c!important"}
            borderRadius={11}
            bg={"#f4f4f4"}
            type='text'
          />

          <form>
            <Select
              variant='filled'
              placeholder='All Countries'
              onChange={(e) => setFilterCountry(e.target.value)}>
              {countries.map((countries) => (
                <option key={countries._id} value={countries._id}>
                  {countries.name}
                </option>
              ))}
            </Select>
          </form>
        </Box>
        <Flex
          width={"100%"}
          flexWrap={"wrap"}
          gap={[3, 3, 5, 5]}
          paddingX={[8, 10, 100, 100]}
          paddingBottom={20}
          height={"fit-content"}>
          {suggest.length <= 0 && (
            <Flex
              width={"100%"}
              height={"50vh"}
              alignItems={"center"}
              justifyContent={"center"}>
              {" "}
              <Text
                fontWeight={400}
                fontSize={[17, 18, 23, 24]}
                color={"#ffffff"}>
                Not Available
              </Text>{" "}
            </Flex>
          )}
          {suggest
            .filter((s) => s.bmiNumber.includes(query))
            .map((s) => {
              return (
                <Box
                  bg={"#ffffff"}
                  width={["45%", "25%", "25%", "16%"]}
                  height={"fit-Content"}
                  borderRadius={7}
                  padding={4}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={4}
                  key={s._id}>
                  <Flex
                    width={"100%"}
                    height={["4vh", "4vh", "2vh", "2vh"]}
                    justifyContent={"flex-end"}>
                    <Link to={`/suggest/${s._id}`}>
                      <Button
                        borderRadius={100}
                        padding={1}
                        color={"#ffffff"}
                        outline={"none"}
                        border={"none"}
                        bg={"#541db5"}>
                        <BiDotsVerticalRounded fontSize={20} />
                      </Button>
                    </Link>
                  </Flex>
                  <Box w={"100%"}>
                    <Text
                      fontWeight={500}
                      fontSize={[15, 15, 17, 17]}
                      lineHeight={2}>
                      {s.userId.firstname} {s.userId.lastname}
                    </Text>
                    <Badge
                      borderRadius='5px'
                      p='1'
                      bg={"#D6BCFA"}
                      fontWeight={500}
                      color='#322659'>
                      {s.country.name}
                    </Badge>
                  </Box>
                  <Badge
                    borderRadius='5px'
                    p='2'
                    bg={"#D6BCFA"}
                    fontWeight={500}
                    color='#322659'>
                    {s.gender}
                  </Badge>
                  <Box
                    w={"100%"}
                    h={"100%"}
                    fontWeight={500}
                    textAlign={"center"}>
                    <Text
                      fontSize={[23, 23, 28, 30]}
                      fontWeight={[500, 500, 600, 600]}>
                      {" "}
                      {s.bmiNumber}
                    </Text>
                    <Text
                      fontSize={[17, 17, 16, 14]}
                      fontWeight={[400, 400, 400, 400]}>
                      {" "}
                      {moment(s.createdAt).format("MMMM Do, YYYY")}
                    </Text>
                  </Box>
                </Box>
              );
            })}
        </Flex>
      </Box>
    </Box>
  );
};

export default AllSuggest;
