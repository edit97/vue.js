<template>
    <v-hover  v-slot:default="{ hover }">
        <v-card outlined flat :elevation="hover ? 2 : 0" class=" ticket">
            <v-row>
                <v-col cols="4" class="py-0">
                    <v-item-group v-model="selected">
                        <v-row>
                            <v-col cols="12" class="py-0">
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-img
                                            src="//pix5.agoda.net/hotelImages/566538/-1/20e5402f389a16d5f2a997c4e95e8679.jpg?s=450x450"
                                            lazy-src="../../../public/images/no-image.png"
                                            height="250"
                                            class="text-right pa-2"
                                            @click="toggle"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-btn icon dark>
                                            <v-icon>
                                                {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                                            </v-icon>
                                        </v-btn>
                                    </v-img>
                                </v-item>
                            </v-col>
                        </v-row>
                        <v-menu open-on-hover top offset-y attach="menu">
                            <template v-slot:activator="{ on }">
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-row class="px-3" id="menu">
                                        <v-col
                                                v-for="(item,i) in $store.state.images[0]"
                                                v-if="i <= 10"
                                                :key="i"
                                                cols="2"
                                                md="2"
                                                class="pa-0 zoom border_white"
                                        >
                                            <v-img
                                                    :src="item"
                                                    lazy-src="../../../public/images/no-image.png"
                                                    @mouseover="mouseImgOver(item)"
                                                    @mouseout="mouseImgOut(item)"
                                                    height="50"
                                                    class="text-right pa-2"
                                                    v-on="on"
                                            >
                                                <template v-slot:placeholder>
                                                    <v-row
                                                            class="fill-height ma-0"
                                                            align="center"
                                                            justify="center"
                                                    >
                                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </v-col>
                                        <v-col
                                                cols="2"
                                                md="2"
                                                class="pa-0 pointer border_white"
                                                @click.stop="dialog = true"
                                        >
                                            <v-img
                                                    src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                    lazy-src="../../../public/images/no-image.png"
                                                    height="50"
                                                    class="text-right pa-2"
                                                    @mouseover="menu.src = 'https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768'"
                                                    v-on="on"
                                            >
                                                <template v-slot:placeholder>
                                                    <v-row
                                                            class="fill-height ma-0"
                                                            align="center"
                                                            justify="center"
                                                    >
                                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                                <v-overlay
                                                        absolute
                                                        color="black"
                                                        opacity="0.8"
                                                        class="caption"
                                                >
                                                    See All
                                                </v-overlay>
                                            </v-img>
                                        </v-col>
                                    </v-row>
                                </v-item>
                            </template>
                            <v-img
                                    :src="menu.src"
                                    lazy-src="../../../public/images/no-image.png"
                                    height="350"
                                    width="350"
                                    class="text-right pa-2"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                    >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-menu>
                    </v-item-group>
                </v-col>
                <v-col class="pa-0">
                    <router-link class="link text--black" :to="{name:'Hotel'}">
                        <span class="link black_text text--black title">Catalonia Square Hotel</span>
                    </router-link>

                    <v-layout ma-0>
                        <v-rating
                                v-model="rating"
                                background-color="#ffa726"
                                color="#ffa726" dense small
                        ></v-rating>
                        <a href="#" class="caption pl-2 link"><span><v-icon color="#1976d2" small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</span></a>
                    </v-layout>
                    <v-tooltip color="black" top>
                        <template v-slot:activator="{ on }">
                            <v-chip-group
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
                            <v-chip-group column>
                                <v-chip
                                        label
                                        outlined
                                        color="success"
                                        text-color="#28871c"
                                        small
                                        class="my-0"
                                        v-on="on"
                                ><span class="green_text">Breakfast</span></v-chip>
                                <v-chip
                                        label
                                        outlined
                                        color="success"
                                        small
                                        class="my-0"
                                        v-on="on"
                                ><span class="green_text">Free cancellation</span></v-chip>
                                <v-chip
                                        label
                                        outlined
                                        color="success"
                                        small
                                        class="my-0"
                                        v-on="on"
                                ><span class="green_text">Pay at the hotel</span></v-chip>
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
                    <p class="reserve mb-0">
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
                    <p class="coupon">
                        <v-chip
                                color="#d8eed5"
                                text-color="success"
                                class="my-1 font-weight-bold"
                                small label outlined
                                style="border: 2px dotted #4caf50; background-color: #d8eed5 !important;"
                        >
                            WEEKENDSALE
                        </v-chip>
                        Coupon Code WEEKENDSALE applied - $ 21 off!
                    </p>
                </v-col>
                <v-divider class="mx-3 my-0" inset vertical></v-divider>
                <v-col cols="3" class="py-0">
                    <v-layout column justify-end fill-height text-right>
                        <v-spacer></v-spacer>
                        <v-col>
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
                                            text-color="#28871c"
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
                    </v-layout>
                </v-col>
            </v-row>
            <v-dialog
                    v-model="dialog"
                    max-width="950"
                    dark
            >
                <v-card color="black">
                    <v-layout>
                        <v-flex lg7 md7 sm7 pa-5>
                            <v-carousel v-model="model" hide-delimiters height="400">
                                <v-carousel-item
                                        v-for="(item, index) in $store.state.images[tag]"
                                        :key="index"
                                        :src="item"
                                ></v-carousel-item>
                            </v-carousel>
                            <v-chip-group
                                    column mandatory
                                    active-class="primary--text"
                                    v-model="tag"
                            >
                                <v-chip
                                        v-for="(item, index) in $store.state.tags"
                                        :key="item"
                                        outlined
                                        label
                                >
                                    {{ item }} {{ ($store.state.images[index].length) }}
                                </v-chip>
                            </v-chip-group>
                            <v-slide-group
                                    v-model="model"
                                    active-class="success"
                                    show-arrows
                                    class="modal_slide"
                            >
                                <v-slide-item
                                        v-for="(item, index) in $store.state.images[tag]"
                                        :key="index"
                                        v-slot:default="{ active, toggle }"
                                >
                                    <v-img
                                            :src="item"
                                            lazy-src="../../../public/images/no-image.png"
                                            height="60"
                                            width="85"
                                            @click="toggle"
                                            :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-slide-item>
                            </v-slide-group>
                        </v-flex>
                        <v-divider vertical></v-divider>
                        <v-flex lg5 md5 sm5 pa-5>
                            <v-layout column justify-space-between fill-height>
                                <v-flex class="modal_text">
                                    <v-row class="d-flex justify-space-between">
                                        <p class="font-weight-bold pl-3">Property overview</p>
                                        <v-btn fab text right @click="dialog = !dialog">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-row>
                                    <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-wifi</v-icon>Free Wi-Fi in all rooms!</p>
                                    <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-air-conditioner</v-icon>Air conditioning</p>
                                    <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-broom</v-icon>Daily housekeeping</p>
                                    <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-glass-wine</v-icon>Bar</p>
                                    <p class="font-weight-bold">Nearby Attraction</p>
                                    <div class="caption">La Pedrera Casa Mila<span class="float-right">1.23 km</span></div>
                                    <div class="caption">Casa Batllo<span class="float-right">1.55 km</span></div>
                                    <div class="caption">Camp Nou<span class="float-right">2.39 km</span></div>
                                    <div class="caption">Parc Guell<span class="float-right">2.41 km</span></div>
                                    <p class="font-weight-bold">Dining, drinking and snacking</p>
                                    <p class="caption">Coffee/tea maker</p>
                                    <p class="caption">Mini bar</p>
                                </v-flex>
                                <v-flex>
                                    <v-layout class="justify-center fill-height align-end">
                                        <v-btn
                                                color="#5392f9"
                                                large bottom
                                                class="font-weight-bold align-center"
                                        >
                                            View property
                                        </v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-dialog>
        </v-card>
    </v-hover>
</template>

<script>
  export default {
    name: 'Property_card',
    data(){
      return {
        selected: null,
        dialog: false,
        model: 0,
        tag: 0,
        rating: 5,
        menu: {
          show: false,
          src: '',
        }
      }
    },
    methods: {
      mouseImgOver(item){
        this.menu.src = item;
      },
      mouseImgOut(){
        this.menu.src = ''
      }
    }
  };
</script>

<style scoped>
    .border_white{
        border-top: 1px solid white;
        border-right: 1px solid white;
    }
    .green_text{
    color: #28871c;
}
</style>
