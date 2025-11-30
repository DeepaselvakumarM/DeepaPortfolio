import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
