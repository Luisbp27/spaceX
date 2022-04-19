import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import { Box, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const { id } = useParams();

    useEffect(() => {
        API.getLaunch(id).then(setLaunch);
    }, [id]);

    return (
        <Box launch={launch} bg="gray.100" p={4} m={4} borderRadius="lg">
            {!launch ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Flex display="flex">
                        <Text fontSize="2xl">
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>

                        <Spacer />

                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>
                    </Flex>

                    <Box>
                        Rocket: {" "}
                        <Link to={`/rocket/${launch.rocket?.rocket_id}`}>
                            { launch.rocket?.rocket_name }
                        </Link>
                    </Box>
                </>
            )}
        </Box>
    );
}