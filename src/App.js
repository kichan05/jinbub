import {GlobalStyle} from "./style/GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React from "react";
import {UiContextProvider} from "./context/UiReducer";
import Page from "./page/Page";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Analytics/>
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          <Header/>
          <Page/>
          <Footer/>
          <UiSection/>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
