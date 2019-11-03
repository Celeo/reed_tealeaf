<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">collections</i>
        Abilities
      </span>
      <p><b>Race</b></p>
      <ul class="normal-ul push-right">
        <li v-for="(ability, index) in abilities.race" :key="index">{{ ability }}</li>
      </ul>
      <p><b>Class</b></p>
      <ul class="normal-ul push-right">
        <li v-for="(ability, index) in abilities.class" :key="index">{{ ability }}</li>
      </ul>
      <p><b>Feats</b></p>
      <ul class="normal-ul push-right">
        <li v-for="(ability, index) in abilities.feats" :key="index">{{ ability }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abilities: {
      type: Object,
      required: true
    }
  }
}
</script>
