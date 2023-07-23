<template>
  <div class="tableBg bet">
    <div class="outFrame" id="outFrame" @click="outFrame">
      <div v-show="showChip" id="circleBorder" :style="{ top: chipTop, left: chipLeft }"></div>
      <div class="chip" id="chip">chip</div>
      <div class="inFrame up">
        <div class="betCode rightLine" @click="addChip('BP', $event)">BP</div>
        <div class="betCode rightLine" @click="addChip('T', $event)">T</div>
        <div class="betCode" @click="addChip('PP', $event)">PP</div>
      </div>
      <div class="inFrame down">
        <div class="betCode rightLine" @click="addChip('B', $event)">B</div>
        <div class="betCode" @click="addChip('P', $event)">P</div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const showChip = ref(false)
const chipTop = ref(0)
const chipLeft = ref(0)

let count = 0

function outFrame(e) {
  const rect = document.getElementById('outFrame').getBoundingClientRect()
  const circleRect = document.getElementById('circleBorder').getBoundingClientRect()
  console.log('circleRect =', circleRect)
  chipTop.value = `${e.clientY - rect.top - 130/2}px`
  chipLeft.value = `${e.clientX - rect.left - 130/2}px`
  showChip.value = true

  setTimeout(() => {
    showChip.value = false
  }, 500)
}

function addChip(betCode, e) {
  $('.outFrame').append($('#chip').clone().attr("id", `chip_${count}`))

  if (betCode == 'BP') {
    $(`#chip_${count}`).addClass('moveToBP')
  } else if (betCode == 'T') {
    $(`#chip_${count}`).addClass('moveToT')
  } else if (betCode == 'PP') {
    $(`#chip_${count}`).addClass('moveToPP')
  } else if (betCode == 'B') {
    $(`#chip_${count}`).addClass('moveToB')
  } else if (betCode == 'P') {
    $(`#chip_${count}`).addClass('moveToP')
  } else {
    console.log('error in addChop()')
  }
  count++

}
</script>

<style lang="scss">
// Import Main styles for this application
@import "../assets/scss/Bet.scss";
</style>