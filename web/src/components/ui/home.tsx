import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { SelectedPage } from "@/pages/shared/types";
import ActionButton from "@/pages/shared/ActionButton";

export const Home: FC = () => {
  const route = useRouter();
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <Box bg="green">
      <Navbar
        isTopOfPage={true}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        minHeight="100vh" // Set a minimum height to center content in the viewport
      >
        <Box minH="900px" color="white" textAlign="center">
          <HStack spacing="30px" pt="5rem">
            <Box boxSize="md">
              <Image
                borderRadius="100px"
                boxSize="300px"
                src="images\pexels-vanessa-loring-5966631.jpg"
                alt="avos"
                onLoad={() => console.log("Image loaded")}
                onError={() => console.error("Image error")}
                margin="auto"
              />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae aliquam rerum beatae alias ullam distinctio, rem
                aspernatur nam dignissimos? Delectus molestiae ab quisquam
                repellat quo vel beatae, molestias incidunt ea?
              </Text>
            </Box>
            <Box boxSize="md">
              <Image
                borderRadius="100px"
                boxSize="300px"
                src="images\pexels-neosiam-603030.jpg"
                alt="corn"
                onLoad={() => console.log("Image loaded")}
                onError={() => console.error("Image error")}
                margin="auto"
              />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae aliquam rerum beatae alias ullam distinctio, rem
                aspernatur nam dignissimos? Delectus molestiae ab quisquam
                repellat quo vel beatae, molestias incidunt ea?
              </Text>
            </Box>
            <Box boxSize="md">
              <Image
                borderRadius="100px"
                objectFit="cover"
                boxSize="300px"
                src="images\pexels-julia-nagy-1327838.jpg"
                alt="tomatoes"
                onLoad={() => console.log("Image loaded")}
                onError={() => console.error("Image error")}
                margin="auto"
              />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae aliquam rerum beatae alias ullam distinctio, rem
                aspernatur nam dignissimos? Delectus molestiae ab quisquam
                repellat quo vel beatae, molestias incidunt ea?
              </Text>
            </Box>
          </HStack>
          <VStack pt="3rem">
            <ActionButton buttonText="Sign Up Now" routingPath={"./signup"} />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
