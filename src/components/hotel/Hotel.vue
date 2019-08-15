<template>
    <div>
        <v-app id="inspire">
        <v-card class="hotel">
            <v-app-bar
                    absolute
                    color="white"
                    elevate-on-scroll
                    scroll-target="#scrolling-techniques-7"
            >
                <template v-slot:extension>
                    <v-tabs
                            v-model="tab"
                            align-with-title
                            background-color="transparent"
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab v-for="(item, index) in hotel_menu" :key="index">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
            <v-container>
                <v-content>
                    <v-layout>
                        <v-hover class="m-2" v-slot:default="{ hover }">
                            <v-flex sm8>
                                <v-card class="mx-auto" color="grey lighten-4">
                                    <v-img
                                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
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
                            </v-flex>
                        </v-hover>
                        <v-flex sm4 class="mt-2">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="mx-auto" color="grey lighten-4" >
                                    <v-img
                                            min-height="250"
                                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116150.jpg?k=e5dfcb99ac06655e16ec83aa34f0767158739e67d998e6335ad8ac071edec38c&amp;o="
                                    >
                                        <v-fade-transition>
                                            <v-layout wrap
                                                      v-if="hover"
                                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                                      style="height: 100%;"
                                            >
                                                <p class="hover_title">Deluxe Two-Bedroom  Apartment</p>
                                                <p class="hover_p "><v-icon dark>mdi-hotel</v-icon> 1 queen bed or 2 single beds or 1 sofa bed</p>
                                                <p class="hover_p "><v-icon dark>mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                                <p class="hover_p"><v-icon dark>mdi-home-city-outline</v-icon> Balcony / terrace</p>
                                                <p class="hover_p"><v-icon dark>mdi-shower-head</v-icon>Shower</p>
                                            </v-layout>
                                        </v-fade-transition>
                                    </v-img>
                                </v-card>
                            </v-hover>
                            <v-layout>
                                <v-flex sm6 class="my-2 pr-1">
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
                                <v-flex sm6 class="my-2 pl-1">
                                    <v-hover v-slot:default="{ hover }">
                                        <v-card class="mx-auto" color="grey lighten-4">
                                            <v-img
                                                    min-height="145"
                                                    src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112083.jpg?k=83940a10efc5386b3adf078f201a45b915ffc2478ce31ce3dc26a11a5097662e&amp;o="
                                            >
                                                <v-fade-transition>
                                                    <div
                                                            v-if="hover"
                                                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
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

                    <v-layout>
                        <v-flex sm3>
                            <v-card class="m-2">
                                <v-container class="row mx-1">
                                    <v-btn color="#5392f9" dark height="50" class="mr-2"><h3 class="m-0">9.5</h3></v-btn>
                                    <div>
                                        Exceptional<br>
                                        <small>/10 <span>(348 reviews)</span></small>
                                    </div>
                                </v-container>
                            </v-card>
                            <v-card class="m-2">
                                <v-container class="row mx-1" wrap>
                                    <div class="mb-2">
                                        <iframe
                                                width="220"
                                                height="120"
                                                id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameborder="0"
                                                scrolling="no"
                                                marginheight="0"
                                                marginwidth="0"
                                        ></iframe>
                                    </div>

                                    <v-btn color="#5392f9" outlined dark height="40" class="mr-2 mb-2"><h5 class="m-0">9.4</h5></v-btn>
                                    <div>
                                        Exceptional<br>
                                        <small>Location rating score</small>
                                    </div>
                                    <div>
                                        <small class="font-weight-bold"><v-icon dense>mdi-medal</v-icon>Exceptional location</small>
                                        <small>- Inside city center</small>
                                        <v-divider></v-divider>
                                    </div>
                                    <div class="w-100">
                                        <small class="float-left"><v-icon dense>mdi-parking</v-icon>Parking</small>
                                        <small class="float-right green_text">Available</small>
                                    </div>
                                </v-container>
                            </v-card>
                        </v-flex>
                        <v-flex sm9>
                            <v-card class="m-2">
                                <v-container>
                                    <v-btn color="#ff567d" dark small><small>Agoda homes</small></v-btn>
                                    <v-btn color="#f05700" dark small class="mx-2"><small>Top Value</small></v-btn>
                                    <v-btn color="#32a923" dark small><small>Free Wi-Fi</small></v-btn>
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
                                    <a href="#"><small class="text-dark">valencia, 191, Eixample, Barcelona, Spain, 08011 - </small> SEE MAP</a>
                                </v-container>
                            </v-card>
                            <v-card class="m-2">
                                <v-container >
                                    <v-layout class="text-center">
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
                            <v-card class="m-2">
                                <v-container>
                                    <v-layout class="justify-content-between">
                                        <v-flex sm2 xs4 class="text-center">
                                            <v-tooltip color="black" top>
                                                <template v-slot:activator="{ on }">
                                                    <v-icon color="#32a923" class="w-100" large v-on="on">mdi-subway-variant</v-icon>
                                                    <small>590 meters to public transportation</small>
                                                </template>
                                                <v-layout>
                                                    590 meters to public transportation
                                                </v-layout>
                                            </v-tooltip>
                                        </v-flex>
                                        <v-flex sm2 xs4 class="text-center">
                                            <v-tooltip color="black" top>
                                                <template v-slot:activator="{ on }">
                                                    <v-icon color="#32a923" class="w-100" large v-on="on">mdi-airplane</v-icon>
                                                    <small>Airport transfer</small>
                                                </template>
                                                <v-layout>
                                                    Airport transfer available
                                                </v-layout>
                                            </v-tooltip>
                                        </v-flex>
                                        <v-flex sm3 xs4 class="text-center">
                                            <v-icon color="#32a923" class="w-100" large>mdi-wifi</v-icon>
                                            <small>Free Wi-Fi in all rooms!</small>
                                        </v-flex>
                                        <v-flex sm2 xs4 class="text-center">
                                            <v-icon color="#32a923" class="w-100" large>mdi-air-conditioner</v-icon>
                                            <small>Air conditioning</small>
                                        </v-flex>
                                        <v-flex sm2 xs4 class="text-center">
                                            <v-icon color="#32a923" class="w-100" large>mdi-home-city-outline</v-icon>
                                            <small>Balcony/terrace</small>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-content>
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card>
                                <v-img
                                        class="white--text"
                                        height="300px"
                                        src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                                >
                                    <v-card-title  class="align-end fill-height">
                                        <h2 class=" bg-dark p-3">Vale Apartments Barcelona</h2>
                                    </v-card-title>
                                </v-img>
                            </v-card>
                        </v-item>

                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <h5>An overview</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <span class="font-weight-bold">Vspa Apartments Barcelona</span>
                                offers accommodations in Barcelona. Casa Batllo is 1969 feet away. Free WiFi is offered .
                                The accommodations features a flat-screen TV and a modern system that allows to control the lights
                                via a tablet. There is eco-friendly system for the air conditioning and warm water. There is a seating
                                and/or dining area in some apartments. There is
                                <span>also a kitchen, fitted with a dishwasher. An oven and microwave are also available,
                  as well as a coffee machine. There is a private bathroom with a bath or shower in each of
                  them. Bed linen and towels are provided. La Pedrera is 2297 feet from Vale Apartments Barcelona .
                  The nearest airport is Barcelona El Prat Airport, 7.5 mi from Vale Apartments Barcelona.
              </span>
                            </v-flex>
                        </v-layout>
                        <!--<v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>What they offer</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-human-female-boy</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-earth</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-wifi</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Free Wi-Fi in all rooms!</div>
                                    <div>Free Wi-Fi in all rooms!</div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>Nearest essentials</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-icon>mdi-human-female-boy</v-icon>
                            </v-flex>
                        </v-layout>-->
                        <!--<v-tab-item>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-tab-item>-->
                    </v-content>
                </v-content>
            </v-container>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-container>
                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>What they offer</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-human-female-boy</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-earth</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-wifi</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Free Wi-Fi in all rooms!</div>
                                    <div>Free Wi-Fi in all rooms!</div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>Nearest essentials</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-icon>mdi-human-female-boy</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
                <v-tab-item>
                    <v-container>
                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>What they offer</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-human-female-boy</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-earth</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Babysitting service</div>
                                    <div>Family room</div>
                                    <div>Kids club</div>
                                </v-layout>
                                <v-layout class="justify-content-between py-1">
                                    <v-icon large>mdi-wifi</v-icon>
                                    <v-divider vertical class="m-0"></v-divider>
                                    <div>Free Wi-Fi in all rooms!</div>
                                    <div>Free Wi-Fi in all rooms!</div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex sm3 py-5 mr-3>
                                <v-divider></v-divider>
                                <h5>1111111111111111111</h5>
                            </v-flex>
                            <v-flex sm9 py-5 ml-3>
                                <v-divider></v-divider>
                                <v-icon large>mdi-human-female-boy</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
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
                            <p class="body-2"><v-btn color="#85c150" class="mr-2" dark small fab>+</v-btn>Well located. Good food nearby. Walking distance to town center.
                                Many bus routes within blocks. Reception on premises. They were very accommodating.
                                Helped print boarding passes and arranging
                            </p>
                            <p>...</p>
                            <p class="body-2"><v-btn color="black" class="mr-2" dark small fab>-</v-btn>Small amount of street noise and some am construction next door.
                                Ok between midnight to 8am.
                            </p>
                            <p class="caption">Reviewed June 20, 2019</p>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-app>
    </div>
</template>

<script>

  export default {
    name: "Hotel",
    data() {
      return {
        rating: 4,
        hotel_menu: ['Facilities','Children and extra beds','Reviews','Map','Check-in'],
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
            ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      };
    }
  };
</script>

<style >
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
    .hover_p{
        font-size: 14px;
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
    }
    .blue_text{
        color: #1976d2;
    }
</style>
