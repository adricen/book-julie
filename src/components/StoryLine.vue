<template>
    <div class="w-full px-10">
        <!-- <iframe class="w-full px-10 h-screen" :src="`./storyline/${name}/story.html`" frameborder="0"></iframe> -->
         <embed class="w-full px-10 h-screen" :src="`./storyline/${name}/story.html`" frameborder="0"></embed>
         <div v-html="`./storyline/StoryLine/story.html`"></div>
         <!-- <Plonge /> -->
    </div>
</template>
<script setup lang="ts">
    defineProps({
        name: String
    })
</script>