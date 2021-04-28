import * as React from "react";
import Layout from "../components/layout"
import { BsArrowRight } from "react-icons/bs";
import "../css/index.css"

// styles
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
      <h3 style={subtitle}>Développeur full-stack, Go, Typescript, Linux</h3>
      <div style={listContainer}>
        <div style={listElem} ><BsArrowRight/><div className="text">Code</div></div>
        <div style={listElem}><BsArrowRight/><div className="text">Mail</div></div>
        <div style={listElem}><BsArrowRight/><div className="text">CV</div></div>
      </div>
    </main>
    </Layout>
  );
};

export default IndexPage;
