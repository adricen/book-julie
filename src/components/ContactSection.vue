<template>
    <div class="contact-section">
      <div :class="['lets-work-together', divClassName]">{{ text }}</div>
      <a :href="href" rel="noopener noreferrer" target="_blank">
        <img class="vector" alt="Vector" src="https://c.animaapp.com/57i96tuF/img/vector-1@2x.png" />
      </a>
      <div class="div-2" :class="contactSectionClassName">
        <div class="contact-info">
          <div class="div-wrapper" v-if="hasTitleDescription">
            <p class="p">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a
              template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
  
          <div class="social-links" :class="socialLinksClassName">
            <div class="linkedin" />
            <a class="behance" href="https://www.behance.net/Anima_design" rel="noopener noreferrer" target="_blank" />
          </div>
        </div>
        <div class="contact-form" v-if="hasContactForm">
          <div class="input-fields">
            <InputField class="input-field-instance" />
            <InputField class="input-field-instance" />
          </div>
          <ButtonWrapper class="button-2" text="Submit" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonWrapper from "./ButtonWrapper.vue";
  import InputField from "./InputField.vue";
  
  export default {
    name: "ContactSection",
    components: {
      ButtonWrapper,
      InputField,
    },
    props: {
      text: {
        type: String,
        default: "Lets work together",
      },
      hasTitleDescription: {
        type: Boolean,
        default: true,
      },
      hasContactForm: {
        type: Boolean,
        default: true,
      },
      href: {
        type: String,
      },
      className: {
        type: String,
        default: "",
      },
      divClassName: {
        type: String,
        default: "",
      },
      contactSectionClassName: {
        type: String,
        default: "",
      },
      socialLinksClassName: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style>
  .contact-section {
    align-items: flex-start;
    /* background-color: #ffffff; */
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 42px 24px;
    position: relative;
    width: 1280px;
  }
  
  .contact-section .lets-work-together {
    color: var(--black);
    font-family: var(--h2-font-family);
    font-size: var(--h2-font-size);
    font-style: var(--h2-font-style);
    font-weight: var(--h2-font-weight);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    margin-top: -1px;
    position: relative;
    width: 626px;
  }
  
  .contact-section .vector {
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
  }
  
  .contact-section .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 142px 42px;
    position: relative;
    width: 100%;
  }
  
  .contact-section .contact-info {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 42px;
    min-width: 320px;
    position: relative;
  }
  
  .contact-section .div-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 42px;
    position: relative;
    width: 100%;
  }
  
  .contact-section .p {
    align-self: stretch;
    color: #2d2d2d;
    font-family: var(--body-text-font-family);
    font-size: var(--body-text-font-size);
    font-style: var(--body-text-font-style);
    font-weight: var(--body-text-font-weight);
    letter-spacing: var(--body-text-letter-spacing);
    line-height: var(--body-text-line-height);
    margin-top: -1px;
    position: relative;
  }
  
  .contact-section .social-links {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 24px;
    position: relative;
    width: 100%;
  }
  
  .contact-section .linkedin {
    height: 40px;
    position: relative;
    width: 40px;
  }
  
  .contact-section .behance {
    height: 36px;
    position: relative;
    width: 36px;
  }
  
  .contact-section .contact-form {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 24px;
    max-width: 520px;
    min-width: 320px;
    position: relative;
  }
  
  .contact-section .input-fields {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 100%;
  }
  
  .contact-section .input-field-instance {
    align-items: flex-start !important;
    align-self: stretch !important;
    flex: 0 0 auto !important;
    justify-content: unset !important;
    min-width: 320px !important;
    width: 100% !important;
  }
  
  .contact-section .button-2 {
    flex: 0 0 auto !important;
  }
  </style>