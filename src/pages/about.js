import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="About Gatsvy" bollos="Bollos"/>
        <Header bollos="bollos 2nd header"/>
        <p>Such wow. Very React.</p>
    </div>
  )
}