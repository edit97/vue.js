<template>
  <div class="mapouter">
    <div class="gmap_canvas">
          <v-layout>
              <v-flex xs12 md12 sm12 lg3 pl-4 mt-3>
                  <v-card tile flat>
                      <div class="main_styles">
                          <iframe
                                  width="260"
                                  height="120"
                                  id="gmap_canvas"
                                  src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                  frameborder="0"
                                  scrolling="no"
                                  marginheight="0"
                                  marginwidth="0"
                          ></iframe>
                          <v-card color="#f3f9f2" class="my-2">
                              <v-card-text>
                                  <v-flex row ma-0>
                                      <v-btn fab dark class="mr-1" color="#32a923">
                                          <v-icon dark>mdi-coffee</v-icon>
                                      </v-btn>
                                      <small class="pt-2"> <span>Показать варианты с <br> бесплатным завтраком</span></small>
                                      <v-switch v-model="lunch" class="ml-1 mt-2"></v-switch>
                                  </v-flex>
                              </v-card-text>
                          </v-card>
                          <p class="rec">Барселона: рекомендации для вас</p>
                          <v-card
                                  v-for="i in 3"
                                  :key="i"
                          >
                              <v-layout mt-3>
                                  <v-flex m-0>
                                      <v-img
                                              height="150"
                                              width="100"
                                              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                      ></v-img>
                                  </v-flex>
                                  <v-flex>
                                      <v-container grid-list-lg pa-0>
                                          <v-layout column pt-1>
                                              <v-flex class="text-left">
                                                  <small><a class="font-weight-bold">Vale Apartments Barcelona</a></small>
                                                  <v-rating
                                                          v-model="rating"
                                                          background-color="pink lighten-3"
                                                          color="orange" dense readonly empty-icon
                                                          size="16"
                                                  ></v-rating>
                                                  <v-flex row m-0>
                                                      <v-btn depressed small dark color="#5392f9">8.3</v-btn>
                                                      <div class="ml-1">
                                                          <p class="mb-0"><small>Отлично</small></p>
                                                          <small>
                                                              <strong>88 </strong>
                                                              <span>отзывов</span>
                                                          </small>
                                                      </div>
                                                  </v-flex>
                                              </v-flex>
                                              <v-flex class="text-right" pt-0 mr-1>
                                                  <h6 class="m-0">372 $</h6>
                                                  <p class="price m-0">Цены за ночь от</p>
                                              </v-flex>
                                          </v-layout>
                                      </v-container>
                                  </v-flex>
                              </v-layout>
                          </v-card>
                      </div>
                  </v-card>
              </v-flex>
              <v-flex xs12 sm12 lg9 px-4 mt-3>
                  <v-card tile flat >
                      <v-card color="rgb(253, 238, 238)"  mt-4>
                          <v-card-text >
                              <h5 class="sale">Торопитесь! 66% объектов размещения на нашем сайте уже распроданы!</h5>
                              <p>Номера в городе Барселона пользуются спросом на выбранные вами даты. Забронируйте ваш, пока цены не выросли.</p>
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
                      <ticket
                              v-for="i in 3"
                              :key="i"
                      ></ticket>
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

  export default {
  name: "Home",
  data(){
    return{
      rating: 4,
      lunch: '',
      items: ['Лучшие результаты', 'По возрастанию цены', 'Варианты с высокими оценками', 'Секретные предложения'],
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
  components: {Ticket,}
};
</script>

<style >
    .sale{
        color: #e12d2d;
    }
    .tag_filter{
        font-weight: bold;
    }
    .rec{
        font-weight: bold;
    }
    .application {
        line-height: 1 !important;
    }
    .main_styles span{
        margin-top: 5px;
    }
    .main_styles a{
        font-size: 14px;
    }
    .main_styles h6{
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
