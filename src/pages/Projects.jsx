import { Box, Flex, Text, Image, SimpleGrid, Divider } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import IMAGES from "../images/images";
import ImageCover from "../components/ImageCover";
import PageWrapper from "../components/PageWrapper";

export default function Projects() {
    return (
        <PageWrapper>
            <Text textStyle="h1" as="h1" w={{ base: "unset", md: "65%" }}>
                {`Crafting branding that reflects companies' values and fills them with pride.`}
            </Text>

            <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing="2rem"
                justifyItems="center"
            >
                {/* Project Mini1 */}
                <Box margin={{ base: "0 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/allin">
                        <ImageCover
                            src={IMAGES.other.allin}
                            alt="cover image for All In"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Key visuals & Branding for youth center.
                        </Text>
                    </Flex>
                </Box>

                <Divider display={{ base: "block", sm: "none" }} />

                {/* Project Mini2 */}
                <Box margin={{ base: "0 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/misobservatorio">
                        <ImageCover
                            src={IMAGES.other.misobservatorio}
                            alt="cover image for women's nonprofit"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Brand Identity, socials, and website for NGO.
                        </Text>
                    </Flex>
                </Box>

                <Divider display={{ base: "block", sm: "none" }} />

                {/* Project Mini3 */}

                <Box margin={{ base: "0 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/ngonh">
                        <ImageCover
                            src={IMAGES.other.ngonh}
                            alt="cover image for 350 N H"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Environmental Nonprofit Redesign
                        </Text>
                    </Flex>
                </Box>

                <Divider display={{ base: "block", sm: "none" }} />

                {/* Project Mini4 */}
                <Box margin={{ base: "0 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/awty">
                        <ImageCover
                            src={IMAGES.other.awty}
                            alt="cover image for virtual events"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Future of creativity Online Event
                        </Text>
                    </Flex>
                </Box>

                <Divider display={{ base: "block", sm: "none" }} />

                {/* Project Mini5 */}

                <Box margin={{ base: "1rem 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/katerina">
                        <ImageCover
                            src={IMAGES.other.katerina}
                            alt="cover image for katerina's coaching"
                        />
                    </LinkRouter>

                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Instagram communication strategy for Lifestyle
                            coaching.
                        </Text>
                    </Flex>
                </Box>

                <Divider display={{ base: "block", sm: "none" }} />

                {/* Project Mini6 */}
                <Box margin={{ base: "0 0 1rem", sm: "1rem 0 2rem" }}>
                    <LinkRouter to="/project/tierracristal">
                        <ImageCover
                            src={IMAGES.other.tierracristal}
                            alt="cover image for holistic studio"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="0.75rem"
                        direction={{ base: "column", sm: "row" }}
                        w={"90%"}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Responsive brand for Holistic Studio.
                        </Text>
                    </Flex>
                </Box>
            </SimpleGrid>

            {/* Heading Footer Prefooter */}
            <Flex
                direction={{ base: "column", sm: "row" }}
                justifyContent="space-between"
                mt={{ base: "5rem", sm: "10rem" }}
            >
                <Text textStyle="h2" as="h2">
                    Visit the&nbsp;
                    <LinkRouter to="/gallery" className="link-underlined">
                        Gallery
                    </LinkRouter>{" "}
                    for more Visual work, and please don&apos;t hesitate to get
                    in touch!
                    <LinkRouter to="/gallery"> &#8600;</LinkRouter>
                </Text>
                <LinkRouter to="/gallery">
                    <Image
                        m={{ base: "0 auto", sm: "0 0 0 auto" }}
                        w={{ base: "70%", sm: "85%" }}
                        src={IMAGES.other.footergallerybg730}
                        alt="a collage of vertical stripes of works"
                    />
                </LinkRouter>
            </Flex>
        </PageWrapper>
    );
}
