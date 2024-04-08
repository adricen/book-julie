<template>
    <div :class="['skills-card', className]">
      <slot name="override">
        <VersionWrapper class="skills-card-icon" version="one" />
      </slot>
      <div class="title-description">
        <div class="title">{{ title }}</div>
        <p v-if="hasDiv" class="div">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import VersionWrapper from "./VersionWrapper.vue";
  
  export default {
    name: "SkillsCard",
    components: {
      VersionWrapper,
    },
    props: {
      description: {
        type: String,
        default: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      },
      title: {
        type: String,
        default: "Title",
      },
      property1: {
        type: String,
        default: "",
        validator: function (value) {
          return ["vertical"].indexOf(value) !== -1;
        },
      },
      className: {
        type: String,
        default: "",
      },
      hasDiv: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>
  
  <style>
  .skills-card {
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 42px;
    justify-content: center;
    padding: 64px 42px;
    position: relative;
    width: 320px;
  }
  
  .skills-card .title-description {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 100%;
  }
  
  .skills-card .title {
    align-self: stretch;
    color: var(--black);
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    height: 42px;
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }
  
  .skills-card .div {
    align-self: stretch;
    color: var(--black);
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    position: relative;
    text-align: center;
  }
  
  .skills-card .skills-card-icon {
    left: unset !important;
    position: relative !important;
    top: unset !important;
  }
  </style>