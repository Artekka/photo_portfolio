import * as React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {img, gridImage} from "../components/style.module.css"

const ImageLoader = () => {
	const data = useStaticQuery(graphql`
    {
      allFile(filter: {extension: {in: "jpg"}}) {
        edges {
          node {
            name
            ext
            id
            publicURL
          }
        }
      }
    }
  `);
  const images = data.allFile.edges;
    return (
        <div className={gridImage}>
            {images.map((image, index) => (
                <div key={`${index}-image`}>
                    <img
                        src={image.node.publicURL}
                        alt="Figure out how to assign alt text to each image individually, idiot!"
				        className={img}
                        />
                </div>
                ))
            }
        </div>
    )
};

export default ImageLoader;