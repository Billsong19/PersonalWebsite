import React, { Component } from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import { getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

export default function Projects({ data }) {
  // console.log(data)
  let thmbnails = data.allFile.edges
  // console.log(thmbnails)
  const images = []
  for (let i = 0; i < thmbnails.length; i++) {
    if (thmbnails[i].node.extension != "pdf") {
      // console.log("non pdf found at index " + i)
      // console.log(thmbnails[i].node.childImageSharp)
      images.push(thmbnails[i].node.childImageSharp.gatsbyImageData)
    }
  }
  // console.log(images)
  // console.log(images[0])
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

export const query = graphql`
  query {
    allFile(filter: { extension: {}, sourceInstanceName: { eq: "assets" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
          name
          extension
        }
      }
    }
  }
`
