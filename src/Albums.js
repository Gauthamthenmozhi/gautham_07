import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Jonita Gandhi</td>
            <td>Hits</td>
          </tr>
          <tr>
            <td scope='row'>S. P. Balasubrahmanyam</td>
            <td>Melody</td>
          </tr>
          <tr>
            <td scope='row'>Shruti Haasan</td>
            <td>Rap</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}