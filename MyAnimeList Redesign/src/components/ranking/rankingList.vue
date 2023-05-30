<script setup lang="ts">
defineProps<{ type: string }>()

</script>

<template>
     <v-card
          variant="tonal"
          color="cube"
     ><v-card-title>{{$t('TITLE.TOP')}} {{$t('TITLE.'+ type)}} {{$t('GENERAL.ANIME')}}</v-card-title>
          <v-list lines="three">
               <v-list-item>
                    <v-list-img></v-list-img>
                    <v-list-item-title>{{data}}</v-list-item-title>
               </v-list-item>
          </v-list>
     </v-card>
</template>
<script lang="ts">
import { response } from 'express';
export default {
     // methods: {
     //      async getData(){
     //           try {
     //           let res = await this.axios.get("/anime/ranking?ranking_type=" + type);
     //          console.log(res.data);
     //          return res.data;
     //         } catch (e) {
     //           console.error(e);
     //         }
     //      }
     // },
     props: {type: String},
     data() {
          return {
               data: null,
          }
     },
     mounted(){
          this.axios
               .get("/anime/ranking?ranking_type=" + type)
               .then((response: { data: any[]; }) => (this.data = response.data));
     }
}
</script>