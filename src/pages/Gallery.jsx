import PageWrapper from "../components/PageWrapper";
import { Flex, SimpleGrid, Text, Center, Button } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMAGES from "../images/images";
import { useState } from "react";

const ImageGallery = () => {
    const [filterCategory, setFilterCategory] = useState("");
    const shuffleArray = (array) => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    return (
        <PageWrapper>
            <Text
                textStyle="h2"
                as="h2"
                w={{ base: "unset", md: "80%", lg: "65%" }}
            >
                Welcome to the Gallery, <br />
                get a glimpse of other projects.
            </Text>

            <Flex
                gap={"1em"}
                margin={"1em 0"}
                width="100%"
                flexWrap="wrap"
                justifyContent="space-between"
            >
                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        variant="solid"
                        colorScheme="red"
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("")}
                    >
                        show everything
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        variant="solid"
                        colorScheme="twitter"
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("logo")}
                    >
                        logo
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        variant="solid"
                        colorScheme="green"
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("collage")}
                    >
                        collage
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        variant="solid"
                        colorScheme="orange"
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("illustration")}
                    >
                        illustration
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        variant="solid"
                        colorScheme="purple"
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("keyvisual")}
                    >
                        keyvisual
                    </Button>
                </Flex>
            </Flex>

            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing="2rem"
                justifyItems="center"
            >
                {shuffleArray(IMAGES.gallery)
                    .filter((imagePath) => imagePath.includes(filterCategory))
                    .map((imagePath, index) => (
                        <Center key={index}>
                            <LazyLoadImage src={imagePath} />
                        </Center>
                    ))}
            </SimpleGrid>
        </PageWrapper>
    );
};

export default ImageGallery;
