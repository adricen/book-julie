<script setup lang="ts">
import { useRoute } from 'vue-router';
// TODO: Create arborescence inside the header
const route = useRoute();
console.log(route);
</script>
<template>
  <header class="sticky top-0 z-50 w-full bg-white/30 px-10 backdrop-blur-md">
    <nav class="flex items-center py-10">
      <h1 class="px-10 text-5xl text-gray-900"><a href="/">Julie Taris</a></h1>
      <ul class="flex-auto text-right">
        <li class="right-to-left inline-block pr-10"><a href="/">Home</a></li>
        <li class="right-to-left inline-block pr-10">
          <a href="/about">About</a>
        </li>
        <li class="right-to-left mr-10 inline-block">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
