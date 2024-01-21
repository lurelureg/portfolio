import { useParams } from "react-router-dom";
import { Center, Text, Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";
import IMAGES from "../images/images";

export default function ProjectView() {
    // taken from the URL
    const { projectId } = useParams();

    // title, subtitle, text1,
    // client, industry, service, deliverables
    // cover, text2, gallery, text3
    // MAYBE ADD A LINK TO FULL PROJECT ON BEHANCE
    let projectData = {};

    switch (projectId) {
        case "allin":
            projectData = {
                title: "Youth Center Brand Identity",
                subtitle: "Key visuals & Branding.",
                text1: "Empowering self-expression among teenagers, All In emerges as a community platform. With a mission to foster meaningful connections, the organization operates through an innovative app that facilitates group formation and development, fostering genuine bonds among participants.",
                client: "All In",
                industry: "Civic Organization",
                service: "Brand strategy & design\nWorkshop facilitation",
                deliverables: "Key visuals & Branding\nAnimation guidelines",
                cover: IMAGES.other.allin,
                text2: "A strategic brand identity featuring captivating key visuals and branding elements. To enrich the experience, I also crafted animation guidelines, infusing vitality into the brand and ensuring a consistent and compelling narrative.",
                gallery: IMAGES.projectGalleries.allin,
                text3: "",
            };
            break;

        case "katerina":
            projectData = {
                title: "",
                subtitle: "",
                text1: "",
                client: "",
                industry: "",
                service: "",
                deliverables: "",
                cover: IMAGES.other.katerina,
                text2: "",
                gallery: IMAGES.projectGalleries.katerina,
                text3: "",
            };
            break;
        case "tierracristal":
            projectData = {
                title: "",
                subtitle: "",
                text1: "",
                client: "",
                industry: "",
                service: "",
                deliverables: "",
                cover: IMAGES.other.tierracristal,
                text2: "",
                gallery: IMAGES.projectGalleries.tierracristal,
                text3: "",
            };
            break;
        case "misobservatorio":
            projectData = {
                title: "",
                subtitle: "",
                text1: "",
                client: "",
                industry: "",
                service: "",
                deliverables: "",
                cover: IMAGES.other.misobservatorio,
                text2: "",
                gallery: IMAGES.projectGalleries.misobservatorio,
                text3: "",
            };
            break;
        case "ngonh":
            projectData = {
                title: "",
                subtitle: "",
                text1: "",
                client: "",
                industry: "",
                service: "",
                deliverables: "",
                cover: IMAGES.other.ngonh,
                text2: "",
                gallery: IMAGES.projectGalleries.ngonh,
                text3: "",
            };
            break;
        case "awty":
            projectData = {
                title: "",
                subtitle: "",
                text1: "",
                client: "",
                industry: "",
                service: "",
                deliverables: "",
                cover: IMAGES.other.awty,
                text2: "",
                gallery: IMAGES.projectGalleries.awty,
                text3: "",
            };
            break;

        default:
            break;
    }

    return (
        <>
            <Box>
                <Text textStyle="h4" as="h4">
                    {projectData.subtitle}
                </Text>
                <Text textStyle="h2" as="h2">
                    {projectData.title}
                </Text>
                {/* text1 */}
                <Text textStyle="p" as="p">
                    {projectData.text1}
                </Text>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    w="100%"
                    align="start"
                    gap={6}
                    margin={"5rem 0"}
                >
                    <Box flex="1 0 auto">
                        <Text textStyle="p" as="p">
                            <strong>Client</strong> <br />
                            {projectData.client}
                        </Text>
                    </Box>
                    <Box flex="1 0 auto">
                        <Text textStyle="p" as="p">
                            <strong>Industry</strong> <br />
                            {projectData.industry}
                        </Text>
                    </Box>
                    <Box flex="1 0 auto">
                        <Text textStyle="p" as="p">
                            <strong>Service</strong> <br />
                            {projectData.service}
                        </Text>
                    </Box>
                    <Box flex="1 0 auto">
                        <Text textStyle="p" as="p">
                            <strong>Deliverables</strong> <br />
                            {projectData.deliverables}
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box margin={"5rem 0"}>
                <Image src={projectData.cover} alt="project1" />
            </Box>

            {/* text2 */}
            <Text textStyle="p" as="p">
                {projectData.text2}
            </Text>

            <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing="2rem"
                justifyItems="center"
                margin={"5rem 0"}
            >
                {projectData.gallery.map((imagePath, index) => (
                    <Center key={index}>
                        <Image src={imagePath} alt={projectId + index} />
                    </Center>
                ))}
            </SimpleGrid>

            {/* text3 */}
            <Text textStyle="p" as="p">
                {projectData.text3}
            </Text>
        </>
    );
}
