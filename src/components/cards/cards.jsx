import { Box, Image, Flex, Button } from "@chakra-ui/react";
import { useCart } from "../../context/cartcontext";
export function Listcard({product}) {
  const {dispatch}=useCart()
  return (
    <Box w="25%" border="1px solid black">
      <Flex justifyContent="center" flexDirection="column">
        <Image src={product?.image} h="18rem  " />
        <Box textAlign="center">
          <Box fontWeight="bold">{product?.title}</Box>
          <Box h="30px">Rs.{product?.price}</Box>
          <Box h="30px">MRP.{Math.floor(product?.price + (product?.price*10/100))}</Box>
          <Box fontWeight="bold" color="red">
            discount 10%
          </Box>
          <Button
            colorScheme="blue"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            margin="1rem"
          >
            add to cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export function Cartproductis({ product }) {
  const { dispatch } = useCart();
  return (
    <Box w="28%" border="1px solid black">
      <Flex justifyContent="center" flexDirection="column">
        <Image src={product?.image} h="18rem  " />
        <Box textAlign="center">
          <Box fontWeight="bold">{product?.title}</Box>

          <Box h="30px">Rs.{product?.price}</Box>
          <Box h="30px">
            MRP.{Math.floor(product?.price + (product?.price * 10) / 100)}
          </Box>

          <Box fontWeight="bold" color="red">
            discount 10%
          </Box>
          <Box>
            <Button
              colorScheme="blue"
              onClick={() => dispatch({ type: "DEC_CNT", payload: product })}
            >
              -
            </Button>
            <span style={{ margin: "1rem" }}>{product?.qnt}</span>
            <Button
              colorScheme="blue"
              onClick={() => dispatch({ type: "INC_CNT", payload: product })}
            >
              +
            </Button>
          </Box>
          <Button
            mt="1rem"
            colorScheme="green"
            onClick={() => dispatch({ type: "ADD_LATER", payload: product })}
          >
            ADD TO LATER
          </Button>
          <Button
            colorScheme="red"
            onClick={() => dispatch({ type: "REMOVE_CART", payload: product })}
            margin="0.5rem"
          >
            REMOVE FROM CART
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}




export function Cartlater({ product }) {
  const { dispatch } = useCart();
  return (
    <Box w="28%" border="1px solid black">
      <Flex justifyContent="center" flexDirection="column">
        <Image src={product?.image} h="18rem  " />
        <Box textAlign="center">
          <Box fontWeight="bold">{product?.title}</Box>

          <Box h="30px">Rs.{product?.price}</Box>
          <Box h="30px">
            MRP.{Math.floor(product?.price + (product?.price * 10) / 100)}
          </Box>

          <Box fontWeight="bold" color="red">
            discount 10%
          </Box>

          <Button
            mt="1rem"
            colorScheme="green"
            onClick={() => dispatch({ type: "REMOVE_LATER", payload: product })}
          >
            REMOVE FROM LATER
          </Button>

        </Box>
      </Flex>
    </Box>
  );
}