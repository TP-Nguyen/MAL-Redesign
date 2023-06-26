<template>
  <!-- <v-card class="bg-secondary footerBar"> -->
    <v-layout width="100">
      <v-footer absolute class="bg-secondary text-center d-flex flex-column footerBar">

        <div>
          <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
        </div>

        <p class="pt-0" max-width="1000">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
          risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
          Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
          cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <v-divider></v-divider>

        <div class="pt-0 bg-primary w-100">
          {{ new Date().getFullYear() }} — <strong>TP-Nguyen</strong>
        </div>
      </v-footer>
    </v-layout>
  <!-- </v-card> -->
</template>
<script lang="ts">
export default {
  data: () => ({
    icons: [
      'fas-facebook',
      'fas-twitter',
      'fas-instagram',
    ],
  }),
}
</script>
<style lang="scss" scoped>
.v-layout{
  // position: absolute;
  // left: 0;
}
.footerBar {
  min-width: 100vw;
  // left: 0;
  padding: 0;
  p {
    max-width: 1000px;
    align-self: center;
  }
}
</style>