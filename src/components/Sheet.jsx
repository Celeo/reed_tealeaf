import React from 'react'
import PropTypes from 'prop-types'

import { Overview } from './Overview.jsx'
import { Health } from './Health.jsx'
import { Background } from './Background.jsx'
import { Attributes } from './Attributes.jsx'
import { Skills } from './Skills.jsx'
import { Equipment } from './Equipment.jsx'
import { Abilities } from './Abilities.jsx'
import { Spells } from './Spells.jsx'
import { LifeEvents } from './LifeEvents.jsx'
import { Familiar } from './Familiar.jsx'

export const Sheet = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col s6 m4">
          <Overview overview={props.characterData.overview} />
        </div>
        <div className="col s6 m3">
          <Health health={props.characterData.health} />
        </div>
        <div className="col s6 m5">
          <Background background={props.characterData.background} languages={props.characterData.languages} />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <Attributes attributes={props.characterData.attributes} saves={props.characterData.saves} />
        </div>
        <div className="col s12 m6">
          <Skills skills={props.characterData.skills} />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <Equipment equipment={props.characterData.equipment} />
        </div>
        <div className="col s12 m6">
          <Abilities abilities={props.characterData.abilities} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <Spells spells={props.characterData.spells} casting={props.characterData.casting} />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <LifeEvents lifeEvents={props.characterData.lifeEvents} />
        </div>
        <div className="col s12 m6">
          <Familiar familiar={props.characterData.familiar} />
        </div>
      </div>
    </div>
  )
}

Sheet.propTypes = {
  characterData: PropTypes.object.isRequired
}
