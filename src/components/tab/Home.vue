<template>
  <div class="mapouter">
    <div class="gmap_canvas">
          <v-layout>
              <v-flex xs12 sm12 md3 lg3 pl-4 mt-3>
                  <v-card tile flat>
                      <div class="main_styles">
                          <iframe
                                  width="295"
                                  height="120"
                                  id="gmap_canvas"
                                  src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                  frameborder="0"
                                  scrolling="no"
                                  marginheight="0"
                                  marginwidth="0"
                          ></iframe>
                          <v-card flat color="#f3f9f2" class="my-3">
                              <v-card-text>
                                  <v-layout class="justify-space-around align-center" >
                                      <v-btn fab dark depressed small color="#32a923">
                                          <v-icon flat dark>mdi-coffee</v-icon>
                                      </v-btn>
                                      <div class="caption">Show properties with <br> free breakfast</div>
                                      <v-switch inset v-model="lunch" ></v-switch>
                                  </v-layout>
                              </v-card-text>
                          </v-card>
                          <p class="font-weight-bold body-2">Recommended for you in Barcelona</p>
                          <v-card
                                  v-for="i in 3"
                                  :key="i"
                                  outlined flat
                                  class="mt-3"
                          >
                              <v-layout>
                                  <v-flex>
                                      <v-img
                                              height="120"
                                              width="100"
                                              src="//pix6.agoda.net/hotelImages/547243/0/80b6a83ff734e47aee6aa60dedddab1d.jpg?s=312x236&p=true"
                                      ></v-img>
                                  </v-flex>
                                  <v-flex>
                                      <v-layout column justify-space-between  fill-height pl-0 pa-2>
                                          <div class="text-left">
                                              <a class="black_text subtitle-2">Vale Apartments Barcelona</a>
                                              <v-rating
                                                      v-model="rating"
                                                      background-color="pink lighten-3"
                                                      color="orange" dense readonly empty-icon
                                                      size="16"
                                              ></v-rating>
                                          </div>
                                          <div class="text-right">
                                              <h5 class="m-0">372 $</h5>
                                              <p class="price ma-0">Nightly rates as low as</p>
                                          </div>
                                      </v-layout>
                                  </v-flex>
                              </v-layout>
                          </v-card>
                      </div>
                  </v-card>
              </v-flex>
              <v-flex xs12 sm12 md9 lg9 px-4 mt-3>
                  <v-card tile flat >
                      <v-card color="rgb(253, 238, 238)" flat mt-4>
                          <v-card-text >
                              <h4 class="sale">Hurry! 80% of properties on our site are fully booked!</h4>
                              <p>Reserve yours now before prices go up.</p>
                          </v-card-text>
                      </v-card>
                      <v-item-group>
                          <v-container grid-list-md px-0>
                              <v-layout wrap>
                                  <v-flex
                                          v-for="n in 4"
                                          :key="n"
                                          xs6 md3>
                                      <v-item v-slot:default="{ active, toggle }">
                                          <v-card
                                                  :color="active ? '#b7dcf5' : ''"
                                                  class="d-flex align-center tag_filter"
                                                  height="50"
                                                  flat outlined
                                                  @click="toggle"
                                          >
                                              <v-card-text>
                                                  {{items[n-1]}}
                                              </v-card-text>
                                              <v-scroll-y-transition>
                                                  <div v-if="active" class="display-3 flex-grow-1 text-center"></div>
                                              </v-scroll-y-transition>
                                          </v-card>
                                      </v-item>
                                  </v-flex>
                              </v-layout>
                          </v-container>
                      </v-item-group>
                      <Property_card></Property_card>
                      <ticket></ticket>
                      <v-divider class="my-5"></v-divider>
                      <strong class="ma-1">People who search for Barcelona also considered staying in these cities.</strong>
                      <v-layout wrap>
                          <v-flex
                                  v-for="(item, index) in recommend"
                                  :key="index"
                                  sm4 pa-1
                          >
                              <v-hover class="m-2" v-slot:default="{ hover }">
                                  <v-card class="mx-auto" >
                                      <v-img
                                              :src="item.img"
                                      >
                                          <v-fade-transition>
                                              <div
                                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                                      style="height: 100%;"
                                                      v-if="!hover"
                                              ></div>

                                          </v-fade-transition>
                                          <v-card-actions class="white--text align-end fill-height">
                                              <strong>{{item.text}}</strong>
                                          </v-card-actions>
                                      </v-img>
                                  </v-card>
                              </v-hover>
                          </v-flex>
                      </v-layout>
                  </v-card>
              </v-flex>
          </v-layout>
    </div>
  </div>
</template>

<script>
  import Ticket from './Ticket';
  import Property_card from './Property_Card';

  export default {
  name: "Home",
  data(){
    return{
      rating: 4,
      lunch: '',
      items: ['Best match', 'Lowest price first', 'Distance', 'Top Reviewed', 'Secret deals'],
      recommend: [
        {
          img: 'https://pix6.agoda.net/geo/city/73409/1_73409_02.jpg?s=354x200&p=true',
          text: 'Badalona, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/12521/1_12521_02.jpg?s=354x200&p=true',
          text: 'Malaga, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/16577/1_16577_02.jpg?s=354x200&p=true',
          text: 'Seville, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/9170/1_9170_02.jpg?s=354x200&p=true',
          text: 'Granada, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/5531/1_5531_02.jpg?s=354x200&p=true',
          text: 'Madrid, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/1623/1_1623_02.jpg?s=354x200&p=true',
          text: 'Valencia, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/16716/1_16716_02.jpg?s=354x200&p=true',
          text: 'Majorca, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/14186/1_14186_02.jpg?s=354x200&p=true',
          text: 'Alicante - Costa Blanca, Spain'
        },
        {
          img: 'https://pix6.agoda.net/geo/city/2976/1_2976_02.jpg?s=354x200&p=true',
          text: 'Ibiza, Spain'
        },
      ],
    }
  },
  components: {Property_card, Ticket,}
};
</script>

<style >
    .sale{
        color: #e12d2d;
    }
    .tag_filter{
        font-weight: bold;
    }
    /*.rec{*/
    /*    font-weight: bold;*/
    /*}*/
    .application {
        line-height: 1 !important;
    }
    .v-application p {
         margin-bottom: 0 !important;
    }
    .main_styles span{
        margin-top: 5px;
    }
    .main_styles a{
        font-size: 14px;
    }
    .main_styles h5{
        color: #e91e63;
        font-weight: bold;
    }
    .main_styles .price{
        font-size: x-small;
    }
    .main_styles .v-rating .v-icon {
        /*font-size: 15px !important;*/
        padding: 0!important;
    }
    .main_styles .accent--text {
        color: #3667b9 !important;
        caret-color: #3667b9 !important;
    }
    .main_styles .v-card__text{
        padding: 4px !important;
    }
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: 0.4;
        position: absolute;
        width: 100%;
    }
</style>
