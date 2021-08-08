import "./App.css";
import { Navbar, Productlisting, Cart } from "./components";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [show, setshow] = useState("home");
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar setshow={setshow} />
        {show === "home" ? <Productlisting /> : <Cart />}
      </ChakraProvider>
    </div>
  );
}

export default App;
