<template>
    <ContactSection
      class="contact-section-instance"
      :contactSectionClassName="contactSectionClassName"
      :divClassName="divClassName"
      :hasContactForm="hasContactForm"
      :hasTitleDescription="hasTitleDescription"
      :href="href"
      :socialLinksClassName="socialLinksClassName"
      :text="text"
    />
  </template>
  
  <script setup lang="ts">
  import ContactSection from "@/components/ContactSection.vue";
  import {defineProps} from "vue";
    defineProps({
      contactSectionClassName: {
        type: String,
        default: "contact-section-3",
      },
      divClassName: {
        type: String,
        default: "contact-section-2",
      },
      hasContactForm: {
        type: Boolean,
        default: false,
      },
      hasTitleDescription: {
        type: Boolean,
        default: false,
      },
      href: {
        type: String,
        default: "https://www.linkedin.com/in/julietaris/",
      },
      socialLinksClassName: {
        type: String,
        default: "contact-section-4",
      },
      text: {
        type: String,
        default: "Contactez-moi",
      },
    });
  </script>
  
  <style>
  .contact-section-instance {
    align-items: center !important;
    align-self: stretch !important;
    height: 210px !important;
    justify-content: flex-end !important;
    padding: 42px 24px 0px !important;
    width: 100% !important;
  }
  
  .contact-section-2 {
    margin-top: -3px !important;
    text-align: center !important;
  }
  
  .contact-section-3 {
    align-items: flex-end !important;
    justify-content: center !important;
  }
  
  .contact-section-4 {
    align-self: unset !important;
    flex: unset !important;
    height: 40px !important;
    width: 570px !important;
  }
  </style>