<script setup lang="ts">
import Review from "./Review.vue"  
const info= [ "20", "918"]
</script>
<template>
     <v-card class="mx-auto my-5 px-5 pb-5 rounded-lg" max-width="1000">
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.LATEST_ANIME') }} {{ $t('TITLE.REVIEWS') }}
          </v-card-title>
          <div class="d-flex justify-space-between">
                    <Review v-for="n in 2" :key="n" :url=info[n-1] />
          </div>
     </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ReviewHome'
})
</script>