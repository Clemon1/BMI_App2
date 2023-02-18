import {
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  useToast,
  Input,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const UpdateSuggestion = () => {
  const { user } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const [suggests, setSugguests] = useState([]);
  const [bmiNumber, setBmiNumber] = useState("");

  const [messages, setMessages] = useState("");

  useEffect(() => {
    const handleSuggest = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/app/bmi/all/suggest/${id}`,
        );
        await setSugguests(res.data);

        setSugguests(res.data);
        setBmiNumber(res.data.bmiNumber);

        setMessages(res.data.messages);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    handleSuggest();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const credentails = {
      bmiNumber,
      messages,
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/app/bmi/all/update/${id}`,
        credentails,
        {
          data: { userId: user.users._id },
        },
      );
      toast({
        title: "Suggestion updated",
        position: "top-right",
        variant: "top-accent",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      console.log(res);
      navigate("/Home");
    } catch (err) {
      if (err) {
        toast({
          title: err.message,
          position: "top-right",
          variant: "top-accent",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box>
      <Text
        fontSize={[20, 20, 20, 20]}
        paddingY={4}
        paddingX={[10, 10, 40, 40]}>
        Welcome, {user.users.firstname} {user.users.lastname}
      </Text>

      <Flex
        width={"100%"}
        height={"100vh"}
        paddingY={[5, 5, 10, 10]}
        paddingX={[10, 10, 20, 20]}
        justifyContent='center'>
        <Box
          width={["100%", "100%", "50%", "40%"]}
          height='fit-content'
          bg={"#ffffff"}
          padding={4}
          borderRadius={7}>
          <form onSubmit={handleUpdate} key={suggests._id}>
            <Text fontSize={20} fontWeight={500} textAlign={"center"}>
              Update Suggestions
            </Text>
            <FormControl>
              <FormLabel>BMI</FormLabel>
              <Input
                type='text'
                onChange={(e) => {
                  setBmiNumber(e.target.value);
                }}
                value={bmiNumber}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                onChange={(e) => {
                  setMessages(e.target.value);
                }}
                value={messages}
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
              padding={4}>
              Update
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default UpdateSuggestion;
