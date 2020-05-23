import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfo from "../components/Reusable/DualInfo"
import Coursecart from "../components/cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title = "I Write Code"
    subtitile = "Learncodeonline.in"
    heroclass = "hero-bg"
    />
    <Infoblock heading ="About Us" />
    <Coursecart courses = {data.mycourses} />
    <DualInfo heading="Our Team" />
  </Layout> 
)

export const query = graphql `
{
    img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  mycourses:allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width: 200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
