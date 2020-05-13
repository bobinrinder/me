import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
// import Technologies from "../components/Technologies"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />

      <Hero />

      <About />

      <Work />

      {/* <Technologies /> */}

      <ContactForm />

      <Footer />
    </Layout>
  )
}

export default IndexPage
