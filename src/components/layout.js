import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
    }}
  >
    <Link to={props.to} style={{ textShadow: "none", backgroundImage: "none" }}>
      {props.children}
    </Link>
  </li>
)

const ListExtLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link href={props.href} style={{ backgroundImage: `none` }}>
      {props.children}
    </Link>
  </li>
)

//functional component, wrap all pages on the website with layout.
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    //entire site wrapper
    <div
      css={css`
        margin: 0 auto;

        padding: ${rhythm(0.5)};
        padding-top: ${rhythm(1)};
      `}
    >
      {/* top nav bar */}
      <div
        id="topnavbar"
        css={css`
          display: inline-block;
          font-style: normal;
          text-shadow: none;
          width: 100%;
        `}
      >
        <Link
          to={`/`}
          css={css`
            float: left;
            background-image: none;
          `}
        >
          <h1
            css={css`
              margin-top: 0;
            `}
          >
            {data.site.siteMetadata.title}
          </h1>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/photography/">Photography</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </div>

      {children}

      <div
        css={css`
          margin: 0 auto;
          max-width: 1000px;
          padding-top: ${rhythm(1)};

          float: left;
        `}
      >
        <ul style={{ listStyle: `none`, float: `left` }}>
          <ListExtLink href="https://www.linkedin.com/in/bill-song-812500113/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </ListExtLink>
          <ListExtLink href="https://github.com/Billsong19/">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </ListExtLink>
        </ul>
      </div>
    </div>
  )
}
