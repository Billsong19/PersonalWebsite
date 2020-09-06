import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

import { rhythm } from "../utils/typography"

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
    
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1)};
        padding-botom: ${rhythm(1)};
      `}
    >
      

      <Link to={`/about/`}>
        <h2
          css={css`
            float: right;
          `}
        >
        About
        </h2>
      </Link>
      
      <Link to={`/projects/`}>
        <h2
          css={css`
            float: right;
            margin-right: 20px;
          `}
        >
        Projects
        </h2>
      </Link>

      <Link to={`/photography/`}>
        <h2
          css={css`
            float: right;
            margin-right: 20px;
          `}
        >
        Photography
        </h2>
        <Link to={`/`}>
        <h1
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      </Link>
      {children}

      <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding-top: ${rhythm(1)};
      `}
      >
        <Link to="https://www.linkedin.com/in/bill-song-812500113/">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </Link>
      </div>
    </div>
  )
}