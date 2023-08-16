<template>
  <v-card>
    <v-layout>
      <v-app-bar height="60" color="primary" >
        <v-app-bar-nav-icon
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-autocomplete
          class="my-40 rounded-lg searchbar"
          :placeholder="$t('GENERAL.SEARCH')"
          variant="solo"
          hide-details 
          rounded 
          outlined dense
        ></v-autocomplete>
        <v-btn variant="flat" color="background" height="40" width="40"
        class="mx-3 rounded-lg justify-center align-center" icon="filterIcon"></v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="playIcon"></v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<style lang="scss">
.searchbar{
  max-width: 700px;
}
.searchbar .v-input__control .v-field{
  border-radius: $radius;
}
.searchbar .v-input__control{
  width: 700px;
  max-height: 40px;
  justify-self: center;
}
.searchbar .v-input__control .v-field__input input {
  top: 10px;
}
</style>