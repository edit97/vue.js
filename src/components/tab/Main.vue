<template>
    <div>
        <iframe
                width="300"
                height="120"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
        ></iframe>
        <p>Барселона: рекомендации для вас</p>
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
                            </v-flex>
                            <v-flex class="text-right" mr-1>
                                <h4>372 $</h4>
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
      }
   },
  };
</script>

<style scoped>
    p{
        font-weight: bold;
    }
    a{
        font-size: 14px;
    }
    h4{
        color: #e91e63;
    }
    .v-rating .v-icon {
        /*font-size: 15px !important;*/
        padding: 0!important;
    }
</style>
