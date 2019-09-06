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
                            <v-card class="mx-auto" color="grey lighten-4">
                                <v-img
                                        src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                                        max-height="400"
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
                    <v-flex sm4 md4 pl-2>
                        <v-flex pb-1>
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="" color="grey lighten-4" >
                                    <v-img
                                            min-height="250"
                                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116150.jpg?k=e5dfcb99ac06655e16ec83aa34f0767158739e67d998e6335ad8ac071edec38c&amp;o="
                                    >
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
                                    <v-card class="mx-auto" color="grey lighten-4">
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
                                    <v-card class="mx-auto" color="grey lighten-4">
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
                            <v-card outlined flat class="mr-3">
                                <el-checkbox class="pa-4" v-model="checked">
                                    <v-icon small class="mr-1">mdi-coffee</v-icon>Free breakfast (7)
                                </el-checkbox>
                            </v-card>
                            <v-card outlined flat class="mr-3">
                                <el-checkbox class="pa-4" v-model="checked">
                                    <v-icon small class="mr-1">mdi-smoking-off</v-icon>Non-smoking (8)
                                </el-checkbox>
                            </v-card>
                            <v-card outlined flat class="mr-3">
                                <el-checkbox class="pa-4" v-model="checked">
                                    <v-icon small class="mr-1">mdi-cash-usd</v-icon>Pay at the hotel (10)
                                </el-checkbox>
                            </v-card>
                            <v-card outlined flat class="mr-3">
                                <el-checkbox class="pa-4" v-model="checked">
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                                            :src="items.img_2"
                                                            @mouseover="mouseImgOver(items.img_2)"
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
                                                            :src="items.img_3"
                                                            @mouseover="mouseImgOver(items.img_3)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                                            :src="items.img_2"
                                                            @mouseover="mouseImgOver(items.img_2)"
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
                                                            :src="items.img_3"
                                                            @mouseover="mouseImgOver(items.img_3)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                                            :src="items.img_2"
                                                            @mouseover="mouseImgOver(items.img_2)"
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
                                                            :src="items.img_3"
                                                            @mouseover="mouseImgOver(items.img_3)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                                            :src="items.img_2"
                                                            @mouseover="mouseImgOver(items.img_2)"
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
                                                            :src="items.img_3"
                                                            @mouseover="mouseImgOver(items.img_3)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                                            :src="items.img_2"
                                                            @mouseover="mouseImgOver(items.img_2)"
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
                                                            :src="items.img_3"
                                                            @mouseover="mouseImgOver(items.img_3)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                                                            :src="items.img_1"
                                                            @mouseover="mouseImgOver(items.img_1)"
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
                                <v-dialog
                                        v-model="dialog"
                                        max-width="1100"
                                        dark
                                >
                                    <v-card color="black">
                                        <v-layout>
                                            <v-flex lg9 md9 sm9 pa-5>
                                                <v-carousel v-model="model" hide-delimiters height="400">
                                                    <v-carousel-item
                                                            v-for="(item, index) in images"
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
                                                            v-for="(item, index) in images"
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
                                            <v-flex lg3 md3 sm3 pa-5 class="hotel_modal_text">
                                                <v-layout column justify-space-between fill-height>
                                                    <v-flex>
                                                        <v-row class="d-flex justify-space-between align-end">
                                                            <p class="title mb-0 pl-3">Double Room</p>
                                                            <v-btn light fab text right @click="dialog = !dialog">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-row>
                                                        <p class="caption grey--text mb-0">Starts from</p>
                                                        <p class="red--text mb-0 body-1">&#36;<span class="display-1">229</span></p>
                                                        <v-divider class="my-4" color="grey"></v-divider>
                                                        <p class="caption font-weight-bold mb-0">Features</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                            <p class="caption"><v-icon class="pr-2" color="grey">mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                        </div>
                                                        <p class="caption font-weight-bold mb-0">Bed types</p>
                                                        <div class="grey--text">
                                                            <span class="flaticon-king-size-bed-with-two-pillows"></span><span class="caption pl-2">1 double bed</span>
                                                        </div>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-layout class="justify-center fill-height align-end">
                                                            <v-btn
                                                                    color="#5392f9"
                                                                    large bottom text
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
                            </v-layout>
                        </v-card>

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
                                            <div>
                                                <v-icon>mdi-wifi</v-icon>
                                                Free Wi-Fi in all rooms!
                                            </div>
                                        </v-col>
                                        <v-col class="py-0" cols="4">
                                            <div>
                                                <v-icon>mdi-wifi</v-icon>
                                                Wi-Fi in public areas
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-layout>
                        <v-flex sm3 py-5 mr-3>
                            <v-divider></v-divider>
                            <h5>What they offer</h5>
                        </v-flex>
                        <v-flex sm9 py-5 ml-3>
                            <v-divider></v-divider>
                            <v-layout class="justify-space-between py-1">
                                <div>
                                    <v-icon class="align-top mr-2" large>mdi-earth</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                </div>
                                <v-list>
                                    <v-list-item>
                                        <v-img
                                                src="http://www.apsf.ru/style/flag_rf.png"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        Russia
                                    </v-list-item>
                                    <v-list-item>
                                        <v-img
                                                src="https://cdn.webshopapp.com/shops/94414/files/53448306/armenia-flag-icon-free-download.jpg"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        Armenia
                                    </v-list-item>
                                </v-list>
                                <v-list>
                                    <v-list-item>
                                        <v-img
                                                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        English
                                    </v-list-item>
                                    <v-list-item>
                                        <v-img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPtyPVWO2Li5t-2yc2zG31bJsZxE7JunePSu1xgYu7s2xB932"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        French
                                    </v-list-item>
                                </v-list>
                                <v-list>
                                    <v-list-item>
                                        <v-img
                                                src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        Italian
                                    </v-list-item>
                                    <v-list-item>
                                        <v-img
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"
                                                contain
                                                height="20"
                                                max-width="30"
                                                class="mr-2"
                                        ></v-img>
                                        Spanish
                                    </v-list-item>
                                </v-list>
                            </v-layout>
                            <v-layout class="justify-space-between py-1">
                                <div>
                                    <v-icon class="align-top mr-2" large>mdi-wifi</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                </div>
                                <div>Free Wi-Fi in all rooms!</div>
                                <div>Wi-Fi in public areas</div>
                            </v-layout>
                            <v-layout class="justify-space-between py-1">
                                <div>
                                    <v-icon class="align-top mr-2" large>mdi-car</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                </div>
                                <div>Airport transfer</div>
                                <div>Bicycle rental</div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex sm3 py-5 mr-3>
                            <v-divider></v-divider>
                            <h5>What's nearby</h5>
                        </v-flex>
                        <v-flex sm9 py-5 ml-3>
                            <v-divider></v-divider>
                            <v-layout class="justify-content-between py-1">
                                <div>
                                    <v-icon class="align-top mr-2" large>mdi-map-marker</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                </div>
                                <div>
                                    <strong>Popular landmarks</strong>
                                    <div>
                                        <v-tooltip color="black" bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn  height="20"  tile text color="#1976d2" v-on="on">
                                                    ЗавтCasa Batllo - 560 mрак
                                                </v-btn>
                                            </template>
                                            <v-img
                                                    src="https://picsum.photos/id/11/500/300"
                                                    lazy-src="https://picsum.photos/id/11/10/6"
                                                    aspect-ratio="1"
                                                    class="grey lighten-2"
                                                    min-width="300"
                                                    min-height="80"
                                            ></v-img>
                                        </v-tooltip>
                                    </div>
                                    <v-tooltip color="black"  bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn  height="20" tile text color="#1976d2" v-on="on">
                                                La Pedrera Casa Mila - 720 m
                                            </v-btn>
                                        </template>
                                        <v-img
                                                src="https://picsum.photos/id/11/500/300"
                                                lazy-src="https://picsum.photos/id/11/10/6"
                                                aspect-ratio="1"
                                                class="grey lighten-2"
                                                min-width="300"
                                                min-height="80"
                                        ></v-img>
                                    </v-tooltip>
                                    <div>
                                        <v-tooltip color="black"  bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn  height="20" tile text color="#1976d2" v-on="on">
                                                    La Boqueria - 1.39 km
                                                </v-btn>
                                            </template>
                                            <v-img
                                                    src="https://picsum.photos/id/11/500/300"
                                                    lazy-src="https://picsum.photos/id/11/10/6"
                                                    aspect-ratio="1"
                                                    class="grey lighten-2"
                                                    min-width="300"
                                                    min-height="80"
                                            ></v-img>
                                        </v-tooltip>
                                    </div>
                                    <v-tooltip color="black"  bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn  height="20" tile text color="#1976d2" v-on="on">
                                                Gothic Quarter (Barri Gotic) - 1.71 km
                                            </v-btn>
                                        </template>
                                        <v-img
                                                src="https://picsum.photos/id/11/500/300"
                                                lazy-src="https://picsum.photos/id/11/10/6"
                                                aspect-ratio="1"
                                                class="grey lighten-2"
                                                min-width="300"
                                                min-height="80"
                                        ></v-img>
                                    </v-tooltip>
                                    <!--<p>Casa Batllo - 560 m</p>
                                    <p>La Pedrera Casa Mila - 720 m</p>
                                    <p>La Boqueria - 1.39 km</p>
                                    <p>Gothic Quarter (Barri Gotic) - 1.71 km</p>-->
                                </div>
                                <div>
                                    <strong>Nearby landmarks</strong>
                                    <p>Cellarer - 50 m</p>
                                    <p>Xampany - 120 m</p>
                                    <p>Opera Lounge - 150 m</p>
                                    <p>BEB Bikes Rental - 160 m</p>
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
                <div id="tab2">
                    <v-layout>
                        <v-flex sm3 py-5 mr-3>
                            <v-divider></v-divider>
                            <h5>Property's guest policies</h5>
                        </v-flex>
                        <v-flex sm9 py-5 ml-3>
                            <v-divider></v-divider>
                            <strong>Children and extra beds</strong>
                            <p>All children are welcome.</p>
                            <strong>Others</strong>
                            <li>When booking more than 5 rooms, different policies and additional supplements may apply.</li>
                            <p>Extra beds are dependent on the room you choose. Please ask the property for more details.</p>
                        </v-flex>
                    </v-layout>
                </div>
                <div id="tab3">
                    <p class="display-1">Reviews of Vale Apartments Barcelona from real guests</p>
                    <v-col class="d-inline-flex" cols="12" sm="6">
                        <v-select
                                :items="reviews.languages"
                                label="All languages"
                                prepend-inner-icon="mdi-earth"
                                outlined
                        ></v-select>
                    </v-col>
                    <v-col class="d-inline-flex" cols="12" sm="6">
                        <v-select
                                :items="reviews.guests"
                                label="All guests"
                                prepend-inner-icon="mdi-account-group-outline"
                                outlined
                        ></v-select>
                    </v-col>
                    <v-container v-for="i in 4" :key="i">
                        <v-divider></v-divider>
                        <v-layout my-4>
                            <v-flex sm3>
                                <div class="blue_text"><span class="display-1 ">10.0</span><span class="subtitle-1"> Exceptional</span></div>
                            </v-flex>
                            <v-flex sm9>
                                <v-card
                                        class="mx-auto pa-5"
                                        color="#F9F9F9">
                                    <strong>"Exceptional”</strong>
                                    <p class="body-2"><v-btn color="#85c150" class="mr-2" dark x-small fab>+</v-btn>Well located. Good food nearby. Walking distance to town center.
                                        Many bus routes within blocks. Reception on premises. They were very accommodating.
                                        Helped print boarding passes and arranging
                                    </p>
                                    <p>...</p>
                                    <p class="body-2"><v-btn color="black" class="mr-2" dark x-small fab>-</v-btn>Small amount of street noise and some am construction next door.
                                        Ok between midnight to 8am.
                                    </p>
                                    <p class="caption">Reviewed June 20, 2019</p>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
                <div id="tab5">
                    <v-layout>
                        <v-flex sm3 py-5 mr-3>
                            <v-divider></v-divider>
                            <h5>Some helpful facts</h5>
                        </v-flex>
                        <v-flex sm9 py-5 ml-3>
                            <v-divider></v-divider>
                            <v-layout class="justify-content-between py-1">
                                <div>
                                    <strong>Check-in/Check-out</strong>
                                    <p>Check-in from:<strong>15:00</strong></p>
                                    <p>Check-in until:<strong>00:00</strong></p>
                                    <p>Check-in from:<strong>09:00</strong></p>
                                    <p>Check-in until:<strong>11:00</strong></p>
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex sm3 py-5 mr-3>
                            <v-divider></v-divider>
                            <h5>Announcements</h5>
                        </v-flex>
                        <v-flex sm9 py-5 ml-3>
                            <v-divider></v-divider>
                            <p>
                                Please note, when booking more than 2 apartments, different policies and
                                additional supplements may apply. A security deposit of EUR 500 is required
                                upon arrival for incidental charges. This deposit is fully refundable upon
                                check-out and subject to a damage inspection of the accommodation. Please
                                inform Vale Apartments Barcelona of your expected arrival time in advance.
                                You can use the Special Requests box when booking, or contact the property
                                directly using the contact details in your confirmation. This property does
                                not accommodate bachelor(ette) or similar parties. License number:
                            </p>
                            <strong>HUTB-010159, HUTB-010160, HUTB-010161, HUTB-010162HUTB-010158HUTB-010157, HUTB-010163</strong>
                        </v-flex>
                    </v-layout>
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
    name: "Hotel",
    data() {
      return {
        checked: false,
        fixed: false,
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
        items: {
          img_1: 'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
          img_2: 'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
          img_3: 'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        },
        menu: {
          show: false,
          src: '',
        },
        images: [
          'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/c74d0cf4097989090632e0eaeaaac3ae.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/425cfc17be086145517e7741c17239dd.jpg?s=1024x768',
            'https://pix6.agoda.net/hotelImages/566538/-1/082351b002df0514c05a971a078fa116.jpg?s=1024x768',
        ],
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
    .icon_grey{
        color: #8a8a8a;
    }
    .blue_bg{
        background-color: #f4f8fe;
    }
    [class^="flaticon-"]:before, [class*=" flaticon-"]:before, [class^="flaticon-"]:after, [class*=" flaticon-"]:after {
        margin-left: 0!important;
    }
    .nearby_places_title{
        background-color: #f7f7f7;
    }
    .v-card--reveal {
        align-items: center;
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
    .green_text{
        color: #85c150;
    }
    .rating_text{
        color: gray;
        font-size: smaller;
    }
    .rating_text span{
        color: #1976d2;
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
