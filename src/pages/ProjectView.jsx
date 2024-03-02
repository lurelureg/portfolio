import {
    ExternalLinkIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import {
    Center,
    Text,
    Box,
    Flex,
    SimpleGrid,
    Image,
    Link,
    Button,
    Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import NotFound from "./NotFound";
import PageWrapper from "../components/PageWrapper";
import { projectsList } from "../data/projectsList";

export default function ProjectView() {
    const { projectId } = useParams(); // taken from the URL
    const [currentProjectId, setCurrentProjectId] = useState(projectId);
    const [projectData, setProjectData] = useState();

    useEffect(() => {
        const data = projectsList.find((project) => project.id === projectId);
        setProjectData(data);
    }, [projectId]);

    useEffect(() => {
        const data = projectsList.find(
            (project) => project.id === currentProjectId
        );
        setProjectData(data);
        window.history.replaceState(
            null,
            currentProjectId,
            `/project/${currentProjectId}`
        );
    }, [currentProjectId]);

    const navigatePrevious = () => {
        scroll.scrollToTop();
        const currentIndex = projectsList.findIndex(
            (p) => p.id === currentProjectId
        );
        if (currentIndex > 0) {
            setCurrentProjectId(projectsList[currentIndex - 1].id);
        }
    };

    const navigateNext = () => {
        scroll.scrollToTop();
        const currentIndex = projectsList.findIndex(
            (p) => p.id === currentProjectId
        );
        if (currentIndex < projectsList.length - 1) {
            setCurrentProjectId(projectsList[currentIndex + 1].id);
        }
    };

    return (
        <PageWrapper>
            {projectData ? (
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
                            className="wrapContainer"
                            direction={{ base: "column", md: "row" }}
                            w="100%"
                            align="start"
                            gap={6}
                            margin={"5rem 0"}
                        >
                            <Box className="wrapChildren">
                                <Text textStyle="p" as="p">
                                    <strong>Client</strong> <br />
                                    {projectData.client}
                                </Text>
                            </Box>
                            <Box className="wrapChildren">
                                <Text textStyle="p" as="p">
                                    <strong>Industry</strong> <br />
                                    {projectData.industry}
                                </Text>
                            </Box>
                            <Box className="wrapChildren">
                                <Text textStyle="p" as="p">
                                    <strong>Service</strong> <br />
                                    {projectData.service}
                                </Text>
                            </Box>
                            <Box className="wrapChildren">
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
                                <Image
                                    src={imagePath}
                                    alt={projectId + index}
                                />
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

                    <Stack
                        spacing={4}
                        direction="row"
                        align="center"
                        justify="space-between"
                    >
                        <Flex>
                            <Button
                                leftIcon={<ChevronLeftIcon />}
                                variant="ghost"
                                onClick={navigatePrevious}
                                isDisabled={
                                    currentProjectId === projectsList[0].id
                                }
                            >
                                Previous
                            </Button>
                        </Flex>
                        <Flex>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                variant="ghost"
                                onClick={navigateNext}
                                isDisabled={
                                    currentProjectId ===
                                    projectsList[projectsList.length - 1].id
                                }
                            >
                                Next
                            </Button>
                        </Flex>
                    </Stack>
                </>
            ) : (
                <NotFound />
            )}
        </PageWrapper>
    );
}
