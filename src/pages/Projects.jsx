import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  useToast,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import IMAGES from "../images/images";

export default function Projects() {
  const toast = useToast();
  return (
    <>
      <Button
        margin={"0 0 1rem"}
        onClick={() =>
          toast({
            title: "Kiddin. This site in under construction.🔨🥪",
            description: (
              <>
                I&apos;m coding it from scratch&nbsp;
                <Link
                  href='https://github.com/lurelureg/portfolio'
                  isExternal
                  color='cyan.200'
                >
                  visit the GitHub repo&nbsp;.
                </Link>
              </>
            ),
            duration: 9000,
            isClosable: true,
            colorScheme: "cyan",
          })
        }
      >
        Free toast! 🥪 Click Here.
      </Button>
      {/* Header */}
      <Text textStyle='h2' as='h2'>
        I&apos;m a multidisciplinary designer with a focus on UX, creativity and
        branding.
      </Text>
      {/* Project 1 */}
      <Box margin={"1rem 0 2rem"}>
        <Link href='/projectview'>
          <Image src={IMAGES.other.project1} alt='project1' />
        </Link>
        <Flex
          gap={{ base: "0", sm: "2rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          <Text textStyle='h3' as='h3' flex='1 1 50%'>
            Food finder mobile App
          </Text>

          <Text textStyle='p' as='p' flex='1 1 50%'>
            FoodFinder is designed to help you find products at your
            neighborhood stores.
            <br />
            <Link textDecoration={"underline"} href='/projectview'>
              Go To Project
            </Link>
          </Text>
        </Flex>
      </Box>
      <Divider w='100%' opacity='1' border-bottom-width='3px' m='2rem 0' />
      <Text textStyle='h2' as='h2'>
        Brand Identities that reflect core values <br />
        and make my clients proud.
      </Text>
      {/* Project Mini1 */}
      <Box margin={"1rem 0 2rem"}>
        <Image src={IMAGES.other.branding1} alt='project2' />
        <Flex
          gap={{ base: "0", sm: "2rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          <Text textStyle='h3' as='h3' flex='1 1 50%'>
            Instagram communication strategy for Lifestyle coaching.
          </Text>
          <Text
            textStyle='p'
            as='p'
            textDecoration={"underline"}
            flex='1 1 50%'
          >
            <Link to='https://www.behance.net/gallery/139059395/Lifestyle-coaching-Intagram-grid-posts'>
              Full project on Be
              <ExternalLinkIcon w={4} h={4} />
            </Link>
          </Text>
        </Flex>
      </Box>{" "}
      {/* Project Mini2 */}
      <Box margin={"1rem 0 2rem"}>
        <Image src={IMAGES.other.branding2} alt='project3' />
        <Flex
          gap={{ base: "0", sm: "2rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          <Text textStyle='h3' as='h3' flex='1 1 50%'>
            Brand Identity, socials, and website for NGO.
          </Text>
          <Text
            textStyle='p'
            as='p'
            textDecoration={"underline"}
            flex='1 1 50%'
          >
            <Link to='https://www.behance.net/gallery/111510109/Brand-Identity-Social-and-Web'>
              Full project on Be
              <ExternalLinkIcon w={4} h={4} />
            </Link>
          </Text>
        </Flex>
      </Box>
      {/* Project Mini3 */}
      <Box margin={"1rem 0 2rem"}>
        <Image src={IMAGES.other.branding3} alt='project4' />
        <Flex
          gap={{ base: "0", sm: "2rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          <Text textStyle='h3' as='h3' flex='1 1 50%'>
            Key visuals & Branding for youth center.
          </Text>
          <Text
            textStyle='p'
            as='p'
            textDecoration={"underline"}
            flex='1 1 50%'
          >
            <Link to='https://www.behance.net/gallery/119500987/Youth-center-visual-identity'>
              Full project on Be
              <ExternalLinkIcon w={4} h={4} />
            </Link>
          </Text>
        </Flex>
      </Box>
      {/* Project Mini4 */}
      <Box margin={"1rem 0 2rem"}>
        <Image
          src={IMAGES.other.branding4}
          className='projectImgSm'
          alt='project5'
        />
        <Flex
          gap={{ base: "0", sm: "2rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          <Text textStyle='h3' as='h3' flex='1 1 50%'>
            Responsive brand for house of holistic therapy.
          </Text>
          <Text
            textStyle='p'
            as='p'
            textDecoration={"underline"}
            flex='1 1 50%'
          >
            <Link to='https://www.behance.net/gallery/92450313/Responsive-Branding'>
              Full project on Be <ExternalLinkIcon w={4} h={4} />
            </Link>
          </Text>
        </Flex>
      </Box>
      <Divider m='2rem 0' w='100%' opacity='1' border-bottom-width='3px' />
      {/* Heading Footer Prefooter */}
      <Flex
        mt={{ base: "2rem", sm: "4rem" }}
        direction={{ base: "column", sm: "row" }}
        justifyContent='space-between'
      >
        <Text textStyle='h2' as='h2'>
          Visit the&nbsp;
          <Link href='/gallery' textDecoration={"underline"}>
            Gallery
          </Link>{" "}
          for more Visual work, and please don&apos;t hesitate to get in touch!
          <Link href='/gallery'>&#8600;</Link>
        </Text>
        <LinkRouter to='/gallery'>
          <Image
            m={{ base: "0 auto", sm: "0 0 0 auto" }}
            width={"70%"}
            src={IMAGES.other.footergallerybg730}
            alt='a collage of vertical stripes of works'
          />
        </LinkRouter>
      </Flex>
    </>
  );
}
