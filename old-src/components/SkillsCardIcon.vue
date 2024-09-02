<template>
    <div v-if="['one', 'three'].includes(version)" :class="['skills-card-icon', 'version', versionClassName]">
      <div :class="['overlap-group', overlapGroupClassName]" style="background-image: url(https://c.animaapp.com/57i96tuF/img/union-1@2x.png)">
        <img :class="['arrow', version]" alt="Arrow" :src="version === 'three' ? union : arrow" />
        <img v-if="version === 'three'" class="img" alt="Arrow" :src="arrow1" />
      </div>
    </div>
  
    <img v-if="version === 'two'" :class="['skills-card-icon', 'version-2', versionClassName]" alt="Version" :src="img" />
  </template>
  
  <script setup lang="ts">
    defineProps({
      version: {
        type: String,
        validator(value: string) {
          return ["two", "three", "one"].indexOf(value) !== -1;
        },
        default: "two",
      },
      versionClassName: {
        type: String,
        default: "",
      },
      overlapGroupClassName: {
        type: String,
        default: "",
      },
      arrow: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/arrow-3@2x.png",
      },
      img: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/version-2@2x.png",
      },
      union: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/union@2x.png",
      },
      arrow1: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/arrow-7@2x.png",
      }
    });
  </script>
  
  <style>
  .skills-card-icon.version {
    height: 124px;
    width: 124px;
  }
  
  .skills-card-icon .overlap-group {
    height: 124px;
    left: 3px;
    position: relative;
    top: 1px;
    width: 116px;
  }
  
  .skills-card-icon .arrow {
    position: absolute;
  }
  
  .skills-card-icon .img {
    height: 59px;
    left: 0;
    position: absolute;
    top: 68px;
    width: 59px;
  }
  
  .skills-card-icon.version-2 {
    height: 125px;
    left: 0;
    position: absolute;
    top: 0;
    width: 127px;
  }
  
  .skills-card-icon .three {
    height: 123px;
    left: 15px;
    top: 0;
    width: 105px;
  }
  
  .skills-card-icon .two {
    height: 57px;
    left: 29px;
    top: 41px;
    width: 55px;
  }
  
  .skills-card-icon .one {
    height: 57px;
    left: 29px;
    top: 41px;
    width: 55px;
  }
  </style>
  