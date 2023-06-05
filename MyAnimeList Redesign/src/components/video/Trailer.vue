<template>
     <v-card
     class="mx-auto my-5 px-5 pb-5" max-width="1000"
     >
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.MOST_POPULAR_TRAILERS') }}
          </v-card-title>
          <!-- <v-sheet v-for="(videoLink, i) in videoLink" :key="i">
               <iframe  height="" width="" src="videoLink" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {{ videoLink }}
          </v-sheet> -->
     </v-card>
</template>

<script lang="ts">
export default{
     components: {
      },
     data() {
          return {
               videoLink: ["https://www.youtube.com/watch?v=KKzmOh4SuBc",
                         "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
                         "https://www.youtube.com/watch?v=--IcmZkvL0Q"],
          }
     },
     
}
</script>