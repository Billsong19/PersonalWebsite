import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div
        css={css`
          margin: 0 auto;
          max-width: 1000px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1)};
          padding-botom: ${rhythm(1)};
        `}
      >
        Welcome to my website. Follow the header links to see what I'm up to.
        <br></br>
        The photography page is fully responsive(it works on a phone), but
        projects is not(yet).
      </div>
    </Layout>
  )
}
