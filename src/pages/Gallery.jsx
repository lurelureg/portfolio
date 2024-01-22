import { SimpleGrid, Text, Center } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMAGES from "../images/images";
import PageWrapper from "../components/PageWrapper";

const ImageGallery = () => {
    return (
        <PageWrapper>
            <Text textStyle="h2" as="h2" w={{ base: "unset", sm: "65%" }}>
                Welcome to the Gallery, <br />
                here you can find some of the things I do.
            </Text>

            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing="2rem"
                justifyItems="center"
            >
                {IMAGES.gallery.map((imagePath, index) => (
                    <Center key={index}>
                        <LazyLoadImage src={imagePath} />
                    </Center>
                ))}
            </SimpleGrid>
        </PageWrapper>
    );
};

export default ImageGallery;
