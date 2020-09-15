import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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

        padding: ${rhythm(0.5)};
        padding-top: ${rhythm(1)};
        
      `}
    >

      <div>
      <Link to={`/`}>
        <h1
          css={css`
            margin-bottom: ${rhythm(1)};
            display: inline-block;
            font-style: normal;
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
      <Link to="https://www.linkedin.com/in/bill-song-812500113/">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </Link>

      </div>
    </div>
  )
}