<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">account_circle</i>
        Overview
      </span>
      <table class="table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{{ overview.name }}</td>
          </tr>
          <tr>
            <th>Race</th>
            <td>{{ overview.race }}</td>
          </tr>
          <tr>
            <th>Class</th>
            <td>{{ overview.class }}</td>
          </tr>
          <tr>
            <th>Level</th>
            <td>{{ overview.level }}</td>
          </tr>
          <tr>
            <th>Prof. Bonus</th>
            <td>{{ proficiencyBonus() }}</td>
          </tr>
          <tr>
            <th>Max Health</th>
            <td>{{ overview.maxHealth }}</td>
          </tr>
          <tr>
            <th>Hit Die</th>
            <td>{{ overview.hitDie }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { proficiencyBonus } from '@/systemRules'

export default {
  props: {
    overview: {
      type: Object,
      required: true
    }
  },
  methods: {
    proficiencyBonus () {
      const bonus = proficiencyBonus(this.overview.level)
      return `+${bonus}`
    }
  }
}
</script>
