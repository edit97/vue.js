<template>
    <v-app id="inspire">
        <v-tabs fixed-tabs>
            <v-tab>
                Отели и жилье
            </v-tab>
            <v-tab-item>
                <v-card flat tile>
                    <home></home>
                </v-card>
            </v-tab-item>
            <v-tab>
                Отели
            </v-tab>
            <v-tab-item>
                <v-card flat tile>
                    <home></home>
                </v-card>
            </v-tab-item>
            <v-tab>
                Items
            </v-tab>
            <v-tab>
                Another Screen
            </v-tab>
        </v-tabs>
    </v-app>
</template>

<script>
  import Home from './Home';
  export default {
    name: 'Tab',
    components: {Home},
    data(){
      return{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
            ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    }
  };
</script>

<style scoped>

</style>
