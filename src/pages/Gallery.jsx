import { Text, Box, Center, SimpleGrid } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <>
      <Box w={"50%"}>
        <Text fontSize={"xl"}>
          Welcome to the Gallery, here you can find a little of all the things I
          do.
        </Text>
      </Box>
      {/* images */}
      <SimpleGrid
        columns={{ base: 2, sm: 3 }}
        spacing='2rem'
        justifyItems='center'
      >
        <Box bg={"blue.400"} height='80px' w='200px' />
        <Box bg={"blue.400"} height='80px' w='200px' />
        <Box bg={"blue.400"} height='150px' w='200px' />

        <Box bg={"blue.600"} height='100px' w='200px' />
        <Box bg={"blue.600"} height='80px' w='200px' />
        <Box bg={"blue.600"} height='200px' w='200px' />

        <Box bg={"green.600"} height='200px' w='200px' />
        <Box bg={"red.600"} height='200px' w='200px' />
        <Box bg={"blue.600"} height='200px' w='200px' />
      </SimpleGrid>
    </>
  );
}
