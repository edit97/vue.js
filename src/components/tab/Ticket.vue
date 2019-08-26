<template>
    <div>
        <v-hover  v-slot:default="{ hover }">
            <v-card outlined flat :elevation="hover ? 2 : 0" class=" ticket">
                <v-layout>
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
                        <v-row class="px-3">
                            <v-col
                                    v-for="(item,i) in items"
                                    :key="i"
                                    cols="2"
                                    md="2"
                                    class="pa-0 zoom"
                            >
                                <v-menu open-on-hover top offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-img
                                                    :src="item"
                                                    height="50"
                                                    class="text-right pa-2"
                                                    v-on="on"
                                            ></v-img>
                                        </v-item>
                                    </template>

                                    <v-img
                                            :src="item"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col
                                    cols="2"
                                    md="2"
                                    class="pa-0 pointer"
                                    @click.stop="dialog = true"
                            >
                                <v-menu open-on-hover top offset-y >
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <div>
                                                <v-img
                                                        src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                        height="50"
                                                        class="text-right pa-2"
                                                        v-on="on"
                                                >
                                                    <v-overlay
                                                            absolute
                                                            color="black"
                                                            opacity="0.8"
                                                            class="caption"
                                                    >
                                                        See All
                                                    </v-overlay>
                                                </v-img>
                                            </div>
                                        </v-item>
                                    </template>

                                    <v-img
                                            src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>

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
                                                            v-for="(item, index) in images[tag]"
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
                                                            v-for="(item, index) in tags"
                                                            :key="item"
                                                            outlined
                                                            label
                                                    >
                                                        {{ item }} {{ (images[index].length) }}
                                                    </v-chip>
                                                </v-chip-group>
                                                <v-slide-group
                                                        v-model="model"
                                                        active-class="success"
                                                        show-arrows
                                                        class="modal_slide"
                                                >
                                                    <v-slide-item
                                                            v-for="(item, index) in images[tag]"
                                                            :key="index"
                                                            v-slot:default="{ active, toggle }"
                                                    >
                                                        <v-img
                                                                :src="item"
                                                                height="60"
                                                                width="85"
                                                                @click="toggle"
                                                                :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                        ></v-img>
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
                            </v-col>
                        </v-row>
                    </v-flex>
                    <v-flex sm-5>
                        <v-layout column pl-3 pt-1>
                            <v-flex class="text-left">
                                <router-link class="link text--black" :to="{name:'Hotel',params:{id: 1}}">
                                    <h4><a class="link black_text text--black">Catalonia Square Hotel</a></h4>
                                </router-link>
                                <v-layout ma-0>
                                    <v-rating
                                            v-model="rating"
                                            background-color="#ffa726"
                                            color="#ffa726" dense small
                                    ></v-rating>
                                    <a href="#" class="caption pl-2 link"><p><v-icon color="#1976d2" small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</p></a>
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
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-divider class="mx-3 my-0" inset vertical></v-divider>
                    <v-flex sm3>
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
                    </v-flex>
                </v-layout>
            </v-card>
        </v-hover>
        <v-hover  v-slot:default="{ hover }">
            <div>
                <v-chip
                        label dark
                        color="#24457c"
                        class="recommended_chip"
                >
                    Recommended for you
                </v-chip>
                <v-card outlined flat :elevation="hover ? 2 : 0" class=" ticket recommended">
                    <v-layout>
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
                            <v-row class="px-3">
                                <v-col
                                        v-for="(item,i) in items"
                                        :key="i"
                                        cols="2"
                                        md="2"
                                        class="pa-0"
                                >
                                    <v-menu open-on-hover top offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-item v-slot:default="{ active, toggle }">
                                                <v-img
                                                        :src="item"
                                                        height="50"
                                                        class="text-right pa-2"
                                                        v-on="on"
                                                ></v-img>
                                            </v-item>
                                        </template>

                                        <v-img
                                                :src="item"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
                                    </v-menu>
                                </v-col>
                                <v-col
                                        cols="2"
                                        md="2"
                                        class="pa-0"
                                        @click.stop="dialog = true"
                                >
                                    <v-menu open-on-hover top offset-y >
                                        <template v-slot:activator="{ on }">
                                            <v-item v-slot:default="{ active, toggle }">
                                                <div>
                                                    <v-img
                                                            src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                            height="50"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    >
                                                        <v-overlay
                                                                absolute
                                                                color="black"
                                                                opacity="0.8"
                                                                class="caption"
                                                        >
                                                            See All
                                                        </v-overlay>
                                                    </v-img>
                                                </div>
                                            </v-item>
                                        </template>

                                        <v-img
                                                src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
                                    </v-menu>

                                    <v-dialog
                                            v-model="dialog"
                                            max-width="950"
                                            dark
                                    >
                                        <!--                            <v-btn fab text>-->
                                        <!--                                <v-icon>mdi-close</v-icon>-->
                                        <!--                            </v-btn>-->
                                        <v-card color="black">
                                            <v-layout>
                                                <v-flex lg7 md7 sm7 pa-5>
                                                    <v-carousel v-model="model" hide-delimiters height="400">
                                                        <v-carousel-item
                                                                v-for="(item, index) in images[tag]"
                                                                :key="index"
                                                                :src="item"
                                                        ></v-carousel-item>
                                                    </v-carousel>
                                                    <v-chip-group
                                                            column
                                                            active-class="primary--text"
                                                            v-model="tag"
                                                    >
                                                        <v-chip
                                                                v-for="(item, index) in tags"
                                                                :key="item"
                                                                outlined
                                                                label
                                                        >
                                                            {{ item }} {{ (images[index].length) }}
                                                        </v-chip>
                                                    </v-chip-group>
                                                    <v-slide-group
                                                            v-model="model"
                                                            active-class="success"
                                                            show-arrows
                                                    >
                                                        <v-slide-item
                                                                v-for="(item, index) in images[tag]"
                                                                :key="index"
                                                                v-slot:default="{ active, toggle }"
                                                        >
                                                            <v-img
                                                                    :src="item"
                                                                    height="60"
                                                                    width="80"
                                                                    @click="toggle"
                                                                    :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                            ></v-img>
                                                        </v-slide-item>
                                                    </v-slide-group>
                                                </v-flex>
                                                <v-flex lg5 md5 sm5 pa-5>
                                                    <v-layout column justify-space-between fill-height>
                                                        <v-flex class="modal_text">
                                                            <p class="font-weight-bold">Property overview</p>
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
                                </v-col>
                            </v-row>
                        </v-flex>
                        <v-flex sm-5>
                            <v-layout column pl-3 pt-1>
                                <v-flex class="text-left">
                                    <router-link class="link text--black" :to="{name:'Hotel',params:{id: 1}}">
                                        <h4><a class="link black_text text--black">Catalonia Square Hotel</a></h4>
                                    </router-link>
                                    <v-layout ma-0>
                                        <v-rating
                                                v-model="rating"
                                                background-color="#ffa726"
                                                color="#ffa726" dense small
                                        ></v-rating>
                                        <a href="#" class="caption pl-2 link"><p><v-icon color="#1976d2" small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</p></a>
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
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-divider class="mx-3 my-0" inset vertical></v-divider>
                        <v-flex sm3>
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
                        </v-flex>
                    </v-layout>
                </v-card>
            </div>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-card outlined flat :elevation="hover ? 2 : 0" class=" ticket header_the_best">
                <v-list-item class="header_title">
                    <v-chip class="text-uppercase header_chip" color="#8c69ca" dark pill>
                        <v-avatar
                                left
                                color="white"
                        >
                            <v-btn small class="header_title" outlined fab color="#8c69ca">
                                <v-icon  color="#8c69ca">mdi-medal</v-icon>
                            </v-btn>
                        </v-avatar>
                        5-star hotels
                    </v-chip>
                    <v-list-item-content>
                        <p class="body-2 header_text">This property has the best overall guest rating in its category*</p>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-layout>
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
                        <v-row class="px-3">
                            <v-col
                                    v-for="(item,i) in items"
                                    :key="i"
                                    cols="2"
                                    md="2"
                                    class="pa-0"
                            >
                                <v-menu open-on-hover top offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-img
                                                    :src="item"
                                                    height="50"
                                                    class="text-right pa-2"
                                                    v-on="on"
                                            ></v-img>
                                        </v-item>
                                    </template>

                                    <v-img
                                            :src="item"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col
                                    cols="2"
                                    md="2"
                                    class="pa-0"
                                    @click.stop="dialog = true"
                            >
                                <v-menu open-on-hover top offset-y >
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <div>
                                                <v-img
                                                        src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                        height="50"
                                                        class="text-right pa-2"
                                                        v-on="on"
                                                >
                                                    <v-overlay
                                                            absolute
                                                            color="black"
                                                            opacity="0.8"
                                                            class="caption"
                                                    >
                                                        See All
                                                    </v-overlay>
                                                </v-img>
                                            </div>
                                        </v-item>
                                    </template>

                                    <v-img
                                            src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>

                                <v-dialog
                                        v-model="dialog"
                                        max-width="950"
                                        dark
                                >
                                    <!--                            <v-btn fab text>-->
                                    <!--                                <v-icon>mdi-close</v-icon>-->
                                    <!--                            </v-btn>-->
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg7 md7 sm7 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images[tag]"
                                                            :key="index"
                                                            :src="item"
                                                    ></v-carousel-item>
                                                </v-carousel>
                                                <v-chip-group
                                                        column
                                                        active-class="primary--text"
                                                        v-model="tag"
                                                >
                                                    <v-chip
                                                            v-for="(item, index) in tags"
                                                            :key="item"
                                                            outlined
                                                            label
                                                    >
                                                        {{ item }} {{ (images[index].length) }}
                                                    </v-chip>
                                                </v-chip-group>
                                                <v-slide-group
                                                        v-model="model"
                                                        active-class="success"
                                                        show-arrows
                                                >
                                                    <v-slide-item
                                                            v-for="(item, index) in images[tag]"
                                                            :key="index"
                                                            v-slot:default="{ active, toggle }"
                                                    >
                                                        <v-img
                                                                :src="item"
                                                                height="60"
                                                                width="80"
                                                                @click="toggle"
                                                                :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                        ></v-img>
                                                    </v-slide-item>
                                                </v-slide-group>
                                            </v-flex>
                                            <v-flex lg5 md5 sm5 pa-5>
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex class="modal_text">
                                                        <p class="font-weight-bold">Property overview</p>
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
                            </v-col>
                        </v-row>
                    </v-flex>
                    <v-flex sm-5>
                        <v-layout column pl-3 pt-1>
                            <v-flex class="text-left">
                                <router-link class="link text--black" :to="{name:'Hotel',params:{id: 1}}">
                                    <h4><a class="link black_text text--black">Catalonia Square Hotel</a></h4>
                                </router-link>
                                <v-layout ma-0>
                                    <v-rating
                                            v-model="rating"
                                            background-color="#ffa726"
                                            color="#ffa726" dense small
                                    ></v-rating>
                                    <a href="#" class="caption pl-2 link"><p><v-icon color="#1976d2" small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</p></a>
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
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-divider class="mx-3 my-0" inset vertical></v-divider>
                    <v-flex sm3>
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
                    </v-flex>
                </v-layout>
            </v-card>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-card outlined flat :elevation="hover ? 2 : 0" class=" ticket header_alarm">
                <v-list-item class="pl-0 pr-3 alarm_content">
                    <div class="alarm_icon">
                        <v-icon class="pa-2" large color="white">mdi-alarm</v-icon>
                    </div>
                    <v-list-item-content class="white--text py-1 px-2">
                        <div class="body-2 font-weight-bold">Your Daily Deal</div>
                        <div class="caption">Book today or lose this price!</div>
                    </v-list-item-content>
                    <v-list-item-action  class="flex-row white--text">
                        <p class="caption">Deal expires in</p>
                        <div class="timer ml-2 px-2">{{time}}</div>
                    </v-list-item-action>
                </v-list-item>
                <v-layout>
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
                        <v-row class="px-3">
                            <v-col
                                    v-for="(item,i) in items"
                                    :key="i"
                                    cols="2"
                                    md="2"
                                    class="pa-0"
                            >
                                <v-menu open-on-hover top offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-img
                                                    :src="item"
                                                    height="50"
                                                    class="text-right pa-2"
                                                    v-on="on"
                                            ></v-img>
                                        </v-item>
                                    </template>

                                    <v-img
                                            :src="item"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col
                                    cols="2"
                                    md="2"
                                    class="pa-0"
                                    @click.stop="dialog = true"
                            >
                                <v-menu open-on-hover top offset-y >
                                    <template v-slot:activator="{ on }">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <div>
                                                <v-img
                                                        src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                                        height="50"
                                                        class="text-right pa-2"
                                                        v-on="on"
                                                >
                                                    <v-overlay
                                                            absolute
                                                            color="black"
                                                            opacity="0.8"
                                                            class="caption"
                                                    >
                                                        See All
                                                    </v-overlay>
                                                </v-img>
                                            </div>
                                        </v-item>
                                    </template>

                                    <v-img
                                            src="https://pix6.agoda.net/hotelImages/566538/-1/719a596c109513eab63c55d6cd7822d2.jpg?s=1024x768"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>

                                <v-dialog
                                        v-model="dialog"
                                        max-width="950"
                                        dark
                                >
                                    <!--                            <v-btn fab text>-->
                                    <!--                                <v-icon>mdi-close</v-icon>-->
                                    <!--                            </v-btn>-->
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg7 md7 sm7 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images[tag]"
                                                            :key="index"
                                                            :src="item"
                                                    ></v-carousel-item>
                                                </v-carousel>
                                                <v-chip-group
                                                        column
                                                        active-class="primary--text"
                                                        v-model="tag"
                                                >
                                                    <v-chip
                                                            v-for="(item, index) in tags"
                                                            :key="item"
                                                            outlined
                                                            label
                                                    >
                                                        {{ item }} {{ (images[index].length) }}
                                                    </v-chip>
                                                </v-chip-group>
                                                <v-slide-group
                                                        v-model="model"
                                                        active-class="success"
                                                        show-arrows
                                                >
                                                    <v-slide-item
                                                            v-for="(item, index) in images[tag]"
                                                            :key="index"
                                                            v-slot:default="{ active, toggle }"
                                                    >
                                                        <v-img
                                                                :src="item"
                                                                height="60"
                                                                width="80"
                                                                @click="toggle"
                                                                :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                        ></v-img>
                                                    </v-slide-item>
                                                </v-slide-group>
                                            </v-flex>
                                            <v-flex lg5 md5 sm5 pa-5>
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex class="modal_text">
                                                        <p class="font-weight-bold">Property overview</p>
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
                            </v-col>
                        </v-row>
                    </v-flex>
                    <v-flex sm-5>
                        <v-layout column pl-3 pt-1>
                            <v-flex class="text-left">
                                <router-link class="link text--black" :to="{name:'Hotel',params:{id: 1}}">
                                    <h4><a class="link black_text text--black">Catalonia Square Hotel</a></h4>
                                </router-link>
                                <v-layout ma-0>
                                    <v-rating
                                            v-model="rating"
                                            background-color="#ffa726"
                                            color="#ffa726" dense small
                                    ></v-rating>
                                    <a href="#" class="caption pl-2 link"><p><v-icon color="#1976d2" small>mdi-map-marker</v-icon>Eixample, Barcelona - View on map</p></a>
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
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-divider class="mx-3 my-0" inset vertical></v-divider>
                    <v-flex sm3>
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
                    </v-flex>
                </v-layout>
            </v-card>
        </v-hover>
    </div>
