import { Text, Box, SimpleGrid } from "@chakra-ui/react";

export default function Gallery() {
    return (
        <>
            <Box w={"50%"}>
                <Text fontSize={"lg"}>
                    Welcome to the Gallery, here you can find a little of all
                    the things I do.
                </Text>
            </Box>
            {/* // images */}
            <SimpleGrid minChildWidth="120px" spacing="40px">
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
                <Box bg={"blue.400"} height="80px" />
            </SimpleGrid>
        </>
    );
}
