import { Flex, Text, Image, Link, useToast } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IMAGES from "../images/images";

export default function Footer() {
    const toast = useToast();

    return (
        <>
            <Flex
                as="footer"
                justifyContent="space-between"
                direction={{ base: "column", sm: "row-reverse" }}
                alignItems="center"
                padding="2rem 0"
                gap={{ base: "2rem" }}
            >
                {/* Socials */}
                <Flex gap={"0.75rem"}>
                    <CopyToClipboard text={"lucreciagarino@gmail.com"}>
                        <Link
                            onClick={() =>
                                toast({
                                    title: "Copied to clipboard 📋",
                                    duration: 2000,
                                    status: "success",
                                })
                            }
                        >
                            <Image
                                src={IMAGES.socials.email}
                                className="socialIcon"
                                alt="email me"
                            />
                        </Link>
                    </CopyToClipboard>

                    <Link
                        href="https://www.linkedin.com/in/lucreciagarino"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            src={IMAGES.socials.linkedin}
                            className="socialIcon"
                            alt="link to LinkedIn"
                        />
                    </Link>
                    <Link
                        href="https://www.behance.net/presenteperfecto"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            src={IMAGES.socials.behance}
                            className="socialIcon"
                            alt="link to Behance"
                        />
                    </Link>
                    <Link
                        href="https://instagram.com/collage.toast"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            src={IMAGES.socials.instagram}
                            className="socialIcon"
                            alt="link to Instagram, collage account"
                        />
                    </Link>
                    <Link
                        href="https://dribbble.com/presenteperfecto"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            src={IMAGES.socials.dribbble}
                            className="socialIcon"
                            alt="link to Dribbble"
                        />
                    </Link>
                    <Link
                        href="https://github.com/lurelureg"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            src={IMAGES.socials.github}
                            className="socialIcon"
                            alt="link to Github"
                        />
                    </Link>
                </Flex>

                <Link className="link" href="#top">
                    <Text textStyle="a" as="span">
                        Back to top ↑
                    </Text>
                </Link>

                <Text textStyle="small" as="p" m={0}>
                    Coded by myself. Constantly iterating. © 2004
                </Text>
            </Flex>
        </>
    );
}
