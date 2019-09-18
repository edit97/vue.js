<template>
    <div>
        <v-row>
            <v-col cols="3">
                <div class="display-1">Select your room</div>
                <v-row class="pl-3">
                    <v-btn color="#5392f9" small outlined dark height="40" class="mr-2 mb-2 font-weight-bold">9.4</v-btn>
                    <div>
                        Exceptional<br>
                        <small>Room comfort & quality</small>
                    </div>
                </v-row>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="6" class="caption ml-2">
                <div class="mb-2 font-weight-bold">Popular facilities</div>
                <v-row class="blue_text">
                    <v-col class="py-0" cols="4">
                        <v-menu :open-on-hover="true" offset-y>
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <v-icon color="#5392f9" small left>mdi-dumbbell</v-icon>
                                    Fitness center
                                </div>
                            </template>
                            <v-img
                                    src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
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
                    </v-col>
                    <v-col class="py-0" cols="4">
                        <v-menu :open-on-hover="true" offset-y>
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <v-icon color="#5392f9" small left>mdi-glass-cocktail</v-icon>
                                    Bar
                                </div>
                            </template>
                            <v-img
                                    src="//pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=360x270"
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
                    </v-col>
                    <v-col class="py-0" cols="4">
                        <v-menu :open-on-hover="true" offset-y>
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <v-icon color="#5392f9" small left>mdi-account-tie</v-icon>
                                    Front desk [24-hour]
                                </div>
                            </template>
                            <v-img
                                    src="//pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=360x270"
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
                    </v-col>
                    <v-col class="py-0" cols="4">
                        <v-menu :open-on-hover="true" offset-y>
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <v-icon color="#5392f9" small left>mdi-pool</v-icon>
                                    Swimming pool
                                    [outdoor]
                                </div>
                            </template>
                            <v-img
                                    src="//pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=360x270"
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
                    </v-col>
                    <v-col class="py-0" cols="4">
                        <v-menu :open-on-hover="true" offset-y>
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <v-icon color="#5392f9" small left>mdi-silverware-fork-knife</v-icon>
                                    Restaurants
                                </div>
                            </template>
                            <v-img
                                    src="//pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=360x270"
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
                    </v-col>
                </v-row>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="text-right pt-0">
                <v-chip
                        label large outlined
                        color="#5392f9"
                        class="text-uppercase body-2 font-weight-bold mb-1"
                >
                    <v-icon color="#5392f9" class="pr-2 pl-1" small left>mdi-bookmark-multiple-outline</v-icon>
                    Compare prices
                </v-chip>
                <v-chip
                        label large outlined
                        color="#5392f9"
                        class="text-uppercase body-2 font-weight-bold"
                >
                    <v-icon color="#5392f9" class="pl-1" small left>mdi-bell-ring-outline</v-icon>
                    Get price alerts
                </v-chip>
                <div class="blue_text caption mt-1">
                    <v-icon class="mr-0" left small color="#36b66f">mdi-check-decagram</v-icon>
                    We price match!
                </div>
            </v-col>
        </v-row>
        <v-col>
            <!--Filter options checkboxes-->
            <v-row class="px-3">
                <span class="subtitle-1 font-weight-bold"><v-icon color="black">mdi-filter-variant</v-icon>Filter room options by:</span>
                <v-spacer></v-spacer>
                <v-btn text>Clear</v-btn>
            </v-row>

            <v-divider></v-divider>

            <v-row class="pa-3">
                <v-card tile outlined flat class="mr-3">
                    <el-checkbox class="pa-4" v-model="checked.breakfast">
                        <v-icon small class="mr-1">mdi-coffee</v-icon>Free breakfast (7)
                    </el-checkbox>
                </v-card>
                <v-card tile outlined flat class="mr-3">
                    <el-checkbox class="pa-4" v-model="checked.smoking">
                        <v-icon small class="mr-1">mdi-smoking-off</v-icon>Non-smoking (8)
                    </el-checkbox>
                </v-card>
                <v-card tile outlined flat class="mr-3">
                    <el-checkbox class="pa-4" v-model="checked.pay">
                        <v-icon small class="mr-1">mdi-cash-usd</v-icon>Pay at the hotel (10)
                    </el-checkbox>
                </v-card>
                <v-card tile outlined flat class="mr-3">
                    <el-checkbox class="pa-4" v-model="checked.twinBed">
                        <v-icon small class="mr-1">mdi-hotel</v-icon>Twin Bed (8)
                    </el-checkbox>
                </v-card>
            </v-row>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Double Room</span><br>
                        <span class="caption red--text">Last booked 7 hours ago</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="doubleRoom">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="doubleRoom">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_2"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                            cols="6" md="6"
                                            class="pa-0 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_3"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <p class="caption mb-1"><span class="flaticon-big-mattress pr-2 text--accent-2 icon_grey"></span>1 double bed</p>
                        <p class="caption"><v-icon class="pr-2" >mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="orange_card mb-3">
                            <v-layout>
                                <v-col class="pt-0" cols="12" sm="4" md="4">
                                    <v-row class="orange_card_header py-1 pl-3">Lowest price available!</v-row>
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <v-chip
                                            label
                                            color="#fdf3f3"
                                            text-color="#b42424"
                                    >
                                                    <span class="caption">
                                                        <span class="font-weight-bold"><v-icon small left>mdi-tag</v-icon>You found it!</span>
                                                        Cheapest price you've seen!
                                                    </span>
                                    </v-chip>
                                    <p class="red--text mt-5 mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">229</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption">This is a popular choice!</p>
                                    <p class="body-2 green_text">Limited availability</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="blue_card mb-3">
                            <v-layout>
                                <v-col class="pt-0" cols="12" sm="4" md="4">
                                    <v-row class="blue_card_header py-1 pl-3">Recommended for you</v-row>
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <v-chip
                                            label
                                            color="#fdf3f3"
                                            text-color="#b42424"
                                    >
                                                    <span class="caption">
                                                        <span class="font-weight-bold"><v-icon small left>mdi-tag</v-icon>You found it!</span>
                                                        Cheapest price you've seen!
                                                    </span>
                                    </v-chip>
                                    <p class="red--text mt-5 mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">269</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption">This is a popular choice!</p>
                                    <p class="body-2 green_text">Limited availability</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Superior Twin Room</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="superiorTwinRoom">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="superiorTwinRoom">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_2"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                            cols="6" md="6"
                                            class="pa-0 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_3"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <p class="caption green_text mb-1"><v-icon color="#85c150" class="pr-2" >mdi-wifi</v-icon>Free Wi-Fi</p>
                        <p class="caption mb-1"><span class="flaticon-king-size-bed-with-two-pillows pr-2 text--accent-2 icon_grey"></span>2 single beds</p>
                        <p class="caption mb-1"><v-icon class="pr-2" >mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                        <v-menu :open-on-hover="true" min-width="400" top offset-x light >
                            <template v-slot:activator="{ on }">
                                <p class="caption blue_text pointer" v-on="on">
                                    <v-icon class="pr-2" color="#5392f9">mdi-plus-circle-outline</v-icon>
                                    More features
                                </p>
                            </template>
                            <v-list>
                                <v-col class="caption">
                                    <p class=" font-weight-bold">Bathroom and Toiletries</p>
                                    <v-row class="pa-3">
                                        <v-icon>mdi-shower-head</v-icon>Shower
                                    </v-row>
                                    <p class=" font-weight-bold">Entertainment</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shower-head</v-icon>Free Wi-Fi in all rooms</v-col>
                                        <v-col>
                                            <div><v-icon>mdi-phone-in-talk</v-icon>Telephone</div>
                                            <div><v-icon>mdi-television</v-icon>Television</div>
                                        </v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Comforts</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-air-conditioner</v-icon>Air conditioning</v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Safety and security features</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shield-lock-outline</v-icon>In room safe box</v-col>
                                    </v-row>
                                </v-col>
                            </v-list>
                        </v-menu>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free Wi-Fi</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free Wi-Fi</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Run of House</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="runOfHouse">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="runOfHouse">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Superior Double or Twin Room with Terrace</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="superiorDoubleRoomTitle">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="superiorDoubleRoomTitle">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_2"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                            cols="6" md="6"
                                            class="pa-0 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_3"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <v-divider class="my-2"></v-divider>
                        <p class="caption font-weight-bold">Bed preference</p>
                        <el-radio v-model="radio" label="1" class="mr-0">
                            <span>1 king bed</span>
                            <span class="flaticon-king-size-bed-with-two-pillows pl-3"></span>
                        </el-radio>
                        <el-radio v-model="radio" label="2">
                            <span>2 single beds</span>
                            <span class="flaticon-big-mattress pl-3 pr-1"></span>
                            <span class="flaticon-big-mattress"></span>
                        </el-radio>
                        <v-divider class="my-2"></v-divider>
                        <p class="caption green_text mb-1"><v-icon color="#85c150" class="pr-2" >mdi-wifi</v-icon>Free Wi-Fi</p>
                        <p class="caption mb-1"><v-icon class="pr-2" >mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                        <p class="caption mb-1"><v-icon class="pr-2" >mdi-home-city-outline</v-icon> Balcony / terrace</p>
                        <v-menu :open-on-hover="true" min-width="400" top offset-x light >
                            <template v-slot:activator="{ on }">
                                <p class="caption blue_text pointer" v-on="on">
                                    <v-icon class="pr-2" color="#5392f9">mdi-plus-circle-outline</v-icon>
                                    More features
                                </p>
                            </template>
                            <v-list>
                                <v-col class="caption">
                                    <p class=" font-weight-bold">Bathroom and Toiletries</p>
                                    <v-row class="pa-3">
                                        <v-icon>mdi-shower-head</v-icon>Shower
                                    </v-row>
                                    <p class=" font-weight-bold">Entertainment</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shower-head</v-icon>Free Wi-Fi in all rooms</v-col>
                                        <v-col>
                                            <div><v-icon>mdi-phone-in-talk</v-icon>Telephone</div>
                                            <div><v-icon>mdi-television</v-icon>Television</div>
                                        </v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Comforts</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-air-conditioner</v-icon>Air conditioning</v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Safety and security features</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shield-lock-outline</v-icon>In room safe box</v-col>
                                    </v-row>
                                </v-col>
                            </v-list>
                        </v-menu>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free Wi-Fi</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free Wi-Fi</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Junior Suite for Single Use</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="juniorSuite">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="juniorSuite">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_2"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                            cols="6" md="6"
                                            class="pa-0 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_3"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <p class="caption mb-1"><span class="flaticon-big-mattress pr-2 text--accent-2 icon_grey"></span>1 double bed</p>
                        <p class="caption mb-1"><v-icon class="pr-2" >mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Junior Suite</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="juniorSuiteRoom">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="juniorSuiteRoom">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_2"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                            cols="6" md="6"
                                            class="pa-0 pr-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_3"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                @mouseout="mouseImgOut()"
                                                height="60"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <v-divider class="my-2"></v-divider>
                        <p class="caption font-weight-bold">Bed preference</p>
                        <el-radio v-model="radio" label="1" class="mr-0">
                            <span>1 king bed</span>
                            <span class="flaticon-king-size-bed-with-two-pillows pl-3"></span>
                        </el-radio>
                        <el-radio v-model="radio" label="2">
                            <span>2 single beds</span>
                            <span class="flaticon-big-mattress pl-3 pr-1"></span>
                            <span class="flaticon-big-mattress"></span>
                        </el-radio>
                        <v-divider class="my-2"></v-divider>
                        <p class="caption mb-1"><v-icon class="pr-2" >mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">341</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">370</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Pay at the hotel</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">407</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="65"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Reserve</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">422</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Superior Room</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="superiorRoom">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="superiorRoom">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <p class="caption green_text mb-1"><v-icon color="#85c150" class="pr-2" >mdi-wifi</v-icon>Free Wi-Fi</p>
                        <v-menu :open-on-hover="true" min-width="400" top offset-x light >
                            <template v-slot:activator="{ on }">
                                <p class="caption blue_text pointer" v-on="on">
                                    <v-icon class="pr-2" color="#5392f9">mdi-plus-circle-outline</v-icon>
                                    More features
                                </p>
                            </template>
                            <v-list>
                                <v-col class="caption">
                                    <p class=" font-weight-bold">Bathroom and Toiletries</p>
                                    <v-row class="pa-3">
                                        <v-icon>mdi-shower-head</v-icon>Shower
                                    </v-row>
                                    <p class=" font-weight-bold">Entertainment</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shower-head</v-icon>Free Wi-Fi in all rooms</v-col>
                                        <v-col>
                                            <div><v-icon>mdi-phone-in-talk</v-icon>Telephone</div>
                                            <div><v-icon>mdi-television</v-icon>Television</div>
                                        </v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Comforts</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-air-conditioner</v-icon>Air conditioning</v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Safety and security features</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shield-lock-outline</v-icon>In room safe box</v-col>
                                    </v-row>
                                </v-col>
                            </v-list>
                        </v-menu>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Doble Superior</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="superiorRoom">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="superiorRoom">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                        <p class="caption green_text mb-1"><v-icon color="#85c150" class="pr-2" >mdi-wifi</v-icon>Free Wi-Fi</p>
                        <v-menu :open-on-hover="true" min-width="400" top offset-x light >
                            <template v-slot:activator="{ on }">
                                <p class="caption blue_text pointer" v-on="on">
                                    <v-icon class="pr-2" color="#5392f9">mdi-plus-circle-outline</v-icon>
                                    More features
                                </p>
                            </template>
                            <v-list>
                                <v-col class="caption">
                                    <p class=" font-weight-bold">Bathroom and Toiletries</p>
                                    <v-row class="pa-3">
                                        <v-icon>mdi-shower-head</v-icon>Shower
                                    </v-row>
                                    <p class=" font-weight-bold">Entertainment</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shower-head</v-icon>Free Wi-Fi in all rooms</v-col>
                                        <v-col>
                                            <div><v-icon>mdi-phone-in-talk</v-icon>Telephone</div>
                                            <div><v-icon>mdi-television</v-icon>Television</div>
                                        </v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Comforts</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-air-conditioner</v-icon>Air conditioning</v-col>
                                    </v-row>
                                    <p class=" font-weight-bold">Safety and security features</p>
                                    <v-row class="">
                                        <v-col><v-icon>mdi-shield-lock-outline</v-icon>In room safe box</v-col>
                                    </v-row>
                                </v-col>
                            </v-list>
                        </v-menu>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card outlined flat color="#f7f7f7" class="mb-5">
                <v-card-title class="doubleRoomTitle">
                    <v-col class="pa-0">
                        <span class="font-weight-bold subtitle-2">Run of House</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-chip pill  outlined color="#488bf8">
                        <v-avatar
                                left dark
                                color="#488bf8"
                                size="50"
                        >
                            <v-icon color="white">mdi-message-text-outline</v-icon>
                        </v-avatar>
                        Ask about this room
                    </v-chip>
                </v-card-title>
                <v-layout class="pr-3">
                    <v-flex sm2 md2 pl-3 py-3>
                        <v-menu open-on-hover right offset-x attach="runOfHouse">
                            <template v-slot:activator="{ on }">
                                <v-row class="px-3" id="runOfHouse">
                                    <v-col
                                            cols="12" md="12"
                                            class="pa-0 mb-1 zoom"
                                    >
                                        <v-img
                                                :src="filter_room_img.img_1"
                                                lazy-src="../../../public/images/no-image.png"
                                                @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                @mouseout="mouseImgOut()"
                                                height="120"
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
                                </v-row>
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
                        <v-btn class="my-1" color="#0283df" small text @click.stop="dialog = true">
                            <small>Room photos and details</small>
                        </v-btn>
                    </v-flex>
                    <v-flex sm10 md10 pl-3>
                        <v-layout class="caption font-weight-bold">
                            <v-col class="pl-0" cols="12" sm="4" md="4">
                                Benefits
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Sleeps
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Price per night
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="1" md="1">
                                Rooms
                            </v-col>
                            <v-col class="pl-0" cols="12" sm="3" md="3">
                                Most booked
                            </v-col>
                        </v-layout>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">250</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                        <v-card outlined flat class="mb-3">
                            <v-layout>
                                <v-col class="" cols="12" sm="4" md="4">
                                    <strong class="caption font-weight-bold">Your price includes:</strong>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Free breakfast for 2</div>
                                    <div class="subtitle-2"><v-icon color="#32a923">mdi-check</v-icon>Cancellation policy</div>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center orange_card_kids" cols="12" sm="1" md="1">
                                    <div class="d-flex justify-center">
                                        <v-icon mt-2 large>mdi-human-female-girl</v-icon>
                                        <v-icon mt-2 large>mdi-human-male-boy</v-icon>
                                    </div>
                                    <p class="caption grey--text mb-0">2 kids under 1 year stay </p>
                                    <p class="green_text caption">FREE!</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="pl-0 orange_card_price" cols="12" sm="3" md="3">
                                    <p class="red--text mb-0 body-1 text-right">&#36;<span class="display-1 font-weight-medium">293</span></p>
                                    <p class="grey--text caption text-right">Price per night as low as</p>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="d-flex" cols="12" sm="1" md="1">
                                    <v-select
                                            :items="[0,1]"
                                            outlined
                                    ></v-select>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col class="text-center" cols="12" sm="3" md="3">
                                    <v-btn
                                            x-large dark
                                            depressed
                                            min-width="150"
                                            min-height="40"
                                            color="#0283df"
                                    >
                                        <span class="caption font-weight-bold">Book now</span>
                                    </v-btn>
                                    <p class="caption text">It only takes 2 minutes</p>
                                    <p class="body-2 red--text">Our last room!</p>
                                </v-col>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-col>
                <v-row>
                    <v-img
                            class="white--text fill-height"
                            height="300px"
                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                            lazy-src="../../../public/images/no-image.png"
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
                        <v-card-title class="align-end fill-height">
                            <h2 class="pa-5 heading_overlay_text">Vale Apartments Barcelona</h2>
                        </v-card-title>
                    </v-img>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <span class="title">An overview</span>
                    </v-col>
                    <v-col class="body-2" cols="">
                        <span class="font-weight-bold">Vspa Apartments Barcelona</span>
                        offers accommodations in Barcelona. Casa Batllo is 1969 feet away. Free WiFi is offered
                        .
                        The accommodations features a flat-screen TV and a modern system that allows to control
                        the lights
                        via a tablet. There is eco-friendly system for the air conditioning and warm water.
                        There is a seating
                        and/or dining area in some apartments. There is
                        <span>also a kitchen, fitted with a dishwasher. An oven and microwave are also available,
                                      as well as a coffee machine. There is a private bathroom with a bath or shower in each of
                                      them. Bed linen and towels are provided. La Pedrera is 2297 feet from Vale Apartments Barcelona .
                                      The nearest airport is Barcelona El Prat Airport, 7.5 mi from Vale Apartments Barcelona.
                                  </span>
                    </v-col>
                </v-row>
            </v-col>

            <v-dialog
                    v-model="dialog"
                    max-width="1200"
                    dark
            >
                <v-card tile color="black" style="overflow: hidden">
                    <v-layout>
                        <v-flex lg8 md8 sm8 >
                            <v-carousel v-model="model" hide-delimiters height="400">
                                <v-carousel-item
                                        v-for="(item, index) in room_images"
                                        :key="index"
                                        :src="item"
                                ></v-carousel-item>
                            </v-carousel>
                            <v-slide-group
                                    v-model="model"
                                    active-class="success"
                                    show-arrows
                                    class="modal_slide"
                            >
                                <v-slide-item
                                        v-for="(item, index) in room_images"
                                        :key="index"
                                        v-slot:default="{ active, toggle }"
                                >
                                    <v-img
                                            :src="item"
                                            lazy-src="../../../public/images/no-image.png"
                                            height="80"
                                            width="110"
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
                        <v-flex lg4 md4 sm4  class="hotel_modal_text">
                            <v-layout column justify-space-between fill-height>
                                <v-card tile light class="px-5">
                                    <v-row class="d-flex justify-space-between align-end">
                                        <p class="title mb-0 pl-3">Double Room</p>
                                        <v-btn light fab text right @click="dialog = !dialog">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-row>
                                    <p class="caption grey--text mb-0">Starts from</p>
                                    <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                </v-card>
                                <v-flex style="overflow: hidden auto; height: 300px">
                                    <div class="pa-5">
                                        <div class="caption font-weight-bold">Guest ratings</div>
                                        <div class="body-2 grey--text text-right">175 reviews</div>
                                        <el-progress :percentage="95" :show-text="false"></el-progress>
                                        <v-row class="body-2 mt-1 px-3 justify-space-between">
                                            <div>Room comfort and quality</div>
                                            <div class="blue_text">Exceptional 9.4</div>
                                        </v-row>
                                        <el-progress class="mt-3" :percentage="95" :show-text="false"></el-progress>
                                        <v-row class="body-2 mt-1 px-3 justify-space-between">
                                            <div>Cleanliness</div>
                                            <div class="blue_text">Exceptional 9.4</div>
                                        </v-row>
                                    </div>
                                    <v-divider class="my-2" color="#ebebeb"></v-divider>
                                    <div class="px-5">
                                        <p class="caption font-weight-bold mb-0">Features</p>
                                        <v-row class="caption">
                                            <v-col cols="6">
                                                <span class="flaticon-king-size-bed-with-two-pillows"></span><span class=" pl-2">1 double bed</span>
                                                <div class="green_text"><v-icon left color="#85c150">mdi-wifi</v-icon>Free Wi-Fi</div>
                                            </v-col>
                                            <v-col cols="6">
                                                <p class=""><v-icon class="pr-2" color="black">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                            </v-col>
                                        </v-row>
                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                        <v-row class="caption">
                                            <v-col cols="6">
                                                <span class="flaticon-big-mattress"></span>
                                                <span class="flaticon-big-mattress"></span>
                                                <span class=" pl-2">2 single beds</span>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <v-divider class="my-2" color="#ebebeb"></v-divider>
                                    <div class="px-5">
                                        <v-row class="caption">
                                            <v-col cols="6" class="grey--text">
                                                <v-icon class="pr-2" color="grey">mdi-shower-head</v-icon>Shower
                                            </v-col>
                                        </v-row>
                                        <p class="caption font-weight-bold mb-0">Entertainment</p>
                                        <v-row class="caption">
                                            <v-col cols="6">
                                                <v-icon class="pr-2" color="black">mdi-wifi</v-icon>Free Wi-Fi in all rooms!
                                            </v-col>
                                            <v-col cols="6" class="grey--text">
                                                <v-icon class="pr-2" color="grey">mdi-television</v-icon>TV
                                            </v-col>
                                        </v-row>
                                        <p class="caption font-weight-bold mb-0">Comforts</p>
                                        <v-row class="caption">
                                            <v-col  class="grey--text">
                                                <v-icon class="pr-2" color="grey">mdi-air-conditioner</v-icon>Air conditioning
                                            </v-col>
                                        </v-row>
                                        <p class="caption font-weight-bold mb-0">Safety and security features</p>
                                        <v-row class="caption">
                                            <v-col  class="grey--text">
                                                <v-icon class="pr-2" color="grey">mdi-shield-lock-outline</v-icon>In-room safe box
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <v-layout class="justify-center fill-height align-end">
                                        <v-btn
                                                color="#5392f9"
                                                large bottom text tile
                                                class="font-weight-bold align-center"
                                        >
                                            <v-icon class="mr-2" color="#5392f9">mdi-message-text-outline</v-icon>
                                            Ask about this room
                                        </v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-dialog>
        </v-col>
    </div>
