<script setup lang="ts">
const props = defineProps({
     url: String
});
const imageSrc="src/assets/image/" + props.url +".jpg";
</script>

<template>
     <v-sheet width="470" class="text-left">
          <div class="review-title">
               {{$t('PSEUDODATA.NEWS.' + url + '.TITLE')}}
          </div> {{ info }}
          <div class="d-flex flex-no-wrap justify-space-between"> 
               <!-- :src="info.main_picture.large" -->
          <v-img class="rounded-sm mr-2" width="50"  alt="no pic" :src="imageSrc"></v-img>
          <div class="review-text" width="405">{{$t('PSEUDODATA.NEWS.' + url + '.TEXT')}}</div>
          </div>
          <div class="read-more text-right"> 
               {{$t('GENERAL.READMORE')}}</div>
          <v-row class="review-text"> 
               <v-col>{{$t('REVIEWS.BY')}} {{$t('PSEUDODATA.NEWS.' + url + '.AUTHOR')}}</v-col> <v-col  class="text-right">{{$t('PSEUDODATA.NEWS.' + url + '.DATE')}} </v-col>
          </v-row>
     </v-sheet>
</template>
<!-- <script lang="ts">

import {Data} from "../../model/Data"
export default {
     props: {
          url: String
     },
     data: () => ({
          info: Data,
          imageSrc:"src/assets/image/" + url +"jpg"
          // src/assets/image/20.jpg

     }),
     beforeMounted() {
          this.axios
               .get("/anime/" + this.url)
               .then((response: { data: Data[]; }) => (this.info = response.data));
     }
}
</script> -->