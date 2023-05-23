<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail color="primary">
          <v-list>
            <v-list-item
              prepend-avatar="/src/assets/icon/play-outline.svg"
              title="logo"
            ></v-list-item>
          </v-list>
          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="animeIcon"
              :title = "$t('NAV.ANIME')"
              value="Anime"
            ></v-list-item>
            <v-list-item
              prepend-icon="mangaIcon"
              :title = "$t('NAV.MANGA')"
              value="Manga"
            ></v-list-item>
            <v-list-item
              prepend-icon="communityIcon"
              :title = "$t('NAV.COMMUNITY')"
              value="Community"
            ></v-list-item>
            <v-list-item
              prepend-icon="industryIcon"
              :title = "$t('NAV.INDUSTRY')"
              value="Industry"
            ></v-list-item>
          </v-list>

          <v-list>
               <v-list-item
               prepend-icon="languageIcon"
              :title = "$t('NAV.LANGUAGE')"
              value="Language"
              ></v-list-item>
               <v-list-item
               prepend-icon="contrastIcon"
              :title = "$t('NAV.DARK')"
              value="Darkmode"
              @click="toggleTheme"
              ></v-list-item>
               <v-list-item
               prepend-icon="settingIcon"
               hidden
              :title = "$t('NAV.SETTINGS')"
              value="Settings"
              ></v-list-item>
               <v-list-item
               hidden
               prepend-icon="helpIcon"
              :title = "$t('NAV.HELP')"
              value="Help"
              ></v-list-item>
               <v-list-item
               prepend-icon="informationIcon"
              :title = "$t('NAV.HIDE_ADS')"
              value="Hide Ads"
              ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
</template>
<script lang="ts">
import { useTheme } from 'vuetify'
export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}</script>