<template>
    <div>
        <v-card class="hotel">
            <v-app-bar
                    :fixed="fixed"
                    color="white"
            >
                <template v-slot:extension>
                    <v-container pa-0>
                        <v-tabs
                                v-model="tab"
                                align-with-title
                                background-color="transparent"
                        >
                            <v-tabs-slider color="primary"></v-tabs-slider>

                            <v-tab v-for="(item, index) in hotel_menu" :key="index" @click="$vuetify.goTo(`#tab${index}`)">
                                {{ item }}
                            </v-tab>
                            <v-spacer></v-spacer>
                            <v-btn  text  @click="$vuetify.goTo(0)">Back to top</v-btn>
                        </v-tabs>
                    </v-container>
                </template>
            </v-app-bar>
            <v-container>
                <v-layout>
                    <v-flex sm8 md8>
                        <v-hover v-slot:default="{ hover }">
                            <v-card tile class="mx-auto" color="grey lighten-4">
                                <v-img
                                        src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                                        max-height="400"
                                >
                                    <div class="mt-5 ml-5" @mouseover="price_btn = false" @mouseout="price_btn = true">
                                        <v-btn
                                                style="z-index: 1;"
                                                tile large
                                                color="white"
                                                max-width="80"
                                        >
                                            <v-col class="pa-0">
                                                <span class="align-end grey--text"><small>from</small></span>
                                                <div class="red_text">
                                                    <span class="caption">$</span>
                                                    <strong class="font_size_18">260</strong>
                                                </div>
                                            </v-col>
                                        </v-btn>
                                        <v-btn
                                                style="z-index: 1;"
                                                tile large dark
                                                color="#ee595d"
                                                :max-width="price_btn ? '80' : ''"
                                        >
                                            <v-col v-show="price_btn" class="py-0">
                                                <div class="font_size_18 font-weight-bold">63%</div>
                                                <div class="text-uppercase font_size_10">Discount</div>
                                            </v-col>
                                                <div v-show="!price_btn" class="body-2 font-weight-bold">VIEW ROOM DETAILS</div>
                                        </v-btn>
                                    </div>
                                    <v-fade-transition>
                                        <div
                                                v-if="hover"
                                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                                style="height: 100%;"
                                        ></div>
                                    </v-fade-transition>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-flex>
                    <v-flex sm4 md4 pl-2>
                        <v-flex pb-1>
                            <v-hover v-slot:default="{ hover }">
                                <v-card tile color="grey lighten-4" >
                                    <v-img
                                            min-height="247"
                                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116150.jpg?k=e5dfcb99ac06655e16ec83aa34f0767158739e67d998e6335ad8ac071edec38c&amp;o="
                                    >
                                        <v-row class="px-5 pt-1">
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                    style="z-index: 1;"
                                                    @click="hotel_like = !hotel_like"
                                                    color="#ee595d"
                                                    large icon dark
                                            >
                                                <v-icon>
                                                    {{ hotel_like ? 'mdi-heart' : 'mdi-heart-outline' }}
                                                </v-icon>
                                            </v-btn>
                                        </v-row>
                                        <v-fade-transition>
                                            <v-layout column
                                                      v-if="hover"
                                                      class="align-start transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                                                      style="height: 100%;"
                                            >
                                                <div class="ml-5">
                                                    <p class="title pb-2">Deluxe Two-Bedroom  Apartment</p>
                                                    <p class="caption pb-2"><v-icon class="pr-2" dark>mdi-hotel</v-icon> 1 queen bed or 2 single beds or 1 sofa bed</p>
                                                    <p class="caption pb-2"><v-icon class="pr-2" dark>mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                    <p class="caption pb-2"><v-icon class="pr-2" dark>mdi-home-city-outline</v-icon> Balcony / terrace</p>
                                                    <p class="caption pb-2"><v-icon class="pr-2" dark>mdi-shower-head</v-icon>Shower</p>
                                                </div>
                                            </v-layout>
                                        </v-fade-transition>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-flex>
                        <v-layout pt-1>
                            <v-flex sm6 pr-1 class="">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card tile class="mx-auto" color="grey lighten-4">
                                        <v-img
                                                min-height="145"
                                                src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116311.jpg?k=d76884a8698a7790ec416d5ae369c3104d20ad751378b68e559e821a47857c8c&amp;o=&amp;o="
                                        >
                                            <v-fade-transition>
                                                <div
                                                        v-if="hover"
                                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                                        style="height: 100%;"
                                                ></div>
                                            </v-fade-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-flex>
                            <v-flex sm6 pl-1 class="">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card tile class="mx-auto pointer" color="grey lighten-4" @click="dialog_all_img = true">
                                        <v-img
                                                min-height="145"
                                                src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112083.jpg?k=83940a10efc5386b3adf078f201a45b915ffc2478ce31ce3dc26a11a5097662e&amp;o="
                                        >
                                            <v-fade-transition>
                                                <div
                                                        v-if="hover"
                                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
                                                        style="height: 100%;"
                                                >
                                                    <p class="see_all">See all 55 photos</p>
                                                </div>
                                            </v-fade-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>

                <v-dialog
                        v-model="dialog_all_img"
                        dark fullscreen hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <v-card color="black">
                        <v-container>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn dark fab text x-large @click="dialog_all_img = !dialog_all_img">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-carousel v-model="model" hide-delimiters height="400">
                                        <v-carousel-item
                                                v-for="(item, index) in images[tag]"
                                                :key="index"
                                                :src="item"
                                        ></v-carousel-item>
                                    </v-carousel>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" class="dialog_all_img_text">
                                    <p class="headline">Popular facilities</p>
                                    <div><v-icon color="white" small left>mdi-dumbbell</v-icon>Fitness center</div>
                                    <div><v-icon color="white" small left>mdi-pool</v-icon>Swimming pool [outdoor]</div>
                                    <div><v-icon color="white" small left>mdi-glass-cocktail</v-icon>Bar</div>
                                    <div><v-icon color="white" small left>mdi-silverware-fork-knife</v-icon>Restaurants</div>
                                    <div><v-icon color="white" small left>mdi-account-tie</v-icon>Front desk [24-hour]</div>
                                    <p>Starts from</p>
                                    <v-chip label dark color="#e12d2d"><span class="caption">63% OFF TODAY</span></v-chip>
                                    <p class="line_through">$553</p>
                                    <p>$ <span class="headline">206</span><span class="caption">per night</span></p>
                                    <v-btn
                                                color="#5392f9"
                                                large bottom
                                                class="width_100 mt-5"
                                        >
                                        See available rooms
                                        </v-btn>
                                </v-col>
                            </v-row>
                            <v-col>
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
                            </v-col>
                        </v-container>
                    </v-card>
                </v-dialog>

                <v-layout mt-3>
                    <v-flex sm3 mr-2>
                        <v-card outlined flat class="mb-2">
                            <v-row class="pa-3 mx-1">
                                <v-btn color="#5392f9" dark height="50" class="mr-2"><h3 class="ma-0">9.5</h3></v-btn>
                                <div>
                                    Exceptional<br>
                                    <small>/10 <span>(348 reviews)</span></small>
                                </div>
                            </v-row>
                        </v-card>
                        <v-card outlined flat>
                            <v-col class="pa-3 mx-auto">
                                <div class="mb-2">
                                    <iframe
                                            width="280"
                                            height="120"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0"
                                    ></iframe>
                                </div>

                                <v-row class="pl-3">
                                    <v-btn color="#5392f9" small outlined dark height="40" class="mr-2 mb-2 font-weight-bold">9.4</v-btn>
                                    <div>
                                        Exceptional<br>
                                        <small>Location rating score</small>
                                    </div>
                                </v-row>
                                <v-row class="pl-3 mt-1 caption">
                                    <div class="font-weight-bold"><v-icon color="black">mdi-medal</v-icon>Exceptional location</div>
                                    <div>- Inside city center</div>
                                </v-row>
                                <v-row class="pl-3 mt-1 caption">
                                    <div class="font-weight-bold"><v-icon color="red">mdi-home-heart</v-icon>Popular neighborhood</div>
                                </v-row>
                                <v-divider class="my-2"></v-divider>
                                <v-layout class="justify-space-between body-2">
                                    <div class=""><v-icon class="pr-2">mdi-car-brake-parking</v-icon>Parking</div>
                                    <div class="green_text">Available</div>
                                </v-layout>
                                <v-divider class="mt-2"></v-divider>
                                <v-row class="body-2">
                                    <v-col cols="8" sm="8">
                                        <div
                                                v-for="(item, index) in nearby_places.name"
                                                :key="index"
                                                class="mb-2"
                                        >{{item}}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" sm="4" class="text-right">
                                        <div
                                                v-for="(item, index) in nearby_places.distance"
                                                :key="index"
                                                class="mb-2"
                                        >{{item}}
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-divider class="mb-2"></v-divider>
                                <v-tooltip  color="white" min-width="400" nudge-right="120" light top>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on" class="blue_text font-weight-bold body-2">SEE NEARBY PLACES</div>
                                    </template>
                                    <v-row class="black--text">
                                        <v-col cols="6" class="caption pa-0">
                                            <div class="font-weight-bold nearby_places_title pa-2">Popular landmarks</div>
                                            <div
                                                    v-for="(item, index) in nearby_places.popular"
                                                    :key="index"
                                                    class="mb-1 pl-2"
                                            >{{item}}</div>
                                        </v-col>
                                        <v-col cols="6" class="caption pa-0">
                                            <div class="font-weight-bold nearby_places_title pa-2">Nearby landmarks</div>
                                            <div
                                                    v-for="(item, index) in nearby_places.nearby"
                                                    :key="index"
                                                    class="mb-1 pl-2"
                                            >{{item}}</div>
                                        </v-col>
                                    </v-row>
                                </v-tooltip>
                                <!--<el-tooltip effect="light" placement="top">
                                    <v-row slot="content" class="black&#45;&#45;text">
                                        <v-col cols="6" class="caption pa-0">
                                            <div class="font-weight-bold nearby_places_title pa-2">Popular landmarks</div>
                                            <div
                                                    v-for="(item, index) in nearby_places.popular"
                                                    :key="index"
                                                    class="mb-1 pl-2"
                                            >{{item}}</div>
                                        </v-col>
                                        <v-col cols="6" class="caption pa-0">
                                            <div class="font-weight-bold nearby_places_title pa-2">Nearby landmarks</div>
                                            <div
                                                    v-for="(item, index) in nearby_places.nearby"
                                                    :key="index"
                                                    class="mb-1 pl-2"
                                            >{{item}}</div>
                                        </v-col>
                                    </v-row>
                                    <el-button>Top center</el-button>
                                </el-tooltip>-->
                            </v-col>
                        </v-card>
                    </v-flex>
                    <v-flex sm9 >
                        <v-card outlined flat class="mb-2">
                            <v-container>
                                <v-chip color="#ff567d" label dark small>Agoda homes</v-chip>
                                <v-chip color="#f05700" class="mx-2" label dark small>Top Value</v-chip>
                                <v-chip color="#32a923" label dark small>Free Wi-Fi</v-chip>

                                <v-layout mt-3>
                                    <h2>Vale Apartments Barcelona</h2>
                                    <v-tooltip color="black" top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn style="font-size: 11px" height="20"  class="ma-2" tile text color="black" v-on="on">
                                                <v-rating
                                                        v-model="rating"
                                                        background-color="pink lighten-3"
                                                        color="#ff567d" dense readonly empty-icon
                                                        size="20"
                                                ></v-rating>
                                            </v-btn>
                                        </template>
                                        <v-layout>
                                            Pink star ratings are based on amenities
                                        </v-layout>
                                    </v-tooltip>
                                </v-layout>
                                <a href="#" class="link"><small class="black--text">valencia, 191, Eixample, Barcelona, Spain, 08011 - </small> <span class="overline">SEE MAP</span></a>
                            </v-container>
                        </v-card>
                        <v-card color="rgb(253, 238, 238)" flat class="mb-2 py-1 px-5">
                            <v-row class="">
                                <v-col cols="1">
                                    <v-btn class="" depressed fab dark color="#e12d2d">
                                        <v-icon dark>mdi-star-four-points-outline</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <h4 class="sale">This property is in high demand!</h4>
                                    <p class="body-2">Last booked 7 hours ago</p>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card outlined flat class="mb-2">
                            <v-container>
                                <p class="pt-5 text-center subtitle-1 font-weight-bold">"The hotel's right around the corner of Passeig de Gracia, where stores like Zara, Mango and
                                    <br> high-end boutiques are located."</p>
                                <p class="pb-5 text-center caption">Sylvia - March 27, 2018</p>
                                <v-divider></v-divider>
                                <v-layout class="text-center py-3">
                                    <v-flex sm5 xs12>
                                        <v-icon large color="#5392f9">mdi-marker-check</v-icon>
                                        <div>
                                            <small class="font-weight-bold">Exceptional facilities on premise</small>
                                            <br>
                                            <p class="rating_text"><span>9.6</span> facilities on premise</p>
                                        </div>
                                    </v-flex>
                                    <v-flex sm-1>
                                        <v-divider class="m-0" ma-0 vertical></v-divider>
                                    </v-flex>
                                    <v-flex sm5 xs12 >
                                        <v-icon large color="#5392f9">mdi-room-service-outline</v-icon>
                                        <div>
                                            <small class="font-weight-bold">Exceptional service</small>
                                            <br>
                                            <p class="rating_text"><span>9.6</span> rating for service</p>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                        <v-card outlined flat class="mb-2">
                            <v-container>
                                <v-layout class="justify-space-between">
                                    <v-flex sm2 xs4 class="text-center">
                                        <v-tooltip color="black" top>
                                            <template v-slot:activator="{ on }">
                                                <v-col class="pa-0">
                                                    <v-icon color="#32a923" class="d-block pb-1" large v-on="on">mdi-subway-variant</v-icon>
                                                    <div class="caption">590 meters to public transportation</div>
                                                </v-col>
                                            </template>
                                            <v-layout>
                                                590 meters to public transportation
                                            </v-layout>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex sm2 xs4 class="text-center">
                                        <v-tooltip color="black" top>
                                            <template v-slot:activator="{ on }">
                                                <v-col class="pa-0">
                                                    <v-icon color="#32a923" class="d-block pb-1" large v-on="on">mdi-airplane</v-icon>
                                                    <div class="caption">Airport transfer</div>
                                                </v-col>
                                            </template>
                                            <v-layout>
                                                Airport transfer available
                                            </v-layout>
                                        </v-tooltip>
                                    </v-flex>
                                    <v-flex sm3 xs4 class="text-center">
                                        <v-icon color="#32a923" class="d-block pb-1" large>mdi-wifi</v-icon>
                                        <div class="caption">Free Wi-Fi in all rooms!</div>
                                    </v-flex>
                                    <v-flex sm2 xs4 class="text-center">
                                        <v-icon color="#32a923" class="d-block pb-1" large>mdi-air-conditioner</v-icon>
                                        <div class="caption">Air conditioning</div>
                                    </v-flex>
                                    <v-flex sm2 xs4 class="text-center">
                                        <v-icon color="#32a923" class="d-block pb-1" large>mdi-home-city-outline</v-icon>
                                        <div class="caption">Balcony/terrace</div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-col cols="12" class="my-5">
                    <v-row>
                        <span class="body-1 font-weight-bold">Property ranking</span>
                        <v-divider color="black" class="mx-2" vertical></v-divider>
                        <span class="body-2">Compared to <span class="blue_text body-1">5,631</span> Barcelona properties</span>
                        <v-spacer></v-spacer>
                        <span class="blue_text body-2 ">SEE ALL RANKINGS</span>
                    </v-row>
                    <v-row class="mt-2">
                        <v-col cols="" class="blue_bg py-0 mr-2">
                            <v-row class="pa-3">
                                <v-icon top left>mdi-cash-multiple</v-icon>
                                <span class="body-2">Value for money score <br>
                                    <span class="caption blue_text">9.1/10</span>
                                </span>
                            </v-row>
                            <v-divider color="#dde9fd" class="my-2"></v-divider>
                                <span class="blue_text caption font-weight-bold">Better than</span>
                            <v-row>
                                <v-col cols="2" class="blue_text display-1 pr-0">99</v-col>
                                <v-col>
                                    <span class="blue_text">%</span> <br>
                                    <span class="caption">of Barcelona properties</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="" class="blue_bg py-0 mr-2">
                            <v-row class="pa-3">
                                <v-icon top left>mdi-map-marker-outline</v-icon>
                                <span class="body-2">Location score<br>
                                    <span class="caption blue_text">9.8/10</span>
                                </span>
                            </v-row>
                            <v-divider color="#dde9fd" class="my-2"></v-divider>
                                <span class="blue_text caption font-weight-bold">Better than</span>
                            <v-row>
                                <v-col cols="2" class="blue_text display-1 pr-0">99</v-col>
                                <v-col>
                                    <span class="blue_text">%</span> <br>
                                    <span class="caption">of Barcelona properties</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="" class="blue_bg py-0 mr-2">
                            <v-row class="pa-3">
                                <v-icon top left>mdi-room-service-outline</v-icon>
                                <span class="body-2">Service score<br>
                                    <span class="caption blue_text">9.1/10</span>
                                </span>
                            </v-row>
                            <v-divider color="#dde9fd" class="my-2"></v-divider>
                                <span class="blue_text caption font-weight-bold">Better than</span>
                            <v-row>
                                <v-col cols="2" class="blue_text display-1 pr-0">99</v-col>
                                <v-col>
                                    <span class="blue_text">%</span> <br>
                                    <span class="caption">of Barcelona properties</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="" class="blue_bg py-0 ">
                            <v-row class="pa-3">
                                <v-icon top left>mdi-spray-bottle</v-icon>
                                <span class="body-2">Cleanliness score<br>
                                    <span class="caption blue_text">9.1/10</span>
                                </span>
                            </v-row>
                            <v-divider color="#dde9fd" class="my-2"></v-divider>
                                <span class="blue_text caption font-weight-bold">Better than</span>
                            <v-row>
                                <v-col cols="2" class="blue_text display-1 pr-0">99</v-col>
                                <v-col>
                                    <span class="blue_text">%</span> <br>
                                    <span class="caption">of Barcelona properties</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <div id="tab0" class="mt-5">
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
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 pr-1 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_2"
                                                            @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_3"
                                                            @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 pr-1 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_2"
                                                            @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_3"
                                                            @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 pr-1 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_2"
                                                            @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_3"
                                                            @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 pr-1 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_2"
                                                            @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_3"
                                                            @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 pr-1 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_2"
                                                            @mouseover="mouseImgOver(filter_room_img.img_2)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                                <v-col
                                                        cols="6" md="6"
                                                        class="pa-0 zoom"
                                                >
                                                    <v-img
                                                            :src="filter_room_img.img_3"
                                                            @mouseover="mouseImgOver(filter_room_img.img_3)"
                                                            @mouseout="mouseImgOut()"
                                                            height="60"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                            @mouseover="mouseImgOver(filter_room_img.img_1)"
                                                            @mouseout="mouseImgOut()"
                                                            height="120"
                                                            class="text-right pa-2"
                                                            v-on="on"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-img
                                                :src="menu.src"
                                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                height="350"
                                                width="350"
                                                class="text-right pa-2"
                                        ></v-img>
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
                                                        :filter_room_img="[0,1]"
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
                                                        :filter_room_img="[0,1]"
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
                                                        height="80"
                                                        width="110"
                                                        @click="toggle"
                                                        :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                ></v-img>
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

                        <v-col>
                            <v-row>
                                <v-img
                                        class="white--text fill-height"
                                        height="300px"
                                        src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                                >
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
                    </v-col>
                </div>
                <div id="tab1">
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">What they offer</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-thumb-up-outline</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2 ">
                                <v-col cols="1"><v-icon large>mdi-earth</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Languages spoken</div>
                                    <v-row class="pl-3">
                                        <v-col class="py-0" cols="4">
                                            <div class="row">
                                                <v-img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
                                                        contain
                                                        height="20"
                                                        max-width="30"
                                                        class="mr-2"
                                                ></v-img>
                                                English
                                            </div>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <div class="row">
                                                <v-img
                                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"
                                                        contain
                                                        height="20"
                                                        max-width="30"
                                                        class="mr-2"
                                                ></v-img>
                                                Spanish
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-wifi</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Internet access</div>
                                    <v-row class="">
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-wifi</v-icon>
                                            Free Wi-Fi in all rooms!
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-access-point-network</v-icon>
                                            Wi-Fi in public areas
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-pool</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Things to do, ways to relax</div>
                                    <v-row>
                                        <v-col class="py-0 blue_text" cols="4">
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        <v-icon color="#5392f9" small left>mdi-dumbbell</v-icon>
                                                        Fitness center
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-solar-power</v-icon>
                                            Solarium
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-bag-personal</v-icon>
                                            Tours
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-account-outline</v-icon>
                                            Massage
                                        </v-col>
                                        <v-col class="py-0 blue_text" cols="4">
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
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-silverware-fork-knife</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Dining, drinking, and snacking</div>
                                    <v-row>
                                        <v-col class="py-0 blue_text" cols="4">
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        <v-icon color="#5392f9" small left>mdi-glass-cocktail</v-icon>
                                                        Bar
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="//pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                        <v-col class="py-0 blue_text" cols="4">
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        <v-icon color="#5392f9" small left>mdi-silverware-fork-knife</v-icon>
                                                        Restaurants
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="//pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-room-service-outline</v-icon>
                                            Room service
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-room-service-outline</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Services and conveniences</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-broom</v-icon>
                                            Daily housekeeping
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-waves</v-icon>
                                            Laundry service
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-hair-dryer</v-icon>
                                            Salon
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-washing-machine</v-icon>
                                            Dry cleaning
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-cctv</v-icon>
                                            Luggage storage
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <v-icon small left>mdi-smoking</v-icon>
                                            Smoking area
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">Nearest essentials</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-airport</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Airports</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>Barcelona-El Prat Airport (BCN)</p>
                                            <div class="grey--text">
                                                <span>12.1 km - </span>
                                                <v-icon small left color="grey">mdi-car</v-icon>
                                                <span>24 minutes</span>
                                            </div>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                           <p>Girona-Costa Brava Airport (GRO)</p>
                                            <div class="grey--text">
                                                <span>75.2 km</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-bus</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Public transportation</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>Urquinaona Metro Station</p>
                                            <div class="grey--text">
                                                <span>230 m - </span>
                                                <v-icon small left color="grey">mdi-walk</v-icon>
                                                <span>3 minutes</span>
                                            </div>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                           <p>Plaça Catalunya Metro Station</p>
                                            <div class="grey--text">
                                                <span>75.2 m</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-hospital-building</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Hospital or clinic</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>Fundacio Puigvert</p>
                                            <div class="grey--text">
                                                <span>2.7 km</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-shopping</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Shopping</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>Portal de l'Angel</p>
                                            <div class="grey--text">
                                                <span>320 m</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-store</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Convenience store</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>Carrefour Express</p>
                                            <div class="grey--text">
                                                <span>1.8 km</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-phone-classic</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <div class="mb-2 font-weight-bold">Cash withdrawal</div>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                           <p>ATM</p>
                                            <div class="grey--text">
                                                <span>80 m</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <p>Distances shown are straight-line distances on the map. Actual travel distances may vary.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">What to eat nearby</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-row class="mb-2">
                                <v-col cols="3">
                                    <v-img
                                            src="//pix6.agoda.net/geo/cuisine/1110/5_1110.jpg?s=270x360"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="120"
                                            class="text-right pa-2"
                                    ></v-img>
                                    <div class="mt-3">
                                        <v-icon small left>mdi-silverware-fork-knife</v-icon>
                                        Spanish cuisine
                                    </div>
                                    <v-divider class="mt-3"></v-divider>
                                    <div class="mt-3">
                                        <p>Granja Restaurant Bon Bar</p>
                                        <div class="grey--text">
                                            <span>100 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Las Euras</p>
                                        <div class="grey--text">
                                            <span>160 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Casa Alfredo</p>
                                        <div class="grey--text">
                                            <span>180 m - Spanish</span>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="3" class="mx-5">
                                    <v-img
                                            src="//pix6.agoda.net/geo/cuisine/1079/5_1079.jpg?s=270x360"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="120"
                                            class="text-right pa-2"
                                    ></v-img>
                                    <div class="mt-3">
                                        <v-icon small left>mdi-silverware-fork-knife</v-icon>
                                        Spanish cuisine
                                    </div>
                                    <v-divider class="mt-3"></v-divider>
                                    <div class="mt-3">
                                        <p>Granja Restaurant Bon Bar</p>
                                        <div class="grey--text">
                                            <span>100 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Las Euras</p>
                                        <div class="grey--text">
                                            <span>160 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Casa Alfredo</p>
                                        <div class="grey--text">
                                            <span>180 m - Spanish</span>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="3">
                                    <v-img
                                            src="//pix6.agoda.net/geo/cuisine/1048/5_1048.jpg?s=270x360"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="120"
                                            class="text-right pa-2"
                                    ></v-img>
                                    <div class="mt-3">
                                        <v-icon small left>mdi-silverware-fork-knife</v-icon>
                                        Spanish cuisine
                                    </div>
                                    <v-divider class="mt-3"></v-divider>
                                    <div class="mt-3">
                                        <p>Granja Restaurant Bon Bar</p>
                                        <div class="grey--text">
                                            <span>100 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Las Euras</p>
                                        <div class="grey--text">
                                            <span>160 m - Spanish</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <p>Casa Alfredo</p>
                                        <div class="grey--text">
                                            <span>180 m - Spanish</span>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">What's nearby</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-row class="mb-2">
                                <v-col cols="1"><v-icon large>mdi-map-search</v-icon></v-col>
                                <v-divider vertical></v-divider>
                                <v-col  class="body-2 ml-2">
                                    <v-row>
                                        <v-col class="py-0 blue_text" cols="5">
                                        <div class="mb-2 font-weight-bold text--black">Popular landmarks</div>
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        Casa Batllo - 640 m
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        La Boqueria - 760 m
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        Gothic Quarter (Barri Gotic) - 810 m
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                            <v-menu :open-on-hover="true" offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <div v-on="on">
                                                        La Pedrera Casa Mila - 1.2 km
                                                    </div>
                                                </template>
                                                <v-img
                                                        src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                                        lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                                        height="350"
                                                        width="350"
                                                        class="text-right pa-2"
                                                ></v-img>
                                            </v-menu>
                                        </v-col>
                                        <v-col class="py-0" cols="5">
                                            <div class="mb-2 font-weight-bold">Nearby landmarks</div>
                                            <p>Teatre Tívoli - 100 m</p>
                                            <p>El Corte Inglés - 100 m</p>
                                            <p>Laie - 160 m</p>
                                            <p>Barcelona Walking Tours - 180 m</p>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
                <div id="tab2">
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">Property's guest policies</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-col class="mb-2 body-2">
                                <div class="font-weight-bold mb-3">Children and extra beds</div>
                                <div class="mb-3">All children are welcome.</div>
                                <div class="font-weight-bold mb-3">Others</div>
                                <ul class="mb-3">
                                    <li>Children of all ages can be accommodated. <br>
                                        Children age: 0-2 stay free in a baby cot with a maximum number of cots in the room being 1.
                                    </li>
                                    <li>
                                        When booking for 4 or more rooms, different policies and additional supplements may apply. This policy is imposed by the property.
                                        <br> For reservations of 8 or more nights, special conditions will apply.
                                    </li>
                                    <li>
                                        The maximum number of pets allowed in each room is 1 (dog or cat). For guests with pets, a security deposit of
                                        EUR 200 is required upon check-in for charges or damages during the stay and will be refunded upon departure.
                                    </li>
                                    <li>Pets are allowed for an additional charge of EUR 20 per night per pet.</li>
                                    <li>Only pets weighing under 20 kilograms are allowed at the property.</li>
                                    <li>When booking more than 5 rooms, different policies and additional supplements may apply.</li>
                                </ul>
                                <div class="mb-3">Extra beds are dependent on the room you choose. Please ask the property for more details.</div>
                                <v-btn depressed large color="#75a8f9" dark>
                                    <v-icon left small class="ml-4">mdi-message-processing</v-icon>
                                    <span class="mr-4">ASK THE PROPERTY</span>
                                </v-btn>
                            </v-col>
                        </v-col>
                    </v-row>
                </div>
                <div id="tab3 my-5">
                    <v-col>
                        <p class="display-1">Reviews of Vale Apartments Barcelona from real guests</p>
                        <v-row>
                            <v-col class="d-inline-flex" cols="12" sm="4">
                                <v-select
                                        :items="reviews.guests"
                                        label="All guests"
                                        prepend-inner-icon="mdi-account-group-outline"
                                        outlined
                                ></v-select>
                            </v-col>
                            <v-col class="d-inline-flex" cols="12" sm="4">
                                <v-select
                                        :items="reviews.rooms"
                                        label="All room types"
                                        prepend-inner-icon="mdi-hotel"
                                        outlined
                                ></v-select>
                            </v-col>
                            <v-col class="d-inline-flex" cols="12" sm="4">
                                <v-select
                                        :items="reviews.languages"
                                        label="All languages"
                                        prepend-inner-icon="mdi-earth"
                                        outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3"><span class="caption font-weight-bold">Show reviews that mention</span></v-col>
                            <v-col cols="9">
                                <v-chip-group
                                        column
                                        active-class="primary--text"
                                >
                                    <v-chip outlined v-for="(item ,index) in mention_reviews" :key="index">
                                       <span class="pa-1">{{ item }}</span>
                                    </v-chip>
                                </v-chip-group>
                            </v-col>
                        </v-row>
                        <v-layout class="justify-center my-3">
                            <el-pagination
                                    :page-size="20"
                                    :pager-count="11"
                                    layout="prev, pager, next"
                                    :total="1000"
                            ></el-pagination>
                        </v-layout>
                        <v-row>
                            <v-col cols="3">
                                <div class="blue_text"><span class="display-1 ">10.0</span><span class="subtitle-1"> Exceptional</span></div>
                                <div class="caption"><v-icon small left>mdi-hotel</v-icon>Double Room</div>
                                <div class="caption"><v-icon small left>mdi-hotel</v-icon>Couple</div>
                                <div class="caption"><v-icon small left>mdi-calendar-blank-outline</v-icon>Stayed 3 nights in February 2019</div>
                            </v-col>
                            <v-col>
                                <v-card
                                        class="mx-auto pa-5"
                                        color="#F9F9F9">
                                    <strong>"Amazing!!! 6 star Hotel”</strong>
                                    <p class="body-2">Friendly and helpful staff Location can't be better Bus from the airport stop
                                        just 2 min from the hotel Good and rich breakfast From 2 pm till 11 on there is
                                        complemantry Snack Bar bat you can have
                                        drinks and light food very helpful. Big Rooms with a very good shower. Waiting to come back this hotel soon
                                    </p>
                                    <p class="caption grey--text">Reviewed June 20, 2019</p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>

                </div>
                <div id="tab4" class="d-flex justify-center">
                    <iframe
                            width="860"
                            height="420"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                    ></iframe>
                </div>
                <div id="tab5" class="mt-5">
                    <v-row>
                        <v-col cols="3">
                            <v-divider class="my-3"></v-divider>
                            <p class="subtitle-1">Some helpful facts</p>
                        </v-col>
                        <v-col cols="9">
                            <v-divider class="my-3"></v-divider>
                            <v-col class="mb-2 body-2">
                                <div class="font-weight-bold mb-2">Check-in/Check-out</div>
                                <p><v-icon small left>mdi-account-check-outline</v-icon>Check-in from:<strong>14:00</strong></p>
                                <p><v-icon small left>mdi-account-check-outline</v-icon>Check-out until:<strong>12:00</strong></p>
                                <div class="font-weight-bold my-2">Getting around</div>
                                <p><v-icon small left>mdi-city-variant-outline</v-icon>Distance from city center:<strong>0 km</strong></p>
                                <p><v-icon small left>mdi-clock-outline</v-icon>Travel time to airport (minutes):<strong>25</strong></p>
                                <div class="font-weight-bold my-2">Extras</div>
                                <p><v-icon small left>mdi-coffee-outline</v-icon>Breakfast charge (unless included in room price):<strong>20 EUR</strong></p>
                                <div class="font-weight-bold my-2">The property</div>
                                <p><v-icon small left>mdi-smoking-off</v-icon>Non-smoking rooms/floors:<strong>2 Yes</strong></p>
                                <p><v-icon small left>mdi-glass-cocktail</v-icon>Number of bars/lounges:<strong>1</strong></p>
                                <p><v-icon small left>mdi-stairs</v-icon>Number of floors:<strong>9</strong></p>
                                <p><v-icon small left>mdi-key-plus</v-icon>Number of rooms:<strong>58</strong></p>
                                <p><v-icon small left>mdi-flash</v-icon>Room voltage:<strong>220</strong></p>
                                <p><v-icon small left>mdi-door-open</v-icon>Year property opened:<strong>2014</strong></p>
                            </v-col>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-card>
        <v-col class=" my-5">
                <v-row class="headline justify-center">Top destinations</v-row>
                <v-row class="justify-center">
                    <v-flex
                            v-for="(item, index) in top"
                            :key="index"
                            sm1 px-1
                    >
                        <v-hover class="m-2" v-slot:default="{ hover }">
                            <v-card class="mx-auto">
                                <v-img
                                        :src="item.img"
                                        style="height: 150px;"
                                >
                                    <v-fade-transition>
                                        <div
                                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                                v-if="hover"
                                                style="height: 150px;"
                                        ></div>

                                    </v-fade-transition>
                                    <v-card-actions class="white--text align-end fill-height">
                                        <div class="subtitle-2">{{item.text}}</div>
                                    </v-card-actions>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-flex>
                </v-row>
        </v-col>
        <v-col class="my-5">
            <v-row class="headline justify-center">Trending cities</v-row>
            <v-row row class="justify-center">
                <v-flex
                        v-for="(item, index) in trending"
                        :key="index"
                        sm1 px-1
                >
                    <v-hover class="m-2" v-slot:default="{ hover }">
                        <v-card class="mx-auto">
                            <v-img
                                    :src="item.img"
                                    style="height: 150px;"
                            >
                                <v-fade-transition>
                                    <div
                                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                            v-if="hover"
                                            style="height: 150px;"
                                    ></div>

                                </v-fade-transition>
                                <v-card-actions class="white--text align-end fill-height">
                                    <div class="subtitle-2">{{item.text}}</div>
                                </v-card-actions>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-row>
        </v-col>
    </div>
