import { Link as LinkType } from "@/types/link";
import {
  Button, Grid, Heading, Icon,
  Link, Stack, Text, VStack
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  GITHUB_PROFILE, TWITCH_CHANNEL,
  TWITTER_PROFILE
} from "src/constants";
import ExternalLink from "../external-link";
import HeroImage from "../hero-image";


type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: TWITTER_PROFILE,
    label: "Twitter",
    color: "twitter",
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
  },
];

const Hero = () => {
  return (
    <Stack
      alignItems="center"
      spacing={12}
      w="full"
      direction={{ base: "column", md: "row" }}
      as="section"
      py={{ base: '0', md: '6rem' }}
    >
      <HeroImage />
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Stack
          spacing={3}
          w="full"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Heading size="3xl" as="h1">
            Dzun Nurroin.
          </Heading>
        </Stack>
        <Text lineHeight="175%" textAlign={{base:"center", md:"start"}} fontSize="lg">
          I’m Frontend Engineer and UI/UX design enthusiast, <ExternalLink href="https://commitdev-id.vercel.app/">Commit Dev</ExternalLink> 
          <strong>core organizer</strong>.
        </Text>
        <Grid gap={{ base: 3, lg: 6 }}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                width={{ base: "100%" }}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              variant="ghost"
              color={color}
              href={href}
              target="_blank"
              px={4}
              justifyContent={{ base: "center", md: "center" }}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              {label}
            </Button>
          ))}
        </Grid>
      </VStack>
    </Stack>
  );
};

export default Hero;
