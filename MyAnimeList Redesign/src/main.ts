import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});
import i18next from './i18n';
// import i18next from 'i18next'

i18next(createApp(App)).use(vuetify).mount('#app')
