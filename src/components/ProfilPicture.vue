<template>
    <div class="profile-picture-container">
        <OrangePicot :class="'orangePosition'"/>
        <GreenFly :class="'greenPosition'"/>
        <div class="pic-container">
            <img class="headerimage" alt="Headerimage" :src="headerimage" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import picJulie from "@/assets/img/profilPicJulie.jpg";
    import OrangePicot from "@/components/picto/OrangePicto.vue"
    import GreenFly from "./picto/GreenFly.vue";
    
    const headerimage = picJulie;
</script>
<style lang="scss">
    .profile-picture-container {
        position: relative;
        display: grid;
        place-items: center;
        margin: auto;
        margin-bottom: 3rem;
        width: 300px;
        .greenPosition {
            position: absolute;
            left: -12%;
            font-size: 8px;
            top: 15px;
        }
        .orangePosition {
            font-size: 8px;
            position: absolute;
            right: -12%;
            bottom: 15px;
        }
        .pic-container {
            border-radius: 150px 150px 0 0;
            height: 400px;
            width: 275px;
            overflow: hidden;
            display: grid;
            place-items: center;
            .headerimage {
                width: 150%;
                height: auto;
                display: flex;
            }
        }
    }
</style>