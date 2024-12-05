import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"

export default function Home({ data }) {
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

      </div>
    </Layout>
  )
}
