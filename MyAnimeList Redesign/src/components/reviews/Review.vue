<template>
     <v-card class="mx-auto my-5 px-5 pb-5" max-width="1000">
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.LATEST_ANIME') }} {{ $t('TITLE.REVIEWS') }}
          </v-card-title>
          <div class="d-flex justify-space-between">
               <v-card v-for="n in 2" :key="n" color="review" width="470" height="300" class="reviewCard ma-0">
                    <v-row no-gutters>
                         <v-col >
                              <!-- <v-img :src="info.data[n].node.main_picture.large" :width="90" class="rounded-lg ma-0"></v-img> -->
                              <!-- <v-card-title class="pa-0"> {{info.data[n].node.title}}</v-card-title> -->
                              <v-card-subtitle class="pa-0 text-primary">{{ $t('REVIEWS.BY') }} author <br>{{
                                   $t('REVIEWS.RATING') }} 8</v-card-subtitle>
                         </v-col><v-col cols="9">
                              <v-card-text class="pa-0">Over the years there have been a multitude of comedy shows that have
                                   graced our TV screens, from
                                   the surreal stylings of Monty Python and sarcastic wit of Blackadder, to the sci-fi
                                   tomfoolery of Red
                                   Dwarf and the strange antics of The Fast Show. There are numerous notable series that have
                                   taken their
                                   rightful places in our DVD collections, and in an age where comedians are treated like
                                   rock stars, maybe
                                   it's fate that comedy anime would also come of age.It's strange to say this, but humour
                                   has never been a
                                   strong department for the medium, partly because of the cultural differences between East
                                   and
                                   ...</v-card-text>
                         </v-col>
                    </v-row>
               </v-card>
          </div>
     </v-card>
</template>

<script lang="ts">

export default {
     props: {
          url: String,
     },
     data: () => ({
          info: {}
     }),
     mounted() {
          this.axios
               .get("/" + this.url)
               .then((response: { data: any[]; }) => (this.info = response.data));
     }
}
</script>
<style scoped>.v-card .reviewCard {
     padding: 10px;
     hyphens: auto;
     text-align: justify;
     margin: 20px;
}</style>