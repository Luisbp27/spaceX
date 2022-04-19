import { useState, useEffect } from "react";
import * as API from "../services/launches";
import { Heading, Image } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  // Llamada a la API
  useEffect(() => {
    API.getLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        Space X Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {/* Iteramos sobre los elementos del array launches y los renderizamos */}
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
