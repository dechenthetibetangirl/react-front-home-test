import { StrictMode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <App />
      </ChakraProvider>
    </StrictMode>
  );
