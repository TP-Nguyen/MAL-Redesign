import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/lib/iconsets/mdi";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { md } from 'vuetify/iconsets/md'
import { custom } from '../assets/customIcon'
const vuetify = createVuetify({
     components,
     directives,
     theme: {
          defaultTheme: 'light',
          themes: {
               light: {
                    dark: false,
                    colors: {
                         primary: '#2E51A2',
                         textPrimary:'',
                         textSecondary:'',
                         genre:'',
                         reviwe:'',
                         cube:'',
                         background:'#FAF9F6',
                    }
               },
               dark: {
                    dark: true,
                    colors: {
                         primary: '#2E51A2',
                         background:'#303030',
                    }
               }
          }
     },
     icons: {
          defaultSet: 'custom',
          aliases,
          sets: {
               custom,
            fa,
            mdi,
            md,
          }
        },
})
 
// const theme = useTheme();
// const toggleTheme = (): void => {
//      theme.global.name.value = theme.global.current.value.dark? 'light' : 'dark';
// }

export default vuetify;