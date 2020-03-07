<template>
  <v-container>
      <v-row>
          <v-col md="4" v-for="stock in getOwnedStocks" :key="stock.id">
              <portfolio-card :stock="stock"/>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import PortfolioCard from './PortfolioCard';
import { mapGetters } from 'vuex';
export default {
    data: () => ({

    }),
    computed: {
        ...mapGetters(['getOwnedStocks'])
    },
    components: {
        PortfolioCard
    }
}
</script>

<style>

</style>