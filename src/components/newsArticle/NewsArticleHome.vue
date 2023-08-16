<script setup lang="ts">
const props = defineProps({
     type: String,
     url: String
});
const imageSrc="src/assets/image/" + props.type + props.url +".jpg";
</script>

<template>
     <v-sheet width="475" class="text-left">
          <div class="review-title">
               {{$t('PSEUDODATA.' + type + '.' + url + '.TITLE')}} 
          </div> {{ info }}
          <div class="d-flex flex-no-wrap justify-space-between"> 
               <!-- :src="info.main_picture.large" -->
          <v-img class="rounded-sm mr-2" width="50"  alt="no pic" :src="imageSrc"></v-img>
          <div class="review-text" width="405">{{$t('PSEUDODATA.' + type + '.' + url + '.TEXT')}}</div>
          </div>
          <div v-if="type==='NEWS'" class="read-more text-right"> 
               {{$t('GENERAL.READMORE')}}</div>
          <v-row class="review-text"> 
               <v-col>{{$t('REVIEWS.BY')}} {{$t('PSEUDODATA.' + type + '.' + url + '.AUTHOR')}}</v-col> 
               <v-col color="primary" v-if="type==='ARTICLES'" class="text-right">{{$t('ARTICLES.SPOILER')}}</v-col>
               <v-col v-if="type==='ARTICLES'" class="text-right">{{$t('PSEUDODATA.ARTICLES.' + url + '.VIEWS')}} {{$t('ARTICLES.VIEWS')}} </v-col>
               <v-col v-if="type==='NEWS'" class="text-right">{{$t('PSEUDODATA.NEWS.' + url + '.DATE')}} </v-col>
          </v-row>
     </v-sheet>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NewsMain'
})
</script>