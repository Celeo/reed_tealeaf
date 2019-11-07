import React from 'react'
import PropTypes from 'prop-types'

export const Familiar = (props) => {
  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title orange-text">
          Familiar
        </span>
        <div className="row">
          <div className="col s12 m6">
            <table className="table">
              <tbody>
                <tr>
                  <th>Type</th>
                  <td>{ props.familiar.type }</td>
                </tr>
                <tr>
                  <th>AC</th>
                  <td>{ props.familiar.ac }</td>
                </tr>
                <tr>
                  <th>HP</th>
                  <td>{ props.familiar.hp }</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>{ props.familiar.speed }</td>
                </tr>
                <tr>
                  <th>Languages</th>
                  <td>
                    <ul className="normal-ul">
                      {
                        props.familiar.languages.map(e => <li key={e}>{ e }</li>)
                      }
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Skills</th>
                  <td>
                    <ul className="normal-ul">
                      {
                        props.familiar.skills.map(e => <li key={e}>{ e }</li>)
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col s12 m6">
            <table className="table">
              <tbody>
                <tr>
                  <th>Strength</th>
                  <td>{ props.familiar.attributes.Strength }</td>
                </tr>
                <tr>
                  <th>Dexterity</th>
                  <td>{ props.familiar.attributes.Dexterity }</td>
                </tr>
                <tr>
                  <th>Constitution</th>
                  <td>{ props.familiar.attributes.Constitution }</td>
                </tr>
                <tr>
                  <th>Intelligence</th>
                  <td>{ props.familiar.attributes.Intelligence }</td>
                </tr>
                <tr>
                  <th>Wisdom</th>
                  <td>{ props.familiar.attributes.Wisdom }</td>
                </tr>
                <tr>
                  <th>Charisma</th>
                  <td>{ props.familiar.attributes.Charisma }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p><b>Actions</b></p>
        <ul className="normal-ul push-right">
          {
            props.familiar.actions.map(e => <li key={e}>{ e }</li>)
          }
        </ul>
        <p><b>Abilities</b></p>
        <ul className="normal-ul push-right">
          {
            props.familiar.abilities.map(e => <li key={e}>{ e }</li>)
          }
        </ul>
      </div>
    </div>
  )
}

Familiar.propTypes = {
  familiar: PropTypes.object.isRequired
}
