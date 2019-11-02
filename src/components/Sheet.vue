<template>
  <div id="character_sheet">
    <div class="row">
      <div class="col s12 m6">
        <Overview />
      </div>
      <div class="col s12 m6">
        <Background />
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <Attributes />
      </div>
      <div class="col s12 m6">
        <Skills />
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <Equipment />
      </div>
      <div class="col s12 m6">
        <Abilities />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Spells />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <LifeEvents />
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
  }
}
</script>

<style>
.normal-ul li {
  list-style-type: circle !important;
}

.push-right {
  margin-left: 1.5rem;
}
</style>
