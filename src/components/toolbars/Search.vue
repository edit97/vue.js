<template>
    <v-app-bar  color="blue-grey darken-4" :scroll-threshold="40">
        <v-container d-flex  pa-0>
            <v-text-field
                    label="Prepend inner" prepend-inner-icon="mdi-magnify"
                    sm3
                    solo
            ></v-text-field>
            <v-flex pl-2 sm2>
                <v-text-field label="Start" solo></v-text-field>
            </v-flex>
            <v-flex pr-2 sm2>
                <v-text-field label="End" solo></v-text-field>
            </v-flex>
            <v-flex pr-1 sm3>
                <v-menu offset-y v-model="room" min-width="300"  :close-on-content-click="false">
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
                        <v-list-item-group
                                multiple
                                v-model="check_room"
                        >
                            <v-list-item>
                                <template v-slot:default="{ active, toggle }">
                                    <v-list-item-action>
                                        Solo traveler
                                    </v-list-item-action>
                                    <v-list-tile-action-text>
                                        1 room, 1 adult
                                    </v-list-tile-action-text>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active, toggle }">
                                    <v-list-item-action>
                                        Couple / Pair
                                    </v-list-item-action>
                                    <v-list-tile-action-text>
                                        1 room, 2 adult
                                    </v-list-tile-action-text>
                                </template>
                            </v-list-item>
                            <v-menu
                                    v-model="menu_family"
                                    :close-on-content-click="false"
                                    offset-x flat
                                    max-width="300"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-list-item v-on="on">
                                        <v-list-item-action>
                                            Family travelers
                                        </v-list-item-action>
                                        <v-list-tile-action-text>
                                            1 room, 2 adult
                                        </v-list-tile-action-text>
                                    </v-list-item>
                                </template>

                                <v-content class="menu p-3">
                                    <v-layout class="menu_counter">
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="decrement_family"
                                            > <h2>-</h2> </v-btn>

                                            <div class="d-flex gray_color">
                                                <h2>{{family_travelers.rooms}}</h2> <span class="pt-3">Rooms</span>
                                            </div>
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="increment_family"
                                            > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>

                                    <v-layout class="menu_counter">
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="decrement_adults"
                                        > <h2>-</h2> </v-btn>

                                        <div class="d-flex gray_color">
                                            <h2>{{family_travelers.adults}}</h2> <span class="pt-3">Adults</span>
                                        </div>
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="increment_adults"
                                        > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>
                                    <v-layout class="menu_counter">
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="decrement_children"
                                        > <h2>-</h2> </v-btn>

                                        <div class="d-flex gray_color">
                                            <h2>{{family_travelers.children}}</h2> <span class="pt-3">Children</span>
                                        </div>
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="increment_children"
                                        > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>
                                    <v-layout row class="px-3">
                                        <div class="text-center my-2 w-100 gray_color"  v-if="family_travelers.children!==0">Children's ages (years)</div>
                                        <v-flex  xs12 sm3 pr-2
                                            v-for="i in family_travelers.children" :key="i"
                                        >
                                            <v-select
                                                    :items="items"
                                                    label="-"
                                                    outlined dense hide-details
                                            ></v-select>
                                        </v-flex>
                                        <v-checkbox
                                                v-model="checkbox1"
                                                label="I’d prefer a family room"
                                                v-if="family_travelers.children!==0"
                                                class="w-100"
                                        ></v-checkbox>
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
                            </v-menu>
                            <v-menu
                                    v-model="menu_group"
                                    :close-on-content-click="false"
                                    offset-x flat
                                    max-width="300"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-list-item v-on="on">
                                        <v-list-item-action>
                                            Family travelers
                                        </v-list-item-action>
                                        <v-list-tile-action-text>
                                            1 room, 2 adult
                                        </v-list-tile-action-text>
                                    </v-list-item>
                                </template>

                                <v-content class="menu p-3">
                                    <v-layout class="menu_counter">
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="decrement_family"
                                            > <h2>-</h2> </v-btn>

                                            <div class="d-flex gray_color">
                                                <h2>{{family_travelers.rooms}}</h2> <span class="pt-3">Rooms</span>
                                            </div>
                                            <v-btn text fab
                                                   color="primary"
                                                   @click.prevent="increment_family"
                                            > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>

                                    <v-layout class="menu_counter">
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="decrement_adults"
                                        > <h2>-</h2> </v-btn>

                                        <div class="d-flex gray_color">
                                            <h2>{{family_travelers.adults}}</h2> <span class="pt-3">Adults</span>
                                        </div>
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="increment_adults"
                                        > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>
                                    <v-layout class="menu_counter">
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="decrement_children"
                                        > <h2>-</h2> </v-btn>

                                        <div class="d-flex gray_color">
                                            <h2>{{family_travelers.children}}</h2> <span class="pt-3">Children</span>
                                        </div>
                                        <v-btn text fab
                                               color="primary"
                                               @click.prevent="increment_children"
                                        > <h2>+</h2> </v-btn>
                                    </v-layout>

                                    <v-divider></v-divider>
                                    <v-layout row class="px-3">
                                        <div class="text-center my-2 w-100 gray_color"  v-if="family_travelers.children!==0">Children's ages (years)</div>
                                        <v-flex  xs12 sm3 pr-2
                                            v-for="i in family_travelers.children" :key="i"
                                        >
                                            <v-select
                                                    :items="items"
                                                    label="-"
                                                    outlined dense hide-details
                                            ></v-select>
                                        </v-flex>
                                        <v-checkbox
                                                v-model="checkbox1"
                                                label="I’d prefer a family room"
                                                v-if="family_travelers.children!==0"
                                                class="w-100"
                                        ></v-checkbox>
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
                            </v-menu>
                        </v-list-item-group>
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
    .menu{
        background-color: white;
    }
    .menu_counter{
        justify-content: space-around;
    }
    .menu h2{
        margin: 0;
        color: #5392f9;
    }
    .menu hr {
        margin-top: .5rem !important;
        margin-bottom: .5rem !important;
    }
    .menu .v-text-field--outlined fieldset {
        height: 50px;
        top: 0 !important;
    }
    .gray_color{
        color: gray;
        font-size: 90%;
    }
</style>
