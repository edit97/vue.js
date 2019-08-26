<template>
    <v-app-bar  color="#20274d" max-height="70" :scroll-threshold="40">
        <!--<v-overlay
                :value="overlay"
        >-->
            <v-container class="d-flex search">
                <v-text-field
                        label="Prepend inner" prepend-inner-icon="mdi-magnify"
                        sm3
                        solo
                ></v-text-field>
                <v-flex pl-2 m-0 sm2>
                    <v-text-field label="Start" solo></v-text-field>
                </v-flex>
                <v-flex pr-2 sm2>
                    <v-text-field label="End" solo></v-text-field>
                </v-flex>
                <v-flex pr-1 sm3>
                    <v-menu offset-y v-model="room"  min-width="300" :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-on="on"
                                    label="Room"
                                    prepend-inner-icon="mdi-account-group"
                                    append-icon="mdi-menu-down"
                                    sm3 solo readonly
                            ></v-text-field>
                        </template>
                        <v-list subheader flat >
                            <v-layout>
                                <v-flex>
                                    <v-list-item-group
                                            multiple
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
                                        <v-list-item @click="menu_family = !menu_family">
                                            Family travelers
                                        </v-list-item>
                                        <v-list-item @click="menu_family = !menu_family">
                                            Group travelers
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-flex>
                                <v-flex sm6 v-show="menu_family">
                                    <v-content class="menu p-3">
                                        <v-layout class="menu_counter">
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="decrement_family"
                                            >
                                                <p class="headline ma-0">-</p>
                                            </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="display-1 ma-0">{{family_travelers.rooms}}</p> <span class="pt-3">Rooms</span>
                                            </div>
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="increment_family"
                                            > <p class="headline ma-0">+</p> </v-btn>
                                        </v-layout>

                                        <v-divider class="my-0"></v-divider>

                                        <v-layout class="menu_counter">
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="decrement_adults"
                                            >
                                                <p class="headline ma-0">-</p> </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="display-1 ma-0">{{family_travelers.adults}}</p> <span class="pt-3">Adults</span>
                                            </div>
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="increment_adults"
                                            > <p class="headline ma-0">+</p> </v-btn>
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <v-layout class="menu_counter">
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="decrement_children"
                                            > <p class="headline ma-0">-</p> </v-btn>

                                            <div class="d-flex gray_color">
                                                <p class="display-1 ma-0">{{family_travelers.children}}</p> <span class="pt-3">Children</span>
                                            </div>
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="increment_children"
                                            > <p class="headline ma-0">+</p> </v-btn>
                                        </v-layout>

                                        <v-divider></v-divider>
                                        <div class="text-center my-2 w-100 gray_color" v-if="family_travelers.children!==0">Children's ages (years)</div>
                                        <v-layout wrap class="px-3">
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
                                </v-flex>
                            </v-layout>
                        </v-list>
                    </v-menu>
                </v-flex>
                <v-btn color="primary" height="48">Search</v-btn>
            </v-container>
<!--        </v-overlay>-->
    </v-app-bar>
</template>

<script>
  export default {
    name: 'SearchNav',
    data(){
      return {
        overlay: false,
        count: 0,
        room: false,
        check_room: [],
        menu_family: false,
        menu_group: false,
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
        items: ['1', '2', '3', '4'],
        checkbox1: false,
      }
    },
    methods: {
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
    },
  };
</script>

<style >
    .menu_counter{
        justify-content: space-around;
    }
    .menu .display-1{
        margin: 0;
        color: #5392f9;
    }
    .menu .v-text-field--outlined fieldset {
        height: 50px;
        top: 0 !important;
    }
    .gray_color{
        color: gray;
        font-size: 90%;
    }
    .search{
        margin-top: 25px;
    }
    .search .v-text-field.v-text-field--solo .v-input__control {
        max-height: 48px;
    }
</style>
