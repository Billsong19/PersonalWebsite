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
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
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