import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Top from "./Pages/Top";
import View from "./Pages/View";
import NotFound from "./Pages/NotFound";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const history = useHistory();
  return (
    <ChakraProvider>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/anime/:name" render={() => <View />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
