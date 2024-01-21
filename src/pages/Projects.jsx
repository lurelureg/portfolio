import { Box, Flex, Text, Image, SimpleGrid, Divider } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import IMAGES from "../images/images";

export default function Projects() {
    return (
        <>
            <Text textStyle="h2" as="h2">
                Branding that reflects core values <br />
                and make companies proud.
            </Text>

            <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing="2rem"
                justifyItems="center"
            >
                {/* Project Mini1 */}
                <Box margin={{base: "1rem 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/katerina">
                        <Image
                            src={IMAGES.other.katerina}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>

                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Instagram communication strategy for Lifestyle
                            coaching.
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 50%"
                        >
                            <Link
                                href="https://www.behance.net/gallery/139059395/Lifestyle-coaching-Intagram-grid-posts"
                                target="_blank"
                            >
                                Full project on Be
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
                    </Flex>
                </Box>

                <Divider display={{base: "block", sm: "none"}}/>

                {/* Project Mini2 */}
                <Box margin={{base: "0 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/misobservatorio">
                        <Image
                            src={IMAGES.other.misobservatorio}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Brand Identity, socials, and website for NGO.
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 50%"
                        >
                            <Link to="https://www.behance.net/gallery/111510109/Brand-Identity-Social-and-Web">
                                Full project on Be
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
                    </Flex>
                </Box>

                <Divider display={{base: "block", sm: "none"}}/>
                
                {/* Project Mini3 */}
                <Box margin={{base: "0 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/allin">
                        <Image
                            src={IMAGES.other.allin}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Key visuals & Branding for youth center.
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 50%"
                        >
                            <Link to="https://www.behance.net/gallery/119500987/Youth-center-visual-identity">
                                Full project on Be
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
                    </Flex>
                </Box>
                
                <Divider display={{base: "block", sm: "none"}}/>

                {/* Project Mini4 */}
                <Box margin={{base: "0 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/tierracristal">
                        <Image
                            src={IMAGES.other.tierracristal}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Responsive brand for Holistic Studio.
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 50%"
                        >
                            <Link
                                href="https://www.behance.net/gallery/92450313/Responsive-Branding"
                                target="_blank"
                            >
                                Full project on Be{" "}
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
                    </Flex>
                </Box>

                <Divider display={{base: "block", sm: "none"}}/>

                {/* Project Mini5 */}
                <Box margin={{base: "0 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/ngonh">
                        <Image
                            src={IMAGES.other.ngonh}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Environmental Nonprofit Redesign
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 50%"
                        >
                            <Link
                                href="https://www.behance.net/gallery/95440585/Brand-Redesign"
                                target="_blank"
                            >
                                Full project on Be{" "}
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
                    </Flex>
                </Box>

                <Divider display={{base: "block", sm: "none"}}/>
                
                {/* Project Mini6 */}
                <Box margin={{base: "0 0 1rem", sm: "1rem 0 3rem"}}>
                    <LinkRouter to="/project/awty">
                        <Image
                            src={IMAGES.other.awty}
                            alt=""
                            className="projectImgSm"
                        />
                    </LinkRouter>
                    <Flex
                        gap={{ base: "0", sm: "2rem" }}
                        mt="1rem"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text textStyle="h3" as="h3" flex="1 1 100%">
                            Future of creativity Online Event
                        </Text>
                        {/* Behance */}
                        {/* <Text
                            textStyle="p"
                            as="p"
                            textDecoration={"underline"}
                            flex="1 1 100%"
                        >
                            
                            <Link
                                href="https://www.behance.net/gallery/189478223/Branded-social-media-for-online-event"
                                target="_blank"
                            >
                                Full project on Be{" "}
                                <ExternalLinkIcon w={6} h={6} />
                            </Link>
                        </Text> */}
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
        </>
    );
}
