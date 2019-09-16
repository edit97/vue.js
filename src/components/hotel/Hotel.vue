<template>
    <div>
        <v-card class="hotel">
            <v-app-bar class="py-0" height="49" :fixed="fixed">
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
                        <v-btn text @click="$vuetify.goTo(0)">Back to top</v-btn>
                    </v-tabs>
                </v-container>
            </v-app-bar>
            <v-container>
                <General></General>

                <Room id="tab0" class="margin-top"></Room>

                <Facilities id="tab1" class="margin-top"></Facilities>

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

                <Reviews id="tab3" class="margin-top"></Reviews>

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
  import Facilities from './Facilities';
  import General from './General';
  export default {
    name: "Hotel",
    components: {General, Facilities, Reviews, Room},
    data() {
      return {
        fixed: false,
        hotel_menu: ['Rooms','Facilities','Children and extra beds','Reviews','Map','Check-in'],
        tab: null,
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
