import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import ThemeOption
  from "../components/themeOption"

export default function Home({ data }) {
  const selectedTheme = localStorage.getItem("theme");

  if (selectedTheme) {
    document
      .querySelector("body")
      .setAttribute("data-theme", selectedTheme);
  }
  return (
    <div id="app-layout">
      <Layout id="app-layout">
        <div className="theme-options">
          <ThemeOption theme="dark" />
          <ThemeOption theme="light" />
          <ThemeOption theme="purple" />
        </div>
        <div
          style={{
            margin: "0 auto",
            // maxWidth: "1000px",
            padding: `${rhythm(1)}`,
            display: "grid"
          }}
        >
          <Link style={{
            width: "fit-content"
          }} to="/about">
            About Me
          </Link>
          <Link style={{
            width: "fit-content"
          }} to="/photography">
            Photography
          </Link>
          <Link style={{
            width: "fit-content"
          }} href="/static/Bill-Song-CV-6258a83cdb7cc3ddb110c95a06c73e49.pdf">
            CV
          </Link>
        </div>
      </Layout>
    </div>
  )
}
