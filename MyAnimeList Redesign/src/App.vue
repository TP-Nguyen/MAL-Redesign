
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

    <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="0" size="x-large">{{$t('GENERAL.NAME')}}</v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="xs" size="x-large">{{$t('GREETINGS')}}</v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="sm" size="x-large">Rounded sm</v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn block size="x-large">Button</v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="lg" size="x-large">Rounded lg</v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="xl" size="x-large">Rounded xl</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
<script setup lang="ts">

</script>
