<template>
    <div class="main_styles">
        <iframe
                width="318"
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
                <v-flex row m-0>
                    <v-btn fab dark large class="mr-2" color="#32a923">
                        <v-icon dark>mdi-coffee</v-icon>
                    </v-btn>
                    <span>Показать варианты с <br> бесплатным завтраком</span>
                    <v-switch v-model="lunch" class="ml-2 mt-2"></v-switch>
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
                                <a>Vale Apartments Barcelona</a>
                                <v-rating
                                        v-model="rating"
                                        background-color="pink lighten-3"
                                        color="pink" dense
                                ></v-rating>
                                <v-flex row>
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
                            <v-flex class="text-right" mr-1>
                                <h6>372 $</h6>
                                <small>Цены за ночь от</small>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
  export default {
    name: 'MainTab',
   data(){
      return {
        rating: 4,
        lunch: '',
      }
   },
  };
</script>

<style>
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
    .main_styles .v-rating .v-icon {
        /*font-size: 15px !important;*/
        padding: 0!important;
    }
    .main_styles .accent--text {
        color: #3667b9 !important;
        caret-color: #3667b9 !important;
    }
</style>
