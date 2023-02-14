import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { BiPencil, BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Select,
  useToast,
  Input,
  Textarea,
  Badge,
} from "@chakra-ui/react";
import { ExternalLinkIcon, DeleteIcon } from "@chakra-ui/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const toast = useToast();
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  const handleCalc = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      toast({
        title: "Input a valid weight and height",
        position: "top-right",
        variant: "top-accent",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      let bmi = weight / (height * height);
      setBMI(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are Underwieght");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are healty");
      } else {
        setMessage("You are Overwieght");
      }
    }
  };
  const bmiNumber = useRef();

  const country = useRef();
  const messages = useRef();

  const handleSuggestion = async (e) => {
    e.preventDefault();

    const fullDetail = {
      userId: user.users._id,
      firstname: user.users.firstname,
      lastname: user.users.lastname,
      bmiNumber: bmiNumber.current.value,
      country: country.current.value,
      messages: messages.current.value,
    };
    console.log(fullDetail);
    console.log(country);

    try {
      const res = await axios.post(
        "http://localhost:5000/app/bmi/bmiform/create",
        fullDetail,
      );

      toast({
        title: "Suggestion added",
        position: "top-right",
        variant: "top-accent",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setData([...data, res.data]);
      console.log(res.data);
    } catch (err) {
      if (err) {
        toast({
          title: "Error creating new suggestion",
          position: "top-right",
          variant: "top-accent",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  const reload = () => {
    window.location.reload().preventDefault();
  };

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get("http://localhost:5000/countries");
      setCountries(res.data);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getSuggestion = async () => {
      const res = await axios.get(
        `http://localhost:5000/app/bmi/all/${user.users._id}`,
      );
      await setData(res.data);
    };
    getSuggestion();
  }, [user.users._id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/app/bmi/delete/${id}`, {
        data: { userId: user.users._id },
      });
      toast({
        title: "Deleted succesfully",
        position: "top-right",
        variant: "top-accent",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setData(data.filter((post) => post._id !== id));
    } catch (err) {
      if (err) {
        toast({
          title: "Error in deleting suggestion",
          position: "top-right",
          variant: "top-accent",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      console.log(err.message);
    }
  };

  console.log(data.userId === user.users._id);
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      background={"#e9d8fd"}
      paddingX={[8, 10, 50, 120]}
      className='Home'>
      <Text fontSize={[20, 20, 20, 20]} paddingY={4}>
        Welcome, {user.users.firstname} {user.users.lastname}
      </Text>

      <Flex
        width={["100%", "100%", "100%", "100%"]}
        direction={["column", "column", "row", "row"]}
        justify={"center"}
        height={["fit-content", "fit-content", "100vh", "100vh"]}
        gap={4}>
        <Box width='100%' height='100%'>
          <form className='formCalc' onSubmit={handleCalc}>
            <h2>BMI Calculator</h2>
            <FormControl paddingBottom={2}>
              <FormLabel fontSize={17} fontWeight={500} paddingBottom={2}>
                Weight (Kg)
              </FormLabel>
              <Input
                border='2px solid #1a202c'
                outline='none'
                width='100%'
                padding={4}
                fontSize={17}
                fontWeight={500}
                height={"6vh"}
                borderRadius={"6px"}
                type='text'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormControl>
            <FormControl paddingBottom={2}>
              <FormLabel fontSize={17} fontWeight={500} paddingBottom={2}>
                Height (m)
              </FormLabel>
              <Input
                border='2px solid #1a202c'
                outline='none'
                width='100%'
                height={"6vh"}
                fontSize={17}
                fontWeight={500}
                borderRadius={"6px"}
                padding={4}
                type='text'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormControl>

            <Button
              type='submit'
              width='100%'
              outline='none'
              border='none'
              borderRadius={6}
              color='#ffffff'
              fontSize={15}
              fontWeight={600}
              bg='#541db5'
              marginBottom={2}
              _hover={"none"}
              padding={4}>
              Calculate
            </Button>
            <Button
              onClick={reload}
              type='submit'
              width='100%'
              outline='none'
              borderRadius={6}
              border='none'
              color='#322659'
              fontSize={15}
              fontWeight={600}
              bg='#D6BCFA'
              marginBottom={2}
              padding={4}>
              Reload
            </Button>

            <Box>
              <p className='bmiResult'> Your BMI is: {bmi}</p>

              <p className='bmiResult'> {message}</p>
            </Box>
          </form>
          {/*  ANother div */}
        </Box>

        <Box width={["100%", "100%", "90%", "90%"]} height='100%'>
          <Flex
            width={"100%"}
            height={["22vh", "20vh", "20vh", "20vh"]}
            gap={[2, 4, 5, 5]}
            marginBottom={17}>
            <Box
              bg={"#ffffff"}
              width='100%'
              height='100%'
              borderRadius={7}
              padding={"20px"}>
              <Text
                textAlign={"center"}
                fontWeight={[400, 400, 500, 500]}
                fontSize={[16, 17, 18, 19]}>
                Suggestions
              </Text>

              <Link to={"/suggestions"}>
                {" "}
                <Button
                  padding={4}
                  border='none'
                  outline={"none"}
                  bg='transparent'
                  color='#541db5'
                  width={"100%"}>
                  <ExternalLinkIcon w={30} h={30} />
                </Button>
              </Link>
            </Box>

            <Box
              bg={"#ffffff"}
              width='100%'
              height='100%'
              borderRadius={7}
              padding={"20px"}>
              <Text
                textAlign={"center"}
                fontWeight={[400, 400, 500, 500]}
                fontSize={[16, 17, 18, 19]}>
                Fast-timer
              </Text>
              <Link to={"/fastTimer"}>
                <Button
                  padding={[2, 2, 4, 4]}
                  border='none'
                  outline={"none"}
                  bg='transparent'
                  color='#541db5'
                  width={"100%"}>
                  <ExternalLinkIcon w={30} h={30} />
                </Button>
              </Link>
            </Box>
          </Flex>
          <Box>
            <Calendar onChange={onChange} value={value} />
          </Box>
        </Box>

        {/*  Suggestion form */}

        <Box width={["100%", "100%", "90%", "90%"]} height='100%'>
          <form className='formCalc1' onSubmit={handleSuggestion}>
            <h2>Your Suggestion</h2>
            <FormControl paddingBottom={2}>
              <FormLabel fontSize={17} fontWeight={500} paddingBottom={1}>
                BMI
              </FormLabel>
              <Input
                border='2px solid #1a202c'
                outline='none'
                width='100%'
                fontSize={17}
                fontWeight={500}
                height={"6vh"}
                borderRadius={"6px"}
                padding={4}
                ref={bmiNumber}
                type='text'
              />
            </FormControl>
            <FormControl paddingBottom={1}>
              <FormLabel fontSize={17} fontWeight={500} paddingBottom={2}>
                Country
              </FormLabel>
              <Select
                variant='filled'
                placeholder='Select Country'
                ref={country}>
                {countries.map((countries) => (
                  <option key={countries._id} value={countries._id}>
                    {countries.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormLabel fontSize={17} fontWeight={500} paddingBottom={1}>
              Suggestion Message
            </FormLabel>
            <Textarea
              border='2px solid #1a202c'
              outline='none'
              width='100%'
              fontSize={17}
              fontWeight={500}
              height={18}
              borderRadius={"6px"}
              padding={4}
              placeholder='Your message'
              ref={messages}
              marginBottom={4}
            />

            <Button
              type='submit'
              width='100%'
              outline='none'
              border='none'
              borderRadius={6}
              color='#ffffff'
              fontSize={15}
              fontWeight={600}
              bg='#541db5'
              marginBottom={2}
              padding={4}>
              Submit
            </Button>
          </form>
        </Box>
      </Flex>

      <Flex
        w={"100%"}
        h={"60vh"}
        padding={"8px"}
        gap={"8px"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}>
        {data.map((data) => {
          return (
            <Box
              key={data._id}
              width={["47%", "55%", "25%", "24%"]}
              height={["55%", "50%", "50%", "50%"]}
              bg={"#ffffff"}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={7}
              gap={4}
              padding={5}>
              <Box w={"100%"} h={"5vh"} transition={"0.3s all"}>
                <p className='boxTitle'> BMI: {data.bmiNumber}</p>
                <Badge color={"#322659"} bg='#D6BCFA'>
                  {data.country.name}
                </Badge>
              </Box>
              <Box width={"100%"} height={"100%"} paddingTop={2}>
                <p className='boxMessage'> {data.messages.substr(0, 12)}... </p>
              </Box>
              {data.userId === user?.users._id && (
                <Flex width={"100%"} gap={1}>
                  <Link to={`/suggest/${data._id}`}>
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
                  <Link to={`/update/${data._id}`}>
                    <Button
                      bg={"#541db5"}
                      type='submit'
                      width='40%'
                      outline='none'
                      border='none'
                      borderRadius={6}
                      color='#ffffff'
                      fontSize={20}
                      fontWeight={600}
                      marginBottom={4}
                      padding={4}>
                      <BiPencil />
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleDelete(data._id)}
                    type='submit'
                    width='40%'
                    outline='none'
                    border='none'
                    borderRadius={6}
                    color='#ffffff'
                    fontSize={20}
                    fontWeight={600}
                    bg='#ef233c'
                    marginBottom={4}
                    padding={4}>
                    <DeleteIcon />
                  </Button>
                </Flex>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Home;
