import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex bg="blackAlpha.800" h={100} mx="-2rem" mt="4rem" padding="0 2rem">
            <Text textStyle="h2" as="h2">
                Visit the Gallery for more Visual work, and please don’t
                hesitate to get in touch! &#8600;
                {/* this entity shows an emoji I hate it,  */}
            </Text>

            <Text textStyle="p" as="p">
                Copyright © Lucrecia Garino 2023. All rights reserved.
            </Text>
            {/* p is not working */}
        </Flex>
    );
}
