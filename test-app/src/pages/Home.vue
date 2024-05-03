<template>
  <v-main>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h1 class="font-weight-bold my-3">Welcome to Vuetify</h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers:
          <b class="primary--text">{{ message }}</b>
        </p>
        <div class="d-flex justify-center">
          <v-btn color="primary" class="mx-3" v-on:click="incrementCount">Increment count</v-btn>
          <v-btn color="primary" class="mx-3" v-on:click="resetCount">Reset count</v-btn>
          <v-btn color="secondary" class="mx-3" v-on:click="reverseMessage">Reverse message</v-btn>
          <v-btn color="secondary" class="mx-3" v-on:click="toggleTheme">Toggle theme</v-btn>
        </div>
        <div>
          <v-container>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col>
                <v-text-field v-model="messageInput" prepend-icon="mdi-magnify"></v-text-field>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-container>
        </div>
        <p>{{ messageInput.trim() ? messageInput : 'Enter text above' }}</p>
        <p>Count: {{ $store.state.count }}</p>
      </v-flex>
      <v-flex mb-5 xs12>
        <h1 class="font-weight-bold mb-3">What's next?</h1>
        <v-layout justify-center>
          <a v-for="link in $store.state.links" :key="link.href"
            :href="link.href"
            class="subheading mx-3"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>
      <v-flex mb-5 class="d-flex justify-center">
        <LoginForm v-bind:initialCount="initialCount" />
        <LoginForm />
      </v-flex>
    </v-layout>
  </v-main>
</template>
  
<script>
  import LoginForm from '../components/LoginForm.vue';
  
  export default {
    name: 'page-home',
  
    components: {
      LoginForm,
    },
  
    data: () => ({
      // count: 0,
      initialCount: 3,
      message: 'yeah nah x',
      messageInput: '',
    }),
  
    methods: {
      incrementCount() {
        // this.count++;
        this.$store.commit('increment');
      },
      resetCount() {
        // this.count = 0;
        this.$store.commit('reset');
      },
      reverseMessage() {
        this.message = this.message.split(' ').reverse().join(' ');
      },
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
    },
  };
</script>
  