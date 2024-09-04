<template>
    <div>
        article {{ id }}
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    
    const route = useRoute();
    const id = ref(route.params.id);
</script>