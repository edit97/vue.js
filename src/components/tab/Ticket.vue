<template>
    <v-card>
        <v-layout mt-3>
            <v-flex sm3>
                <v-img
                        height="200"
                        src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                ></v-img>
                <v-item-group>
                    <v-layout wrap>
                        <v-flex
                                v-for="i in 10"
                                :key="i" xs2 md2 sm2 m-1>
                            <v-item>
                                <v-img
                                        src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                        height="50"
                                        class="text-right pa-2"
                                ></v-img>
                            </v-item>
                        </v-flex>
                    </v-layout>
                </v-item-group>
            </v-flex>
            <v-flex>
                <v-container grid-list-lg pa-3>
                    <v-layout column pt-1>
                        <v-flex class="text-left">
                            <h4><a>OD Barcelona</a></h4>
                            <v-rating
                                    v-model="rating"
                                    background-color="#ffa726"
                                    color="#ffa726" dense
                            ></v-rating>
                            <a href="#"><p><v-icon>mdi-map-marker</v-icon>Эшампле, Барселона - Посмотреть на карте</p></a>
                            <span><v-icon mr-2>mdi-account-group</v-icon>94% гостей советуют этот вариант</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-card-actions p-0>
                <v-flex class="text-right align-bottom" mt-5 mr-1>
                    <v-btn  height="20"  class="ma-2" tile  color="error" >
                        <small>  СКИДКА 63%</small>
                    </v-btn>
                    <br>
                    <v-tooltip top>
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
      }
    },
  };
</script>

<style scoped>

</style>
