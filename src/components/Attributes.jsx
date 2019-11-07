import React from 'react'
import PropTypes from 'prop-types'
import { attributeModifier } from '../systemRules.js'

export const Attributes = (props) => {
  const getMod = (value) => {
    const mod = attributeModifier(value)
    return mod < 0 ? mod : `+${mod}`
  }

  const hasSave = (name) => {
    return props.saves.indexOf(name) !== -1 ? 'X' : ''
  }

  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Attributes
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Mod</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strength</td>
              <td>{ props.attributes.Strength }</td>
              <td>{ getMod(props.attributes.Strength) }</td>
              <td>{ hasSave('Strength') }</td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>{ props.attributes.Dexterity }</td>
              <td>{ getMod(props.attributes.Dexterity) }</td>
              <td>{ hasSave('Dexterity') }</td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>{ props.attributes.Constitution }</td>
              <td>{ getMod(props.attributes.Constitution) }</td>
              <td>{ hasSave('Constitution') }</td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>{ props.attributes.Intelligence }</td>
              <td>{ getMod(props.attributes.Intelligence) }</td>
              <td>{ hasSave('Intelligence') }</td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>{ props.attributes.Wisdom }</td>
              <td>{ getMod(props.attributes.Wisdom) }</td>
              <td>{ hasSave('Wisdom') }</td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>{ props.attributes.Charisma }</td>
              <td>{ getMod(props.attributes.Charisma) }</td>
              <td>{ hasSave('Charisma') }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Attributes.propTypes = {
  attributes: PropTypes.object.isRequired,
  saves: PropTypes.array.isRequired
}
