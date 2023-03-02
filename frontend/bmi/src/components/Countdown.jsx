import { useState, useEffect, useRef } from "react";
import { useToast, Button, Flex, Box, Text } from "@chakra-ui/react";

const Countdown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [totalSeconds, setTotalSeconds] = useState(
    hours * 60 * 60 + minutes * 60 + seconds,
  );
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  const toast = useToast();
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => {
          if (prevTotalSeconds <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            toast({
              title: "Fasting Completed",
              description: "You can now eat",
              status: "success",
              position: "bottom-left",
              duration: 5000,
              isClosable: true,
            }); // display toast notification
            return 0;
          }
          return prevTotalSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, toast]);

  const handleStart = () => {
    setIsRunning(true);
    toast({
      title: "Started Fasting",

      status: "success",
      position: "bottom-left",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    setTotalSeconds(hours * 60 * 60 + minutes * 60 + seconds);
    toast({
      title: "Stoped Fasting",

      status: "success",
      position: "bottom-left",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePause = () => {
    setIsRunning(false);
    toast({
      title: "Pause fasting timer",

      status: "success",
      position: "bottom-left",
      duration: 3000,
      isClosable: true,
    });
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hoursLeft = Math.floor(totalSeconds / 3600);
  const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  const secondsLeft = totalSeconds % 60;

  return (
    <Box>
      <Text fontSize={60} fontWeight={500}>
        {formatTime(hoursLeft)}:{formatTime(minutesLeft)}:
        {formatTime(secondsLeft)}
      </Text>
      <Flex justifyContent={"center"} gap={2}>
        <Button onClick={handleStart} disabled={isRunning}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!isRunning}>
          Stop
        </Button>
        <Button onClick={handlePause} disabled={!isRunning}>
          Pause
        </Button>
      </Flex>
    </Box>
  );
};

export default Countdown;
