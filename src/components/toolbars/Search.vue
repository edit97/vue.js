<template>
    <v-app-bar :class="$store.state.overlay ? 'search_app' : ''" flat color="#20274d" max-height="64" :scroll-threshold="40">
        <v-container class="d-flex search">
            <v-flex  ma-0 sm5>
                <v-menu v-model="place" offset-y  min-width="750"  nudge-top="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-on="on"
                                label="Prepend inner"
                                prepend-inner-icon="mdi-magnify"
                                solo sm3
                                @click="searchMenu()"
                        ></v-text-field>
                    </template>
                    <div class="">
                        <v-list subheader flat class="pb-0">
                            <v-list-item-group
                                        v-model="check_room"
                                        color="#5a96f9"
                                        mandatory
                                        flat="false"
                                        class="body-2 place_menu "
                                        active-class="place_menu_color"
                                >
                                    <v-list-item dense color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 0) ? 'white' : 'grey'">mdi-eye</v-icon>
                                        </v-list-item-icon>
                                        <div >
                                            <span :class="(check_room === 0) ? 'white--text' : 'place_name'">Barcelona</span>,
                                            <span :class="(check_room === 0) ? 'white--text' : 'grey--text'">Spain</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <div :class="(check_room === 0) ? 'white--text' : 'grey--text'">
                                            <span class="pr-3">30 Aug 2019 - 1 Sep 2019</span>
                                            <span>1 room, 2 adults, 0 children</span>
                                        </div>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 1) ? 'white' : 'grey'">mdi-home-city-outline</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                        <span class="font-weight-bold"><span :class="(check_room === 1) ? 'white--text' : 'place_name'">Barcelona</span>
                                            <v-chip color="#e12d2d" dark x-small>Popular</v-chip>
                                        </span><br>
                                            <span>Spain</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 1) ? 'white' : '#5392f9'" outlined label small>City</v-chip>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 2) ? 'white' : 'grey'">mdi-star</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                            <span class="font-weight-bold">Stay in the heart of <span :class="(check_room === 2) ? 'white--text' : 'place_name'">Barcelona</span></span><br>
                                            <span>Spain</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 2) ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 3) ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                            <span class="font-weight-bold"><span :color="(check_room === 3) ? 'white' : '#5392f9'" >Barcelona</span> Airport</span><br>
                                            <span>Barcelona</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 3) ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 4) ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                            <span class="font-weight-bold">Eixample</span><br>
                                            <span>Barcelona</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 4) ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 5) ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                            <span class="font-weight-bold">La Rambla</span><br>
                                            <span>Barcelona</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 5) ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    <v-list-item color="#5392f9">
                                        <v-list-item-icon class="mr-3">
                                            <v-icon :color="(check_room === 6) ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                        </v-list-item-icon>
                                        <div>
                                            <span class="font-weight-bold">Gotic</span><br>
                                            <span>Barcelona</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-chip class="font-weight-bold place_menu_chip" :color="(check_room === 6) ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                    </v-list-item>
                                </v-list-item-group>
                        </v-list>
                    </div>
                </v-menu>
            </v-flex>
            <div class="block mx-1" @click="searchMenu()">
                <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    class="date_piker pointer"
                    command="en"
                    @blur="closeLayer"
                >
                </el-date-picker>
            </div>
            <v-flex pr-1 sm3>
                <v-menu v-model="room" offset-y left max-width="550" nudge-top="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-on="on"
                                label="Room"
                                prepend-inner-icon="mdi-account-group"
                                append-icon="mdi-menu-down"
                                sm3 solo readonly
                                class="pointer"
                                @click="searchMenu()"
                        ></v-text-field>
                    </template>
                    <div class="">
                        <v-list flat>
                            <!--<v-row>
                                <v-col class="search_menu">
                                    <v-list-item-group
                                            mandatory
                                            color="#5a96f9"
                                            v-model="check_room"
                                    >
                                        <v-list-item @click="traveler()">
                                            Solo traveler
                                            <v-spacer></v-spacer>
                                            <div class="caption">1 room, 1 adult</div>
                                        </v-list-item>
                                        <v-list-item @click="traveler()">
                                            Couple / Pair
                                            <v-spacer></v-spacer>
                                            <div class="caption">1 room, 2 adult</div>
                                        </v-list-item>
                                        <v-list-item @click="menu_family = true">
                                            Family travelers
                                        </v-list-item>
                                        <v-list-item @click="menu_family = true">
                                            Group travelers
                                        </v-list-item>
                                        <v-list-item @click="menu_business = true">
                                            Business travelers
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-col>
                                <v-col sm6 class="search_menu" v-show="menu_family">
                                    <v-content class=" pa-3">
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.rooms"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                            &lt;!&ndash;<v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_family"
                                            >
                                                <p class="headline ma-0">-</p>
                                            </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.rooms}}</p> <span class="pt-2">Rooms</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_family"
                                            > <p class="headline ma-0">+</p> </v-btn>&ndash;&gt;
                                        </v-layout>

                                        <v-divider class="my-2"></v-divider>

                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.adults"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                           &lt;!&ndash; <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_adults"
                                            >
                                                <p class="headline ma-0">-</p> </v-btn>
                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.adults}}</p> <span class="pt-2">Adults</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_adults"
                                            > <p class="headline ma-0">+</p> </v-btn>&ndash;&gt;
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.children"
                                                    @change="handleChange"
                                                    :min="0" :max="4"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                           &lt;!&ndash; <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_children"
                                            > <p class="headline ma-0">-</p> </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.children}}</p> <span class="pt-2">Children</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_children"
                                            > <p class="headline ma-0">+</p> </v-btn>&ndash;&gt;
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <div class="text-center my-2 gray_color" v-if="family_travelers.children!==0">Children's ages (years)</div>
                                        <v-layout wrap class="justify-center">
                                            <v-flex  xs12 sm3 pr-2
                                                     v-for="i in family_travelers.children" :key="i"
                                            >
                                                <v-select
                                                        :items="items"
                                                        placeholder="-"
                                                        outlined dense hide-details
                                                ></v-select>
                                            </v-flex>
                                        </v-layout>
                                        <v-content class="mt-4" v-if="family_travelers.children===0">
                                            <small>Traveling with kids?</small>
                                            <v-layout>
                                                <v-flex sm10 md10>
                                                    <small>Include them above for the best prices and offers available with children friendly properties.</small>
                                                </v-flex>
                                                <v-flex sm1 md1>
                                                    <v-icon>mdi-account-group-outline</v-icon>
                                                </v-flex>
                                            </v-layout>
                                        </v-content>
                                    </v-content>
                                </v-col>
                                &lt;!&ndash;<v-col sm6 class="search_menu" v-show="business_travelers">
                                    <v-content class=" pa-3">
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="business_travelers.rooms"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                        </v-layout>

                                        <v-divider class="my-2"></v-divider>

                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="business_travelers.adults"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                        </v-layout>
                                    </v-content>
                                </v-col>&ndash;&gt;
                            </v-row>-->
                            <v-layout>
                                <v-flex class="search_menu">
                                    <v-list-item-group
                                            mandatory
                                            color="#5a96f9"
                                            v-model="check_room"
                                    >
                                        <v-list-item @click="traveler()">
                                            Solo traveler
                                            <v-spacer></v-spacer>
                                            <div class="caption">1 room, 1 adult</div>
                                        </v-list-item>
                                        <v-list-item @click="traveler()">
                                            Couple / Pair
                                            <v-spacer></v-spacer>
                                            <div class="caption">1 room, 2 adult</div>
                                        </v-list-item>
                                        <v-list-item @click="menu_family = true">
                                            Family travelers
                                        </v-list-item>
                                        <v-list-item @click="menu_family = true">
                                            Group travelers
                                        </v-list-item>
                                        <v-list-item @click="menu_business = true">
                                            Business travelers
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-flex>
                                <v-flex sm6 class="search_menu" v-show="menu_family === true">
                                    <v-content class=" pa-3">
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.rooms"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                            <!--<v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_family"
                                            >
                                                <p class="headline ma-0">-</p>
                                            </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.rooms}}</p> <span class="pt-2">Rooms</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_family"
                                            > <p class="headline ma-0">+</p> </v-btn>-->
                                        </v-layout>

                                        <v-divider class="my-2"></v-divider>

                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.adults"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                           <!-- <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_adults"
                                            >
                                                <p class="headline ma-0">-</p> </v-btn>
                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.adults}}</p> <span class="pt-2">Adults</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_adults"
                                            > <p class="headline ma-0">+</p> </v-btn>-->
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="family_travelers.children"
                                                    @change="handleChange"
                                                    :min="0" :max="4"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                           <!-- <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="decrement_children"
                                            > <p class="headline ma-0">-</p> </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="headline ma-0 pr-1">{{family_travelers.children}}</p> <span class="pt-2">Children</span>
                                            </div>
                                            <v-btn text icon
                                                   color="primary"
                                                   @click.prevent="increment_children"
                                            > <p class="headline ma-0">+</p> </v-btn>-->
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <div class="text-center my-2 gray_color" v-if="family_travelers.children!==0">Children's ages (years)</div>
                                        <v-layout wrap class="justify-center">
                                            <v-flex  xs12 sm3 pr-2
                                                     v-for="i in family_travelers.children" :key="i"
                                            >
                                                <v-select
                                                        :items="items"
                                                        placeholder="-"
                                                        outlined dense hide-details
                                                ></v-select>
                                            </v-flex>
                                        </v-layout>
                                        <v-content class="mt-4" v-if="family_travelers.children === 0">
                                            <small>Traveling with kids?</small>
                                            <v-layout>
                                                <v-flex sm10 md10>
                                                    <small>Include them above for the best prices and offers available with children friendly properties.</small>
                                                </v-flex>
                                                <v-flex sm1 md1>
                                                    <v-icon>mdi-account-group-outline</v-icon>
                                                </v-flex>
                                            </v-layout>
                                        </v-content>
                                    </v-content>
                                </v-flex>
                                <v-flex sm6 class="search_menu" v-show="business_travelers === true">
                                    <v-content class=" pa-3">
                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="business_travelers.rooms"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                        </v-layout>

                                        <v-divider class="my-2"></v-divider>

                                        <v-layout class="menu_counter">
                                            <el-input-number
                                                    v-model="business_travelers.adults"
                                                    @change="handleChange"
                                                    :min="1" :max="10"
                                                    placeholder="Rooms"
                                                    label="Rooms"
                                            ></el-input-number>
                                        </v-layout>
                                    </v-content>
                                </v-flex>
                            </v-layout>
                        </v-list>
                    </div>
                </v-menu>
            </v-flex>
            <v-btn color="primary" height="48">Search</v-btn>
        </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'SearchNav',
    data(){
      return {
        date: '',
        count: 0,
        place: false,
        room: false,
        check_room: [],
        menu_family: false,
        menu_group: false,
        menu_business: false,
        family_travelers: {
          rooms: 1,
          adults: 1,
          children: 0,
        },
        group_travelers: {
          rooms: 1,
          adults: 1,
          children: 0,
        },
        business_travelers: {
          rooms: 1,
          adults: 1,
        },
        items: ['1', '2', '3', '4'],
        checkbox1: false,
      }
    },
    methods: {

      handleChange(value) {
        console.log(value)
      },
      searchMenu(){
        this.$store.commit('searchMenu', true);
      },
      traveler(){
        this.menu_family = false;
        this.menu_group = false;
        this.menu_business = false;
      },
      increment_family () {
        this.family_travelers.rooms++;
      },
      increment_adults () {
        this.family_travelers.adults++;
      },
      increment_children () {
        this.family_travelers.children++;
      },
      decrement_family () {
        if(this.family_travelers.rooms > 1){
          this.family_travelers.rooms-- ;
        }
      },
      decrement_adults () {
        if(this.family_travelers.adults > 1){
          this.family_travelers.adults-- ;
        }
      },
      decrement_children () {
        if(this.family_travelers.children > 0){
          this.family_travelers.children-- ;
        }
      },
      closeLayer() {
        if(!this.room && !this.place)
            this.$store.commit('searchMenu', false);
      }
    },
    watch: {
        room(show) {
          if (!show) this.closeLayer();
        },
        place(show) {
          if (!show) this.closeLayer();
        },
    }
  };
