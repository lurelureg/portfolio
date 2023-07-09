import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";
import IMAGES from "../images/images";

const ImageGallery = () => {
    return (
        <>
            <Box w={"50%"}>
                <Text fontSize={"xl"}>
                    Welcome to the Gallery, here you can find some of the things
                    I do.
                </Text>
            </Box>
            {/* images */}
            <SimpleGrid
                columns={{ base: 2, sm: 3 }}
                spacing="2rem"
                justifyItems="center"
            >
                {IMAGES.gallery.map((imagePath, index) => (
                    <Box
                        key={index}
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Link to="/galleryView">
                            <img src={imagePath} className="galleryImg" />
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
};

export default ImageGallery;
