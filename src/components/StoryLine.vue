<script setup lang="ts">
defineProps({
  name: String,
});
</script>
<template>
  <div class="w-full">
    <embed
      class="h-screen w-full"
      :src="`./storyline/${name}/story.html`"
      frameborder="0"
    />
  </div>
</template>
