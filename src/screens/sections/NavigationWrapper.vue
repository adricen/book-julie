<template>
    <Navigation
      class="navigation-instance"
      div-class="navigation-2"
      div-class1="navigation-2"
      div-class-override="navigation-2"
      text="julie TARIS"
      text1="A PROPOS"
      text2="PORTFOLIO"
      text3="CONTACT"
    />
  </template>
  
  <script setup lang="ts">
  import Navigation from "@/components/Navigation.vue";
  </script>
  
  <style>
  .navigation-instance {
    height: 78px !important;
  }
  
  .navigation-2 {
    transition: all 0.2s ease !important;
  }
  </style>