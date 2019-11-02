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
            <td>{{ attributes.Strength }}</td>
            <td>{{ attributes.Strength | mod }}</td>
            <td>{{ hasSave('Strength') }}</td>
          </tr>
          <tr>
            <td>Dexterity</td>
            <td>{{ attributes.Dexterity }}</td>
            <td>{{ attributes.Dexterity | mod }}</td>
            <td>{{ hasSave('Dexterity') }}</td>
          </tr>
          <tr>
            <td>Constitution</td>
            <td>{{ attributes.Constitution }}</td>
            <td>{{ attributes.Constitution | mod }}</td>
            <td>{{ hasSave('Constitution') }}</td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td>{{ attributes.Intelligence }}</td>
            <td>{{ attributes.Intelligence | mod }}</td>
            <td>{{ hasSave('Intelligence') }}</td>
          </tr>
          <tr>
            <td>Wisdom</td>
            <td>{{ attributes.Wisdom }}</td>
            <td>{{ attributes.Wisdom | mod }}</td>
            <td>{{ hasSave('Wisdom') }}</td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td>{{ attributes.Charisma }}</td>
            <td>{{ attributes.Charisma | mod }}</td>
            <td>{{ hasSave('Charisma') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { attributeModifier } from '@/systemRules'

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
