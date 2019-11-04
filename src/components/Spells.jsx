import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'materialize-css/dist/js/materialize.min.js'
import spellData from '../spellData.json'

const printSpellLevel = (level) => {
  if (level === 0) {
    return 'Cantrips'
  }
  return level + [
    '',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th'
  ][level] + ' level'
}

const getModalRef = () => document.querySelector('#spellModal')

export class Spells extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSpell: null
    }
  }

  componentDidMount () {
    const ref = getModalRef()
    Modal.init(ref)
  }

  triggerPopup (spell) {
    this.setState({ selectedSpell: spell })
    const ref = getModalRef()
    const modal = Modal.getInstance(ref)
    modal.open()
  }

  render () {
    const _ab = this.props.casting.attackBonus
    const attackBonus = _ab < 0 ? _ab : `+${_ab}`
    const selectedSpellInfo = spellData[this.state.selectedSpell] || {
      level: 'unknown',
      school: 'unknown',
      time: 'unknown',
      range: 'unknown',
      components: 'unknown',
      duration: 'unknown',
      description: 'unknown'
    }
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title orange-text">
            <i className="material-icons small">bubble_chart</i>
          Spells
          </span>
          <p><b>Slots</b>: { this.props.casting.slots }</p>
          <p><b>Max Prepared</b>: { this.props.casting.maxPrepared }</p>
          <p><b>Save DC</b>: { this.props.casting.saveDC }</p>
          <p><b>Attack bouns</b>: { attackBonus }</p>
          <hr />
          <p><b>Known</b>: { this.props.casting.known }</p><br />
          <div className="row">
            {
              this.props.spells.map((spellsInLevel, level) => (
                <div className="col s4 m2" key={level}>
                  <p><b>{ printSpellLevel(level) }</b></p>
                  <ul className="normal-ul push-right">
                    {
                      spellsInLevel.map((spell, spellIndex) => (
                        <li
                          key={spellIndex}
                          className="spellLink purple-text text-lighten-3"
                          onClick={() => this.triggerPopup(spell)}
                        >{ spell }</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div id="spellModal" className="modal">
          <div className="modal-content cyan darken-3 white-text">
            <h4>{ this.state.selectedSpell }</h4>
            <div className="row">
              <div className="col s12 m4">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Level</th>
                      <td>{ selectedSpellInfo.level }</td>
                    </tr>
                    <tr>
                      <th>School</th>
                      <td>{ selectedSpellInfo.school }</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>{ selectedSpellInfo.time }</td>
                    </tr>
                    <tr>
                      <th>Range</th>
                      <td>{ selectedSpellInfo.range }</td>
                    </tr>
                    <tr>
                      <th>Components</th>
                      <td>{ selectedSpellInfo.components }</td>
                    </tr>
                    <tr>
                      <th>Duration</th>
                      <td>{ selectedSpellInfo.duration }</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col s12 m8">
                <p style={{ fontSize: '1.2em' }}>{ selectedSpellInfo.description }</p>
              </div>
            </div>
          </div>
          <div className="modal-footer cyan darken-1">
            <a href="#!" className="modal-close btn-flat white-text">Close</a>
          </div>
        </div>
      </div>
    )
  }
}

Spells.propTypes = {
  spells: PropTypes.array.isRequired,
  casting: PropTypes.object.isRequired
}