</script>

<style >
    .v-input input, .el-range-input {
        cursor: pointer !important;
    }
    .search_menu{
        min-width: 280px !important;
    }
    .place_menu{
        width: 100%;
    }
    .place_menu_color{
        background-color: #5a96f9;
        color: white !important;
    }
    .place_menu_chip{
        width: 105px;
    }
    .place_menu_chip .v-chip__content{
        margin: 0 auto;
    }
    .place_name{
        color: #5a96f9;
    }
    .date_piker{
        height: 48px !important;
    }
    .menu_counter{
        justify-content: space-around;
        margin: 5px 0;
        min-width: 300px;
    }
    .search_menu .headline{
        margin: 0;
        color: #5392f9;
    }
    .search_menu .v-text-field--outlined fieldset {
        height: 50px;
        top: 5px !important;
    }
    .gray_color{
        color: gray;
        font-size: 90%;
    }
    .search_app{
        z-index: 2;
    }
    .search{
        margin-top: 52px;
    }
    .pointer{
        cursor: pointer !important;
    }
    .v-el-date-picker {
        width: 100% !important;
        height: 56px !important;
        padding: 0 12px;
        background: transparent !important;
        min-height: 56px;
        cursor: text;
        border-radius: 4px;
        margin-bottom: 8px;
        color: #c1c5cd;
        font-family: "Roboto", sans-serif;
        line-height: 1.5;
        /*border-color: rgba(0, 0, 0, 0.24);*/
    }
  /*  v-el-date-picker:hover {
         border-color: rgba(0, 0, 0, 0.86);
     }
    v-el-date-picker:focus {
         border-color: #1976d2 !important;
         caret-color: #1976d2 !important;
         border-width: 2px;
     }
    v-el-date-picker:focus .el-input.is-active .el-input__inner, .el-input__inner {
         border-color: #1976d2 !important;
         caret-color: #1976d2 !important;
     }
    .el-range-editor.is-active, .el-range-editor.is-active:hover {
        border-color: #1976d2;
        border-width: 2px;
    }*/
    /*.el-date-editor .el-range-input::placeholder {
        height: 20px;
        line-height: 20px;
        color: #c1c5cd;
        font-size: 16px;
        min-height: 8px;
    }
    .el-date-editor .el-range-input::-webkit-input-placeholder {
        height: 20px;
        line-height: 20px;
        color: #c1c5cd;
        font-size: 16px;
        min-height: 8px;
    }*/
    .el-date-editor .el-range-separator {
        padding: 0 5px !important;
        line-height: 32px !important;
        width: 5% !important;
        color: #c1c5cd !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 40px !important;
    }
    /*.el-date-editor .el-range-input {
        line-height: 20px;
        color: #c1c5cd;
        font-family: Roboto, sans-serif;
        font: inherit !important;
    }*/
</style>
