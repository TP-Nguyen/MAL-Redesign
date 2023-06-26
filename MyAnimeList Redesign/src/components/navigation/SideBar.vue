<template  >
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card>
      <v-layout>
        <v-navigation-drawer v-bind="props" color="primary" expand-on-hover rail>

          <v-list>
            <v-list-item prepend-avatar="" title="logo"></v-list-item>
          </v-list>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="animeIcon" :title="$t('NAV.ANIME')" value="Anime"></v-list-item>
            <v-list-item prepend-icon="mangaIcon" :title="$t('NAV.MANGA')" value="Manga"></v-list-item>
            <v-list-item prepend-icon="communityIcon" :title="$t('NAV.COMMUNITY')" value="Community"></v-list-item>
            <v-list-item prepend-icon="industryIcon" :title="$t('NAV.INDUSTRY')" value="Industry"></v-list-item>
          </v-list>

          <template v-slot:append>

            <v-list density="compact" nav>
              <div v-if="isHovering">
                <v-list-item prepend-icon="languageIcon">
                  <v-select v-model="$i18n.locale" :items="locales" item-title="label" item-value="value"
                    :label="$t('NAV.LANGUAGE')" density="compact"></v-select>
                </v-list-item>
                <v-list-item prepend-icon="contrastIcon" :title="$t('NAV.' + theme.global.name.value)" value="theme"
                  @click="toggleTheme"></v-list-item>
              </div>
              <v-list-item prepend-icon="settingIcon" :title="$t('NAV.SETTINGS')" value="Settings"></v-list-item>
              <v-list-item prepend-icon="helpIcon" :title="$t('NAV.HELP')" value="Help"></v-list-item>

              <v-list-item prepend-icon="informationIcon" :title="$t('NAV.HIDE_ADS')" value="Hide Ads"></v-list-item>
            </v-list>
          </template>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
import { useTheme } from 'vuetify'
export default {
  data() {
    return {
      locales: [
        { value: "en", label: "english" },
        { value: "de", label: "german" }
      ],
    }
  },
  setup() {
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
    }
  },

}
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
  width: 60px;
}

// $navigation-drawer-transition-property
// $navigation-drawer-transition-property
</style>