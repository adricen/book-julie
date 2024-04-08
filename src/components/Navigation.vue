<template>
    <div class="navigation" :class="className">
      <div class="logo">{{ text }}</div>
      <div class="menu-items">
        <div class="text-wrapper" :class="divClassName">{{ text1 }}</div>
        <div class="text-wrapper" :class="divClassNameOverride">{{ text2 }}</div>
        <div class="text-wrapper" :class="divClassName1">{{ text3 }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Navigation",
    props: {
      className: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: "Logo",
      },
      divClassName: {
        type: String,
        default: "",
      },
      text1: {
        type: String,
        default: "About",
      },
      divClassNameOverride: {
        type: String,
        default: "",
      },
      text2: {
        type: String,
        default: "Work",
      },
      divClassName1: {
        type: String,
        default: "",
      },
      text3: {
        type: String,
        default: "Contact",
      },
    },
  };
  </script>
  
  <style>
  .navigation {
    align-items: center;
    /* background-color: #ffffff; */
    display: flex;
    flex-wrap: wrap;
    gap: 24px 24px;
    justify-content: space-between;
    padding: 24px 42px;
    position: relative;
    width: 1280px;
  }
  
  .navigation .logo {
    color: var(--black);
    font-family: "Epilogue", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .navigation .menu-items {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 24px;
    justify-content: flex-end;
    position: relative;
  }
  
  .navigation .text-wrapper {
    color: var(--black);
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  </style>
  