import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>This is where the contact me will go</h1>
    <p>forms here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
