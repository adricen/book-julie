<template>
    <section id="skills">
        <SkillsCard :class="'adjust'" :skill="'Design'">
            <GreenFly />
        </SkillsCard>
        <SkillsCard  :skill="'Learn'">
            <OrangePicto />
        </SkillsCard>
        <SkillsCard :skill="'Feel'">
            <BluePicto />
        </SkillsCard>

    </section>
</template>
  
<script setup lang="ts">
  import SkillsCard from "@/components/SkillsCard.vue";
  import OrangePicto from "@/components/picto/OrangePicto.vue";
  import GreenFly from "@/components/picto/GreenFly.vue";
  import BluePicto from "@/components/picto/BluePicto.vue";
</script>
  
  <style>
  #skills {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .skills-section-instance {
    align-self: stretch !important;
    gap: unset !important;
    height: 334px !important;
    overflow: hidden !important;
    padding: unset !important;
    width: 100% !important;
  }
  
  .skills-card-icon-3 {
    position: relative !important;
  }
  
  .skills-card-icon-4 {
    background-image: url(https://c.animaapp.com/57i96tuF/img/union-2@2x.png) !important;
    top: unset !important;
  }
  
  .skills-section-2 {
    display: unset !important;
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 320px !important;
    opacity: 0 !important;
    transform: translate(-25px, 0) !important;
    width: unset !important;
  }
  
  .skills-card-icon-5 {
    height: 124.9px !important;
    left: unset !important;
    position: relative !important;
    top: unset !important;
    width: 127.38px !important;
  }
  
  .skills-card-icon-6 {
    background-image: unset !important;
    background-size: unset !important;
    height: 127px !important;
    left: -3px !important;
    width: 119px !important;
  }
  </style>