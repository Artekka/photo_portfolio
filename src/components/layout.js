import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import {
    container,
    navLink,
    navLinkItem,
    navLinkText,
    heading,
    footing,
    gridImage,
    siteTitle
} from "./style.module.css"

const Layout = ( {pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {extension: {in: "jpg"}}) {
          edges {
            node {
              name
              extension
              relativePath
            }
          }
        }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (

        <main className={container}>     
            <title>{pageTitle}</title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLink}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>

            <h1 className={heading}>{pageTitle}</h1>
            {children}
            <div className={footing}>
                <div>
                    <p>This is the bottom of the page bwahaha</p>
                </div>
                <div>
                    {/* <p>{data.allFile.edges[0].node.relativePath}</p> */}
                </div>
            </div>
        </main>
        
    )
}

export default Layout