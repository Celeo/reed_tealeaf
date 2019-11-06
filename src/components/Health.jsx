import React from 'react'
import PropTypes from 'prop-types'

export class Health extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentHealth: props.health.maxHealth
    }
  }

  componentDidMount () {
    const fromStorage = window.localStorage.getItem('currentHealth')
    if (fromStorage) {
      this.setState({ currentHealth: parseInt(fromStorage) })
    }
  }

  setHealth (val) {
    const newVal = parseInt(val.target.value)
    this.setState({ currentHealth: newVal })
    window.localStorage.setItem('currentHealth', newVal)
  }

  resetHealth () {
    this.setState({ currentHealth: this.props.health.maxHealth })
    window.localStorage.setItem('currentHealth', this.props.health.maxHealth)
  }

  render () {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title orange-text">
              Health
          </span>
          <table className="table">
            <tbody>
              <tr>
                <th>Hit Die</th>
                <td>{ this.props.health.hitDie }</td>
              </tr>
              <tr>
                <th>Max Health</th>
                <td>{ this.props.health.maxHealth }</td>
              </tr>
              <tr>
                <th>Current Health</th>
                <td>
                  <div className="row valign-wrapper">
                    <div className="col s6">
                      <div className="input-field">
                        <input type="number" className="red-text center-align" value={this.state.currentHealth} onChange={this.setHealth.bind(this)} />
                      </div>
                    </div>
                    <div className="col s6">
                      <button className="btn btn-small blue-grey lighten-1 waves-effect waves-light" onClick={this.resetHealth.bind(this)}>R</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Health.propTypes = {
  health: PropTypes.object.isRequired
}
