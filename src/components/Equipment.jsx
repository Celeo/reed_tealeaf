import React from 'react'
import PropTypes from 'prop-types'

export const Equipment = (props) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Equipment
        </span>
        <p><b>Gold</b>: { props.equipment.gold }</p>
        <ul className="normal-ul push-right">
          { props.equipment.items.map(i => <p key={i}>{ i }</p>) }
        </ul>
      </div>
    </div>
  )
}

Equipment.propTypes = {
  equipment: PropTypes.object.isRequired
}
