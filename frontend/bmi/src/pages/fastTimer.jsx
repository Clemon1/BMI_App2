import { useTimer } from "react-timer-hook";
import {
  Text,
  Flex,
  Button,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
const FastTimer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <Box padding={10}>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>1hr</Tab>
          <Tab>2hr</Tab>
          <Tab>4hr</Tab>
          <Tab>6hr</Tab>
          <Tab>8hr</Tab>
          <Tab>12hr</Tab>
          <Tab>24hr</Tab>
          <Tab>48hr</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              {" "}
              1hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>

              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 1);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              2hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 2);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              4hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 4);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              6hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 6);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              8hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 8);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              12hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 12);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              24hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 24);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              48hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <h1>
                Click on the
                <Badge
                  padding={2}
                  borderRadius={18}
                  color={"#ffffff"}
                  bg={"purple.800"}>
                  restart button
                </Badge>
                to start the specified fast timer{" "}
              </h1>
              <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
              </div>

              <Text>{isRunning ? "Running" : "Not running"}</Text>

              <Flex direction={"row"} justifyContent='center' gap={4}>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={resume}>Resume</Button>
                <Button
                  onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setHours(time.getHours() + 48);
                    restart(time);
                  }}>
                  Restart
                </Button>
              </Flex>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FastTimer;
