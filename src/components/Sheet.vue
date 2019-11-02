<template>
  <div id="character_sheet">
    <div class="row">
      <div class="col s12 m6">
        <Overview :overview="characterData.overview" />
      </div>
      <div class="col s12 m6">
        <Background :background="characterData.background" :languages="characterData.languages" />
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <Attributes :attributes="characterData.attributes" :saves="characterData.saves" />
      </div>
      <div class="col s12 m6">
        <Skills :skills="characterData.skills" />
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <Equipment :equipment="characterData.equipment" />
      </div>
      <div class="col s12 m6">
        <Abilities :abilities="characterData.abilities" />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Spells :spells="characterData.spells" :casting="characterData.casting" />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <LifeEvents :lifeEvents="characterData.lifeEvents" />
      </div>
    </div>
  </div>
</template>

<script>
import Overview from '@/components/Overview'
import Background from '@/components/Background'
import Attributes from '@/components/Attributes'
import Skills from '@/components/Skills'
import Equipment from '@/components/Equipment'
import Abilities from '@/components/Abilities'
import Spells from '@/components/Spells'
import LifeEvents from '@/components/LifeEvents'

export default {
  components: {
    Overview,
    Background,
    Attributes,
    Skills,
    Equipment,
    Abilities,
    Spells,
    LifeEvents
  },
  props: {
    characterData: {
      type: Object,
      required: true
    }
  }
}
</script>
