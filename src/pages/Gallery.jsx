import PageWrapper from "../components/PageWrapper";
import { Flex, SimpleGrid, Text, Center, Button } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMAGES from "../images/images";
import { useState } from "react";

const ImageGallery = () => {
    const [filterCategory, setFilterCategory] = useState("");

    return (
        <PageWrapper>
            <Text textStyle="h2" as="h2" w={{ base: "unset", sm: "65%" }}>
                Welcome to the Gallery, <br />
                get a glimpse of my personal projects.
            </Text>

            <Flex gap={"2em"} margin={"1em 0"} w={"1vw"}>
                <Button p={"1em 3em"} onClick={() => setFilterCategory("")}>
                    show all
                </Button>
                <Button p={"1em 3em"} onClick={() => setFilterCategory("logo")}>
                    logo
                </Button>
                <Button
                    p={"1em 3em"}
                    onClick={() => setFilterCategory("collage")}
                >
                    collage
                </Button>
                <Button
                    p={"1em 3em"}
                    onClick={() => setFilterCategory("illustration")}
                >
                    illustration
                </Button>
                <Button
                    p={"1em 3em"}
                    onClick={() => setFilterCategory("keyvisual")}
                >
                    keyvisual
                </Button>
            </Flex>

            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing="2rem"
                justifyItems="center"
            >
                {IMAGES.gallery
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
