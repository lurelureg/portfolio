import { Image, SimpleGrid, Text, Center } from "@chakra-ui/react";
import IMAGES from "../images/images";

const ImageGallery = () => {
  return (
    <>
      <Text textStyle='h2' as='h2'>
        Welcome to the Gallery, here you can find some of the things I do.
      </Text>

      <SimpleGrid
        columns={{ base: 2, sm: 3 }}
        spacing='2rem'
        justifyItems='center'
      >
        {IMAGES.gallery.map((imagePath, index) => (
          <Center key={index}>
            <Image src={imagePath} />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ImageGallery;
