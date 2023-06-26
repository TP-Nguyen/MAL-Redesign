<script setup lang="ts">
import Discussion from './Discussion.vue'
const info= [
                    {title:"Gintama", replies:"51", author:"randomnamechange", date:"Apr 30,2009"},
                    {title:"Vinland", replies:"34", author:"randomnamechange", date:"Feb 21,2008"},
                    {title:"Naruto", replies:"27", author:"randomnamechange", date:"May 4,2019"},
                    {title:"Berserk", replies:"44", author:"randomnamechange", date:"June 10,2015"}
               ]
</script>
<template>
     <v-card class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000">
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.RECENT_ANIME_DISCUSSION') }}
          </v-card-title>
          <v-row class="d-flex justify-space-between">
               <v-col cols="6">
                    <Discussion :info="info[0]"/>
               </v-col>
               <!-- <v-divider></v-divider> -->
               <v-col cols="6">
                    <Discussion :info="info[1]"/>
               </v-col>
          </v-row>
          <v-row>
               <v-col><v-divider></v-divider></v-col>
               <v-col><v-divider></v-divider></v-col>
          </v-row>
          <v-row class="d-flex justify-space-between">
               <v-col cols="6">
                    <Discussion :info="info[2]"/>
               </v-col>
               
               <v-col cols="6">
                    <Discussion :info="info[3]"/>
               </v-col>
          </v-row>

     </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
     name: 'DiskussionHome',
     props: {
          url: String,
     }
})
</script>