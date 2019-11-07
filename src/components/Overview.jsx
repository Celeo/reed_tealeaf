import React from 'react'
import PropTypes from 'prop-types'
import { proficiencyBonus } from '../systemRules.js'

export const Overview = (props) => {
  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Overview
        </span>
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{ props.overview.name }</td>
            </tr>
            <tr>
              <th>Race</th>
              <td>{ props.overview.race }</td>
            </tr>
            <tr>
              <th>Class</th>
              <td>{ props.overview.class }</td>
            </tr>
            <tr>
              <th>Level</th>
              <td>{ props.overview.level }</td>
            </tr>
            <tr>
              <th>Proficiency Bonus</th>
              <td>{ `+${proficiencyBonus(props.overview.level)}` }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Overview.propTypes = {
  overview: PropTypes.object.isRequired
}
