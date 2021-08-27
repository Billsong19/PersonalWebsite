import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { GatsbyImage } from "gatsby-plugin-image"

export default function SleepLog({ data }) {
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
        <h1>
          <GatsbyImage
            className="headshot"
            image={data.file.childImageSharp.fixed}
            alt=""
          />
          {"SleepLog (Android)"}
          <a href="https://github.com/Billsong19/SleepLog">
            <FontAwesomeIcon icon={faGithub} size="1.5x" />
          </a>
        </h1>
        <div>
          {
            "SleepLog was born from the unhealthy sleep habits I saw in both my life and my friend's lives.\
                    Made worse by the COVID lockdowns of 2020, I set out to make a sleep assistance app that worked for my use case."
          }
        </div>

        <img
          css={css`
            margin: 0 auto;
            max-width: 500px;
            width: 200px;
            padding-top: ${rhythm(1)};
            padding-botom: ${rhythm(1)};
            padding-right: ${rhythm(1)};
          `}
          src="https://raw.githubusercontent.com/Billsong19/SleepLog/master/demo-images/main-menu.jpg"
          alt="main menu"
        />

        <img
          css={css`
            margin: 0 auto;
            max-width: 500px;
            width: 200px;
            padding-top: ${rhythm(1)};
            padding-botom: ${rhythm(1)};
            padding-left: ${rhythm(1)};
          `}
          src="https://raw.githubusercontent.com/Billsong19/SleepLog/master/demo-images/sleep-log.jpg"
          alt="main menu"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "Sleep-LogIcon.png" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
