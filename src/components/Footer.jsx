import { Flex, Text, Image, Link, useToast } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
    const toast = useToast();

    return (
        <>
            <Flex
                as="footer"
                shadow={"sm"}
                justifyContent="space-between"
                h={"8rem"}
                direction={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "unset" }}
                margin={"2rem"}
                mx="-2rem"
                mt="4rem"
                padding="0 2rem"
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
                                src="src/assets/socials/email.svg"
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
                            src="src/assets/socials/linkedin.svg"
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
                            src="src/assets/socials/behance.svg"
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
                            src="src/assets/socials/instagram.svg"
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
                            src="src/assets/socials/dribbble.svg"
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
                            src="src/assets/socials/github.svg"
                            className="socialIcon"
                            alt="link to Github"
                        />
                    </Link>
                </Flex>

                <Text textStyle="small" as="p">
                    Copyright © Lucrecia Garino 2023. All rights reserved.
                </Text>
            </Flex>
        </>
    );
}
