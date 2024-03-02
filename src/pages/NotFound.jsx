import { Center, Text } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
    return (
        <PageWrapper>
            <Center>
                <img src="https://i.gifer.com/2Ac1.gif" />
            </Center>
            <Text textStyle="h4" as="h4" align="center">
                Page Not Found
            </Text>
        </PageWrapper>
    );
}
