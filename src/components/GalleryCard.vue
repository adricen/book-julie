<template>
    <div class="gallery-card" >
        <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnail})`}"></div>
        <div class="title-description">
            <div class="project-title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
  defineProps({
    title: String,
    description: String,
    thumbnail: String,
    contentType: String
  });
</script>
  
<style lang="scss">
    .gallery-card {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 24px;
        position: relative;
        width: 350px;
        margin: 2rem;
        .thumbnail {
            align-self: stretch;
            height: 330px;
            position: relative;
            width: 100%;
            background-position: center;
            background-size: cover;
        }
        .title-description {
            align-items: flex-start;
            align-self: stretch;
            display: flex;
            flex: 0 0 auto;
            flex-direction: column;
            gap: 8px;
            position: absolute;
            width: 80%;
            bottom: 2rem;
            margin:auto;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.5);
            .project-title {
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
            .description {
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
        }
    }

</style>
