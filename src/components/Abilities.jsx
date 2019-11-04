import React from 'react'
import PropTypes from 'prop-types'

export const Abilities = (props) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Abilities
        </span>
        <p><b>Race</b></p>
        <ul className="normal-ul push-right">
          { props.abilities.race.map(a => <p key={a}>{ a }</p>) }
        </ul>
        <p><b>Class</b></p>
        <ul className="normal-ul push-right">
          { props.abilities.class.map(a => <p key={a}>{ a }</p>) }
        </ul>
        <p><b>Feats</b></p>
        <ul className="normal-ul push-right">
          { props.abilities.feats.map(a => <p key={a}>{ a }</p>) }
        </ul>
      </div>
    </div>
  )
}

Abilities.propTypes = {
  abilities: PropTypes.object.isRequired
}
