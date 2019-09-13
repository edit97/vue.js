<template>
  <div id="app">
      <v-app>
          <v-overlay :value="$store.state.overlay" z-index="1"></v-overlay>

          <navigation></navigation>

          <search></search>
<!--          <filters></filters>-->

<!--          <MainPage></MainPage>-->
          <v-content>
              <router-view></router-view>
          </v-content>

          <v-footer
                  dark
                  padless
          >
              <v-card flat tile light
                      color="#eeeeee"
                      class="footer"
              >
                  <v-container>
                      <v-layout class="justify-space-between">
                          <v-flex sm2 xs12>
                              <v-list color="#eeeeee"  dense>
                                  <v-list-item-group>
                                      <v-list-item
                                              v-for="item in about"
                                              :key="item"
                                              dance
                                      >
                                          <v-list-item-title>{{item}}</v-list-item-title>
                                      </v-list-item>
                                  </v-list-item-group>
                              </v-list>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-list color="#eeeeee"  dense>
                                  <v-list-item-group>
                                      <v-list-item
                                              v-for="item in home"
                                              :key="item"
                                              dance
                                      >
                                          <v-list-item-title>{{item}}</v-list-item-title>
                                      </v-list-item>
                                  </v-list-item-group>
                              </v-list>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-list color="#eeeeee"  dense>
                                  <v-list-item-group>
                                      <v-list-item
                                              v-for="item in destinations"
                                              :key="item"
                                              dance
                                      >
                                          <v-list-item-title>{{item}}</v-list-item-title>
                                      </v-list-item>
                                  </v-list-item-group>
                              </v-list>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-list color="#eeeeee"  dense>
                                  <v-list-item-group>
                                      <v-list-item
                                              v-for="item in partner"
                                              :key="item"
                                              dance
                                      >
                                          <v-list-item-title>{{item}}</v-list-item-title>
                                      </v-list-item>
                                  </v-list-item-group>
                              </v-list>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-list color="#eeeeee"  dense>
                                  <v-list-item-group>
                                      <v-list-item
                                              v-for="item in app"
                                              :key="item"
                                              dance
                                      >
                                          <v-list-item-title>{{item}}</v-list-item-title>
                                      </v-list-item>
                                  </v-list-item-group>
                              </v-list>
                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-card>
              <v-layout dark class="justify-center text-center py-3">
                  All material herein © 2005–{{ new Date().getFullYear() }} Agoda Company Pte. Ltd. All Rights Reserved.
                  <br>
                  Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.
              </v-layout>
          </v-footer>
      </v-app>
  </div>
</template>

<script>
import Navigation from "./components/toolbars/Navigation.vue";
import Search from "./components/toolbars/Search.vue";
import MainPage from './components/Main';
// import Filters from "./components/toolbars/Filters";


export default {
  name: "app",
  data(){
    return{
      // overlay: false,
      home: ['Home', 'Help center', 'FAQs', 'Privacy policy', 'Cookie policy', 'Terms of use',],
      about: ['About us', 'PointsMAX', 'Careers', 'Press', 'Blog',],
      destinations: ['Destinations', 'Countries/Territories', 'Cities',],
      partner: ['Partner with us', 'Properties', 'Affiliates',],
      app: ['Get the app', 'iOS app', 'Android app',],
    }
  },
  components: {
    MainPage,
    Navigation,
    Search,
    // Filters,
  }
};
</script>

<style>
    .footer{
        width: 100%;
    }
</style>
