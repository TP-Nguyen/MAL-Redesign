<template>
  <v-card outlined color="cube" class="rounded-lg">
    <v-carousel
      height="500"
      hide-delimiters
      progress="primary"
      show-arrows="hover"
      cycle
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-img cover width="100%" height="100%" :src="slide" class="ma-0"></v-img>
              
          <div class="d-flex fill-height justify-center align-center">
            <!-- <div class="text-h2">{{ slide }} Slide</div> -->
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      slides: ["src/assets/image/slider1.png", "src/assets/image/slider2.png", "src/assets/image/slider3.png", "src/assets/image/slider4.png", "src/assets/image/slider5.png"],
    };
  },
};
</script>