<template>
  <v-row justify="center">
      <v-col md="3" align-self="center" align="center">
        <v-card id="funds" tile align="center">
        <strong>FUNDING: ${{getFunds}}</strong>
      </v-card>
      </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getFunds'])
    }
}
</script>

<style>
    #funds{
        padding: 16px;
        width: 256px;
        margin: 8px;
        height: 64px;
        text-align: center;
    }
</style>