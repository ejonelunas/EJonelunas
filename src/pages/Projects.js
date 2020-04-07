import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the project page</h1>
    <p>These are all the things Ive been working on in my free time</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
