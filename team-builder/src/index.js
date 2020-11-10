import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Styled, { ThemeProvider } from 'styled-components';
import theme from './theme'

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
