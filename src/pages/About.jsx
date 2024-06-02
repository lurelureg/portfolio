import { Text, Box, Flex } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";

export default function About() {
    return (
        <PageWrapper>
            
            <Text color={"#1b1b1bc9"}
                textStyle="h3"
                as="h3"
                w={{ base: "unset", md: "80%", lg: "65%" }}
            >
                <small>
                    Hola! Hi! Salut! Ciao! Moin! Ahoy! Namaste! <br />
                    </small>

            </Text>
            <Text
                textStyle="h2"
                as="h2"
                w={{ base: "unset", md: "80%", lg: "65%" }}
            >
                I&apos;m Lucrecia, a designer based in Berlin. <br />I transform businesses with strategic branding and engaging visuals, blending creativity and optimization.
            </Text>

            <Text
                textStyle="p"
                as="p"
                w={{ base: "unset", md: "75%", lg: "65%" }}
            >
With over 10 years as a visual designer, I&apos;ve honed my craft across sectors like retail, banking, wholesale, healthcare, and civic organizations. <br />I specialize in re-branding, leading brand workshops, and <strong>bridging business goals with creativity.</strong> My approach results in companies that are proud and eager to share their work.<br /><br /> Born into a creative family, I&apos;m curious and proactive. My background includes Graphic & Advertising Design and Human-Centered Design. I&apos;ve expanded my expertise through certifications in <strong> creativity, UX/UI, and Web Development </strong> Bootcamps. Continuous learning is fueled by my passion for multidisciplinary collaboration.<br /><br />Beyond the screen I&apos;m an avid explorer of Berlin, you&apos;ll find me taking pictures of its flora and architecture, lost in art galleries and museums or with my concert buddies. <br /><br />I&apos;m always seeking new challenges for new challenges or opportunities to collaborate, so please get in touch, even for a short chat.
<br /><strong>Let&apos;s make things happen!</strong>
            </Text>

            <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align="start"
                gap={6}
                margin={"5rem 0"}
            >
                <Box flex="1 0 auto">
                    <Text>
                        <strong>Soft Skills</strong> <br />
                        Leadership<br />
                        Communication<br />
                        Collaboration<br />
                        Creativity<br />
                        Adaptability<br />
                        Mentoring<br />
                        Problem-Solving
                    </Text>
                </Box>
                <Box flex="1 0 auto">
                    <Text>
                        <strong>Hard Skills</strong> <br />
                        Brand Strategy<br />
                        Communication Design<br />
                        Visual Design<br />
                        Creative Strategy<br />
                        Conversion Optimization<br />
                        Information Architecture<br />
                        Web Development<br />
                        UX/UI Design
                    </Text>
                </Box>
                <Box flex="1 0 auto">
                    <Text>
                        <strong>Favorite Tools</strong> <br />
                        Figma<br />
                        Adobe Suite<br />
                        Jira<br />
                        Notion<br />
                        Google One Drive
                    </Text>
                </Box>
            </Flex>
        </PageWrapper>
    );
}
