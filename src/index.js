import React from "react";
import {createRoot} from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
// used for Roboto font installation from https://mui.com/material-ui/getting-started/installation/
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


/**
 * This is the entry point of your React application where the root element is in the public/index.html.
 * We call this a “root” DOM node because everything inside it will be managed by React DOM.
 * Applications built with just React usually have a single root DOM node.
 * More: https://react.dev/reference/react-dom/client/createRoot 
 */
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
