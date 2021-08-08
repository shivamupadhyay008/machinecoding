import { Box, Flex } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export function Navbar() {
  return (
    <Box background="skyblue" p="1rem">
      <Flex justifyContent="space-between">
        <Box fontSize="1.3rem" fontWeight="bold" color="blue">
          Products listing
        </Box>
        <Box>
          <Button colorScheme="blue">cart</Button>
        </Box>
      </Flex>
    </Box>
  );
}
