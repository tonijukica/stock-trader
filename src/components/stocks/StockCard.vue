<template>
    <v-card raised>
        <v-card-title>{{stock.name}}</v-card-title>
        <v-card-subtitle>Price: {{stock.price}}</v-card-subtitle>
        <v-card-actions>
            <v-row align-content="center" justify="space-between">
                <v-col md=4>
                    <v-text-field
                    label='Quantaty'
                    type="number"
                    min="0"
                    single-line
                    v-model="quantaty"
                    outlined/>
                </v-col>
                <v-spacer/>
                <v-col md=3 align="center">
                    <v-btn x-large 
                    color="success" 
                    :disabled="quantaty <= 0 || insufficent" 
                    @click="buyStock">Buy</v-btn>
                </v-col> 
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        quantaty: 0
    }),
    props: ['stock'],
    computed: {
        funds() {
            return this.$store.getters.getFunds;
        },
        insufficent() {
            return this.quantaty * this.stock.price > this.funds;
        }
    },
    methods: {
        ...mapActions(['buy']),
        buyStock() {
            const stockOrder = {
                id: this.stock.id,
                price: this.stock.price,
                quantaty: Number(this.quantaty)
            }
            this.buy(stockOrder);
            this.quantaty = 0;
        },
    }
}
</script>

<style>

</style>