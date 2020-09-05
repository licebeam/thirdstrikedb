import React from "react"

import Layout from "../components/layout"
import DataTable from "../components/datatables/HealthTable"
import SEO from "../components/seo"

//DATA
import { rows } from "../data/characterHealthValues"
const testPage = () => (
  <Layout>
    <SEO title="Character Health Values" />
    <h1>Character Health</h1>
    <DataTable rows={rows} />
  </Layout>
)

export default testPage
