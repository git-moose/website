import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: {eq: "beach.png"}) {
                id
                childImageSharp {
                    fluid(quality: 85) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const style = {
      'borderRadius': '50%'
    };

    return (
        <Img fluid={data.file.childImageSharp.fluid} imgStyle={style} alt="Brendan Heussler"/>
    )
}