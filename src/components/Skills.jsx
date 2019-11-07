import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { allSkills } from '../systemRules.js'

const linkedAttribute = (name) => {
  const matching = allSkills.find(s => s.name === name)
  return matching ? matching.attribute : 'unknown'
}

export const Skills = (props) => {
  const [showAll, setShowAll] = useState(false)
  const skillsToShow = showAll ? allSkills.map(s => s.name) : props.skills
  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <div className="clearfix">
          <div className="float-left">
            <span className="card-title orange-text">
              { (showAll ? 'All' : 'Proficient') + ' Skills' }
            </span>
          </div>
          <div className="float-right">
            <label>
              <input type="checkbox" className="filled-in" checked={showAll} onChange={() => setShowAll(!showAll)} />
              <span style={{ paddingLeft: '1.8rem' }}>Show All</span>
            </label>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Attribute</th>
              { showAll && <th>Proficient</th> }
            </tr>
          </thead>
          <tbody>
            {
              showAll
                ? skillsToShow.map(s => (
                  <tr key={s}>
                    <td>{ s }</td>
                    <td>{ linkedAttribute(s) }</td>
                    <td>{ props.skills.indexOf(s) !== -1 ? 'X' : '' }</td>
                  </tr>
                ))
                : skillsToShow.map(s => (
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
