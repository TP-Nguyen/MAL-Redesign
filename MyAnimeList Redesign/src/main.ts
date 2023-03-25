import Vue,{ createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vuetify/styles';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from 'router';


createApp(App)
.use(VueAxios,axios)
.use(i18n)
.use(router)
.use(vuetify)
.mount('#app')
