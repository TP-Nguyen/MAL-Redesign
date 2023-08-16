<template>
  <v-card
    class="mx-auto my-5 rounded-lg"
    max-width="1000"
  >
  <v-card-title class="text-justify">
     {{$t('TITLE.'+ title.toUpperCase())}}
  </v-card-title>
    <v-slide-group
      v-model="model"
      class="pa-4"
      prev-icon="arrowLeftIcon"
      next-icon="arrowRightIcon"
      show-arrows
    >
      <v-slide-group-item
        v-for="info in info.data"
        :key="info"
      >
      <v-hover v-slot:default="{ isHovering, props }">
        <v-card
          class="ma-4"
          width="90"
          max-height="125"
          :class="{ 'on-hover': isHovering }"
          v-bind="props"
        > 
          <v-img
           :src="info.node.main_picture.large"
               cover
          >
          <v-expand-transition>
               <div
                    class="d-flex pa-1 reveal"
                    v-if="isHovering"
                    >
                    {{info.node.title}}
               </div>
          </v-expand-transition>
          </v-img>

        </v-card>
      </v-hover>
      </v-slide-group-item>
    </v-slide-group>
  </v-card>
</template>

<script lang="ts">
import {Data} from "../../model/Data"
  export default {
     props: {
          title: String,
          url : String
     },
     data: () => ({
      model: null,
      info: {},
    }),
     mounted(){
          this.axios
               .get("/"+ this.url)
               .then((response: { data: Data[]; }) => (this.info = response.data));
     }
  }
</script>
