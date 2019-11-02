<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">bubble_chart</i>
        Spells
      </span>
      <p><b>Slots</b>: {{ casting.slots }}</p>
      <p><b>Max Prepared</b>: {{ casting.maxPrepared }}</p>
      <p><b>Save DC</b>: {{ casting.saveDC }}</p>
      <p><b>Attack bouns</b>: {{ attackBonus }}</p>
      <hr />
      <p><b>Known</b>: {{ casting.known }}</p><br />
      <div class="row">
        <div class="col s4 m2" v-for="(spells, index) in spells" :key="index">
          <p><b>{{ index | spellLevel }}</b></p>
          <ul class="normal-ul push-right">
            <li
              v-for="(spell, index) in spells"
              :key="index"
              class="spellLink purple-text text-lighten-3"
              @click="triggerPopup(spell)"
            >{{ spell }}</li>
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
import spellData from '@/spellData.json'
import { Modal } from 'materialize-css/dist/js/materialize.min.js'

export default {
  props: {
    spells: {
      type: Array,
      required: true
    },
    casting: {
      type: Object,
      required: true
    }
  },
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
    },
    attackBonus () {
      const bouns = this.casting.attackBonus
      return bouns < 0 ? bouns : `+${bouns}`
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
  },
  filters: {
    spellLevel (level) {
      if (level === 0) {
        return 'Cantrips'
      }
      return level + [
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
  }
}
</script>

<style scoped>
.spellLink {
  cursor: pointer;
}
</style>
