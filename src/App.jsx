import { useState, useEffect } from "react";
import * as API from "./services/launches";
import { Heading, Box, Image, Flex, Text, Spacer, Tag} from "@chakra-ui/react";

export function App() {
  const [launches, setLaunches] = useState([]);

  // Llamada a la API
  useEffect(() => {
    API.getLaunches().then(setLaunches);
  }, []);

  return (
    // Este elemento sin nombre se llama fragment, es un contenedor para no alterar el estilo del DOM
    <>
      <Image m={4} src="./assets/spacex-logo.png" width={300} />
      <Heading as="h1" size="lg" m={4}>Space X Launches</Heading>
      <section>
        {launches.map(launch => (
          // Hay que meter una key para identificar el elemento
          <Box key={launch.flight_number} 
            launch={launch} 
            bg="gray.100" 
            p={4} 
            m={4} 
            borderRadius="lg"
          > 
            <Flex display="flex">
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>

              <Spacer />

              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            {launch.mission_name} ({launch.launch_year})
          </Box>

        ))}
      </section>
    </>
  );
}
