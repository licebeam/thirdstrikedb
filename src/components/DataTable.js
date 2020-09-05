import React, { Component } from "react"

const testData = [
  { key: "test name", values: ["value1", "value2"] },
  { key: "test name2", values: ["value1", "value2"] },
  { key: "test name2", values: ["value1", "value2"] },
  { key: "test name2", values: ["value1", "value2"] },
]
class DataTable extends Component {
  createRows = keys => {
    if (keys) {
      return keys.map(item => {
        return <th>{item.key}</th>
      })
    }
  }

  render() {
    return (
      <table>
        <tr>{this.createRows(testData)}</tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    )
  }
}

export default DataTable
