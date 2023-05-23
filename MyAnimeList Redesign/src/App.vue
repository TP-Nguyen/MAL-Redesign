
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './components/navigation/SideBar.vue';
import Topbar from './components/navigation/TopBar.vue';
</script>
<template>
  <div>
<HelloWorld msg="You did it!" />
<SideBar/>
<Topbar/>
    <v-col cols="auto">
      <v-btn size="x-small" v-on:click="loadanime()">{{
        $t("GREETINGS")
      }}</v-btn>
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