<template>
    <div>
        <section class="w-full px-10">
            <StoryLine :name="'plonge-ucpa'" />
            <div class="prose prose-md" v-html="mainContent"></div>
        </section>

    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import MDController from '@/controllers/MdController';
    import StoryLine from '@/components/StoryLine.vue';
    
    const route = useRoute();
    const slug = ref(route.params.slug);
    const mainContent = ref<string>();

    onMounted(() => {
        MDController.getMdContent(slug.value as string)
            .then((content: string) => {
                console.log(content);
                mainContent.value = content
            });
    });
</script>