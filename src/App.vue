<template>
  <div class="container-large pad-top">
    <Sheet :characterData="characterData" />
  </div>
</template>

<script>
import Sheet from '@/components/Sheet'
import characterData from '@/character_data.json'

export default {
  components: {
    Sheet
  },
  data () {
    return {
      characterData
    }
  }
}
</script>

<style>
.container-large {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.pad-top {
  padding-top: 2rem;
}

.normal-ul li {
  list-style-type: circle !important;
}

.push-right {
  margin-left: 1.5rem;
}
</style>
