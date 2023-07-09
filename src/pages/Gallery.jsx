import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";

const ImageGallery = () => {
    const imagePaths = [
        "../assets/images/gallery/4b421_md.png",
        "../assets/images/gallery/005-DriverlessCar_md.png",
        "../assets/images/gallery/abundance_md.png",
        "../assets/images/gallery/ALLIN_fondosmall_md.png",
        "../assets/images/gallery/AWTY_Dribbble_md.png",
        "../assets/images/gallery/billboard_md.png",
        "../assets/images/gallery/brand_grill_md.png",
        "../assets/images/gallery/chinatown_md.png",
        "../assets/images/gallery/Circusbear_md.png",
        "../assets/images/gallery/cny_edit_md.png",
        "../assets/images/gallery/collage_toast_md.png",
        "../assets/images/gallery/cuyes_nuevo_amanecerB_md.png",
        "../assets/images/gallery/Egypt_palette_md.png",
        "../assets/images/gallery/fondo_md.png",
        "../assets/images/gallery/green_md.png",
        "../assets/images/gallery/H_Dribbble_md.png",
        "../assets/images/gallery/Havi_new_md.png",
        "../assets/images/gallery/insurance_md.png",
        "../assets/images/gallery/Invisible_md.png",
        "../assets/images/gallery/kat_md.png",
        "../assets/images/gallery/Logo-Measures-Final_md.gif",
        "../assets/images/gallery/Logos_simple_md.png",
        "../assets/images/gallery/MA_I436653full_md.png",
        "../assets/images/gallery/madefordigital2_md.png",
        "../assets/images/gallery/mixed_001_md.gif",
        "../assets/images/gallery/mixed_002_md.gif",
        "../assets/images/gallery/mixed_003_md.png",
        "../assets/images/gallery/mixed_005_md.png",
        "../assets/images/gallery/mixed_006_md.png",
        "../assets/images/gallery/mixed_008_md.png",
        "../assets/images/gallery/mixed_009_md.png",
        "../assets/images/gallery/Moow_md.png",
        "../assets/images/gallery/orange_md.png",
        "../assets/images/gallery/Round_md.gif",
        "../assets/images/gallery/PearGrain_md.png",
        "../assets/images/gallery/Ski_mountain_md.png",
        "../assets/images/gallery/Social_keyvisual_md.png",
        "../assets/images/gallery/UI_countdown_md.png",
    ];

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
            >
                {imagePaths.map((imagePath, index) => (
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
