// import React from "react"
// import { Link } from "gatsby"
// import Header from "../components/header"
// import Layout from "../components/layout"

// export default function About() {
//   return (
//     <Layout>
//         <Link to="/contact/">Contact</Link>
//         <Header headerText="About Gatsvy" bollos="Bollos"/>
//         <Header bollos="bollos 2nd header"/>
//         <p>Such wow. Very React.</p>
//     </Layout>
//   )
// }

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About Me</h1>
      <div>{"Welcome to my site, I'm Bill Song. I'm a Software Engineering student at the University of Auckland\
, and I made this website to give an overview of some the programming and photography I get up to in my spare time."}</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`