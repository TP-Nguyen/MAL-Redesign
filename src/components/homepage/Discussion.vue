<script setup lang="ts">
import Discussion from '../discussion/DiscussionHome.vue'
</script>
<template>
     <v-card class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000">
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.RECENT_ANIME_DISCUSSION') }}
          </v-card-title>
          <v-row class="d-flex justify-space-between">
               <v-col cols="6">
                    <Discussion type="1"/>
               </v-col>
               <!-- <v-divider></v-divider> -->
               <v-col cols="6">
                    <Discussion type="2"/>
               </v-col>
          </v-row>
          <v-row>
               <v-col><v-divider></v-divider></v-col>
               <v-col><v-divider></v-divider></v-col>
          </v-row>
          <v-row class="d-flex justify-space-between">
               <v-col cols="6">
                    <Discussion type="3"/>
               </v-col>
               
               <v-col cols="6">
                    <Discussion type="4"/>
               </v-col>
          </v-row>

     </v-card>
</template>