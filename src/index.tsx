import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { ColorModeScript } from '@chakra-ui/react';
import ThemeProvider from './theme/'
import theme from './theme/config'

import Router from "./router";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Router />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </BrowserRouter>
  </ThemeProvider>

);

ReactDOM.render(<App />, document.getElementById("root"));
