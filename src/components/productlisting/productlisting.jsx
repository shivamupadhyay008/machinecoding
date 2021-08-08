import { Listcard } from "../";
import data from "../../data.json"
import {Flex} from "@chakra-ui/react"
import { useCart } from "../../context/cartcontext";
export function Productlisting() {
  const ss=useCart()
  console.log(ss)
    return (
    <div>
      <Flex flex="200px" flexWrap="wrap" gap="10px">
        {data&&data?.products.map((item) => (
          <Listcard key={item.description} product={item} />
        ))}
      </Flex>
    </div>
  );
}
