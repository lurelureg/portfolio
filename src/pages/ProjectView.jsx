import { Text, Box, Center } from "@chakra-ui/react";

export default function ProjectView() {
    return (
        <>
            <Box>
                <Text textStyle="h3" as="h3">
                    Food Finder Mobile App
                </Text>

                <Text textStyle="p" as="p">
                    <strong>Role</strong> <br />
                    Web Development, <br />
                    Ideation, Planning, <br />
                    Architecture
                </Text>

                <Text textStyle="p" as="p">
                    <strong>Deliverables</strong> <br />
                    Presentation Pitch, <br />
                    On Boarding Prototype, <br />
                    deployed App
                </Text>
            </Box>
            <Text textStyle="p" as="p">
                The Food Finder mobile app is designed to assist individuals
                with specific dietary requirements in locating suitable products
                at nearby stores. The app, built using React and Ionic
                Framework, integrates with various APIs to provide real-time
                data. Users can search for products based on their dietary
                restrictions and have at one glance if it&apos;s suited for
                them. The app also includes a map feature to find store
                locations and availability. Leveraging AI technology, the app
                connects the product search and location search features to
                identify nearby stores stocking the desired items. User feedback
                on product availability is encouraged, thanks to good simple UX.
            </Text>

            <Center>
                <iframe
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                    width="400"
                    height="900"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fa5z0Zyjkq3yi8xslCtptqq%2FFinal-FoodFinder%3Fpage-id%3D405%253A190%26type%3Ddesign%26node-id%3D405-1593%26viewport%3D208%252C156%252C0.32%26t%3DWaDGh3S9f655Xrxr-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D410%253A342%26mode%3Ddesign"
                />
            </Center>
        </>
    );
}
