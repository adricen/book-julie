<script setup lang="ts">
import myfirstArticle from '@/contentFiles/firstArticle.md';
import { ref } from 'vue';

const title = ref('Head Title');

</script>
<template lang="markdown">
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>
