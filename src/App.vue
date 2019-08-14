<template>
  <div id="app">
      <v-app>
          <navigation></navigation>

          <search></search>

          <filters></filters>


          <router-view></router-view>
          <v-footer
                  dark
                  padless
          >
              <v-card flat tile light
                      class="grey lighten-2 w-100"
              >
                  <v-container>
                      <v-layout class="justify-content-between">
                          <v-flex sm2 xs12>
                              <v-btn
                                      v-for="item in home"
                                      :key="item"
                                      class="mx-4"
                                      text small
                              >
                                  {{item}}
                              </v-btn>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-btn
                                      v-for="item in about"
                                      :key="item"
                                      class="mx-4"
                                      text small
                              >
                                  {{item}}
                              </v-btn>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-btn
                                      v-for="item in destinations"
                                      :key="item"
                                      class="mx-4"
                                      text small
                              >
                                  {{item}}
                              </v-btn>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-btn
                                      v-for="item in partner"
                                      :key="item"
                                      class="mx-4"
                                      text small
                              >
                                  {{item}}
                              </v-btn>
                          </v-flex>
                          <v-flex sm2 xs12>
                              <v-btn
                                      v-for="item in app"
                                      :key="item"
                                      class="mx-4"
                                      text small
                              >
                                  {{item}}
                              </v-btn>
                          </v-flex>
                      </v-layout>
                  </v-container>


                  <v-card-text class="white--text text-center bg-dark py-3">
                      All material herein © 2005–{{ new Date().getFullYear() }} Agoda Company Pte. Ltd. All Rights Reserved.
                      <br>
                      Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.
                  </v-card-text>
              </v-card>
          </v-footer>
      </v-app>
  </div>
</template>

<script>
import Navigation from "./components/toolbars/Navigation.vue";
import Search from "./components/toolbars/Search.vue";
import Filters from "./components/toolbars/Filters";


export default {
  name: "app",
  data(){
    return{
      home: [
        'Home',
        'Help center',
        'FAQs',
        'Privacy policy',
        'Cookie policy',
        'Terms of use',
      ],
      about: [
        'About us',
        'PointsMAX',
        'Careers',
        'Press',
        'Blog',
      ],
      destinations: [
        'Destinations',
        'Countries/Territories',
        'Cities',
      ],
      partner: [
        'Partner with us',
        'Properties',
        'Affiliates',
      ],
      app: [
        'Get the app',
        'iOS app',
        'Android app',
      ],
    }
  },
  components: {
    Navigation,
    Search,
    Filters,
  }
};
</script>

<style></style>
