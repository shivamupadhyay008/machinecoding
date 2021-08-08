import "./App.css";
import { Navbar } from "./components";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </div>
  );
}

export default App;
