<template>
     <v-card color="review" width="470" height="215" class="reviewCard ma-0">
          <v-card-title class="pa-0 review-title"> {{info.title}}</v-card-title>

          <div class="d-flex flex-no-wrap justify-space-between">
               
               <div class="mr-2">
                    <v-img :src="$t('PSEUDODATA.REVIEW.' + url + '.IMG') "  :width="90" class="rounded-lg ma-0"></v-img>
               </div>
                    <p class="pa-0 review-text">{{$t('PSEUDODATA.REVIEW.' + url + '.TEXT') }}</p>
          </div>
          <v-row class="pa-0 text-primary review-title ">
               <v-col> {{ $t('REVIEWS.RATING') }} {{$t('PSEUDODATA.REVIEW.' + url + '.RATING') }}
               </v-col>
               <v-col class="d-flex justify-end">
                    {{ $t('REVIEWS.BY') }} {{$t('PSEUDODATA.REVIEW.' + url + '.AUTHOR') }} 
               </v-col>
          </v-row>
               
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

<style scoped>
.v-card .reviewCard {
     padding: 10px;
}
p{
     width: 350px;
}
</style>
