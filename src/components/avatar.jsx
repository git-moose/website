import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: {eq: "bush_trim.png"}) {
                id
                childImageSharp {
                    fixed(quality: 85, width: 200, height: 200) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);

    const style = {
      'border-radius': '50%'
    };

    return (
        <Img fixed={data.file.childImageSharp.fixed} imgStyle={style} alt="Brendan Heussler"/>
    )
}