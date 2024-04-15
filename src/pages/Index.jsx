import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <VStack spacing={8} align="center" py={12}>
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTMxODc5MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Polk" />
        <Heading as="h1" size="2xl">
          James Polk
        </Heading>
        <Text fontSize="xl" color="gray.500">
          Software Engineer & Tech Enthusiast
        </Text>

        <HStack spacing={4}>
          <Link href="https://linkedin.com" isExternal>
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
          <Link href="https://github.com" isExternal>
            <Button colorScheme="gray" leftIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
        </HStack>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">Hi there! I'm James, a passionate software engineer with over 5 years of experience building web applications. I specialize in JavaScript, React, and Node.js. I love tackling complex problems and creating elegant, user-friendly solutions.</Text>
        </Box>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={8} align="start">
            <Box>
              <Heading as="h3" size="lg">
                Project 1
              </Heading>
              <Text>Description of project 1 goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Project 2
              </Heading>
              <Text>Description of project 2 goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Project 3
              </Heading>
              <Text>Description of project 3 goes here.</Text>
            </Box>
          </VStack>
        </Box>

        <Box maxW="3xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Get In Touch
          </Heading>
          <Text fontSize="lg">I'm always excited to connect with fellow developers and collaborate on interesting projects. Feel free to reach out to me on social media or send me an email at james.polk@example.com.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
