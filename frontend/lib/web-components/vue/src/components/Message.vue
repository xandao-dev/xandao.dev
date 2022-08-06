<template>
  <div>
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: 'Hello World',
  }
});
</script>