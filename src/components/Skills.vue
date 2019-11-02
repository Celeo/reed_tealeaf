<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">build</i>
        Proficient Skills
      </span>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Attribute</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(skill, index) in skills" :key="index">
            <td>{{ skill }}</td>
            <td>{{ linkedAttribute(skill) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { allSkills } from '@/systemRules'

export default {
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      allSkills
    }
  },
  methods: {
    linkedAttribute (name) {
      const matching = allSkills.find(s => s.name === name)
      return matching ? matching.attribute : 'unknown'
    }
  }
}
</script>
