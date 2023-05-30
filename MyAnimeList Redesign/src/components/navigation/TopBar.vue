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
        ></v-autocomplete>

        <v-btn mx-3 variant="flat" rounded="lg" color="background" class="justify-center align-center" icon="filterIcon"></v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="playIcon"></v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>