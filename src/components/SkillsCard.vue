<template>
    <div class="skills-card" :class="class">
      <slot class="logo"></slot>
      <div class="text">{{ skill }}</div>
    </div>

</template>
  
<script setup lang="ts">
    defineProps({
        skill: String,
        class: String
    })
</script>
  
<style lang="scss">
  .skills-card {
    display: flex;
    justify-content: center;
    font-size: 6px;
    position: relative;
    margin-left: 2rem;
    .logo {
      margin:auto;
      .orangePicto {
        margin: auto;
      }
    }
    .text {
      font-size: 0.825rem;
      right: -1.2rem;
      top: -0.7rem;
      font-weight: 300;
      margin-top: 10px;
      text-orientation: upright;
      writing-mode: vertical-rl;
      position: absolute;
    }
    &.adjust {
      margin-left: 0 !important;

      .text {
        left: -2.2rem;
      }
    }
  }
</style>