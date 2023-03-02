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
          <Tab>12hr</Tab>
          <Tab>14hr</Tab>
          <Tab>16hr</Tab>
          <Tab>18hr</Tab>
          <Tab>20hr</Tab>
          <Tab>22hr</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              {" "}
              12hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={0} minutes={0} seconds={10} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              14hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={14} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              16hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={16} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              18hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={18} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
              20hr Fast timer
            </Text>
            <Box style={{ textAlign: "center" }}>
              <Countdown hours={20} minutes={0} seconds={0} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize={17} fontWeight={500}>
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
