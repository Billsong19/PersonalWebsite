import { intersection, toInteger } from "lodash"
import React from "react"
import ReactDOM from "react-dom"
import Layout from "../components/layout"
type props404 = {
  message: String
  ting?: number
}
export default function Page404({
  message = "Oops, you've misstepped. Use the bar on top to find yourself.",
}: props404) {
  return (
    <Layout>
      <h1>Error 404: Page Not Found!</h1>
      <p>{message}</p>
    </Layout>
  )
}
