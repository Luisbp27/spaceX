import { useState, useEffect } from "react";
import * as API from "./services/launches";
import { Heading, Image } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem";


export function App() {
  const [launches, setLaunches] = useState([]);

  // Llamada a la API
  useEffect(() => {
    API.getLaunches().then(setLaunches);
  }, []);

  return (
    // Este elemento sin nombre se llama fragment, es un contenedor para no alterar el estilo del DOM
    <>
      <Heading as="h1" size="lg" m={4}>Space X Launches</Heading>
      <section>
        {launches.map(launch => (
          // Iteramos sobre los elementos del array launches y los renderizamos
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}
