<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">build</i>
        Skills
      </span>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Attribute</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(skill, index) in allSkills" :key="index">
            <td>{{ skill.name }}</td>
            <td>{{ skill.attribute }}</td>
            <td>{{ hasSkill(skill.name) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { allSkills } from '@/system'

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
    hasSkill (name) {
      return this.skills.indexOf(name.toLowerCase()) !== -1 ? 'X' : ''
    }
  }
}
</script>
