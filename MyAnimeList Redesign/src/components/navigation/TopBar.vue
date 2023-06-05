<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" >
        <v-app-bar-nav-icon
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-autocomplete
          filled dense hide-details 
          class="mx-4"
          rounded="lg"
          density="comfortable"
          :placeholder="$t('GENERAL.SEARCH')"
          theme="light"
          variant="solo"
          center-affix="true"
          max-height="40"
        ></v-autocomplete>

        <v-btn mx-3 variant="flat" rounded="lg" color="background" class="justify-center align-center" icon="filterIcon"></v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="playIcon"></v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  
}
</script>