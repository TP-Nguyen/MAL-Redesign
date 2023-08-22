<template>
     <v-card
     class="mx-auto my-5 px-5 pb-5" max-width="1000"
     >
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.MOST_POPULAR_TRAILERS') }}
          </v-card-title>
          <v-row>
          <v-sheet  width="300" class="d-fex mx-3" v-for="(videoLink, i) in videoLink" :key="i">
               <iframe  height="" width="300" :src="videoLink" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-sheet>
          </v-row>
     </v-card>
</template>

<script lang="ts">
export default{
     components: {
      },
     data() {
          return {
               videoLink: ["https://www.youtube.com/embed/KKzmOh4SuBc",
                         "https://www.youtube.com/embed/9BxbETVKSLk",
                         "https://www.youtube.com/embed/--IcmZkvL0Q"],
          }
     },
     
}
</script>