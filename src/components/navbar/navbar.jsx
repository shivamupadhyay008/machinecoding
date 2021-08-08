import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export function Navbar({ setshow }) {
  return (
    <Box background="skyblue" p="1rem">
      <Flex justifyContent="space-between">
        <Box
          fontSize="1.3rem"
          fontWeight="bold"
          color="blue"
          cursor="pointer"
          onClick={() => setshow("home")}
        >
          Products listing
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={() => setshow("cart")}>
            cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
