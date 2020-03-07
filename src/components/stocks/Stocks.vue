<template>
  <v-container>
      <v-row>
          <v-col md="4" v-for="stock in getStocks" :key="stock.id">
              <stock-card :stock="stock"/>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import StockCard from './StockCard';
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        stocks: [
        ]
    }),
    computed: {
        ...mapGetters(['getStocks'])
    },
    components: {
        StockCard
    }
}
</script>

<style>

</style>