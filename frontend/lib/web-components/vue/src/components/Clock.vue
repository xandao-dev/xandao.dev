<template>
  {{ currentDateTime }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

let currentDateTime = ref(new Date())

setInterval(() => {
  currentDateTime.value = new Date()
})
</script>