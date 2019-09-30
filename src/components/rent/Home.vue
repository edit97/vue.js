<template>
   <v-container>
       <v-row>
           <v-col cols="6">
               <v-card class="justify-center pa-3">
                   <v-col>
                       <div class="display-1 mb-5">Let’s find your ideal car</div>
                       <div class="body-2">Pick-up Location</div>
                       <v-autocomplete
                               v-model="select"
                               :items="items"
                               :search-input.sync="search"
                               cache-items
                               flat outlined
                               hide-no-data
                               hide-details
                               clearable
                               placeholder="city, airport, station, region, district…"
                       >
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
                                           <v-list-item-subtitle v-text="item" :class="hover ? 'white--text' : ''"></v-list-item-subtitle>
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
                       <div class="mb-5">
                           <v-checkbox
                                   v-model="dropCar"
                                   hide-details
                                   class="d-inline-block mb-3"
                                   label="Drop car off at different location"
                           ></v-checkbox>
                           <div v-show="dropCar">
                               <div class="body-2">Drop-off Location</div>
                               <v-autocomplete
                                       v-model="endLocationSelect"
                                       :items="items"
                                       :search-input.sync="endLocationSearch"
                                       cache-items
                                       flat outlined
                                       hide-no-data
                                       hide-details
                                       clearable
                                       placeholder="city, airport, station, region, district…"
                               >
                                   <template v-slot:item="{ item }">
                                       <v-hover v-slot:default="{ hover }">
                                           <v-row :class="hover ? 'place_menu_color' : ''" class="px-4">
                                               <v-list-item-icon class="mr-3">
                                                   <v-icon :color="hover ? 'white' : 'grey'">
                                                       mdi-map-marker
                                                   </v-icon>
                                               </v-list-item-icon>
                                               <v-list-item-content>
                                                   <v-list-item-title v-text="item"></v-list-item-title>
                                                   <v-list-item-subtitle v-text="item" :class="hover ? 'white--text' : ''"></v-list-item-subtitle>
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
                           </div>
                       </div>
                       <div class="my-2">
                           <el-date-picker
                                   v-model="date"
                                   type="daterange"
                                   range-separator="To"
                                   start-placeholder="Pick-up Date:"
                                   end-placeholder="Drop-off Date:"
                                   class="date_piker pointer width_100"
                                   command="en"
                           >
                           </el-date-picker>
                       </div>
                       <div class="my-2">
                           <el-time-picker
                                   v-model="time"
                                   is-range
                                   format="h:mm"
                                   value-format="h:mm"
                                   range-separator="To"
                                   start-placeholder="Pick-up Time:"
                                   end-placeholder="Drop-off Time:"
                                   class="date_piker pointer width_100"
                           >
                           </el-time-picker>
                       </div>
                       <div>
                           <v-checkbox
                                   v-model="betweenAge"
                                   hide-details
                                   class="d-inline-block"
                           >
                               <div slot="label">
                                   <v-tooltip top color="black" :max-width="250">
                                       <template v-slot:activator="{ on }">
                                           <span>Driver aged between 30 – 65?</span>
                                           <v-icon small color="black" v-on="on" class="pl-2">mdi-information-outline</v-icon>
                                       </template>
                                       <div class="">
                                           <h5>No Hidden Fees</h5>
                                           <span class="caption">Some companies charge more
                                       for younger or older drivers.
                                       Before you choose a car,
                                       we’ll show you exactly who charges what.
                                   </span>
                                       </div>
                                   </v-tooltip>
                               </div>
                           </v-checkbox>
                           <div v-show="!betweenAge">
                               <div class="d-flex">
                                   <span class="pt-2 pr-3">Driver's age</span>
                                   <v-col cols="1" class="pa-0">
                                       <el-input v-model.number="input" :maxlength="2"></el-input>
                                   </v-col>
                               </div>
                           </div>
                       </div>
                       <v-chip
                               color="#d8eed5"
                               text-color="success"
                               class="width_100 mt-2"
                               large label outlined
                               style="border: 2px dotted #4caf50; background-color: #d8eed5 !important;"
                       >
                           <div class="mr-5">
                               Purpose of rental <span class="font-weight-bold">(optional)</span>
                               <v-tooltip top color="black" :max-width="250">
                                   <template v-slot:activator="{ on }">
                                       <v-icon small color="white" v-on="on" >mdi-information-outline</v-icon>
                                   </template>
                                   <div class="">
                                       <h5>No Hidden Fees</h5>
                                       <span class="caption">Some companies charge more
                                   for younger or older drivers.
                                   Before you choose a car,
                                   we’ll show you exactly who charges what.
                               </span>
                                   </div>
                               </v-tooltip>
                           </div>
                           <v-radio-group v-model="radios" :mandatory="false" row hide-details class="mt-0">
                               <v-radio color="white" label="Business" value="Business"></v-radio>
                               <v-radio color="white" label="Leisure" value="Leisure"></v-radio>
                           </v-radio-group>
                       </v-chip>
                       <v-row class="body-2">
                           <v-col cols="6">
                               <div>
                                    <v-icon small left>mdi-check-bold</v-icon>
                                   No credit card fees
                               </div>
                               <div>
                                    <v-icon small left>mdi-check-bold</v-icon>
                                   No amendment fees
                               </div>
                               <div>
                                    <v-icon small left>mdi-check-bold</v-icon>
                                   24/7 phone support
                               </div>
                           </v-col>
                           <v-col cols="6">
                               <v-btn large dark color="#4caf50" class="width_100 height_100">
                                   <span class="title">Search</span>
                               </v-btn>
                           </v-col>
                       </v-row>
                   </v-col>
               </v-card>
           </v-col>
           <v-col cols="6">
               <div class="display-1">Rentalcars.com connects you to the biggest brands in car hire.</div>
               <v-row>
                   <v-col
                           v-for="n in 4"
                           :key="n"
                           cols="3"
                   >
                       <v-item v-slot:default="{ active, toggle }">
                           <v-card
                                   :color="active ? 'primary' : ''"
                                   class="d-flex align-center"
                                   dark
                                   height="100"
                                   @click="toggle"
                           >
                               <v-scroll-y-transition>
                                   <div
                                           v-if="active"
                                           class="display-3 flex-grow-1 text-center"
                                   >
                                       Active
                                   </div>
                               </v-scroll-y-transition>
                           </v-card>
                       </v-item>
                   </v-col>
               </v-row>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
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
        endLocationSearch: null,
        select: null,
        endLocationSelect: null,
        dropCar: false,
        date: '',
        time: '',
        betweenAge: true,
        input: 30,
        radios: 'Leisure',
      };
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
      endLocationSearch (val) {
        val && val !== this.endLocationSelect && this.querySelections(val)
      },
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
    },
  };
</script>

<style scoped>
    .width_100{
        width: 100%;
    }
    .height_100{
        height: 100% !important;
    }
    .place_menu_color{
        background-color: #5a96f9;
        color: white !important;
    }
</style>
