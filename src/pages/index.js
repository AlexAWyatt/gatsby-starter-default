// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p><Link to="/receptionist_ui">Receptionist UI</Link></p>
      <p><Link to="/dentist-hygienist_ui">Dentist/Hygienist UI</Link></p>
      <p><Link to="/patient_ui">Patient UI</Link></p>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage