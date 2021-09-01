import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"

export default function About({ data }) {
  return (
    <Layout>
      <div
        //margin: auto centers it
        css={css`
          margin: auto;
          max-width: 1000px;
          padding: ${rhythm(2)};
          padding-top: 0;
          padding-botom: ${rhythm(1)};
        `}
      >
        <h1>About Me</h1>
        <div>
          {
            "I'm Bill Song. A 3rd year Software Engineering student at the University of Auckland\
, I made this website to give an overview of some the programming and photography I get up to in my spare time."
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
