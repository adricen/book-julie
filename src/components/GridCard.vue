<template>
    <div 
        ref="mainBg"
        :style="`height: ${height}`"
        :class="[
            'w-full h-auto relative',
            (index || 0)%5 === 0 ? 'col-span-2' : 'row-span-2',
        ]"
    >
        <div class="thumbnail w-full h-full absolute top-0 bg-cover bg-center z-0" :style="{ backgroundImage: `url(${thumbnail})`}"></div>
        <div :class="[
            `w-full text z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity text-white`,
            // ' opacity-0 hover:opacity-100',
            ]">
            <a :href="`#/article/${slug}`" class="">
                <div class="title font-black text-4xl w-full ">{{ title }}</div>
                <div class="description font-bold ">{{ description }}</div>
            </a>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { onMounted, onUnmounted, ref} from 'vue';
    import { defineProps } from 'vue';
    import ImgHelper from '@/helpers/ImgHelper';
    

    const mainBg = ref();
    const height = ref();
    
    const props = defineProps({
        title: String,
        description: String,
        thumbnail: String,
        contentType: String,
        index: Number,
        slug: String
    });
    const setImgRatio = async (url?: string) => {
        if (!url) return;
        const imgRatio = ImgHelper.getImgRatio(url)
        imgRatio.then((ratio) => {
            if (ratio instanceof Error) {
                throw new Error('Error getting img ratio');
            }
            if ((props.index || 0)%5 === 0) {
                
                const computedImg = window.getComputedStyle(mainBg.value);
                height.value = `${parseInt(computedImg.width) / 2 * ratio}px`;
            } else {
                const computedImg = window.getComputedStyle(mainBg.value);
                height.value = `${parseInt(computedImg.width) * ratio}px`;
           
            }
        });
    }
    const eventCallback = () => {
        setImgRatio(props.thumbnail);
    }
   
    onMounted(() => {
        setImgRatio(props.thumbnail);
        window.addEventListener('resize', eventCallback);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', eventCallback);
    });
  
</script>
