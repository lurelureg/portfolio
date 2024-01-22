import { Text, Box, Flex } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";

export default function About() {
    return (
        <PageWrapper>
            <Text textStyle="h2" as="h2" w={{ base: "unset", sm: "70%" }}>
                Lucrecia Garino is a multifaceted designer with a focus on
                Branding, Creative Strategy, and Digital Mediums.
            </Text>
            <Text textStyle="h3" as="h3" w={{ base: "unset", sm: "70%" }}>
                <small>Currently based in Berlin. 🐻</small>
            </Text>
            <Text textStyle="p" as="p" w={{ base: "unset", sm: "70%" }}>
                As a seasoned Brand Strategist and Communication Designer since
                2010, I&apos;ve been at the forefront of crafting compelling
                brand identities and designing impactful visual communication
                strategies. My expertise spans diverse industries, including
                environmental nonprofits, healthcare, wellness, virtual events,
                and civic organizations. I specialize in bridging business
                values and objectives into compelling discourses that resonate
                with target audiences.
                <br />
                My educational background includes a Diploma in Graphic &
                Advertising Design, a Certificate Program in{" "}
                <strong>Creativity for Advertising</strong> . I further pursued
                a BA in Human-Centered Design.
                <br /> <br />
                I enjoyed complementing my experience teaching and mentoring in
                Graphic Design, I led the development of courses for
                professionals, emphasizing the creation of complete design
                projects. Guiding students, I provided hands-on leadership,
                ensuring successful outcomes and contributing to their final
                degree achievements.
                <br />
                <br />I recently completed a Bootcamp in <strong>UX/UI</strong>,
                and another in Web <strong>Web Development</strong>. I consider
                a continuous pursuit of education is key to staying ahead in the
                ever-changing landscape of design and technology.
                <br />
                When I&apos;m not studying or collaging, you&apos;ll find me
                exploring the infinite city of Berlin, hunting for stucco
                sculptures and unusual plants.
                <br />
                <br /> I&apos;m currently on the lookout for an amazing team to
                join. I thrive in multidisciplinary environments, where I can
                empower others and create something beyond great together.
                I&apos;m excited to take on new challenges and make a real
                impact. Let&apos;s make things happen! <br />
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
                        Leadership <br /> Communication <br /> Collaboration
                        <br />
                        Creativity
                        <br /> Adaptability
                        <br /> Mentoring <br />
                        Workshop Facilitation
                        <br /> Client-Facing Communication <br /> Team
                        Empowerment <br /> Problem-Solving
                    </Text>
                </Box>
                <Box flex="1 0 auto">
                    <Text>
                        <strong>Hard Skills</strong> <br />
                        Brand Strategy
                        <br />
                        Communication Design
                        <br />
                        Visual Design
                        <br />
                        Creative Strategy
                        <br />
                        Conversion Optimization
                        <br />
                        Information Architecture
                        <br />
                        Campaign Development
                        <br />
                        Creative Conceptualization
                        <br />
                        Web Development
                        <br />
                        UX/UI Design
                        <br />
                        Creative Content
                        <br />
                    </Text>
                </Box>
                <Box flex="1 0 auto">
                    <Text>
                        <strong>Favorite Tools</strong> <br />
                        Figma <br />
                        Adobe <br /> Jira <br /> Notion <br /> Google
                    </Text>
                </Box>
            </Flex>
        </PageWrapper>
    );
}
