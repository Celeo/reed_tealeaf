import React from 'react'
import PropTypes from 'prop-types'

export const Background = (props) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Background
        </span>
        <p><b>{ props.background.choice }</b></p><br />
        { props.background.quotes.map(q => <p key={q}>{ q }</p>) }
        <br />
        <p><b>Languages</b></p>
        <ul className="normal-ul push-right">
          { props.languages.map(l => <p key={l}>{ l }</p>) }
        </ul>
      </div>
    </div>
  )
}

Background.propTypes = {
  background: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired
}
