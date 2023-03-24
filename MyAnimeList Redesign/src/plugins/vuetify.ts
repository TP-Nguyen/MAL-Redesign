import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
     components,
     directives,
     theme: {
          defaultTheme: 'light',
          themes: {
               light: {
                    dark: false,
                    colors: {
                         primary: '',
                    }
               },
               dark: {
                    dark: true,
                    colors: {
                         primary: '',
                    }
               }
          }
     }

})
 
// const theme = useTheme();
// const toggleTheme = (): void => {
//      theme.global.name.value = theme.global.current.value.dark? 'light' : 'dark';
// }

export default vuetify;