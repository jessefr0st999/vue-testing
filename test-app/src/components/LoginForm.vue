<template>
  <v-card width="400px" class="mx-auto">
    <v-card-title>
      <h2>Login</h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <!-- Form adds hook to submit and refresh page when pressing enter -->
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field :type="showPassword ? 'text' : 'password'" label="Password"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" />
      </v-form>
      <b>Count: {{ count + localCount }}</b>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" v-on:click="incrementCount">Increment</v-btn>
      <v-btn color="primary" v-on:click="resetCount">Reset</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="secondary">Register</v-btn>
      <v-btn color="secondary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'LoginForm',

    computed: mapState([
      // Maps this.count to store.state.count
      'count',
    ]),

    props: {
      initialCount: { default: 0 },
    },

    data: () => ({
      localCount: 0,
      showPassword: false,
    }),

    watch: {
      initialCount: {
        immediate: true,
        handler() {
          this.localCount = this.initialCount;
        }
      }
    },

    methods: {
      incrementCount() {
        this.localCount++;
      },
      resetCount() {
        this.localCount = 0;
      },
    },
  }
</script>
