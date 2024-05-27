import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, Badge } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">General</Link>
          <Link href="#" color="white">Programming</Link>
          <Link href="#" color="white">Hardware</Link>
          <Link href="#" color="white">Other</Link>
        </HStack>
      </Flex>

      <Flex mt={4}>
        {/* Main Content Area */}
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Discussion Threads</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading size="md">How to learn React?</Heading>
              <Text>by John Doe</Text>
              <HStack justifyContent="space-between">
                <Text>Replies: 10</Text>
                <Text>Last post: 2023-10-01</Text>
              </HStack>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading size="md">Best programming languages in 2023</Heading>
              <Text>by Jane Smith</Text>
              <HStack justifyContent="space-between">
                <Text>Replies: 5</Text>
                <Text>Last post: 2023-09-25</Text>
              </HStack>
            </Box>
            {/* Add more threads as needed */}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} borderLeftWidth="1px">
          <Heading size="md" mb={4}>User Information</Heading>
          <Text>Username: TechGuru</Text>
          <Text>Posts: 120</Text>
          <Text>Joined: 2022-01-15</Text>

          <Heading size="md" mt={8} mb={4}>Popular Tags</Heading>
          <HStack spacing={2} wrap="wrap">
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="green">JavaScript</Badge>
            <Badge colorScheme="red">Hardware</Badge>
            <Badge colorScheme="purple">Python</Badge>
            <Badge colorScheme="orange">CSS</Badge>
            {/* Add more tags as needed */}
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;