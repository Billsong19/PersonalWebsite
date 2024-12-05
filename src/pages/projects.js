import React, { Component } from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"

import { graphql } from "gatsby"

export default function Projects({ data }) {
  let thmbnails = data.allFile.edges
  const images = []
  for (let i = 0; i < thmbnails.length; i++) {
    if (thmbnails[i].node.extension != "pdf") {
      images.push(thmbnails[i].node.childImageSharp.gatsbyImageData)
    }
  }
  return (
    <Layout>
      <ProjectCard
        destination="/sleeplog/"
        header="SleepLog"
        body="Android app that Logs and visualises sleep data to build and maintain healthy sleep habits."
        img={images[0]}
      />
      <ProjectCard
        destination="/"
        header="Portfolio Website"
        body="You're looking at it right now: A personal portfolio for photography and programming projects."
        img={images[1]}
      />
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allFile(filter: { extension: {}, sourceInstanceName: { eq: "assets" } }) {
//       edges {
//         node {
//           childImageSharp {
//             gatsbyImageData(width: 200)
//           }
//           name
//           extension
//         }
//       }
//     }
//   }
// `
