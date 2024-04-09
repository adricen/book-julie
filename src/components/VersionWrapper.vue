<template>
    <img
        :class="['version-wrapper', `version-${version}`, className]"
        alt="Version"
        :src="getImageSource"
    />
</template>
  
<script setup lang="ts">
    import {computed} from "vue";
    const props = defineProps({
        version: {
            type: String,
            default: "two",
            validator(value:string) {
                return ["two", "three", "one"].indexOf(value) !== -1;
            },
        },
        className: {
            type: String,
            default: "",
        },
        img: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/version-1@2x.png",
        },
        version1: {
            type: String,
            default: "https://c.animaapp.com/57i96tuF/img/version-3@2x.png",
        },
    });
    const getImageSource = computed(() => {
      if (props.version === "two") return "https://c.animaapp.com/57i96tuF/img/version-2-1@2x.png";
      if (props.version === "one") return props.img;
      return props.version1;
    });
  </script>
  
  <style>
  .version-wrapper {
    left: 0;
    position: absolute;
    top: 0;
  }
  
  .version-wrapper.version-three {
    height: 127px;
    width: 124px;
  }
  
  .version-wrapper.version-two {
    height: 124px;
    width: 127px;
  }
  
  .version-wrapper.version-one {
    height: 124px;
    width: 124px;
  }
  </style>
  