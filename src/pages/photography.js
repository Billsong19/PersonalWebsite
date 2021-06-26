import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

export default function Photography({data}) {
    console.log(data)
    return (
        
        <Layout>
            <SimpleReactLightbox>
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
           
      
     
            <div
                css={css`
                  column-count: 3;
                  height: 100%;
                  overflow:visible;
                  @media (max-width: 800px) {
                      column-count: 2;

                  }
                  @media (max-width: 600px) {
                      column-count: 1;
                  }
                `}>
                    
                <SRLWrapper options={options}>
                    {data.allFile.edges.map(({ node }, index) => (
                      <Img
                        
                        key={node.childImageSharp.fluid.src}
                        fluid={node.childImageSharp.fluid}
                        
                        css={css`
                            margin-bottom: 1em;
                            -webkit-column-break-inside: avoid;
                            page-break-inside: avoid;
                            break-inside: avoid;
                        }
                        `}
                      />
                    ))}
                </SRLWrapper>
            </div>
             
            </SimpleReactLightbox>
        </Layout>
    ) 
}

const options = {
    thumbnails: {
      thumbnailsPosition: 'left',
      thumbnailsSize: ['100px', '80px']
    },
    settings: {
        overlayColor: 'rgba(250,235,215,0.9)'
    }
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
            fluid (maxWidth: 2000, quality: 80 ){
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