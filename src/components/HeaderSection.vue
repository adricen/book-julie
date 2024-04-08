<template>
    <div class="header-section" :class="className">
      <div class="header-content">
        <div class="title-subtitle">
          <div class="branding-image">{{ text }}</div>
          <div class="visual-designer">{{ text1 }}</div>
          <p class="this-is-a-template" v-html="text2"></p>
        </div>
        <Button v-if="showButton" class="button-instance" />
      </div>
      <img class="headerimage" :class="headerimageClassName" alt="Headerimage" :src="headerimage" />
    </div>
  </template>
  
  <script>
  import Button from "./Button.vue";
  
  export default {
    name: "HeaderSection",
    components: {
      Button,
    },
    props: {
      showButton: {
        type: Boolean,
        default: true,
      },
      version: {
        type: String,
        validator: function (value) {
          return ["one"].indexOf(value) !== -1;
        },
      },
      text: {
        type: String,
        default: "Branding | Image making",
      },
      text1: {
        type: String,
        default: "Visual Designer",
      },
      text2: {
        type: String,
        default: "This is a template Figma file, turned into code using Anima. <br/>Learn more at AnimaApp.com",
      },
      headerimage: {
        type: String,
        default: "https://c.animaapp.com/57i96tuF/img/headerimage-1@2x.png",
      },
      className: {
        type: String,
        default: "",
      },
      headerimageClassName: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style>
  .header-section {
    align-items: center;
    /* background-color: #ffffff; */
    display: flex;
    flex-wrap: wrap;
    gap: 68px 42px;
    justify-content: center;
    padding: 42px 24px;
    position: relative;
    width: 1280px;
  }
  
  .header-section .header-content {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 48px;
    max-width: 620px;
    min-width: 320px;
    position: relative;
  }
  
  .header-section .title-subtitle {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }
  
  .header-section .branding-image {
    align-self: stretch;
    color: var(--black);
    font-family: "Epilogue", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
  }
  
  .header-section .visual-designer {
    align-self: stretch;
    color: var(--black);
    font-family: var(--h1-font-family);
    font-size: var(--h1-font-size);
    font-style: var(--h1-font-style);
    font-weight: var(--h1-font-weight);
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    position: relative;
  }
  
  .header-section .this-is-a-template {
    align-self: stretch;
    color: var(--black);
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    position: relative;
  }
  
  .header-section .button-instance {
    flex: 0 0 auto !important;
  }
  
  .header-section .headerimage {
    flex: 1;
    flex-grow: 1;
    height: 360px;
    max-width: 480px;
    min-width: 320px;
    position: relative;
  }
  </style>