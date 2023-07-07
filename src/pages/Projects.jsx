import { Text, Link, Image } from "@chakra-ui/react";

export default function Projects() {
    return (
        <>
            <Text textStyle="h2" as="h2">
                I&apos;m a multidisciplinary designer with a focus on UX,
                creativity and branding.
            </Text>
            {/* Project 1 */}
            <Link to="/projectOne">
                <Image
                    src="src/assets/images/other/project1.png"
                    className="projectImg"
                    alt="edit this"
                />
                <Text textStyle="h3" as="h3">
                    Food finder mobile app
                </Text>
                <Text textStyle="p" as="p">
                    FoodFinder is designed to help you find products at your
                    neighborhood stores.
                </Text>
            </Link>

            <Text textStyle="h2" as="h2">
                Brand Identities that reflect core values and make my clients
                proud.
            </Text>

            {/* Project Mini1 */}
            <Image
                src={"src/assets/images/other/branding_1.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Instagram communication strategy for Lifestyle coaching.
            </Text>

            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/139059395/Lifestyle-coaching-Intagram-grid-posts">
                    Be&#8599;
                </Link>
            </Text>

            {/* Project Mini2 */}
            <Image
                src={"src/assets/images/other/branding_2.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Brand Identity, socials, and website for NGO.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/111510109/Brand-Identity-Social-and-Web">
                    Be&#8599;
                </Link>
            </Text>

            {/* Project Mini3 */}
            <Image
                src={"src/assets/images/other/branding_3.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Key visuals & Branding for youth center.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/119500987/Youth-center-visual-identity">
                    Be&#8599;
                </Link>
            </Text>

            {/* Project Mini4 */}
            <Image
                src={"src/assets/images/other/branding_4.png"}
                className="projectImgSm"
                alt="edit this"
            />
            <Text textStyle="h2" as="h2">
                Responsive brand for house of holistic therapy.
            </Text>
            <Text textStyle="p" as="p">
                Full project on&nbsp;
                <Link to="https://www.behance.net/gallery/92450313/Responsive-Branding">
                    Be&#8599;
                </Link>
            </Text>
        </>
    );
}
