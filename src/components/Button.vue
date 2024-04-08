<template>
    <a
        :class="['button', className]"
        href="https://www.animaapp.com"
        rel="noopener noreferrer"
        target="_blank"
    >
        <div class="text-wrapper-4">Contact</div>
    </a>
</template>
  
<script setup lang="ts">
    import {defineProps} from "vue";
    defineProps({
        className: {
        type: String,
        default: "",
        },
    });
</script>
  
  <style>
  .button {
    align-items: center;
    background-color: #2d2d2d;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    padding: 24px 64px;
    position: relative;
  }
  
  .button .text-wrapper-4 {
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
  