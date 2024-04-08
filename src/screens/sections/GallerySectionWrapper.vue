<template>
    <GallerySection
      class="gallery-section-instance"
      :galleryCardImage="galleryCardImage"
      :galleryCardImage1="galleryCardImage1"
      :galleryCardImage2="galleryCardImage2"
      :galleryCardImage3="galleryCardImage3"
      :galleryCardImg="galleryCardImg"
      :galleryCardVersionClassName="galleryCardVersionClassName"
      :hasFrame="hasFrame"
      :text="text"
    />
  </template>
  
  <script setup lang="ts">
    import GallerySection from "@/components/GallerySection.vue";
  
    const galleryCardImage = "https://c.animaapp.com/57i96tuF/img/image-7@2x.png";
    const galleryCardImage1 = "https://c.animaapp.com/57i96tuF/img/image-9@2x.png";
    const galleryCardImage2 = "https://c.animaapp.com/57i96tuF/img/image-10@2x.png";
    const galleryCardImage3 = "https://c.animaapp.com/57i96tuF/img/image-11@2x.png";
    const galleryCardImg = "https://c.animaapp.com/57i96tuF/img/image-8@2x.png";
    const galleryCardVersionClassName = "gallery-section-2";
    const hasFrame = false;
    const text = "PORTFOLIO";
  </script>
  
  <style>
  .gallery-section-instance {
    align-self: stretch !important;
    height: 1030px !important;
    width: 100% !important;
  }
  
  .gallery-section-2 {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 320px !important;
    transition: all 0.2s ease !important;
    width: unset !important;
  }
  </style>