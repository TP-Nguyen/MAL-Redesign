<script setup lang="ts">
import NewsMain from './NewsMain.vue'
const info= [ "20", "918"]
</script>
<template>
     <v-card
     class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000"
     >
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.ANIME_MANGA_NEWS') }}
          </v-card-title>
          <div class="d-flex justify-space-between">
                    <NewsMain v-for="n in 2" :key="n" :url=info[n-1] />
          </div>
     </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NewsHome'
})
</script>