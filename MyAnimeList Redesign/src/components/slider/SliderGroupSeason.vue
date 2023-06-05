<template>
  <v-card
    class="mx-auto my-5"
    max-width="1000"
  >
  <v-card-title class="text-justify">
     {{$t('SEASON.'+ season.toUpperCase())}} {{year}} {{$t('GENERAL.ANIME')}}
  </v-card-title>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
    <template v-slot:prev="{ on, attrs }">
        <v-btn icon="arrowLeftIcon"
          plain
          density="compact"
          rounded="lg"
          v-bind="attrs"
          v-on="on"
        ></v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn icon="arrowRightIcon"
          plain
          density="compact"
          rounded="lg"
          v-bind="attrs"
          v-on="on"
        ></v-btn>
      </template>
      <v-slide-group-item
        v-for="info in info.data"
        :key="info"
      >
      <v-hover v-slot:default="{ isHovering, props }">
        <v-card
          class="ma-4"
          width="160"
          max-height="225"
          :class="{ 'on-hover': isHovering }"
          v-bind="props"
        >
          <v-img
           :src="info.node.main_picture.large"
               cover
          >
          <v-expand-transition>
               <div
                    class="d-flex pa-1 v-card--reveal"
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
  export default {
     props: {
      year: String,
      season: String,        
     },
     data: () => ({
      model: null,
      info: {},
    }),
     mounted(){
          this.axios
               .get("/anime/season/"+ this.year +"/"+ this.season)
               .then((response: { data: any[]; }) => (this.info = response.data));
     }
  }
</script>
<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    /* opacity: .5; */
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--v-theme-background), 0.7);
}
</style>