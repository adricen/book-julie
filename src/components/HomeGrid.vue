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
        <!-- <img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""> -->
        <!-- <img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""><img class="w-auto" src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA" alt=""> --> -->
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
