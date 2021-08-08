import { Cartproductis, Cartlater } from "../";
import { Flex, Button, Box } from "@chakra-ui/react";
import { useCart } from "../../context/cartcontext";
import { useState } from "react";
export function Cart() {
  const [showCart, setShowCart] = useState("cart");
  const { state, dispatch } = useCart();
  let mrp=0,total=0;
  state.cart.forEach(item =>{
    mrp+=item.price+(item.price*10/100)
  total += item.price;
  } )
  return (
    <div>
      <div style={{margin:"2rem"}}>
        <Box fontWeight="bold " fontSize="1.4rem" textAlign="center">
          {showCart === "cart"
            ? `CART ${state?.cart?.length}`
            : `SAVED FOR LATER ${state?.later?.length}`}
        </Box>
        <Box float="right" mr="1rem">
          <Button
            m="0.5rem"
            colorScheme="green"
            onClick={() => setShowCart("cart")}
          >
            Cart
          </Button>
          <Button colorScheme="blue" onClick={() => setShowCart("later")}>
            For Later
          </Button>
        </Box>
      </div>
      <div>
        {showCart === "cart" ? (
          <div>
            <Flex justifyContent="center">
              <Box>
                <Box> MRP:- {Math.floor(mrp)}</Box>
                <Box fontWeight="bold" color="red">
                  discount 10%
                </Box>
                <Box>price {Math.floor(total)}</Box>
                <Box fontWeight="bold"  >total price {Math.floor(total)}</Box>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" flex="50%">
              {state.cart.length > 0 &&
                state?.cart?.map((item) => (
                  <Cartproductis key={item.description} product={item} />
                ))}
            </Flex>
          </div>
        ) : (
          <></>
        )}
        {showCart !== "cart" ? (
          <Flex flexWrap="wrap" flex="50%">
            {state.later.length > 0 &&
              state?.later?.map((item) => (
                <Cartlater key={item.description} product={item} />
              ))}
          </Flex>
        ) : (
          <></>
        )}
      </div>
      <Flex flex="200px" flexWrap="wrap" gap="10px"></Flex>
    </div>
  );
}