</template>

<script>
  export default {
    name: 'Ticket',
    data(){
      return {
        selected: [],
        dialog: false,
        tag: 0,
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
        tags: [
          'All',
          'Rooms',
          'Property views',
          'Facilities',
          'Dining',
          'Shopping',
          'Nearby attraction',
        ],
        items: [
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
          },
          {
            src: 'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
          },
        ],
        images: [
          [
            'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
          [
            'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
          ],
          [
            'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
          [
            'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
          [
            'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
          [
            'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
          [
            'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
          ],
        ],
        model: 0,
      }
    },
    created(){},
    methods: {},
    computed: {
      time(){
        return new Date().toLocaleTimeString();
      }
    }
  };
</script>

<style >
    .ticket {
        border-radius: 0 !important;
        margin-bottom: 3rem;
    }
    .zoom{
        cursor: zoom-in;
    }
    .pointer{
        cursor: pointer;
    }
    .recommended{
        border: 1px solid #24457c !important;
    }
    .recommended_chip{
        top: 3px;
    }
    .header_the_best{
        border: 3px solid #8c69ca !important;
    }
    .header_alarm{
        border: 2px solid #d50000 !important;
    }
    .alarm_icon{
        background-color: #b42424;
    }
    .alarm_content{
        background-color: #e12d2d;
    }
    .timer{
        background-color: #b42424;
    }
    .reserve{
        color: #d50000;
        font-size: 13px;
    }
    .coupon{
        color: #28871c;
        font-size: 11px;
    }
    .header_title .v-chip--pill .v-avatar {
        height: 40px!important;
        width: 40px!important;
    }
    .header_text{
        color: #8c69ca;
    }
    .header_chip{
        top: -22px;
    }
     .modal_text{
        line-height: 3rem !important;
    }
     .modal_slide .v-slide-group__next, .modal_slide .v-slide-group__prev {
        min-width: 15px !important;
    }
     .active_class{
        outline: 2px solid white;
    }
     .link {
         text-decoration: none;
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
    .ticket .v-menu--inline {
        display: block !important;
    }
    .black_text{
        color: black !important;
    }
</style>
