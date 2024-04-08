<template>
    <SkillsSection
      class="skills-section-instance"
      :override="override"
      :skillsCard="skillsCard"
      :skillsCard1="skillsCard1"
      skillsCardDivClassName="skills-section-2"
      :skillsCardHasDiv="skillsCardHasDiv"
      :skillsCardHasDiv1="skillsCardHasDiv1"
      skillsCardPropertyVerticalClassName="skills-section-2"
      skillsCardPropertyVerticalClassNameOverride="skills-section-2"
      skillsCardTitle="Webdesign"
      skillsCardTitle1="Learning Design"
      skillsCardTitle2="Graphisme"
      :skillsCardVisible="skillsCardVisible"
      version="one"
    />
  </template>
  
  <script>
  import SkillsSection from "@/components/SkillsSection.vue";
  import SkillsCardIcon from "@/components/SkillsCardIcon.vue";
  
  export default {
    name: "SkillsSectionWrapper",
    components: {
      SkillsSection,
      SkillsCardIcon,
    },
    data() {
      return {
        override: (
          <SkillsCardIcon
            img="https://c.animaapp.com/57i96tuF/img/skills-card-icon-4@2x.png"
            version="two"
            versionClassName="skills-card-icon-5"
          />
        ),
        skillsCard: (
          <SkillsCardIcon
            arrow="https://c.animaapp.com/57i96tuF/img/arrow-3-1@2x.png"
            overlapGroupClassName="skills-card-icon-4"
            version="one"
            versionClassName="skills-card-icon-3"
          />
        ),
        skillsCard1: (
          <SkillsCardIcon
            arrow1="https://c.animaapp.com/57i96tuF/img/arrow-7-1@2x.png"
            overlapGroupClassName="skills-card-icon-6"
            union="https://c.animaapp.com/57i96tuF/img/union-3@2x.png"
            version="three"
            versionClassName="skills-card-icon-3"
          />
        ),
        skillsCardHasDiv: false,
        skillsCardHasDiv1: false,
        skillsCardVisible: false,
      };
    },
  };
  </script>
  
  <style>
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