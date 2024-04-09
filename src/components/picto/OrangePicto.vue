<template>
    <div class="container" :class="class">
        <div class="orangePicto orange-back"></div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    class: String
})
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/_variables.scss";
    .container {
        .orangePicto {
            border-radius: 7em 0 ;
            height: 15em;
            width: 12em;
        }
    }
</style>