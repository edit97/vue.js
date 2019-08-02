<template>
    <v-card class="ticket">
        <v-layout mt-3>
            <v-flex sm3>
                <v-system-bar lights-out></v-system-bar>
                <v-carousel
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
                </v-carousel>
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
            <v-flex>
                <v-container grid-list-lg pa-1>
                    <v-layout column pt-1>
                        <v-flex class="text-left">
                            <h4><a>OD Barcelona</a></h4>
<!--                            <router-link to="/hotel">Перейти к Foo</router-link>-->
<!--                            <router-view></router-view>-->
                            <v-rating
                                    v-model="rating"
                                    background-color="#ffa726"
                                    color="#ffa726" dense
                            ></v-rating>
                            <a href="#"><p><v-icon>mdi-map-marker</v-icon>Эшампле, Барселона - Посмотреть на карте</p></a>
                            <v-tooltip color="black" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn style="font-size: 11px" height="20"  class="ma-2" tile outlined color="black" v-on="on">
                                        <small>Отличное расположение</small>
                                    </v-btn>
                                </template>
                                <v-layout>
                                    <span class="mr-2"><v-icon dark>mdi-map-marker</v-icon>Отличное расположение</span>
                                    <span><v-icon dark>mdi-subway-variant</v-icon>Ближайший транспорт</span>
                                </v-layout>
                            </v-tooltip>
                            <v-tooltip color="black" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn style="font-size: 11px" height="20"  class="ma-2" tile outlined color="black" v-on="on">
                                        <small>Ближайший транспорт</small>
                                    </v-btn>
                                </template>
                                <v-layout>
                                    <span class="mr-2"><v-icon dark>mdi-map-marker</v-icon>Отличное расположение</span>
                                    <span><v-icon dark>mdi-subway-variant</v-icon>Ближайший транспорт</span>
                                </v-layout>
                            </v-tooltip>
                            <v-tooltip color="black" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn style="font-size: 11px" height="20"  class="ma-2" tile outlined color="success" v-on="on">
                                        <small>Завтрак</small>
                                    </v-btn>
                                </template>
                                <v-flex>
                                    <p>Некоторые варианты включают:</p>
                                    <span class="mr-2"><v-icon color="#32a923" dark>mdi-coffee-outline</v-icon>Завтрак</span>
                                    <span><v-icon color="#32a923" dark>mdi-cash-100</v-icon>Оплата объекту размещения</span>
                                </v-flex>
                            </v-tooltip>
                            <v-tooltip color="black" top>
                            <template v-slot:activator="{ on }">
                                <v-btn style="font-size: 11px" height="20"  class="ma-2" tile outlined color="success" v-on="on">
                                    <small>Оплата объекту размещения</small>
                                </v-btn>
                            </template>
                            <v-flex>
                                <p>Некоторые варианты включают:</p>
                                <span class="mr-2"><v-icon color="#32a923" dark>mdi-coffee-outline</v-icon>Завтрак</span>
                                <span><v-icon color="#32a923" dark>mdi-cash-100</v-icon>Оплата объекту размещения</span>
                            </v-flex>
                        </v-tooltip>
                            <v-btn  height="20"  class="ma-2" tile  color="#dde9fd" dark>
                                <small style="color: #396fc6; font-weight: bold"><v-icon style="font-size: 15px;" color="#396fc6">mdi-medal</v-icon>Лучшая цена среди 5-звездных отелей</small>
                            </v-btn>
                            <p class="reserve">
                                <v-btn  height="20"  class="ma-2" tile  color="red  accent-4" dark>
                                    <small>Пользуется спросом!</small>
                                </v-btn>Самое недавнее бронирование: 7 ч. назад
                            </p>
                            <p><v-icon mr-2>mdi-account-group</v-icon>94% гостей советуют этот вариант</p>
                            <v-tooltip color="black" class="text-left" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn  height="30"  class="ma-2 w-100" tile  color="#f8f6fb" dark v-on="on">
                                        <small style="color: #6b4c9f; font-weight: bold">Удобства, идеальные для семей</small>
                                    </v-btn>
                                </template>
                                <v-flex>
                                    <p>Идеально для семей и групп:</p>
                                    <span class="mr-2"><v-icon color="#6b4c9f" dark>mdi-coffee-outline</v-icon>Завтрак</span>
                                    <span><v-icon color="#6b4c9f" dark>mdi-cash-100</v-icon>Оплата объекту размещения</span>
                                </v-flex>
                            </v-tooltip>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-card-actions p-0>
                <v-flex class="text-right align-bottom" my-5>
                    <v-flex row ml-3 p-0>
                        <div class="mr-2 ">
                            <p class="mb-0">Отлично</p>
                            <small>
                                <strong>88 </strong>
                                <span>отзывов</span>
                            </small>
                        </div>
                        <v-btn depressed  dark color="#5392f9">8.3</v-btn>
                    </v-flex>
                    <v-btn  height="20"  class="ma-2 mt-5" tile  color="red accent-4" dark>
                        <small>  СКИДКА 63%</small>
                    </v-btn>
                    <br>
                    <v-tooltip color="black" top>
                        <template v-slot:activator="{ on }">
                            <v-btn style="font-size: 10px" height="20"  class="ma-2" tile outlined color="success" v-on="on">
                                <small>Цена снизилась на 16%</small>
                            </v-btn>
                        </template>
                        <span>Top tooltip</span>
                    </v-tooltip>
                    <h4>372 $</h4>
                    <small>Цены за ночь от</small>
                </v-flex>
            </v-card-actions>
        </v-layout>
    </v-card>
</template>

<script>
  export default {
    name: 'Ticket',
    data(){
      return {
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
</style>