</template>

<script>
  export default {
    name: 'Room',
    data(){
      return {
        checked: {
          breakfast: false,
          smoking: false,
          pay: false,
          twinBed: false,
        },
        dialog: false,
        model: 0,
        radio: '1',
        filter_room_img: {
          img_1: 'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
          img_2: 'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
          img_3: 'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        },
        room_images: [
          'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
          'https://pix6.agoda.net/hotelImages/566538/-1/c74d0cf4097989090632e0eaeaaac3ae.jpg?s=1024x768',
          'https://pix6.agoda.net/hotelImages/566538/-1/425cfc17be086145517e7741c17239dd.jpg?s=1024x768',
          'https://pix6.agoda.net/hotelImages/566538/-1/082351b002df0514c05a971a078fa116.jpg?s=1024x768',
        ],
        menu: {
          show: false,
          src: '',
        },
      }
    },
    methods: {
      mouseImgOver(item){
        this.menu.src = item;
      },
      mouseImgOut(){
        this.menu.src = ''
      }
    },
  };
</script>

<style>
    .orange_card{
        border: 2px solid orange !important;
        border-radius: 0;
    }
    .orange_card_header{
        background-color: orange;
        color: white;
        font-size: 13px;
        font-weight: bold;
    }
    .orange_card_price .caption{
        letter-spacing: .01em!important;
        line-height: 0.7rem !important;
    }
    .orange_card_kids .caption{
        line-height: 0.8rem !important;
    }
    .blue_card{
        border: 2px solid #24457c !important;
        border-radius: 0;
    }
    .blue_card_header{
        background-color: #24457c;
        color: white;
        font-size: 13px;
        font-weight: bold;
    }
</style>
