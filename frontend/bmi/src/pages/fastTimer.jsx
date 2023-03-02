import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import Countdown from "../components/Countdown";

const FastTimer = () => {
  return (
    <Box padding={10} height={"100vh"}>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>1hr</Tab>
          <Tab>2hr</Tab>
          <Tab>4hr</Tab>
          <Tab>6hr</Tab>
          <Tab>8hr</Tab>
          <Tab>12hr</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              {" "}
              1hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={1} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              2hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={2} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              4hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={4} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              6hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={6} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              8hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={8} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              12hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={12} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FastTimer;
