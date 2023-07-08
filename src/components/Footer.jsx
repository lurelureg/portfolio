import { Flex, Text, Image, Link } from "@chakra-ui/react";

export default function Footer() {
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
                <Text textStyle="h2" as="h2">
                    Visit the Gallery for more Visual work, and please don’t
                    hesitate to get in touch! &#8600;
                    {/* this entity shows an emoji I hate it,  */}
                </Text>
                <Flex>
                    <Link
                        href="https://github.com/lurelureg"
                        isExternal
                        color="cyan.200"
                    >
                        <Image
                            w="1.5rem"
                            h="1.5rem"
                            src="src/assets/socials/behance.svg"
                            className="socialIcon"
                            alt="link to Behance"
                        />
                    </Link>
                </Flex>

                <Text textStyle="p" as="p">
                    Copyright © Lucrecia Garino 2023. All rights reserved.
                </Text>
                {/* p is not working */}
            </Flex>
        </>
    );
}
