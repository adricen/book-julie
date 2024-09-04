<template>
    <div 
        ref="item"
        :style="`height: ${height}`"
        :class="[
            'w-full h-auto relative',
            (index || 0)%5 === 0 ? 'col-span-2' : 'row-span-2',
        ]"
    >
        <div class="thumbnail w-full h-full absolute top-0 bg-cover bg-center z-0" :style="{ backgroundImage: `url(${thumbnail})`}"></div>
        <!-- TODO: Ajouter animation hover -->
        <div class="text z-10 absolute ">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    const item = ref();
    const width = ref();
    
    const height = ref();
    
    const props = defineProps({
        title: String,
        description: String,
        thumbnail: String,
        contentType: String,
        index: Number
    });
    onMounted(() => {
        // TODO: Set width based on img ratio
        width.value = window.getComputedStyle(item.value).width;
        if ((props.index || 0)%5 === 0) {
            height.value = `${parseInt(window.getComputedStyle(item.value).width) / 2}px`;
        } else {
            height.value = `${parseInt(window.getComputedStyle(item.value).width) * 2}px`;
        }   
    
    });
  
</script>
<style lang="scss">
    // .gallery-card {
    //     align-items: flex-start;
    //     display: flex;
    //     flex-direction: column;
    //     gap: 24px;
    //     position: relative;
    //     margin: 2rem;
    //     .thumbnail {
    //         align-self: stretch;
    //         height: 330px;
    //         position: relative;
    //         width: 100%;
    //         background-position: center;
    //         background-size: cover;
    //     }
    //     .title-description {
    //         align-items: flex-start;
    //         align-self: stretch;
    //         display: flex;
    //         flex: 0 0 auto;
    //         flex-direction: column;
    //         gap: 8px;
    //         position: absolute;
    //         width: 80%;
    //         bottom: 2rem;
    //         margin:auto;
    //         left: 0;
    //         right: 0;
    //         background-color: rgba(0, 0, 0, 0.5);
    //         .project-title {
    //           align-self: stretch;
    //           color: var(--black);
    //           font-family: "Epilogue", Helvetica;
    //           font-size: 20px;
    //           font-weight: 600;
    //           letter-spacing: 0;
    //           line-height: 30px;
    //           margin-top: -1px;
    //           position: relative;
    //         }
    //         .description {
    //           align-self: stretch;
    //           color: var(--black);
    //           font-family: var(--body-text-font-family);
    //           font-size: var(--body-text-font-size);
    //           font-style: var(--body-text-font-style);
    //           font-weight: var(--body-text-font-weight);
    //           letter-spacing: var(--body-text-letter-spacing);
    //           line-height: var(--body-text-line-height);
    //           position: relative;
    //         }
    //     }
    // }
</style>