<template>
    <v-content>
        <filters></filters>
        <v-container>
            <tab></tab>
        </v-container>
    </v-content>
</template>

<script>
  import Tab from './tab/Tab';
  import Filters from './toolbars/Filters';
  export default {
    name: 'mainPage',
    components: {Filters, Tab},
  };
</script>

<style scoped>

</style>
