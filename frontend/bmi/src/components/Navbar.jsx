import { NavLink } from "react-router-dom";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { TriangleUpIcon, HamburgerIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [slide, setSlide] = useState(true);

  return (
    <Flex
      bg='#001523'
      w='100%'
      height={75}
      zIndex={2000}
      justify={["", "", "space-between", "space-between"]}
      direction={["column", "column", "row", "row"]}
      align='center'
      color='#ffffff'
      paddingX={[0, 0, 120, 120]}
      paddingY={[0, 0, 0, 0]}>
      <Box
        padding={4}
        width={"100%"}
        display={"flex"}
        justifyContent={["space-between", "space-between", "none", "none"]}
        gap={8}
        zIndex={2000}>
        <Flex>
          <TriangleUpIcon
            w={10}
            h={10}
            transform='rotateZ(199deg);'
            alignSelf='center'
          />
          <Link to='/Home'>
            <Text alignSelf={"center"} fontSize={[18, 18, 22, 22]}>
              Fast `N` Feast
            </Text>
          </Link>
        </Flex>

        <Button
          onClick={() => setSlide(!slide)}
          bg={"#ffffff"}
          color={"#000000"}
          fontSize={23}
          display={["flex", "flex", "none", "none"]}>
          <HamburgerIcon />
        </Button>
      </Box>

      <Box
        zIndex={20}
        width={"100%"}
        transform={{
          base: slide ? "translateY(-194px)" : "translateY(1)",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        transition={".3s all"}
        textStyle='none'
        textDecoration='none'
        bg={["#1a202c", "#1a202c", "none", "none"]}
        display={["flex", "flex", "flex", "flex"]}
        gap={18}
        color='#ffffff'>
        {user ? (
          <Box
            display='flex'
            gap={8}
            w='100%'
            padding={4}
            align='center'
            justifyContent='center'
            allignitems='center'>
            <p className='navUserTitle'> {user.users.email}</p>
            <Button
              onClick={handleLogout}
              type='submit'
              borderRadius={6}
              paddingY={[4, 8, 8, 18]}
              paddingX={[0, 2, 10, 10]}
              border='none'
              fontSize={16}
              fontWeight={500}
              textAlign='center'
              bg='#ffffff'
              color='#1a202c'>
              {user && "LogOut"}
            </Button>
          </Box>
        ) : (
          <Box
            width={{ base: "100%", md: "100%" }}
            display='flex'
            justifyContent={["center", "center", "flex-end", "flex-end"]}
            flexDirection={["column", "column", "row", "row"]}
            gap={[5, 5, 4, 4]}
            padding={[4, 4, 2, 2]}>
            <NavLink to='/'>
              <Button
                width={{ base: "50%", md: "50%", lg: "100%", xl: "100%" }}
                textDecoration='none'
                borderRadius={6}
                paddingX={[6, 6, 10, 10]}
                paddingY={5}
                border='none'
                fontSize={16}
                fontWeight={500}
                textAlign='center'
                bg='#ffffff'
                color='#1a202c'>
                SignUp
              </Button>
            </NavLink>
            <NavLink to='/Login'>
              <Button
                width={{ base: "50%", md: "50%", lg: "100%", xl: "100%" }}
                borderRadius={6}
                paddingX={[6, 6, 10, 10]}
                paddingY={5}
                border='none'
                bg='#ffffff'
                color='#1a202c'
                fontSize={16}
                fontWeight={500}>
                Login
              </Button>
            </NavLink>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
