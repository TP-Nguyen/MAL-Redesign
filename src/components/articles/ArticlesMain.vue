<template>
     <v-card class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000">
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.FEATURED_ARTICLES') }}
          </v-card-title>
          <v-sheet class="text-left">
               <div class="review-title">{{ info[0].title }}</div>
               <v-row class="review-text">
                    <v-col cols="1">
                         <v-img class="rounded-lg" width="50" :src="info[0].imgSrc"></v-img></v-col>
                    <v-col cols="9">
                         {{ info[0].text }}
                    </v-col>
                    <v-col cols="2"  class="text-right">
                         <div>{{ $t('ARTICLES.BY') }} {{ info[0].author }}</div>
                         <div>{{ info[0].views }} {{ $t('ARTICLES.VIEWS') }}</div>
                    </v-col>
               </v-row>
          </v-sheet>

          <v-divider class="my-2"></v-divider>

          <v-sheet class="text-left">
               <div class="review-title">{{ info[1].title }}</div>
               <v-row class="review-text">
                    <v-col cols="1">
                         <v-img class="rounded-sm" width="50" :src="info[1].imgSrc"></v-img></v-col>
                    <v-col cols="9">
                         {{ info[1].text }}
                    </v-col>
                    <v-col  cols="2" class="text-right">
                         <div>{{ $t('ARTICLES.BY') }} {{ info[1].author }}</div>
                         <div>{{ info[1].views }} {{ $t('ARTICLES.VIEWS') }}</div>
                    </v-col>
               </v-row>
          </v-sheet>
     </v-card>
</template>
<script lang="ts">

export default {
     props: {
          url: String,
     },
     data() {
          return {
               info: [
                    { title: "Gintama", views: "51", author: "randomchange", imgSrc: "src/assets/image/20.jpg", text: this.$t('PSEUDODATA.ARTICLES.TEXT_1') },
                    { title: "Vinland", views: "34", author: "mnamechange", imgSrc: "src/assets/image/918.jpg", text: this.$t('PSEUDODATA.ARTICLES.TEXT_2')  }
               ]
          }
     },
}
</script>