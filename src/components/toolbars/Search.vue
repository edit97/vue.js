<template>
    <v-app-bar :class="$store.state.overlay ? 'search_app' : ''" flat color="#20274d" :max-height="64" :scroll-threshold="40">
        <v-container class="d-flex  pb-0 mt-3 search">
            <v-flex  ma-0 sm5>
                <v-autocomplete
                        v-model="select"
                        :items="items"
                        :search-input.sync="search"
                        cache-items
                        flat solo
                        hide-details
                        clearable
                        placeholder="Enter a destination or property"
                        @click="searchMenu()"
                        @blur="closeLayer"
                >
                    <v-list-item v-slot:default="{ active }" dense color="#5392f9" active-class="place_menu_color">
                        <v-list-item-icon class="mr-3">
                            <v-icon :color="active ? 'white' : 'grey'">mdi-eye</v-icon>
                        </v-list-item-icon>
                        <div>
                            <span :class="active ? 'white--text' : 'blue_text'">Barcelona,</span>
                            <span :class="active ? 'white--text' : 'grey--text'">Spain</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div :class="active ? 'white--text' : 'grey--text'">
                            <span class="pr-3">30 Aug 2019 - 1 Sep 2019</span>
                            <span>1 room, 2 adults, 0 children</span>
                        </div>
                    </v-list-item>
                    <template v-slot:no-data>
                        <v-list flat class="py-0">
                            <v-list-item-group
                                    color="#5a96f9"
                                    mandatory
                                    class="body-2 width_100"
                                    active-class="place_menu_color"
                            >
                                <v-list-item v-slot:default="{ active }" dense color="#5392f9" active-class="place_menu_color">
                                    <v-list-item-icon class="mr-3">
                                        <v-icon :color="active ? 'white' : 'grey'">mdi-eye</v-icon>
                                    </v-list-item-icon>
                                    <div>
                                        <span :class="active ? 'white--text' : 'blue_text'">Barcelona,</span>
                                        <span :class="active ? 'white--text' : 'grey--text'">Spain</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div :class="active ? 'white--text' : 'grey--text'">
                                        <span class="pr-3">30 Aug 2019 - 1 Sep 2019</span>
                                        <span>1 room, 2 adults, 0 children</span>
                                    </div>
                                </v-list-item>

                                <v-divider></v-divider>
                                <v-list-item v-slot:default="{ active }" color="#5392f9">
                                    <v-list-item-icon class="mr-3">
                                        <v-icon :color="active ? 'white' : 'grey'">mdi-home-city-outline</v-icon>
                                    </v-list-item-icon>
                                    <div>
                                        <span class="font-weight-bold"><span :class="active ? 'white--text' : 'blue_text'">Barcelona</span>
                                            <v-chip color="#e12d2d" dark x-small>Popular</v-chip>
                                        </span><br>
                                        <span>Spain</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-chip
                                            class="font-weight-bold place_menu_chip"
                                            :color="active ? 'white' : '#5392f9'"
                                            outlined label small>
                                        City
                                    </v-chip>
                                </v-list-item>

                                <v-divider></v-divider>
                                <v-list-item v-slot:default="{ active }" color="#5392f9">
                                    <v-list-item-icon class="mr-3">
                                        <v-icon :color="active ? 'white' : 'grey'">mdi-star</v-icon>
                                    </v-list-item-icon>
                                    <div>
                                        <span class="font-weight-bold">Stay in the heart of <span :class="active ? 'white--text' : 'blue_text'">Barcelona</span></span><br>
                                        <span>Spain</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-chip class="font-weight-bold place_menu_chip" :color="active ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                </v-list-item>

                                <v-divider></v-divider>
                                <v-list-item v-slot:default="{ active }" color="#5392f9">
                                    <v-list-item-icon class="mr-3">
                                        <v-icon :color="active ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                    </v-list-item-icon>
                                    <div>
                                        <span class="font-weight-bold"><span :color="active ? 'white' : '#5392f9'" >Barcelona</span> Airport</span><br>
                                        <span>Barcelona</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-chip class="font-weight-bold place_menu_chip" :color="active ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                </v-list-item>

                                <v-divider></v-divider>
                                <v-list-item v-slot:default="{ active }" color="#5392f9">
                                    <v-list-item-icon class="mr-3">
                                        <v-icon :color="active ? 'white' : 'grey'">mdi-map-marker</v-icon>
                                    </v-list-item-icon>
                                    <div>
                                        <span class="font-weight-bold">Eixample</span><br>
                                        <span>Barcelona</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-chip class="font-weight-bold place_menu_chip" :color="active ? 'white' : '#5392f9'" outlined label small>Area</v-chip>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </template>
                    <template v-slot:item="{ item }">
                        <v-hover v-slot:default="{ hover }">
                            <v-row  :class="hover ? 'place_menu_color' : ''" class="px-4">
                                <v-list-item-icon class="mr-3">
                                    <v-icon :color="hover ? 'white' : 'grey'">
                                        mdi-map-marker
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item"></v-list-item-title>
                                    <v-list-item-subtitle v-text="'Barcelona'" :class="hover ? 'white--text' : ''"></v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-chip
                                            :color="hover ? 'white' : '#5392f9'"
                                            class="font-weight-bold place_menu_chip"
                                            label outlined small>
                                        City
                                    </v-chip>
                                </v-list-item-action>
                            </v-row>
                        </v-hover>
                    </template>
                </v-autocomplete>
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
                <v-menu v-model="room" offset-y
                        :left="!(check_room === 0 || check_room === 1)"
                        max-width="550"
                        nudge-bottom="8"
                        :close-on-content-click="false"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-on="on"
                                :label="roomCheck"
                                prepend-inner-icon="mdi-account-group"
                                append-icon="mdi-menu-down"
                                hide-details
                                sm3 solo readonly
                                class="pointer"
                                @click="searchMenu()"
                        ></v-text-field>
                    </template>
                    <v-list flat>
                        <v-layout>
                            <v-flex class="search_menu">
                                <v-list-item-group
                                        mandatory
                                        color="#5a96f9"
                                        v-model="check_room"
                                >
                                    <v-list-item>
                                        Solo traveler
                                        <v-spacer></v-spacer>
                                        <div class="caption">1 room, 1 adult</div>
                                    </v-list-item>
                                    <v-list-item>
                                        Couple / Pair
                                        <v-spacer></v-spacer>
                                        <div class="caption">1 room, 2 adult</div>
                                    </v-list-item>
                                    <v-list-item>
                                        Family travelers
                                    </v-list-item>
                                    <v-list-item>
                                        Group travelers
                                    </v-list-item>
                                    <v-list-item>
                                        Business travelers
                                    </v-list-item>
                                </v-list-item-group>
                            </v-flex>
                            <v-flex sm6 class="search_menu" v-show="check_room === 2">
                                <v-content class=" pa-3">
                                    <v-layout class="menu_counter">
                                        <el-input-number
                                                v-model="family_travelers.rooms"
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
                                    <div class="text-center my-2 grey--text body-2" v-if="family_travelers.children!==0">Children's ages (years)</div>
                                    <v-layout wrap class="justify-center">
                                        <v-flex  xs12 sm3 pr-2
                                                 v-for="i in family_travelers.children" :key="i"
                                        >
                                            <v-select
                                                    :items="['1', '2', '3', '4']"
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
                            <v-flex sm6 class="search_menu" v-show="check_room === 3">
                                <v-content class=" pa-3">
                                    <v-layout class="menu_counter">
                                        <el-input-number
                                                v-model="group_travelers.rooms"
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
                                                v-model="group_travelers.adults"
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
                                                v-model="group_travelers.children"
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
                                    <div class="text-center my-2 grey--text body-2" v-if="family_travelers.children!==0">Children's ages (years)</div>
                                    <v-layout wrap class="justify-center">
                                        <v-flex  xs12 sm3 pr-2
                                                 v-for="i in group_travelers.children" :key="i"
                                        >
                                            <v-select
                                                    :items="['1', '2', '3', '4']"
                                                    placeholder="-"
                                                    outlined dense hide-details
                                            ></v-select>
                                        </v-flex>
                                    </v-layout>
                                    <v-content class="mt-4" v-if="group_travelers.children === 0">
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
                            <v-flex sm6 class="search_menu" v-show="check_room === 4">
                                <v-content class="pa-3">
                                    <v-layout class="menu_counter">
                                        <el-input-number
                                                v-model="business_travelers.rooms"
                                                :min="1" :max="10"
                                                placeholder="Rooms"
                                                label="Rooms"
                                        ></el-input-number>
                                    </v-layout>

                                    <v-divider class="my-2"></v-divider>

                                    <v-layout class="menu_counter">
                                        <el-input-number
                                                v-model="business_travelers.adults"
                                                :min="1" :max="10"
                                                placeholder="Rooms"
                                                label="Rooms"
                                        ></el-input-number>
                                    </v-layout>
                                </v-content>
                            </v-flex>
                        </v-layout>
                    </v-list>
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
        items: [],
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
        search: null,
        select: null,
        date: '',
        room: false,
        check_room: null,
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
      }
    },
    methods: {
      querySelections (v) {
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
        }, 500)
      },
      searchMenu(){
        this.$store.commit('searchMenu', true);
      },
      closeLayer() {
        if(!this.room)
            this.$store.commit('searchMenu', false);
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
        room(show) {
          if (!show) this.closeLayer();
        },
    },
    computed: {
      roomCheck(){
        switch (this.check_room) {
          case 0: return 'Solo traveler';
          case 1: return 'Couple / Pair';
          case 2: return 'Family travelers';
          case 3: return 'Group travelers';
          case 4: return 'Business travelers';
        }
        return 'Traveler'
      }
    }
  };
</script>

<style >
    .search_app{
        z-index: 2;
    }
    .v-input input, .el-range-input {
        cursor: pointer !important;
    }
    .search_menu{
        min-width: 280px !important;
    }
    .width_100{
        width: 100%;
    }
    .pointer{
        cursor: pointer !important;
    }
    .place_menu_color{
        background-color: #5a96f9;
        color: white !important;
    }
    .place_menu_chip{
        width: 105px;
    }
    .blue_text{
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
    .el-date-editor .el-range-separator {
        color: #c1c5cd !important;
        line-height: 40px !important;
    }
    .v-chip__content{
        margin: auto;
    }
</style>
