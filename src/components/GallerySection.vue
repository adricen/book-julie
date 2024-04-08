<template>
    <div class="gallery-section">
        <div class="latest-work">{{ text }}</div>
        <div v-if="hasFrame" class="frame">
        <div class="text-wrapper-2">TOUS</div>
        <div class="text-wrapper-3">WEBDESIGN</div>
        <div class="text-wrapper-3">DIGITAL LEARNING</div>
        <div class="text-wrapper-3">GRAPHISME</div>
        </div>

        <div class="cards-section-2">
        <GalleryCard
            :class="galleryCardVersionClassName"
            description="UI, Art drection"
            :image="galleryCardImage"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        <GalleryCard
            class="component"
            description="UI, Art drection"
            :image="galleryCardImg"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        <GalleryCard
            class="component"
            description="UI, Art drection"
            :image="galleryCardImage1"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        <GalleryCard
            class="component"
            description="UI, Art drection"
            :image="galleryCardImage2"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        <GalleryCard
            class="component"
            description="UI, Art drection"
            :image="galleryCardImage3"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        <GalleryCard
            class="component"
            description="UI, Art drection"
            image="https://c.animaapp.com/57i96tuF/img/image-12@2x.png"
            imageClassName="gallery-card-instance"
            title="Project title"
            version="one"
        />
        </div>
    </div>
    </template>
  
<script setup lang="ts">
    import GalleryCard from "@/components/GalleryCard.vue";
    import {defineProps} from 'vue';
  
    defineProps({
        text: {
            type: String,
            default: "Latest work",
        },
        hasFrame: {
            type: Boolean,
            default: true,
        },
        galleryCardVersionClassName: {
            type: String,
            default: "",
        },
        galleryCardImage: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/image@2x.png",
        },
        galleryCardImg: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/image-1@2x.png",
        },
        galleryCardImage1: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/image-2@2x.png",
        },
        galleryCardImage2: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/image-3@2x.png",
        },
        galleryCardImage3: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/image-4@2x.png",
        },
    });
  </script>
  
  <style>
  .gallery-section {
    align-items: center;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 42px;
    padding: 42px 24px;
    position: relative;
    width: 1280px;
  }
  
  .gallery-section .latest-work {
    align-self: stretch;
    color: var(--black);
    font-family: var(--h2-font-family);
    font-size: var(--h2-font-size);
    font-style: var(--h2-font-style);
    font-weight: var(--h2-font-weight);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
  }
  
  .gallery-section .frame {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    overflow: hidden;
    position: relative;
    width: 628px;
  }
  
  .gallery-section .text-wrapper-2 {
    color: #000000;
    font-family: var(--subtitle-font-family);
    font-size: var(--subtitle-font-size);
    font-style: var(--subtitle-font-style);
    font-weight: var(--subtitle-font-weight);
    letter-spacing: var(--subtitle-letter-spacing);
    line-height: var(--subtitle-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 87px;
  }
  
  .gallery-section .text-wrapper-3 {
    color: #000000;
    font-family: var(--subtitle-font-family);
    font-size: var(--subtitle-font-size);
    font-style: var(--subtitle-font-style);
    font-weight: var(--subtitle-font-weight);
    letter-spacing: var(--subtitle-letter-spacing);
    line-height: var(--subtitle-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 181px;
  }
  
  .gallery-section .cards-section-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 24px 24px;
    position: relative;
    width: 100%;
  }
  
  .gallery-section .gallery-card-instance {
    object-fit: cover !important;
  }
  
  .gallery-section .component {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 320px !important;
    width: unset !important;
  }
  </style>