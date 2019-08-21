<template>
    <v-card class="ticket">
        <v-layout mt-3>
            <v-flex sm4>
                <v-item-group
                        v-model="selected"
                        multiple
                >
                    <v-row>
                        <v-col
                                cols="12"
                                md="12"
                                class="py-0"
                        >
                            <v-item v-slot:default="{ active, toggle }">
                                <v-img
                                        src="//pix5.agoda.net/hotelImages/566538/-1/20e5402f389a16d5f2a997c4e95e8679.jpg?s=450x450"
                                        height="250"
                                        class="text-right pa-2"
                                        @click="toggle"
                                >
                                    <v-btn
                                            icon
                                            dark
                                    >
                                        <v-icon>
                                            {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                                        </v-icon>
                                    </v-btn>
                                </v-img>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-item-group>
                <!--<v-carousel
                        :continuous="false"
                        :cycle="cycle"
                        :show-arrows="false"
                        hide-delimiter-background
                        hide-delimiters
                        height="300"
                >
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="slider_img"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>-->
                <v-sheet light class="mx-auto">
                    <v-slide-group
                            v-model="model"
                            :show-arrows="false"
                            :center-active="true"
                    >
                        <v-slide-item
                                v-for="(item,i) in items"
                                :key="i"
                                v-slot:default="{ active, toggle }"
                        >
                            <v-card
                                    :color="active ? 'primary' : 'grey lighten-1'"
                                    height="50" width="60"
                                    @click="slider(item.src)"
                            >
                                <v-img
                                        :src="item"
                                        height="50"
                                        class="text-right pa-2"
                                ></v-img>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-flex>
            <v-flex sm-5>
                    <v-layout column pl-3 pt-1>
                        <v-flex class="text-left">
                            <router-link :to="{name:'Hotel',params:{id: 1}}">
                                <h4><a class="">Catalonia Square Hotel</a></h4>
                            </router-link>
                            <v-layout ma-0>
                                <v-rating
                                        v-model="rating"
                                        background-color="#ffa726"
                                        color="#ffa726" dense small
                                ></v-rating>
                                <a href="#" class="caption pl-2"><p><v-icon small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</p></a>
                            </v-layout>
                            <v-tooltip color="black" top>
                                <template v-slot:activator="{ on }">
                                    <v-chip-group
                                            multiple
                                            column
                                            active-class="primary--text"
                                    >
                                        <v-chip
                                                label
                                                outlined
                                                color="black"
                                                small
                                                class="my-0"
                                                v-on="on"
                                        >Exceptional location</v-chip>
                                        <v-chip
                                                label
                                                outlined
                                                color="black"
                                                small
                                                class="my-0"
                                                v-on="on"
                                        >City center</v-chip>
                                    </v-chip-group>
                                </template>
                                <v-layout>
                                    <span class="mr-2"><v-icon small dark>mdi-map-marker</v-icon>Exceptional location</span>
                                    <span><v-icon small dark>mdi-subway-variant</v-icon>City center</span>
                                </v-layout>
                            </v-tooltip>
                            <v-tooltip color="black" top>
                                <template v-slot:activator="{ on }">
                                    <v-chip-group  column>
                                        <v-chip
                                                label
                                                outlined
                                                color="success"
                                                small
                                                class="my-0"
                                                v-on="on"
                                        >Breakfast</v-chip>
                                        <v-chip
                                                label
                                                outlined
                                                color="success"
                                                small
                                                class="my-0"
                                                v-on="on"
                                        >Free cancellation</v-chip>
                                        <v-chip
                                                label
                                                outlined
                                                color="success"
                                                small
                                                class="my-0"
                                                v-on="on"
                                        >Pay at the hotel</v-chip>
                                    </v-chip-group>
                                </template>
                                <v-layout column class="caption">
                                    <p>Your options here include:</p>
                                    <span class="mr-4"><v-icon color="#32a923" samll dark>mdi-coffee-outline</v-icon>Breakfast</span>
                                    <span class="mr-4"><v-icon color="#32a923" samll dark>mdi-air-conditioner</v-icon>Free cancellation</span>
                                    <span class="mr-4"><v-icon color="#32a923" small dark>mdi-cash-100</v-icon>Pay at the hotel</span>
                                </v-layout>
                            </v-tooltip>
                            <v-chip
                                    color="#dde9fd"
                                    text-color="#396fc6"
                                    class="my-0 font-weight-bold"
                                    small label
                            >
                                <v-avatar left>
                                    <v-icon small>mdi-medal</v-icon>
                                </v-avatar>
                                Best price for 5-star properties
                            </v-chip>
                            <p class="reserve">
                                <v-chip
                                        color="red  accent-4"
                                        text-color="white"
                                        class="my-1 font-weight-bold"
                                        small label
                                >
                                    Popular!
                                </v-chip>
                                Last booked 9 hours ago
                            </p>
                        </v-flex>
                    </v-layout>
            </v-flex>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-flex sm3>
                <v-col class="text-right fill-height align-center" pa-0>
                    <v-chip
                            color="red  accent-4"
                            text-color="white"
                            class="my-1 font-weight-bold"
                            small label
                    >
                        ONLY 2 LEFT
                    </v-chip>
                    <v-tooltip color="black" top>
                        <template v-slot:activator="{ on }">
                            <v-chip
                                    color="#d8eed5"
                                    text-color="success"
                                    class="my-0 font-weight-bold"
                                    small label
                                    v-on="on"
                            >
                                <v-avatar left>
                                    <v-icon ma-0 x-small>mdi-arrow-bottom-right</v-icon>
                                </v-avatar>
                                <small> PRICE DROPPED BY 18%</small>
                            </v-chip>
                        </template>
                        <span>Top tooltip</span>
                    </v-tooltip>
                    <div class="caption"><small>Nightly rates as low as</small></div>
                    <div class="title past_price font-weight-bold">372</div>
                    <div class="title price gray font-weight-bold">$ <span>238</span></div>
                    <v-chip
                            color="red  accent-4"
                            text-color="white"
                            class="my-1 font-weight-bold text-uppercase"
                            small label
                    >
                        Make your offer
                    </v-chip>
                </v-col>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
  export default {
    name: 'Ticket',
    data(){
      return {
        selected: [],
        rating: 5,
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
        ],
        model: null,
        slider_img: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      }
    },
    created(){},
    methods: {
      slider(item){
        this.slider_img = item;
      },
    }
  };
</script>

<style >
    .reserve{
        color: #d50000;
        font-size: 13px;
    }
    .ticket .v-slide-group__next, .v-slide-group__prev {
        min-width: 16px !important;
    }
    .past_price{
        color: gray;
        text-decoration: line-through;
        text-decoration-color: #d50000;
    }
    .price {
        color: gray;
    }
    .price span{
        color: #d50000;
    }
</style>
