<template>
  <div class="tableBg chips">
    <div v-for="(chip, index) in chipsData" :key="index" class="chip">
      {{ chip }}
    </div>
  </div>
</template>

<script setup>
import { chipsData } from '../assets/FakeData'

console.log('chipsData =', chipsData)
</script>

<style lang="scss">
// Import Main styles for this application
@import "../assets/scss/Chips.scss";
</style>