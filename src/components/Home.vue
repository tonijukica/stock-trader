<template>
 <v-card>
     <v-card-title>Trade stocks or view your portfolio</v-card-title>
     <v-card-subtitle>Click on 'End day' to begin a new day.</v-card-subtitle>
     <v-card-text>Your trading funds: ${{getFunds}}</v-card-text>
 </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data: () => ({
           
        }),
        computed: {
            ...mapGetters(['getFunds'])
        }
    }
</script>

<style>

</style>