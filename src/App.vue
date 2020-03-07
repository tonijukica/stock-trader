<template>
  <v-app>
    <app-bar/>
    <v-container style="margin-top: 120px;">
      <funds-card/>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
  import AppBar from './components/AppBar';
  import FundsCard from './components/FundsCard';
  export default {
    name: 'App',
    components: {
      AppBar,
      FundsCard
    },
    data: () => ({
      //
    }),
  };
</script>
