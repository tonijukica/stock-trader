<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Stock Trader</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to='/portfolio'>Portfolio</v-tab>
          <v-tab to='/stocks'>Stocks</v-tab>
          <v-spacer/>
          <v-btn id="endBtn" @click="randomPrice" text>End day</v-btn>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['randomPrice'])
    },
    created() {
        this.$store.dispatch('init');
    }
}
</script>

<style scoped>
    #endBtn {
        margin-top: 5px;
        margin-right: 42px
    }
</style>