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
          <Tab color={"#ffffff"}>12hr</Tab>
          <Tab color={"#ffffff"}>14hr</Tab>
          <Tab color={"#ffffff"}>16hr</Tab>
          <Tab color={"#ffffff"}>18hr</Tab>
          <Tab color={"#ffffff"}>20hr</Tab>
          <Tab color={"#ffffff"}>22hr</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              {" "}
              12hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={0} minutes={0} seconds={10} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              14hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }} color={"#ffffff"}>
              <Countdown hours={14} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              16hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={16} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              18hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={18} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              20hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={20} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500} color={"#ffffff"}>
              22hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={22} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FastTimer;
