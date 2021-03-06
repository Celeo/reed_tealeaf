import React from 'react'
import PropTypes from 'prop-types'

export const LifeEvents = (props) => {
  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Life Events
        </span>
        <ul className="normal-ul push-right">
          { props.lifeEvents.map(e => <li key={e}>{ e }</li>) }
        </ul>
      </div>
    </div>
  )
}

LifeEvents.propTypes = {
  lifeEvents: PropTypes.array.isRequired
}
