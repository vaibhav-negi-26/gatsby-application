import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfo from "../components/Reusable/DualInfo"
import Teamcard from "../components/About/Teamcard"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title = "Services"
    subtitile = ""
    heroclass = "about-bg"
    />
    <Teamcard />
    <DualInfo heading="A Message from CEO" />
    <Infoblock heading="About Vision" />
  </Layout> 
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png" }) {
  childImageSharp {
    fluid(quality: 90, maxWidth: 1920) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}
`
export default AboutPage
