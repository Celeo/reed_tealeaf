<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">art_track</i>
        Background
      </span>
      <p><b>{{ background.choice }}</b></p><br />
      <p v-for="(quote, index) in background.quotes" :key="index">"{{ quote }}"</p>
      <br />
      <p><b>Languages</b></p>
      <ul class="normal-ul push-right">
        <li v-for="(language, index) in languages" :key="index">{{ language }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: Object,
      required: true
    },
    languages: {
      type: Array,
      required: true
    }
  }
}
</script>
