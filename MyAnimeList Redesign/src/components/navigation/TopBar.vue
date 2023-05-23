<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
           <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="background"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>

           <v-toolbar
           dense rounded="100"
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
           </v-toolbar>
        </v-toolbar-title>


        <v-btn variant="text" icon="mdi: mdi-magnify"></v-btn>

        
               <div id="searchBar">

          </div>
          <div id="searchFilter">

          </div>


        <v-btn variant="text" icon="/src/assets/icon/filter-outline.svg"></v-btn>

        <v-btn variant="text" icon="/src/assets/icon/people-outline.svg">         
        {{$t("NAV.SIGN_UP")}}
</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>