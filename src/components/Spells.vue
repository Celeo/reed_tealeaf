<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">bubble_chart</i>
        Spells
      </span>
      <p><b>Slots</b>: 1st = 4, 2nd = 3</p>
      <p><b>Max Prepared</b>: 7</p>
      <p><b>Save DC</b>: 13</p>
      <p><b>Attack bouns</b>: +5</p>
      <hr />
      <p><b>Known</b>: Cantrips = 4, 1st = 8, 2nd = 4</p><br />
      <p><b>1st level</b></p>
      <div class="row">
        <div class="col s4 m2">
          <ul class="normal-ul push-right">
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Burning Hands')">Burning Hands</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Color Spray')">Color Spray</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Detect Magic')">Detect Magic</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Find Familiar')">Find Familiar</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Fog Cloud')">Fog Cloud</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Shield')">Shield</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Grease')">Grease</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Witch Bolt')">Witch Bolt</li>
          </ul>
        </div>
        <div class="col s4 m2" href="#spellModal">
          <p><b>2nd level</b></p>
          <ul class="normal-ul push-right">
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Invisibility')">Invisibility</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Web')">Web</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Scorching Ray')">Scorching Ray</li>
            <li class="spellLink purple-text text-lighten-3" @click="triggerPopup('Enlarge/Reduce')">Enlarge/Reduce</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="spellModal" class="modal">
      <div class="modal-content cyan darken-3 white-text">
        <h4>{{ selectedSpell }}</h4>
        <div class="row">
          <div class="col s12 m4">
            <table class="table">
              <tbody>
                <tr>
                  <th>Level</th>
                  <td>{{ selectedSpellInfo.level }}</td>
                </tr>
                <tr>
                  <th>School</th>
                  <td>{{ selectedSpellInfo.school }}</td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>{{ selectedSpellInfo.time }}</td>
                </tr>
                <tr>
                  <th>Range</th>
                  <td>{{ selectedSpellInfo.range }}</td>
                </tr>
                <tr>
                  <th>Components</th>
                  <td>{{ selectedSpellInfo.components }}</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>{{ selectedSpellInfo.duration }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col s12 m8">
            <p style="font-size: 1.2em;">{{ selectedSpellInfo.description }}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer cyan darken-1">
        <a href="#!" class="modal-close btn-flat white-text">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
// TODO
// import caracterData from '@/characterData'

import spellData from '@/spellData.json'
import { Modal } from 'materialize-css/dist/js/materialize.min.js'

export default {
  data () {
    return {
      selectedSpell: null
    }
  },
  computed: {
    selectedSpellInfo () {
      return spellData[this.selectedSpell] || {
        level: 'unknown',
        school: 'unknown',
        time: 'unknown',
        range: 'unknown',
        components: 'unknown',
        duration: 'unknown',
        description: 'unknown'
      }
    }
  },
  mounted () {
    const ref = document.querySelector('#spellModal')
    Modal.init(ref)
  },
  methods: {
    triggerPopup (spell) {
      this.selectedSpell = spell
      const ref = document.querySelector('#spellModal')
      const modal = Modal.getInstance(ref)
      modal.open()
    }
  }
}
</script>

<style scoped>
.spellLink {
  cursor: pointer;
}
</style>
