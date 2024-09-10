<template>
    <section class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-4 px-10">
        <GridCard
            v-for="item, index in galleryItems"
            :index="index"
            :title="item.title"
            :description="item.description"
            :thumbnail="item.thumbnail"
            :contentType="item.contentType"
            :slug="item.slug"
        />
    </section>
</template>
<script setup lang="ts">
    // TODO: responsive grid
    import MdController from "@/controllers/MdController";
    import GridCard from "@/components/GridCard.vue";
    import IProject from '@/typescript/IProject';
    import { ref, onMounted } from "vue";

    const galleryItems = ref<IProject[]>([]);
   
    onMounted(() => {
        Promise.all(MdController.mdAttributeList).then((projects: IProject[]) => {
            galleryItems.value = projects;
        });
    });
</script>
