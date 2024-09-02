<template>
  <section id="portfolio">
    <h3 class="title">{{ title }}</h3>
    <div v-for="item in galleryItems">
      <GalleryCard
        :title="item.title"
        :description="item.description"
        :thumbnail="item.thumbnail"
        :contentType="item.contentType"
      />
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import GalleryCard from "@/components/GalleryCard.vue";
  import frontMatter from 'front-matter';
  import {ref, onMounted} from "vue";
  import type IProject from "@/interfaces/IProject";

  const title = "PORTFOLIO";

  const galleryItems = ref<IProject[]>([]);

  onMounted(() => {
    const markdownUrl = import.meta.glob('@/portfolio/*.md');
    for (const path in markdownUrl) {
      fetch(path).then((response) => {
        response.text().then((data) => {
          const { attributes }  = frontMatter(data);
          if (attributes) {
            galleryItems.value.push(attributes as IProject);
          }
        });
      });
    }
  });
  // const galleryItems = computed(() => {
  //   return [
  //     {
  //       title: "Project 1",
  //       slug: "project-1",
  //       description: "lorem ipsum endolores emploarei zaeazoj",
  //       tags: ["UI", "Art", "drection"],
  //       thumbnail: "https://c.animaapp.com/57i96tuF/img/image-7@2x.png",
  //       contentType: "image" // [viedo, image, scorm]
  //     },{
  //       title: "Project 2",
  //       slug: "project-2",
  //       description: "lorem ipsum endolores emploarei zaeazoj",
  //       tags: ["UI", "Art", "drection"],
  //       thumbnail: "https://c.animaapp.com/57i96tuF/img/image-9@2x.png",
  //       contentType: "image" // [viedo, image, scorm]
  //     },{
  //       title: "Project 3",
  //       slug: "project-3",
  //       description: "lorem ipsum endolores emploarei zaeazoj",
  //       tags: ["UI", "Art", "drection"],
  //       thumbnail: "https://c.animaapp.com/57i96tuF/img/image-10@2x.png",
  //       contentType: "image" // [viedo, image, scorm]
  //     },{
  //       title: "Project 4",
  //       slug: "project-4",
  //       description: "lorem ipsum endolores emploarei zaeazoj",
  //       tags: ["UI", "Art", "drection"],
  //       thumbnail: "https://c.animaapp.com/57i96tuF/img/image-11@2x.png",
  //       contentType: "image" // [viedo, image, scorm]
  //     },{
  //       title: "Project 5",
  //       slug: "project-5",
  //       description: "lorem ipsum endolores emploarei zaeazoj",
  //       tags: ["UI", "Art", "drection"],
  //       thumbnail: "https://c.animaapp.com/57i96tuF/img/image-8@2x.png",
  //       contentType: "image" // [viedo, image, scorm]
  //     }
  //   ]
  // })
    

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