<template>
  <v-card
    class="mx-auto my-5"
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
    <!-- <template v-slot:prev="{ on, attrs }">
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
      </template> -->
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
               .then((response: { data: any[]; }) => (this.info = response.data));
     }
  }
</script>
