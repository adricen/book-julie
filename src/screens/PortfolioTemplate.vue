<template>
    <div class="portfolio-template">
      <NavigationWrapper />
      <HeaderSectionWrapper />
      <!-- <SkillsSectionWrapper /> -->
      <GallerySectionWrapper />
      <ContactSectionWrapper />
    </div>
  </template>
  
  <script>
  import NavigationWrapper from "@/screens/sections/NavigationWrapper.vue";
  import HeaderSectionWrapper from "@/screens/sections/HeaderSectionWrapper.vue";
//   import SkillsSectionWrapper from "@/screens/sections/SkillsSectionWrapper.vue";
  import GallerySectionWrapper from "@/screens/sections/GallerySectionWrapper.vue";
  import ContactSectionWrapper from "@/screens/sections/ContactSectionWrapper.vue";
  
  export default {
    name: "PortfolioTemplate",
    components: {
      NavigationWrapper,
      HeaderSectionWrapper,
    //   SkillsSectionWrapper,
      GallerySectionWrapper,
      ContactSectionWrapper,
    },
  };
  </script>
  
  <style>
  .portfolio-template {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  </style>