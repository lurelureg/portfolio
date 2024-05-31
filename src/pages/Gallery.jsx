import PageWrapper from "../components/PageWrapper";
import { Flex, SimpleGrid, Text, Center, Button } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMAGES from "../images/images";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageGallery = () => {
    const [filterCategory, setFilterCategory] = useState("");
    const [index, setIndex] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);

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

    const currentImages = useMemo(() =>
        shuffleArray(IMAGES.gallery)
            .filter((imagePath) => imagePath.includes(filterCategory))
            .map(image => { return { src: image } })
    , [filterCategory])

    const handleImageClick = (selectedIndex) => {
        setIndex(selectedIndex)
        setIsOpen(true)
    }

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
                {
                    currentImages.map((image, index) => (
                        <Center key={index} cursor="pointer">
                            <LazyLoadImage src={image.src} onClick={() => handleImageClick(index)} />
                        </Center>
                    ))
                }
            </SimpleGrid>
            <Lightbox
                index={index}
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={currentImages}
            />
        </PageWrapper>
    );
};

export default ImageGallery;
