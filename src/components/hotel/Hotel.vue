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
                                    <div class="mt-5 ml-5"
                                         @click="$vuetify.goTo(`#tab${0}`)"
                                         @mouseover="price_btn = false"
                                         @mouseout="price_btn = true">
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
                                <v-divider></v-divider>
                                <v-menu open-on-hover top offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on" class="blue_text font-weight-bold body-2">SEE NEARBY PLACES</div>
                                    </template>
                                    <v-list>
                                        <v-row class="black--text py-0 px-3">
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
                                    </v-list>
                                </v-menu>
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

                <v-col cols="12" class="mt-5">
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
                                <v-col cols="2" class="blue_text font_size_34 pt-0 pr-0">99</v-col>
                                <v-col class="pt-0">
                                    <span class="blue_text">%</span><br>
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
                                <v-col cols="2" class="blue_text font_size_34 pt-0 pr-0">99</v-col>
                                <v-col class="pt-0">
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
                                <v-col cols="2" class="blue_text font_size_34 pt-0 pr-0">99</v-col>
                                <v-col class="pt-0">
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
                                <v-col cols="2" class="blue_text font_size_34 pt-0 pr-0">99</v-col>
                                <v-col class="pt-0">
                                    <span class="blue_text">%</span> <br>
                                    <span class="caption">of Barcelona properties</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <div id="tab0" class="margin-top">
                    <Room></Room>
                </div>
                <div id="tab1" class="margin-top">
                    <Children></Children>
                </div>
                <div id="tab2" class="margin-top">
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
                <div id="tab3" class="margin-top">
                    <Reviews></Reviews>
                </div>
                <div id="tab5" class="margin-top">
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
                <div id="tab4" class="d-flex justify-center margin-top">
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
  import Room from './Room';
  import Reviews from './Reviews';
  import Children from './Children';
  export default {
    name: "Hotel",
    components: {Children, Reviews, Room},
    props: ['rating1'],
    data() {
      return {
        fixed: false,
        hotel_menu: ['Rooms','Facilities','Children and extra beds','Reviews','Map','Check-in'],
        price_btn: true,
        hotel_like: false,
        dialog_all_img: false,
        tag: 0,
        model: 0,
        tags: ['All', 'Rooms', 'Property views', 'Facilities', 'Dining', 'Shopping', 'Nearby attraction',],
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
        rating: 4,
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
        menu: {
          show: false,
          src: '',
        },
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
  };
</script>

<style >
    .margin-top{
        margin-top: 50px;
    }
    .font_size_34{
        font-size: 34px;
    }
    .font_size_18{
        font-size: 18px;
    }
    .font_size_10{
        font-size: 10px;
    }
    .width_100{
        width: 100%;
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
    .hotel_modal_text{
        background-color: white !important;
        color: #000;
        line-height: 3rem !important;
    }
</style>
