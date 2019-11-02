<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">child_care</i>
        Life Events
      </span>
      <ul class="normal-ul push-right">
        <li v-for="(event, index) in lifeEvents" :key="index">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lifeEvents: {
      type: Array,
      required: true
    }
  }
}
</script>
