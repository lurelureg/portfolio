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

            <Flex
                gap={"1em"}
                margin={"1em 0"}
                width="100%"
                flexWrap="wrap"
                justifyContent="space-between"
            >
                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("")}
                    >
                        show everything
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("logo")}
                    >
                        logo
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("collage")}
                    >
                        collage
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
                        width="100%"
                        p={".5em 1em"}
                        onClick={() => setFilterCategory("illustration")}
                    >
                        illustration
                    </Button>
                </Flex>

                <Flex flexBasis={0} flexGrow={1}>
                    <Button
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
