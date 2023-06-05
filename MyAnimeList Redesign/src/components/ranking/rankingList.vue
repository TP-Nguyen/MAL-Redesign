<template>
     <v-card outlined color="cube" width="320" :height="540">
          <!-- :height="540" -->
          <v-card-title class="text-justify">{{ $t('RANKING.' + type.toUpperCase()) }}</v-card-title>
          <!-- ><v-card-title>{{$t('TITLE.TOP')}} {{$t('TITLE.'+ type)}} {{$t('GENERAL.ANIME')}}</v-card-title> -->
          <v-list three-line v-for="info in info.data" :key="info.node.id" class="ma-0">
               <v-list-item v-if="info.ranking.rank <= 3">
                    <v-row no-gutters>
                         <v-col cols="4">
                              <v-img :src="info.node.main_picture.large" :width="90" class="rounded-lg ma-0"></v-img>
                         </v-col>
                         <v-col cols="1" class="number-style">
                              #{{ info.ranking.rank }}
                         </v-col>
                         <v-col cols="7" class="text-start">
                              <v-row no-gutters  class="ma-0">{{ info.node.title }}</v-row>
                              <v-row no-gutters class="text-style">TV, 64 eps <br>scored 9.10 <br>3,149,847 members</v-row>
                         </v-col>
                    </v-row>
               </v-list-item>
          </v-list>
     </v-card>
</template>
<script lang="ts">
export default {
     props: {
          type: String
     },
     data: () => ({

          info: {},
     }),
     mounted() {
          this.axios
               .get("/anime/ranking?ranking_type=" + this.type)
               .then((response: { data: any[]; }) => (this.info = response.data));
     }
}
</script>

<style lang="scss">
.text-style{
     @include info-text
}
.number-style{
     @include ranking-number
}
</style>