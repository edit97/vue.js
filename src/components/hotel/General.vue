<template>
<div>
    <v-layout>
        <v-flex sm8 md8>
            <v-hover v-slot:default="{ hover }">
                <v-img
                        src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                        lazy-src="../../../public/images/no-image.png"
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
            </v-hover>
        </v-flex>
        <v-flex sm4 md4 pl-2>
            <v-flex pb-1>
                <v-hover v-slot:default="{ hover }">
                    <v-img
                            min-height="247"
                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116150.jpg?k=e5dfcb99ac06655e16ec83aa34f0767158739e67d998e6335ad8ac071edec38c&amp;o="
                            lazy-src="../../../public/images/no-image.png"
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
                </v-hover>
            </v-flex>
            <v-layout pt-1>
                <v-flex sm6 pr-1>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                                min-height="145"
                                src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116311.jpg?k=d76884a8698a7790ec416d5ae369c3104d20ad751378b68e559e821a47857c8c"
                                lazy-src="../../../public/images/no-image.png"
                        >
                            <v-fade-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                        style="height: 100%;"
                                ></div>
                            </v-fade-transition>
                        </v-img>
                    </v-hover>
                </v-flex>
                <v-flex sm6 pl-1>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                                min-height="145"
                                src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112083.jpg?k=83940a10efc5386b3adf078f201a45b915ffc2478ce31ce3dc26a11a5097662e&amp;o="
                                lazy-src="../../../public/images/no-image.png"
                                @click="dialog_all_img = true"
                                class="pointer"
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
                                    v-for="(item, index) in $store.state.images[tag]"
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
        <v-flex sm9>
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
                        <v-btn depressed fab dark color="#e12d2d">
                            <v-icon dark>mdi-star-four-points-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <span class="red_text subtitle-1">This property is in high demand!</span>
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
</div>
</template>

<script>
  export default {
    name: 'General',
    data() {
      return {
        price_btn: true,
        hotel_like: false,
        dialog_all_img: false,
        tag: 0,
        model: 0,
        rating: 4,
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
      };
    },
  };
</script>

<style scoped>

</style>
