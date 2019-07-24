<template>
  <div id="app">
    <navigation></navigation>
    <search></search>
    <filters></filters>
    <v-flex sm10 offset-sm1 mt-5>
      <tab></tab>
    </v-flex>
  </div>
</template>

<script>
import Navigation from "./components/toolbars/Navigation.vue";
import Search from "./components/toolbars/Search.vue";
import Filters from "./components/toolbars/Filters";
import  Tab from "./components/tab/Tab";

export default {
  name: "app",
  components: {
    Navigation,
    Search,
    Filters,
    Tab,
  }
};
</script>

<style></style>
