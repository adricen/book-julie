<template>
    <div class="container" :class="class">
        <div class="greenPicto green-back"></div>
        <div class="greenPicto green-back second"></div>
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
        .greenPicto {
            display: inline-block;
            border-radius:0 7em ;
            height: 15em;
            width: 7em;
            &.second {
                border-radius:7em 0 !important;
            }
        }
    }
</style>