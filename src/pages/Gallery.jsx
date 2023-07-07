import { Text, Box, SimpleGrid } from "@chakra-ui/react";

export default function Gallery() {
    return (
        <>
            <Box w={"50%"}>
                <Text fontSize={"xl"}>
                    Welcome to the Gallery, here you can find a little of all
                    the things I do.
                </Text>
            </Box>
            {/* images */}
            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing="2rem"
                justifyItems="center"
            ></SimpleGrid>
        </>
    );
}
