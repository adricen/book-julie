<template>
    <div :class="['skills-section', className]">
      <div class="cards-section">
        <SkillsCard
          :class="skillsCardPropertyVerticalClassName"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          :hasDiv="skillsCardHasDiv"
          :override="skillsCard"
          property1="vertical"
          :title="skillsCardTitle"
        />
        <SkillsCard
          :class="skillsCardPropertyVerticalClassNameOverride"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          :hasDiv="skillsCardVisible"
          :override="override"
          property1="vertical"
          :title="skillsCardTitle1"
        />
        <SkillsCard
          :class="skillsCardDivClassName"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          :hasDiv="skillsCardHasDiv1"
          :override="skillsCard1"
          property1="vertical"
          :title="skillsCardTitle2"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import SkillsCard from "@/components/SkillsCard.vue";
    defineProps({
        version: {
            type: String,
            default: "one",
            validator(value:string) {
                return ["one"].indexOf(value) !== -1;
            },
        },
        className: {
            type: String,
            default: "",
        },
        skillsCardHasDiv: {
            type: Boolean,
            default: undefined,
        },
        skillsCardTitle: {
            type: String,
            default: "Product Design",
        },
        skillsCardVisible: {
            type: Boolean,
            default: undefined,
        },
        skillsCardTitle1: {
            type: String,
            default: "Visual Design",
        },
        skillsCardHasDiv1: {
            type: Boolean,
            default: undefined,
        },
        skillsCardTitle2: {
            type: String,
            default: "Art Direction",
        },
    });
    const skillsCardPropertyVerticalClassName= undefined;
    const skillsCardPropertyVerticalClassNameOverride= undefined;
    const skillsCardDivClassName= undefined;
    const skillsCard= undefined;
    const override= undefined;
    const skillsCard1= undefined;
  </script>
  
  <style>
  .skills-section {
    align-items: center;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 42px;
    padding: 42px 24px;
    position: relative;
    width: 1280px;
  }
  
  .skills-section .cards-section {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 24px 24px;
    position: relative;
    width: 100%;
  }
  
  .skills-section .skills-card-icon-instance {
    left: unset !important;
    position: relative !important;
    top: unset !important;
  }
  
  .skills-section .design-component-instance-node {
    left: unset !important;
    position: relative !important;
    top: unset !important;
    width: 127.38px !important;
  }
  
  .skills-section .skills-card-icon-2 {
    height: 127.38px !important;
    left: unset !important;
    position: relative !important;
    top: unset !important;
    width: 127.38px !important;
  }
  </style>