</template>

<script>

  export default {
    name: "Hotel", data() {
      return {
        checked: {
          breakfast: false,
          smoking: false,
          pay: false,
          twinBed: false,
        },
        price_btn: true,
        hotel_like: false,
        fixed: false,
        dialog_all_img: false,
        tag: 0,
        tags: ['All', 'Rooms', 'Property views', 'Facilities', 'Dining', 'Shopping', 'Nearby attraction',],
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
        dialog: false,
        radio: '1',
        rating: 4,
        model: 0,
        hotel_menu: ['Rooms','Facilities','Children and extra beds','Reviews','Map','Check-in'],
        tab: null,
        nearby_places: {
          name: ['Teatre Tívoli', 'El Corte Inglés', 'Laie', 'Barcelona Walking Tours', 'Plaza de Cataluna'],
          distance: ['100 m', '100 m', '160m', '180', '190'],
          popular: [
            'Casa Batllo - 640 m',
            'La Boqueria - 760 m',
            'Gothic Quarter (Barri Gotic) - 810 m',
            'La Pedrera Casa Mila - 1.2 km',
            'Sagrada Familia - 1.69 km',
            'Barceloneta Beach - 2.1 km',
            'Magic Fountain of Montjuic - 2.52 km',
            'Sant Pau Recinte Modernista - 2.55 km',
            'Parc Guell - 3.27 km',
            'Parc Guell - 3.27 km',
          ],
          nearby: [
              'Teatre Tívoli - 100 m',
              'El Corte Inglés - 100 m',
              'Laie - 160 m',
              'Barcelona Walking Tours - 180 m',
              'Plaza de Cataluna - 190 m',
              'Oh-Barcelona.com - 190 m',
              'Ca la Dona - 190 m',
              'Tourism Information Office - Catalunya Square - 200 m',
              'Buda Barcelona - 220 m',
              'Casa Pich i Pon - 230 m',
          ],
        },
        reviews: {
          languages: [
            'All languages', 'English', 'Français', 'Español', 'Italiano', 'Nederlands', 'Deutsch', 'Português (PT)', '日本語', '繁體中文 (香港)', 'עברית'
          ],
          rooms: ['All room types', 'Double for Single Use','Double Room','Junior Suite'],
          guests: [
            'All guests (348)', 'Couple (10)', 'Solo traveler (4)', 'Family with young children (141)', 'Group (193)',
          ],
        },
        top: [
          {
            img: 'https://pix6.agoda.net/geo/country/181/3_181_united_states_of_america_02.jpg?s=345x345&ar=1x1&',
            text: 'United States'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/198/3_198_malaysia_02.jpg?s=345x345&ar=1x1&',
            text: 'Malaysia'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/70/3_70_philippines_02.jpg?s=345x345&ar=1x1&',
            text: 'Philippines'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/114/3_114_singapore_02.jpg?s=345x345&ar=1x1&',
            text: 'Singapore'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/106/3_106_thailand_02.jpg?s=345x345&ar=1x1&',
            text: 'Thailand'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/192/3_192_indonesia_02.jpg?s=345x345&ar=1x1&',
            text: 'Indonesia'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/139/3_139_australia_02.jpg?s=345x345&ar=1x1&',
            text: 'Australia'
          },
          {
            img: 'https://pix6.agoda.net/geo/country/35/3_35_india_02.jpg?s=345x345&ar=1x1&',
            text: 'India'
          },
        ],
        trending: [
          {
            img: 'https://pix6.agoda.net/geo/city/16808/1_16808_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Hong Kong'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/13740/1_13740_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Nagoya'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/21397/1_21397_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Macau'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/12772/1_12772_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Los Angeles (CA)'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/4001/1_4001_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Cebu'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/318/1_318_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'New York (NY)'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/18347/1_18347_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Tainan'
          },
          {
            img: 'https://pix6.agoda.net/geo/city/17172/1_17172_02.jpg?s=345x345&ar=1x1&p=true',
            text: 'Busan'
          },
        ],
        filter_room_img: {
          img_1: 'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
          img_2: 'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
          img_3: 'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        },
        menu: {
          show: false,
          src: '',
        },
        room_images: [
          'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c74d0cf4097989090632e0eaeaaac3ae.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/425cfc17be086145517e7741c17239dd.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/082351b002df0514c05a971a078fa116.jpg?s=1024x768',
        ],
        mention_reviews: ['All reviews', 'walking distance', 'great location', 'free snacks'],
      };
    },
    methods: {
      mouseImgOver(item){
        this.menu.src = item;
      },
      mouseImgOut(){
        this.menu.src = ''
      }
    },
    created() {
      window.addEventListener('scroll', () => {
        window.pageYOffset >= 120 ? this.fixed = true : this.fixed = false;
      });
    },
    updated(){
      // if(this.tab !== 0){
      //   window.scrollTo( 0, 1600 );
      // }
    },
  };
</script>

<style >
    .font_size_18{
        font-size: 18px;
    }
    .font_size_10{
        font-size: 10px;
    }
    .width_100{
        width: 100%;
    }
    .zoom{
        cursor: zoom-in;
    }
    .pointer{
        cursor: pointer !important;
    }
    .link {
        text-decoration: none;
    }
    .blue_text{
        color: #5392f9;
    }
    .red_text{
        color: #ee595d;
    }
    .icon_grey{
        color: #8a8a8a;
    }
    .green_text{
        color: #85c150;
    }
    .blue_bg{
        background-color: #f4f8fe;
    }
    .line_through{
        text-decoration: line-through;
    }
    [class^="flaticon-"]:before, [class*=" flaticon-"]:before, [class^="flaticon-"]:after, [class*=" flaticon-"]:after {
        margin-left: 0!important;
    }
    .nearby_places_title{
        background-color: #f7f7f7;
    }
    .v-card--reveal {
        align-filter_room_img: center;
        bottom: 0;
        justify-content: center;
        opacity: 0.7;
        position: absolute;
        width: 100%;
    }
    .hover_title{
        font-size: 16px;
        font-weight: 600;
        width: calc(90% - 40px);
        margin: 0 2rem;
    }
    .see_all {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        line-height: 1.8;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: .2px;
        padding: 16px;
        font-weight: 700;
    }
    .v-chip--pill .v-avatar {
        height: 40px!important;
        width: 40px!important;
    }
    .doubleRoomTitle{
        background-color: white;
    }
    .rating_text{
        color: gray;
        font-size: smaller;
    }
    .rating_text span{
        color: #1976d2;
    }
    .dialog_all_img_text{
        line-height: 30px;
    }
     .hotel .v-toolbar__content{
        max-height: 0 !important;
         padding-top: 0 !important;
    }
    .hotel .v-tabs--align-with-title>.v-tabs-bar {
         padding-left: 0 !important;
    }
    .heading_overlay_text{
        background-color: black;
        opacity: 0.5;
    }
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
    .hotel_modal_text{
        background-color: white !important;
        color: #000;
        line-height: 3rem !important;
    }
</style>
