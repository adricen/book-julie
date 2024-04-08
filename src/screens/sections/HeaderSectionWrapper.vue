<template>
    <HeaderSection
      class="header-section-instance"
      :headerimage="headerimage"
      headerimageClass="header-section-2"
      :showButton="false"
      :text="text"
      :text1="text1"
      :text2="text2"
      :version="version"
    />
  </template>
  
  <script setup lang="ts">
    import HeaderSection from "@/components/HeaderSection.vue";

    const headerimage = "https://c.animaapp.com/57i96tuF/img/headerimage-1-1@2x.png";
    const text = "TRANSMETTRE AVEC CREATIVITE";
    const text1 = "Learning Designer";
    const text2 = "Animée par un esprit créatif et des compétences avancées en design, je donne vie à des projets e-learning ludiques et pédagogiques. Mon sens de l’ergonomie garantit des contenus esthétiques et intuitifs. En équipe ou en solo, je m'épanouis et m'adapte avec enthousiasme.";
    const version = "one";
  </script>
  
  <style>
  .header-section-instance {
    align-self: stretch !important;
    height: 391px !important;
    width: 100% !important;
  }
  
  .header-section-2 {
    margin-bottom: -26.5px !important;
    margin-top: -26.5px !important;
  }
  </style>