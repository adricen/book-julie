<script setup lang="ts">
import MDController from '@/controllers/MdController';
import StoryLine from '@/components/StoryLine.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const slug = ref(route.params.slug);
const mainContent = ref<string>();

onMounted(() => {
  MDController.getMdContent(slug.value as string).then((content: string) => {
    // console.log(content);
    mainContent.value = content;
  });
});
</script>
<template>
  <div>
    <section class="w-full px-10">
      <StoryLine :name="'artwork'" />
      <div class="prose-md prose" v-html="mainContent"></div>
    </section>
  </div>
</template>
