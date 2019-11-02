<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">accessibility</i>
        Attributes
      </span>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Mod</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strength</td>
            <td>{{ attributes.strength }}</td>
            <td>{{ attributes.strength | mod }}</td>
            <td>{{ hasSave('strength') }}</td>
          </tr>
          <tr>
            <td>Dexterity</td>
            <td>{{ attributes.dexterity }}</td>
            <td>{{ attributes.dexterity | mod }}</td>
            <td>{{ hasSave('dexterity') }}</td>
          </tr>
          <tr>
            <td>Constitution</td>
            <td>{{ attributes.constitution }}</td>
            <td>{{ attributes.constitution | mod }}</td>
            <td>{{ hasSave('constitution') }}</td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td>{{ attributes.intelligence }}</td>
            <td>{{ attributes.intelligence | mod }}</td>
            <td>{{ hasSave('intelligence') }}</td>
          </tr>
          <tr>
            <td>Wisdom</td>
            <td>{{ attributes.wisdom }}</td>
            <td>{{ attributes.wisdom | mod }}</td>
            <td>{{ hasSave('wisdom') }}</td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td>{{ attributes.charisma }}</td>
            <td>{{ attributes.charisma | mod }}</td>
            <td>{{ hasSave('charisma') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { attributeModifier } from '@/system'

export default {
  props: {
    attributes: {
      type: Object,
      required: true
    },
    saves: {
      type: Array,
      required: true
    }
  },
  methods: {
    hasSave (name) {
      return this.saves.indexOf(name) !== -1 ? 'X' : ''
    }
  },
  filters: {
    mod (value) {
      const mod = attributeModifier(value)
      return mod < 0 ? mod : `+${mod}`
    }
  }
}
</script>
