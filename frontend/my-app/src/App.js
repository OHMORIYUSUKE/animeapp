import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hello from "./Pages/Hello";
import Changed from "./Pages/Changed";
import NotFound from "./components/NotFound";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/changed" component={Changed} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
