<template>
     <v-card color="review" width="470" height="300" class="reviewCard ma-0">
          <v-card-title class="pa-0 review-title"> {{info.title}}</v-card-title>

          <div class="d-flex flex-no-wrap justify-space-between">
               
               <div class="mr-2">
                    <v-img :src="$t('PSEUDODATA.REVIEW.' + url + '.IMG') "  :width="90" class="rounded-lg ma-0"></v-img>
                    <!-- <v-img :src="info.main_picture.large"  :width="100" class="rounded-lg ma-0"></v-img> -->
               </div>
                    <v-card-text class="pa-0 review-text">{{$t('PSEUDODATA.REVIEW.' + url + '.TEXT') }}</v-card-text>
          </div>
          <div class="pa-0 text-primary review-title ">
               {{ $t('REVIEWS.RATING') }} {{$t('PSEUDODATA.REVIEW.' + url + '.RATING') }}

               <div class="d-flex justify-end">
               {{ $t('REVIEWS.BY') }} {{$t('PSEUDODATA.REVIEW.' + url + '.AUTHOR') }} 
               </div>
          </div>
               
     </v-card>
</template>
<script lang="ts">
import {Data} from "../../model/Data"
export default {
     props: {
          url: String
     },
     data: () => ({
          info: {}
     }),
     mounted() {
          this.axios
               .get("/anime/" + this.url)
               .then((response: { data: Data[]; }) => (this.info = response.data));
     },
}
</script>

<style>
.v-card .reviewCard {
     padding: 10px;
     hyphens: auto;
     text-align: justify;
     margin: 20px;
}
</style>
