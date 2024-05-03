<template>
  <v-app>
    <v-toolbar dark class="flex-grow-0">
      <img
        class="mr-3"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        height="50"
      />
      <img
        class="mr-3"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        height="50"
      />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn icon :href="'.'"><v-icon>mdi-home</v-icon></v-btn>
        <router-link :to="link.href" v-for="link in $store.state.links" :key="link.href">
          <v-btn height="100%">{{ link.text }}</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <router-view />
    <v-footer dark>
      <img
        class="mr-3"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        height="25"
      />
      <v-spacer></v-spacer>
      <img
        class="mr-3"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        height="25"
      />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
