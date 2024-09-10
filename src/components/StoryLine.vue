<template>
    <div class="w-full">
         <embed class="w-full h-screen" :src="`./storyline/${name}/story.html`" frameborder="0"></embed>
    </div>
</template>
<script setup lang="ts">
    defineProps({
        name: String
    })
</script>