import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const TeeTimeMobile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "teetime-landing-resized.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  if (!data?.file.childImageSharp?.fluid) {
    if (process.env.NODE_ENV === 'development') {
       throw new Error('Logo image not found')
    };
    return null;
  };

  return <img src={data.file.childImageSharp.fluid.src} aria-hidden={true}/>
};

export default TeeTimeMobile;