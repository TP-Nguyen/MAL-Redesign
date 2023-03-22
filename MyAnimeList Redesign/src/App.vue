<script setup lang="ts">

// import HelloWorld from './components/HelloWorld.vue';
// import TopBar from './components/navigation/top/TopBar.vue'

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
      <v-btn> Button </v-btn>
    <v-btn variant="tonal"> Button </v-btn>
    <v-btn variant="flat"> {{$t('GENERAL.NAME')}} </v-btn>
    <v-btn variant="flat"> {{$t('GREETINGS')}} </v-btn>
    <!-- <v-btn variant="flat" content = this.$t("GENERAL.NAME")>  </v-btn> -->

    <v-btn variant="flat" color="secondary"> Secondary </v-btn>

    <v-btn variant="flat" color="error"> Error </v-btn>
  <!-- <Topbar/> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
