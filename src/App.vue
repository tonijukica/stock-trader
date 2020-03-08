<template>
  <v-app>
    <app-bar/>
    <v-container style="margin-top: 120px;">
      <funds-card/>
      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>
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
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .35s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }


</style>