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
            "I'm Bill Song. I'm based in the beautiful town of Wanaka, New Zealand. I love technology(not all technology though), snowboarding, music, photography, cool looking mountains, \
            cool looking clouds, acquiring ancestral knowledge, and daydreaming. This website serves as a scrapbook \
            and sandbox of sorts for various pursuits and various programming projects. \
            Have a look at my photography I think it's quite neat!"
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
