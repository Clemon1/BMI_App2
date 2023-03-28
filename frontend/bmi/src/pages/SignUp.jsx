import axios from "axios";
import { useRef } from "react";
// import Lottie from "react-lottie";
// import animationData from "../lotiie/animeFitness.json";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  useToast,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Register = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  const toast = useToast();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    const credentails = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/bmi/auth/register",
        credentails,
      );

      navigate("/login");
      console.log(res.data);
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
      console.log(err.message);
    }
  };

  handleRegister();

  return (
    <div className='auth'>
      <Flex flexDirection={["column", "column", "row", "row"]}>
        <Box
          w='100%'
          h='100vh'
          paddingY={50}
          display={["none", "none", "flex", "flex"]}
          justifyContent='center'>
          <Flex
            width={"100%"}
            justifyContent='center'
            direction={"column"}
            alignItems='center'>
            {/* <Lottie options={defaultOptions} height={350} width={424} /> */}
            <Text fontSize={30} fontWeight={500} color={"#ffffff"}>
              Stay Fit, Always Check Up, Stay Healty
            </Text>
          </Flex>
        </Box>
        <Box
          w='100%'
          h='80vh'
          paddingY={50}
          display='flex'
          justifyContent='center'>
          <form className='formBody' onSubmit={handleRegister}>
            <Text
              fontSize={19}
              textAlign='center'
              fontWeight={500}
              color={"gray.100"}>
              {" "}
              Register
            </Text>
            <Flex paddingX={0} gap={2} justifyContent='center'>
              <FormControl>
                <FormLabel color='#f7fafc'>First Name</FormLabel>
                <Input
                  padding={4}
                  width={"100%"}
                  h='5vh'
                  bg={"#ffffff"}
                  type='text'
                  ref={firstname}
                />
              </FormControl>
              <FormControl>
                <FormLabel color='#f7fafc'>Last Name</FormLabel>
                <Input
                  padding={4}
                  width={"100%"}
                  bg={"#ffffff"}
                  h='5vh'
                  type='text'
                  ref={lastname}
                />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel color='#f7fafc'>Email address</FormLabel>
              <Input
                width='100%'
                padding={4}
                h='5vh'
                type='email'
                bg={"#ffffff"}
                ref={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='#f7fafc'>Password</FormLabel>
              <Input
                width='100%'
                padding={4}
                bg={"#ffffff"}
                h='5vh'
                type='password'
                ref={password}
              />
            </FormControl>
            <Button
              type='submit'
              justifyItems='center'
              paddingX={6}
              paddingY={6}
              border='none'
              borderRadius={6}
              fontSize={16}
              fontWeight={500}
              color='#1a202c '
              bg='#f7fafc'>
              Register
            </Button>
          </form>
        </Box>
      </Flex>
    </div>
  );
};

export default Register;
