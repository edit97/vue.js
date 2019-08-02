<template>
  <div id="app">
      <v-app>
          <navigation></navigation>

          <search></search>

          <filters></filters>

          <v-content>
              <v-container>
                 <tab></tab>
              </v-container>
              <v-container>
                 <Hotel></Hotel>
              </v-container>
          </v-content>

          <v-footer app></v-footer>
      </v-app>
  </div>
</template>

<script>
import Navigation from "./components/toolbars/Navigation.vue";
import Search from "./components/toolbars/Search.vue";
import Filters from "./components/toolbars/Filters";
import  Tab from "./components/tab/Tab";
import Hotel from './components/hotel/Hotel';

export default {
  name: "app",
  components: {
    Hotel,
    Navigation,
    Search,
    Filters,
    Tab,
  }
};
</script>

<style></style>
