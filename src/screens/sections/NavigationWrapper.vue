<template>
    <div class="navigation navigation-instance">
    <div class="logo">julie TARIS</div>
    <div class="menu-items">
        <div class="text-wrapper sub_title">A PROPOS</div>
        <div class="text-wrapper sub_title">PORTFOLIO</div>
        <div class="text-wrapper sub_title">CONTACT</div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
</script>
<style lang="scss">
    .navigation {
        flex-wrap: wrap;
        gap: 24px 24px;
        justify-content: space-between;
        margin-bottom: 3rem;
        .logo {
            color: var(--black);
            font-family: "Epilogue", Helvetica;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 30px;
            margin: auto;
            margin-bottom: 1rem;
            position: relative;
            white-space: nowrap;
            width: fit-content;
        }
        .menu-items {
          align-items: flex-start;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 24px;
          justify-content: flex-end;
          position: relative;
        }
        .text-wrapper {
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
    }
</style>