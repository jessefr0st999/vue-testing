import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const customTheme = {
  primary: '#ad23ad',
  secondary: '#520452',
}

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {...customTheme},
      light: {...customTheme},
    },
  },
});
