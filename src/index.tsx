import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import ThemeProvider from './theme/'

import Router from "./router";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>

);

ReactDOM.render(<App />, document.getElementById("root"));
