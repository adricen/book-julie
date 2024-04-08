<template>
    <div class="gallery-card">
      <img class="image" alt="Image" :src="image" />
      <div class="title-description-2">
        <div class="project-title">{{ title }}</div>
        <div class="UI-art-drection">{{ description }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import {defineProps} from "vue";
    defineProps({
      title: {
        type: String,
        default: "Project title",
      },
      description: {
        type: String,
        default: "UI, Art drection",
      },
      version: {
        type: String,
        validator(value: string) {
          return ["one"].indexOf(value) !== -1;
        },
      },
      className: {
        type: String,
        default: "",
      },
      image: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/image-6@2x.png",
      },
      imageClassName: {
        type: String,
        default: "",
      },
    });
  </script>
  
  <style>
  .gallery-card {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 320px;
  }
  
  .gallery-card .image {
    align-self: stretch;
    height: 330px;
    position: relative;
    width: 100%;
  }
  
  .gallery-card .title-description-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    position: relative;
    width: 100%;
  }
  
  .gallery-card .project-title {
    align-self: stretch;
    color: var(--black);
    font-family: "Epilogue", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
  }
  
  .gallery-card .UI-art-drection {
    align-self: stretch;
    color: var(--black);
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    position: relative;
  }
  </style>
  