<template>
    <v-card raised>
        <v-card-title>{{stock.name}}</v-card-title>
        <v-card-subtitle>Price: {{stock.price}} | Quantaty: {{stock.quantaty}}</v-card-subtitle>
        <v-card-actions>
            <v-row align-content="center" justify="space-around">
                <v-col md=4>
                    <v-text-field
                    label='Quantaty'
                    v-model="sellQuantaty"
                    single-line
                    outlined/>
                </v-col>
                <v-spacer/>
                <v-col md=3 align="center">
                    <v-btn x-large color="error"
                    :disabled="sellQuantaty > stock.quantaty"
                    @click="sellStock"
                    >Sell</v-btn>
                </v-col> 
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['stock'],
    data: () => ({
        sellQuantaty: 0
    }),
    methods: {
        ...mapActions(['sell']),
        sellStock() {
            const sellOrder = {
                stockId: this.stock.id,
                quantaty: this.sellQuantaty,
                price: this.stock.price
            }
            this.sell(sellOrder);
        }
    }
}
</script>

<style>

</style>