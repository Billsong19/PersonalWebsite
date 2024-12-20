import React, { useEffect, useState, useLocation } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faShuffle } from "@fortawesome/free-solid-svg-icons"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

import { rhythm } from "../utils/typography"

import nicknames from "../../assets/siteAssets/nicknames.json"
import CV from "../../assets/siteAssets/Bill-Song-CV.pdf"
//TODO pull cv dynamically from github
//TODO option to view in both HTML and pdf.

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
    }}
  >
    <Link
      to={props.to}
      href={props.href}
      style={{ textShadow: "none", backgroundImage: "none" }}
    >
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

function getRandNickname() {
  const nicknamesArr = nicknames['nicknames']
  return nicknamesArr[Math.floor(Math.random() * nicknamesArr.length)]
}

//functional component, wrap all pages on the website with layout.
export default function Layout({ children }) {
  const [nickname, setNickName] = useState("Bill")
  const location = useLocation;  // Hook to get the current location
  useEffect(() => {
    setNickName(getRandNickname())
  }, [location])

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
        <div style={{ float: "left", display: "flex" }}>
          <FontAwesomeIcon style={{ height: `${rhythm(1.5)}`, marginRight: `${rhythm(0.5)}` }} icon={faShuffle} onClick={() => { setNickName(getRandNickname()) }}></FontAwesomeIcon>
          <Link
            to={`/`}
            style={{
              backgroundImage: "none"
            }}
          >
            <h1
              style={{ marginTop: 0 }}
            >
              {nickname}
            </h1>
          </Link>
        </div>


        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/photography/">Photography</ListLink>
          {/* <ListLink to="/projects/">Projects</ListLink> */}
          <ListLink href={CV}>CV</ListLink>
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
          <ListExtLink href="mailto: work@billsong.nz">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </ListExtLink>
          <ListExtLink href="https://www.linkedin.com/in/bill-song-812500113/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </ListExtLink>
          <ListExtLink href="https://github.com/Billsong19/">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </ListExtLink>
        </ul>
      </div>
    </div >
  )
}
