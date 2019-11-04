import React from 'react'
import PropTypes from 'prop-types'
import { allSkills } from '../systemRules.js'

export const Skills = (props) => {
  const linkedAttribute = (name) => {
    const matching = allSkills.find(s => s.name === name)
    return matching ? matching.attribute : 'unknown'
  }

  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Proficient Skills
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Attribute</th>
            </tr>
          </thead>
          <tbody>
            {
              props.skills.map(s => (
                <tr key={s}>
                  <td>{ s }</td>
                  <td>{ linkedAttribute(s) }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
}
