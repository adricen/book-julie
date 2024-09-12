<script setup lang="ts">
import ImgHelper from '@/helpers/ImgHelper';
import { onMounted, onUnmounted, ref, defineProps } from 'vue';

const mainBg = ref();
const height = ref();

const props = defineProps({
  title: String,
  description: String,
  thumbnail: String,
  contentType: String,
  index: Number,
  slug: String,
});
const setImgRatio = async (url?: string) => {
  if (!url) return;
  const imgRatio = ImgHelper.getImgRatio(url);
  imgRatio.then((ratio) => {
    if (ratio instanceof Error) {
      throw new Error('Error getting img ratio');
    }
    if ((props.index || 0) % 5 === 0) {
      const computedImg = window.getComputedStyle(mainBg.value);
      height.value = `${(parseInt(computedImg.width, 10) / 2) * ratio}px`;
    } else {
      const computedImg = window.getComputedStyle(mainBg.value);
      height.value = `${parseInt(computedImg.width, 10) * ratio}px`;
    }
  });
};
const eventCallback = () => {
  setImgRatio(props.thumbnail);
};

onMounted(() => {
  setImgRatio(props.thumbnail);
  window.addEventListener('resize', eventCallback);
});
onUnmounted(() => {
  window.removeEventListener('resize', eventCallback);
});
</script>
<template>
  <div
    ref="mainBg"
    :style="`height: ${height}`"
    :class="[
      'relative h-auto w-full',
      (index || 0) % 5 === 0 ? 'col-span-2' : 'row-span-2',
    ]"
  >
    <div
      class="thumbnail absolute top-0 z-0 h-full w-full bg-cover bg-center"
      :style="{ backgroundImage: `url(${thumbnail})` }"
    ></div>
    <div
      :class="[
        `text absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-white transition-opacity`,
        // ' opacity-0 hover:opacity-100',
      ]"
    >
      <a :href="`#/article/${slug}`" class="">
        <div class="title w-full text-4xl font-black">{{ title }}</div>
        <div class="description font-bold">{{ description }}</div>
      </a>
    </div>
  </div>
</template>
