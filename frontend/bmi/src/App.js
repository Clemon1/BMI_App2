import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import AllSuggest from "./pages/allSuggestion";
import SingleSuggest from "./pages/SingleSuggest";
import { ChakraProvider } from "@chakra-ui/react";
import UpdateSuggestion from "./pages/updateSuggestion";
import Error from "./pages/404";
import FastTimer from "./pages/fastTimer";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChakraProvider>
      <div className='App'>
        <Navbar />
        {/*  Routers */}

        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to='/Home' /> : <Register />}></Route>
          <Route
            path='/login'
            element={user ? <Navigate to='/Home' /> : <Login />}></Route>
          <Route path='/Home' element={user ? <Home /> : <Login />}></Route>
          <Route
            path='/suggestions'
            element={user ? <AllSuggest /> : <Login />}></Route>
          <Route path='/suggest/:id' element={<SingleSuggest />} />
          <Route path='/update/:id' element={<UpdateSuggestion />} />
          <Route path='/fastTimer' element={<FastTimer />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
