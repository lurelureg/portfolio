import { Text, Link, Image, useToast, Button } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function Projects() {
    const toast = useToast();
    return (
        <>
            <Button
                margin={"0 0 2rem"}
                onClick={() =>
                    toast({
                        title: "Kiddin. This site in under construction.🔨🥪",
                        description: (
                            <>
                                I&apos;m coding it from scratch&nbsp;
                                <Link
                                    href="https://github.com/lurelureg/portfolio"
                                    isExternal
                                    color="cyan.200"
                                >
                                    visit the GitHub repo&nbsp;
                                </Link>
                                to see what&apos;s missing.
                            </>
                        ),
                        duration: 9000,
                        isClosable: true,
                        colorScheme: "cyan",
                    })
                }
            >
                Free toast! 🥪 Click Here.
            </Button>
            <Text textStyle="h2" as="h2">
                I&apos;m a multidisciplinary designer with a focus on UX,
                creativity and branding.
            </Text>
            {/* Project 1 */}
            <Link to="/projectOne">
                <Image
                    src="../assets/images/other/project1.png"
                    className="projectImg"
                    alt="edit this"
                />
                <Text textStyle="h3" as="h3">
                    Food finder mobile app
                </Text>
                <Text textStyle="p" as="p">
                    FoodFinder is designed to help you find products at your
                    neighborhood stores.
                </Text>
            </Link>
            <Text textStyle="h2" as="h2">
                Brand Identities that reflect core values and make my clients
                proud.
            </Text>
            {/* Project Mini1 */}
            <Image
                src={"../assets/images/other/branding_1.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Instagram communication strategy for Lifestyle coaching.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/139059395/Lifestyle-coaching-Intagram-grid-posts">
                    Be
                    <ExternalLinkIcon w={4} h={4} />
                </Link>
            </Text>
            {/* Project Mini2 */}
            <Image
                src={"../assets/images/other/branding_2.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Brand Identity, socials, and website for NGO.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/111510109/Brand-Identity-Social-and-Web">
                    Be
                    <ExternalLinkIcon w={4} h={4} />
                </Link>
            </Text>
            {/* Project Mini3 */}
            <Image
                src={"../assets/images/other/branding_3.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Key visuals & Branding for youth center.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/119500987/Youth-center-visual-identity">
                    Be
                    <ExternalLinkIcon w={4} h={4} />
                </Link>
            </Text>
            {/* Project Mini4 */}
            <Image
                src={"../assets/images/other/branding_4.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Responsive brand for house of holistic therapy.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/92450313/Responsive-Branding">
                    Be <ExternalLinkIcon w={4} h={4} />
                </Link>
            </Text>
            <Text textStyle="h2" as="h2">
                Visit the Gallery for more Visual work, and please don’t
                hesitate to get in touch! &#8600;
                {/* this entity shows an emoji I hate it,  */}
            </Text>
            <LinkRouter to="/gallery">
                <Image
                    src={"../assets/images/other/footer-gallerybg-730.png"}
                    className="squareImg"
                    alt="a collage of vertical stripes of works"
                />
            </LinkRouter>
        </>
    );
}
