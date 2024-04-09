<template>
  <div class="header-section">
    <ProfilPicture />
    <div class="header-content">
      <div class="title-subtitle">
        <div class="branding-image sub_title">{{ text }}</div>
        <div class="visual-designer orange title">{{ text1 }}</div>
        <p class="this-is-a-template">Animée par un esprit <span class="text-highlight green">créatif</span> et des compétences avancées en design, je donne vie à des projets e-learning <span class="text-highlight orange">ludiques</span> et <span class="text-highlight orange">pédagogiques</span>. Mon sens de l’ergonomie garantit des contenus <span class="text-highlight green">esthétiques</span> et <span class="text-highlight green">intuitifs</span>. En équipe ou en solo, je m'épanouis et m'adapte avec enthousiasme.</p>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
    import ProfilPicture from "@/components/ProfilPicture.vue";

    const text = "TRANSMETTRE AVEC CREATIVITE";
    const text1 = "Learning Designer";
  </script>
  
<style lag="scss">
    @import "@/assets/scss/_variables.scss";
    .header-section {
        font-size: 1.3rem;
        .header-content {
            padding: 1rem;
            .title-subtitle {
                position: relative;
                /* top: 50%; */
                /* transform: translateY(-50%); */
                text-align: justify;
                .branding-image, .visual-designer {
                    text-align: center;
                }
            }
        }
    }
  </style>