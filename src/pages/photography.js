import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Photography({data}) {
    console.log(data)
    return (
        <Layout>
            <h1>
                Hi, these are my photos
            </h1>
            {/* <p>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
            </p> */}
            {/* <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Ngaruhoe"
            /> */}
            <div>
                {data.allFile.edges.map(({ node }, index) => (
              <Img
                key={node.childImageSharp.fluid.src}
                fluid={node.childImageSharp.fluid}
                style={{ margin: '3rem 0' }}
              />
            ))}
            </div>
            
                
        </Layout>
    ) 
}

/* export const query = graphql`
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {}}) {
      edges {
        node {
          relativeDirectory
          name
          relativePath
        }
      }
    }
  }
  ` */
 /*  export const query = graphql`
  {
    file(relativePath: {eq: "dscf1200.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2018, quality: 90){
          base64
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
` */
export const query = graphql`
  {
    allFile(filter: {extension: {regex: "/(jpg)/"}}) {
      edges {
        node {
          childImageSharp {
            fluid (maxWidth: 6240, quality: 100){
              aspectRatio
              originalName
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`