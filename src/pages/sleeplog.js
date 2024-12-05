import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function SleepLog({ data }) {
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
          <img
            className="headshot"
            // image={data.file.childImageSharp.fixed}
            alt=""
          />
          {"SleepLog (Android)"}
          <a href="https://github.com/Billsong19/SleepLog">
            <FontAwesomeIcon icon={faGithub} size="1.5x" />
          </a>
        </h1>
        <div>
          <p>
            SleepLog was born from the unhealthy sleep habits I saw in both my
            life and my friend's lives. Made worse by the COVID lockdowns of
            2020, I set out to make a sleep assistance app that worked for my
            use case.
          </p>
          <p>
            I started this about half-way through my first university OOP
            course, and while the Java syntax was familiar, working with a huge
            SDK like the Java Android SDK came with quite the learning curve. It
            was my first time conceiving an idea from scratch, so I learnt XML
            and some CSS to put together the GUI. In my migration to an SQLite
            database, I also had to learn some SQL.
          </p>
          <p>
            Currently I'm in the process of migrating the view controller
            architecture, to clean up some of the technical debt I've
            accumulated on that front. After that, the graphs and data
            visualisations will be ready to throw in!
          </p>
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

// export const query = graphql`
//   query {
//     file(
//       sourceInstanceName: { eq: "assets" }
//       relativePath: { eq: "Sleep-LogIcon.png" }
//     ) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
// `
