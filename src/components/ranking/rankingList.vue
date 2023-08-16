<template>
     <v-card outlined color="cube" width="320" :height="540" class="rounded-lg">
          <v-card-title class="text-justify">{{ $t('RANKING.' + type.toUpperCase()) }}</v-card-title>
          <v-list three-line v-for="info in info.data" :key="info.node.id" class="ma-0">
               <v-list-item v-if="info.ranking.rank <= 3">
                    <v-row no-gutters class="card-ranking">
                         <v-col cols="4">
                              <v-img :src="info.node.main_picture.large" :width="90" :height="125" cover class="rounded-lg ma-0"></v-img>
                         </v-col>
                         <v-col cols="1" class="ranking-number">
                              #{{ info.ranking.rank }}
                         </v-col>
                         <v-col cols="7" class="text-start">
                              <v-row no-gutters class="info-title ma-0">{{ info.node.title }}</v-row>
                              <v-row no-gutters class="info-text">{{ $t('PSEUDODATA.RANKING.'+ type.toUpperCase() + '.' + info.ranking.rank + '.TYPE')}}, {{ $t('PSEUDODATA.RANKING.'+ type.toUpperCase() + '.' + info.ranking.rank + '.EP')}} {{ $t('RANKING.EPS')}} 
                                   <br>{{ $t('RANKING.SCORED')}} {{ $t('PSEUDODATA.RANKING.'+ type.toUpperCase() + '.' + info.ranking.rank + '.SCORE')}}
                                   <br>{{ $t('PSEUDODATA.RANKING.'+ type.toUpperCase() + '.' + info.ranking.rank + '.MEMBERS')}} {{ $t('RANKING.MEMBERS')}}</v-row>
                         </v-col>
                    </v-row>
               </v-list-item>
          </v-list>
     </v-card>
</template>
<script lang="ts">
import {Data} from "../../model/Data"
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
               .then((response: { data: Data[]; }) => (this.info = response.data));
     }
}
</script>

<style scoped lang="scss">
.card-ranking{
     height: 140px;
}
.info-title{
     min-height: 60px;
}
</style>