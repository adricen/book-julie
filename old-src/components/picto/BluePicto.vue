<template>
    <div class="container" :class="class">
        <div class="bluePicto blue-back"></div>
        <div class="bluePicto blue-back second"></div>
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
        .bluePicto {
            display: inline-block;
            border-radius:0  7em 7em 0 ;
            height: 14em;
            width: 6.5em;
            &.second {
                border-radius:7em 0 0 7em !important;
            }
        }
    }
</style>