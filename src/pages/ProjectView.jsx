import { useParams } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
    Center,
    Text,
    Box,
    Flex,
    SimpleGrid,
    Image,
    Link,
} from "@chakra-ui/react";
import IMAGES from "../images/images";
import PageWrapper from "../components/PageWrapper";

export default function ProjectView() {
    // taken from the URL
    const { projectId } = useParams();

    let projectData = {};

    switch (projectId) {
        case "allin":
            projectData = {
                title: "All In - Youth Center",
                subtitle: "Key visuals & Branding.",
                text1: "Empowering self-expression among teenagers, All In emerges as a community platform. With a mission to foster meaningful connections, the organization operates through an innovative app that facilitates group formation and development, enabling genuine bonds among participants.",
                client: "All In",
                industry: "Civic Organization",
                service: "Brand strategy & design\nWorkshop facilitation",
                deliverables: "Key visuals & Branding\nAnimation guidelines",
                cover: IMAGES.other.allin,
                text2: "A strategic brand identity featuring captivating key visuals and branding elements. To enrich the experience, I crafted animation guidelines, infusing vitality into the brand and ensuring a consistent and compelling narrative.",
                gallery: IMAGES.projectGalleries.allin,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/119500987/Youth-center-visual-identity",
            };
            break;

        case "katerina":
            projectData = {
                title: "Holistic Lifestyle Coaching",
                subtitle: "",
                text1: "Katerina Pavlou stands out as a unique Lifestyle coach who endeavors to guide in a manner that renders her invisible. She serves as the voice of your best self.",
                client: "Katerina Pavlou",
                industry: "Wellness",
                service: "Brand strategy\nVisual Design",
                deliverables: "Brand Identity\nSocial media assets",
                cover: IMAGES.other.katerina,
                text2: "A distinctive and engaging brand presence was established using the aesthetics of neu-morphism encouraging the audience to look closer.",
                gallery: IMAGES.projectGalleries.katerina,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/139059395/Lifestyle-coaching-Intagram-grid-posts",
            };
            break;
        case "tierracristal":
            projectData = {
                title: "Tierra Cristal - Yoga Ashram",
                subtitle: "",
                text1: "Specializing in healing, and yoga, Tierra Cristal promises a safe space for grounded practices. Defined by its translation, Crystal Earth, it alludes to the bonding energy between beings, earth and space.",
                client: "Tierra Cristal Group",
                industry: "Wellness",
                service: "Brand strategy & design",
                deliverables:
                    "Responsive identity\nSocial media assets\nTemplates and guidelines",
                cover: IMAGES.other.tierracristal,
                text2: "A responsive identity that encapsulates the serene essence of their offerings. The deliverables extended to a suite of engaging social media assets, practical templates, and comprehensive guidelines, ensuring a professional and consistent visual representation that resonates with their diverse audience.",
                gallery: IMAGES.projectGalleries.tierracristal,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/92450313/Responsive-Branding",
            };
            break;
        case "ngonh":
            projectData = {
                title: "Keep them on the ground - NGO",
                subtitle: "",
                text1: "←350 is an international movement of ordinary people working to end the age of fossil fuels and build a world powered by community-led renewable energy accessible to all.",
                client: "←350NH",
                industry: "Environmental Nonprofit",
                service: "Brand Redesign",
                deliverables: "Brand redesign\nMerch assets\nGuidelines",
                cover: IMAGES.other.ngonh,
                text2: "For the New Hampshire branch, I was commissioned a Brand redesign. The outcome was a refreshed brand identity that not only communicates their environmental commitment but also stands out effectively. All changes were encapsulated in comprehensive guidelines to ensure consistency across all mediums.",
                gallery: IMAGES.projectGalleries.ngonh,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/95440585/Brand-Redesign",
            };
            break;
        case "misobservatorio":
            projectData = {
                title: "MisObservatorio - NGO",
                subtitle: "",
                text1: "MISObservatorio is an archival platform with a focus on women's health and the right to lawful information that is dedicated to documenting access to the drug misoprostol.",
                client: "misObservatorio",
                industry: "Healthcare Politics Nonprofit",
                service:
                    "Brand strategy & design\nWeb Design\nWorkshop facilitation",
                deliverables:
                    "Identity & Style-guide\nWebsite guidelines\nIllustration\nPrint assets\nSocial media assets",
                cover: IMAGES.other.misobservatorio,
                text2: "The result is a communication strategy that builds  trust and credibility. It reaches a broader audience, and serves as a testimony for legal action. Led a cross-functional team to develop their brand strategy and designed their brand and website.",
                gallery: IMAGES.projectGalleries.misobservatorio,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/111510109/Brand-Identity-Socials-and-Web",
            };
            break;
        case "awty":
            projectData = {
                title: "AWTY? - on the future of creativity.",
                subtitle: "",
                text1: "AWTY? is a group of 9 people all over the globe that convened to develop a concept for online talks centering on the future of creativity, art and AI. During the course of 3 days, over 20 speakers across fields of creativity and innovation shared their ideas.",
                client: "Are we there yet?",
                industry: "Virtual events",
                service: "Visual Design",
                deliverables: "Social media assets",
                cover: IMAGES.other.awty,
                text2: "Created an aesthetic that effectively communicates the event's theme of fostering community in the art scene. Delivered social media visuals providing grids, videos and carousel posts, as well as social media ads formatted for different platforms.",
                gallery: IMAGES.projectGalleries.awty,
                text3: "",
                behance:
                    "https://www.behance.net/gallery/189478223/Branded-social-media-for-online-event",
            };
            break;

        default:
            break;
    }

    return (
        <PageWrapper>
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
            <Box margin={"2rem 0"}>
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
                margin={"5rem 0 0"}
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

            <Text
                align={"center"}
                textStyle="p"
                as="p"
                textDecoration={"underline"}
                flex="1 1 50%"
                margin={"2rem 0 5rem"}
            >
                <Link href={projectData.behance} target="_blank">
                    View the complete project on Behance{" "}
                    <ExternalLinkIcon w={6} h={6} />
                </Link>
            </Text>
        </PageWrapper>
    );
}
