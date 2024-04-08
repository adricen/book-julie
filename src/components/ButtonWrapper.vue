<template>
    <a
      :class="['button-wrapper', className]"
      href="https://www.animaapp.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div class="contact">{{ text }}</div>
    </a>
  </template>
  
  <script>
  export default {
    name: "ButtonWrapper",
    props: {
      className: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: "Contact",
      },
    },
  };
  </script>
  
  <style>
  .button-wrapper {
    align-items: center;
    background-color: #2d2d2d;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    padding: 24px 64px;
    position: relative;
  }
  
  .button-wrapper .contact {
    color: var(--white);
    font-family: "Epilogue", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
  </style>
  