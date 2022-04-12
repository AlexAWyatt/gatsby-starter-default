import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ReceptionistUI = () => (
  <Layout>
    <Seo title="Receptionist UI" />
    <h1>Hi from Receptionist UI</h1>
    <p>Welcome!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReceptionistUI
