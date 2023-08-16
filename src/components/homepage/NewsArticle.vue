<script setup lang="ts">
import NewsArticleHome from '../newsArticle/NewsArticleHome.vue'
const props = defineProps({
     title: String,
     type: String
});
const info= [ "20", "918"]
</script>
<template>
     <v-card
     class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000"
     >
          <v-card-title class="text-justify px-0">
               {{$t('TITLE.'+ title.toUpperCase())}}
          </v-card-title>
          <div class="d-flex justify-space-between">
                    <NewsArticleHome v-for="n in 2" :type="type" :key="n" :url=info[n-1] />
          </div>
     </v-card>
</template>
