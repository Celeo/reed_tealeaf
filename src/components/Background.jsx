import React from 'react'
import PropTypes from 'prop-types'

export const Background = (props) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Background
        </span>
        <div className="row">
          <div className="col s12 m6">
            <p><b>{ props.background.choice }</b></p>
            <ul className="normal-ul push-right">
              { props.background.quotes.map(q => <li key={q}>{ q }</li>) }
            </ul>
          </div>
          <div className="col s12 m6">
            <p><b>Languages</b></p>
            <ul className="normal-ul push-right">
              { props.languages.map(l => <li key={l}>{ l }</li>) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Background.propTypes = {
  background: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired
}
