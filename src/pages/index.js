import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {gridImage} from "../components/style.module.css"
import ImageLoader from "../components/imageLoader"

// Define components

const IndexPage = () => {
	return (
		<Layout pageTitle="Home">
			<ImageLoader />
		</Layout>
	)
}


// Spit this ish out

export default IndexPage
