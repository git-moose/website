import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from "gatsby";

export const Avatar = function () {
    const data = useStaticQuery(graphql`query MyQuery {
        file(relativePath: {eq: "beach.png"}) {
            id
            childImageSharp {
                gatsbyImageData(quality: 85, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
            }
        }
    }`);

    const style = {
        'borderRadius': '50%'
    };

    return (
        <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            imgStyle={style}
            alt="Brendan Heussler"/>
    );
}