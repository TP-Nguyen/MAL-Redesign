
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <v-col cols="auto">
      <v-btn size="x-small" v-on:click="loadanime()">{{
        $t("GREETINGS")
      }}</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="small">Small Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn>Regular Button</v-btn>
    </v-col>
  </div>
</template>
 <script lang="ts">
import Vue from "vue";
import { APIConfig } from "./api/APIconfig";

export default {
methods:{  async loadanime() {
    console.log("push");
    try {
      let res = await this.axios.get("/anime/918"
     );
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  },}
};
</script>