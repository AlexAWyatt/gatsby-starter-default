import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PatientUI = () => (
  <Layout>
    <Seo title="Patient UI" />
    <h1>Hi from Patient UI</h1>
    <p>Welcome!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PatientUI
