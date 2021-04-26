import * as React from "react";
import Layout from "../components/layout"

// styles
const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <title>Thomas Raout</title>
      <h1 style={headingStyles}>Thomas Raout</h1>
        <div style={listContainer}>
        <div>test</div>
        <div>test</div>
        </div>
    </main>
    </Layout>
  );
};

export default IndexPage;
