import React from "react"

import Layout from "../components/layout"
import DataTable from "../components/datatables/DashTable"
import SEO from "../components/seo"

//DATA
import { rows } from "../data/characterDashValues"
const dashDataPage = () => (
  <Layout>
    <SEO title="Character Dash Speeds" />
    <h1>Character Dash Information</h1>
    <DataTable rows={rows} />
  </Layout>
)

export default dashDataPage
