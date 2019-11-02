<template>
  <div class="container-large pad-top">
    <Sheet />
  </div>
</template>

<script>
import Sheet from '@/components/Sheet'

export default {
  components: {
    Sheet
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
</style>
