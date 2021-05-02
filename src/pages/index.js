import * as React from "react";
import Layout from "../components/layout"
import { BsArrowRight } from "react-icons/bs";
import "../css/index.css"

const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 8,
  maxWidth: 320,
};

const subtitle = {
  marginTop: 0,
  marginBottom: 0,
  fontWeight: "normal"
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  marginTop: 16,
  maxWidth: 320,
}

const listElem = {
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
}

// markup
const IndexPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <title>Thomas Raout</title>
      <h1 style={headingStyles}>Thomas Raout</h1>
      <h3 style={subtitle}>26 ans, Paris</h3>
      <h3 style={subtitle}>Développeur full-stack</h3>
      <h3 style={subtitle}>Go, Typescript, Linux</h3>
      <div style={listContainer}>
        <div style={listElem} ><BsArrowRight/><div className="text"><a href="https://github.com/tom-rt" target="blank">Github</a></div></div>
        <div style={listElem} ><BsArrowRight/><div className="text"><a href="mailto:thomraout@gmail.com" target="blank">Mail</a></div></div>
        <div style={listElem}><BsArrowRight/><div className="text"> <a href="https://www.linkedin.com/in/thomas-raout-1a03b0b6/" target="blank">LinkedIn</a></div></div>
      </div>
    </main>
    </Layout>
  );
};

export default IndexPage;
