<template>
    <input :class="['input-field', className]" />
  </template>
  
  <script>
  export default {
    name: "InputField",
    props: {
      label: {
        type: String,
        default: "Name",
      },
      className: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style>
  .input-field {
    background-color: #f3f3f3;
    border: 0;
    color: #2d2d2d;
    flex: 1;
    flex-grow: 1;
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    margin-top: -1px;
    max-width: 520px;
    padding: 16px 24px;
    position: relative;
    width: 320px;
  }
  </style>
  