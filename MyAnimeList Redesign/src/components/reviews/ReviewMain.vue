<template>
     <v-card color="review" width="470" height="300" class="reviewCard ma-0">
          <div class="d-flex flex-no-wrap justify-space-between">
               <div class="mr-2">
                    <v-img :src="$t('PSEUDODATA.REVIEW.' + url + '.IMG') "  :width="90" class="rounded-lg ma-0"></v-img>
                    <v-card-title class="pa-0 review-title"> {{info.title}}</v-card-title>
                    <v-card-subtitle class="pa-0 text-primary review-title align-self-end">{{ $t('REVIEWS.BY') }} {{$t('PSEUDODATA.REVIEW.' + url + '.AUTHOR') }} <br>{{
                         $t('REVIEWS.RATING') }} {{$t('PSEUDODATA.REVIEW.' + url + '.RATING') }}</v-card-subtitle>
               </div>
                    <v-card-text class="pa-0 review-text">{{$t('PSEUDODATA.REVIEW.' + url + '.TEXT') }}</v-card-text>
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
          info: Data
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
     hyphens: auto;
     text-align: justify;
     margin: 20px;
}
</style>
