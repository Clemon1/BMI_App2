import { useState, useEffect, useRef } from "react";
import { useToast, Button, Flex, Box, Text } from "@chakra-ui/react";

const Countdown = ({ hours = 0, minutes = 0, seconds = 0, onFinished }) => {
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
            onFinished();
            showNotification();
            toast({
              title: "Fasting Completed",
              description: "You can now eat",
              status: "success",
              position: "bottom-left",
              duration: 5000,
              isClosable: true,
            });

            // display toast notification
            return 0;
          }
          return prevTotalSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, toast, onFinished]);

  const handleStart = () => {
    setIsRunning(true);
    new Notification("Fast and feast!", {
      body: "You have started fasting",
      icon: "/path/to/icon.png",
    });
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
    new Notification("Fast and feast!", {
      body: "You stopped fasting.",
      icon: "/path/to/icon.png",
    });
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
    new Notification("Fast and feast!", {
      body: "You paused your fasting.",
      icon: "/path/to/icon.png",
    });
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hoursLeft = Math.floor(totalSeconds / 3600);
  const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  const secondsLeft = totalSeconds % 60;

  const showNotification = () => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Fast and Feast!", {
        body: "Congratulation you have completed your fasting.",
        icon: "/path/to/icon.png",
      });

      notification.addEventListener("click", (event) => {
        // Handle notification click
        console.log("Notification clicked.");
      });

      notification.addEventListener("action", (event) => {
        // Handle action click
        console.log(`Action "${event.action}" clicked.`);
      });

      notification.addEventListener("close", (event) => {
        // Handle notification close
        console.log("Notification closed.");
      });

      notification.addEventListener("error", (event) => {
        // Handle notification error
        console.error("Notification error:", event);
      });

      const viewAction = { action: "view", title: "View Countdown" };
      const dismissAction = { action: "dismiss", title: "Dismiss" };

      notification.addEventListener("show", (event) => {
        // Add actions after the notification is shown
        event.target.addEventListener("action", (event) => {
          switch (event.action) {
            case "view":
              // Handle view action
              console.log("View action clicked.");
              break;
            case "dismiss":
              // Handle dismiss action
              console.log("Dismiss action clicked.");
              break;
            default:
              console.warn(`Unknown action "${event.action}" clicked.`);
          }
        });

        // event.target.addEventListener("close", (event) => {
        //   // Remove actions after the notification is closed
        //   event.target.removeEventListener("action", handleAction);
        // });

        // event.target.addEventListener("error", (event) => {
        //   // Remove actions after the notification encounters an error
        //   event.target.removeEventListener("action", handleAction);
        // });

        event.target.actions = [viewAction, dismissAction];
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  };

  return (
    <Box>
      <Text fontSize={60} fontWeight={500} color={"#ffffff"}>
        {formatTime(hoursLeft)}:{formatTime(minutesLeft)}:
        {formatTime(secondsLeft)}
      </Text>
      <Flex justifyContent={"center"} gap={2}>
        <Button onClick={handleStart} disabled={isRunning} color={"#000000"}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!isRunning} color={"#000000"}>
          Stop
        </Button>
        <Button onClick={handlePause} disabled={!isRunning} color={"#000000"}>
          Pause
        </Button>
      </Flex>
    </Box>
  );
};

export default Countdown;
