<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title orange-text">
        <i class="material-icons small">business_center</i>
        Equipment
      </span>
      <p><b>Gold</b>: {{ equipment.gold }}</p>
      <ul class="normal-ul push-right">
        <li v-for="(item, index) in equipment.items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    equipment: {
      type: Object,
      required: true
    }
  }
}
</script>
