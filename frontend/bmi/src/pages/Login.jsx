import { useRef, useContext } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FlapperSpinner } from "react-spinners-kit";

import { loginCall } from "../api/loginCall";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },

      dispatch,
      error,
    );
  };
  console.log(user);
  console.log(error);
  return (
    <div className='auth'>
      <Flex justifyContent='center' background={"#001523"}>
        <Box
          w={["100%", "85%", "60%", "50%"]}
          h='90vh'
          paddingY={50}
          display='flex'
          justifyContent='center'>
          <form className='formBody' onSubmit={handleClick}>
            {error && (
              <>
                <Box>
                  <Text textAlign='center' color={"#ffffff"} fontSize={17}>
                    {error}
                  </Text>
                </Box>
              </>
            )}
            <Text
              color={"#ffffff"}
              fontSize={20}
              fontWeight={500}
              textAlign='center'>
              Login Account
            </Text>

            <FormControl>
              <FormLabel color='#f7fafc'>Email</FormLabel>
              <Input
                width='100%'
                h='5vh'
                bg={"#ffffff!important"}
                padding={4}
                type='email'
                ref={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel color='#f7fafc'>Password</FormLabel>
              <Input
                width='100%'
                h='5vh'
                bg={"#ffffff!important"}
                padding={4}
                type='password'
                ref={password}
              />
            </FormControl>
            <Button
              type='submit'
              justifyItems='center'
              height='8vh'
              border='none'
              borderRadius={6}
              fontSize={16}
              fontWeight={500}
              color='#1a202c'
              bg='#f7fafc'>
              {isFetching ? <FlapperSpinner color='#1a202c' /> : <p> Login</p>}
            </Button>
          </form>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;
