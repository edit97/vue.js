<template>
    <v-app-bar :fixed="fixed">
        <v-container pa-0 class="filters d-flex">
            <v-flex  class="filters_select">
                <v-toolbar-title class="d-inline" mr-2>Filters</v-toolbar-title>
                <v-menu offset-y v-model="popular" min-width="400" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{popularIcon }}</v-icon>
                            Popular
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list
                            subheader
                            two-line
                            flat dense
                    >
                        <v-subheader>Popular filters for Barcelona:</v-subheader>

                        <v-list-item-group
                                multiple
                                v-model="check_popular"
                        >
                            <v-list-item
                                    v-for="(item, index) in populars" :key="index"
                            >
                                <template v-slot:default="{ active, toggle }">
                                    <v-list-item-action>
                                        <v-checkbox
                                                v-model="active"
                                                color="primary"
                                                @click="toggle"
                                        ></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>{{item.location}} ({{item.count}})</v-list-item-title>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="price" min-width="500" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{priceIcon}}</v-icon>
                            {{priceText}}
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="price">
                        <v-card flat color="transparent">
                            <v-subheader>Price per night:</v-subheader>

                            <v-card-text>
                                <v-layout>
                                    <v-flex class="px-4">
                                        <v-range-slider
                                                v-model="range"
                                                :max="max"
                                                :min="min"
                                                hide-details
                                                class="align-center mb-4"
                                        >
                                        </v-range-slider>
                                        <v-flex row>
                                            <v-text-field
                                                    v-model="range[0]"
                                                    class="mt-0 pt-0"
                                                    hide-details solo
                                                    type="number"
                                                    style="max-width: 80px; min-height: 30px"
                                            ></v-text-field>
                                            <v-divider></v-divider>
                                            <v-text-field
                                                    v-model="range[1]"
                                                    class="mt-0 pt-0"
                                                    hide-details solo
                                                    single-line
                                                    type="number"
                                                    style="max-width: 80px"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="star" min-width="300" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{starIcon}}</v-icon>
                            Stars
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list subheader two-line flat dense>
                        <v-subheader>Звездность:</v-subheader>

                        <v-list-item-group v-model="check_star" multiple>
                            <v-list-item v-for="(item, index) in rating" :key="index" :min-height="40">
                                <template v-slot:default="{ active, toggle }">
                                    <v-list-item-action class="m-0">
                                        <v-checkbox
                                                v-model="active"
                                                color="primary" class="m-0"
                                                @click="toggle"
                                        ></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content pa-0>
                                        <v-rating
                                                v-model="rating[index]"
                                                background-color="orange lighten-3"
                                                color="orange" size="20"
                                                empty-icon readonly pa-0
                                        ></v-rating>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="area" min-width="300" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{areaIcon}}</v-icon>
                            Area
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list
                            subheader
                            two-line
                            flat dense
                            class="region"
                    >
                        <v-subheader>Area:</v-subheader>

                        <v-list-item-group
                                v-model="check_area"
                                multiple
                        >
                            <v-list-item
                                    v-for="(item, index) in areas" :key="index"
                            >
                                <template v-slot:default="{ active, toggle }">
                                    <v-list-item-action>
                                        <v-checkbox
                                                v-model="active"
                                                color="primary"
                                                @click="toggle"
                                        ></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>{{item.area}} ({{item.count}})</v-list-item-title>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="more" max-width="800" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{moreIcon}}</v-icon>
                            More
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list
                            subheader
                            two-line
                            flat dense
                            class="region"
                    >
                        <v-subheader class="font-weight-bold">Room amenities:</v-subheader>
                        <v-list-item-group
                                v-model="check_more.amenities"
                                multiple
                        >
                            <v-layout class="showMore">
                                <v-flex xs12 sm4 md4 lg4
                                        v-for="(item, index) in moreMenu.room_amenities" :key="index"
                                >
                                    <v-list-item>
                                        <template v-slot:default="{ active, toggle }">
                                            <v-list-item-action>
                                                <v-checkbox
                                                        v-model="active"
                                                        color="primary"
                                                        @click="toggle"
                                                ></v-checkbox>
                                            </v-list-item-action>

                                            <v-list-item-content>
                                                <v-list-item-title>{{item.amenities}}</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                    </v-list-item>
                                </v-flex>
                            </v-layout>
                        </v-list-item-group>
                        <v-divider></v-divider>

                        <v-subheader class="font-weight-bold">Property facilities:</v-subheader>
                            <v-list-item-group
                                    v-model="check_more.facilities"
                                    multiple
                            >
                                <v-layout class="showMore">
                                    <v-flex xs12 sm4 md4 lg4
                                            v-for="(item, index) in moreMenu.property_facilities" :key="index"
                                    >
                                        <v-list-item>
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-action>
                                                    <v-checkbox
                                                            v-model="active"
                                                            color="primary"
                                                            @click="toggle"
                                                    ></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.facilities}} ({{item.count}})</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-group>
                        <v-divider></v-divider>

                        <v-subheader class="font-weight-bold">Room offers:</v-subheader>
                        <v-list-item-group
                                    v-model="check_more.offers"
                                    multiple
                            >
                                <v-layout class="showMore">
                                    <v-flex xs12 sm4 md4 lg4
                                            v-for="(item, index) in moreMenu.room_offers" :key="index"
                                    >
                                        <v-list-item>
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-action>
                                                    <v-checkbox
                                                            v-model="active"
                                                            color="primary"
                                                            @click="toggle"
                                                    ></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.offers}} ({{item.count}})</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-group>
                        <v-divider></v-divider>

                        <v-subheader class="font-weight-bold">Property type:</v-subheader>
                        <v-list-item-group
                                    v-model="check_more.type"
                                    multiple
                            >
                                <v-layout class="showMore">
                                    <v-flex xs12 sm4 md4 lg4
                                            v-for="(item, index) in moreMenu.property_type" :key="index"
                                    >
                                        <v-list-item>
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-action>
                                                    <v-checkbox
                                                            v-model="active"
                                                            color="primary"
                                                            @click="toggle"
                                                    ></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.type}} ({{item.count}})</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-group>
                        <v-divider></v-divider>

                        <v-subheader class="font-weight-bold">Payment options:</v-subheader>
                        <v-list-item-group
                                    v-model="check_more.options"
                                    multiple
                            >
                                <v-layout class="showMore">
                                    <v-flex xs12 sm4 md4 lg4
                                            v-for="(item, index) in moreMenu.payment_options" :key="index"
                                    >
                                        <v-list-item>
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-action>
                                                    <v-checkbox
                                                            v-model="active"
                                                            color="primary"
                                                            @click="toggle"
                                                    ></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.options}} ({{item.count}})</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-group>
                    </v-list>
                </v-menu>
            </v-flex>

            <v-spacer></v-spacer>

            <v-text-field
                    label="Search within results"
                    prepend-inner-icon="mdi-magnify"
                    hide-details
                    rounded
                    solo
                    class="d-inline-block"
            ></v-text-field>
        </v-container>
    </v-app-bar>
</template>
<script>
  export default {
    name: 'Filters',
    data(){
      return{
        populars: [
          {location: 'La Rambla area', count: 40},
          {location: 'Sant Antoni area', count: 13},
          {location: 'Eixample area', count: 34},
          {location: 'Family/child friendly', count: 33},
          {location: 'Family/child friendly', count: 9},
          {location: 'Smoking area', count: 4},
          {location: 'Front desk [24-hour]', count: 4},
        ],
        areas: [
          {area: 'Barcelona Airport', count: 12},
          {area: 'El Poblenou', count: 53},
          {area: 'Sants-Montjuïc ', count: 34},
          {area: 'Raval', count: 33},
          {area: 'Gràcia', count: 51},
          {area: 'Sant Gervasi', count: 43},
          {area: 'Les Corts', count: 34},
          {area: 'Horta-Guinardó ', count: 12},
          {area: 'Barceloneta', count: 53},
          {area: 'El Poblenou', count: 53},
          {area: 'Sants-Montjuïc ', count: 34},
          {area: 'Raval', count: 33},
          {area: 'Gràcia', count: 51},
          {area: 'Sant Gervasi', count: 43},
        ],
        moreMenu: {
          room_amenities: [
            {amenities: 'Air conditioning', count: 12},
            {amenities: 'Balcony/terrace', count: 12},
            {amenities: 'Refrigerator', count: 12},
            {amenities: 'Coffee/tea maker', count: 12},
            {amenities: 'Ironing facilities', count: 12},
            {amenities: 'Internet access', count: 12},
            {amenities: 'Private pool', count: 12},
            {amenities: 'Washing machine', count: 12},
            {amenities: 'Pets allowed in room', count: 12},
            {amenities: 'Heating', count: 12},
            {amenities: 'Bathtub', count: 12},
            {amenities: 'TV', count: 12},
            {amenities: 'Kitchen', count: 12},
          ],
          property_facilities: [
            {facilities: 'Air conditioning', count: 9},
            {facilities: 'Internet', count: 70},
            {facilities: 'Car park', count: 68},
            {facilities: 'Airport transfer', count: 40},
            {facilities: 'Gym/fitness', count: 5},
            {facilities: 'Front desk [24-hour]', count: 12},
            {facilities: 'Family/child friendly', count: 63},
            {facilities: 'Non-smoking', count: 20},
            {facilities: 'Spa/sauna', count: 3},
            {facilities: 'Restaurants', count: 6},
            {facilities: 'Smoking area ', count: 8},
            {facilities: 'Pets allowed ', count: 18},
            {facilities: 'Nightclub', count: 1},
            {facilities: 'Facilities for disabled guests ', count: 12},
            {facilities: 'Business facilities', count: 11},
            {facilities: 'Golf course [on-site] ', count: 1},
          ],
          room_offers: [
            {offers: 'Breakfast included ', count: 10},
          ],
          property_type: [
            {type: 'Hotel', count: 50},
            {type: 'Entire apartment', count: 69},
            {type: 'Serviced apartment', count: 3},
            {type: 'Guesthouse/bed and breakfast', count: 1},
            {type: 'Hostel', count: 2},
          ],
          payment_options: [
            {options: 'Pay at the hotel', count: 70},
            {options: 'Pay now', count: 23},
          ],
        },
        popular: false,
        price: false,
        star: false,
        area: false,
        more: false,
        check_popular: [],
        check_star: [],
        check_area: [],
        check_more: {
          amenities: [],
          facilities: [],
          offers: [],
          type: [],
          options: [],
        },
        fixed: false,
        min: 0,
        max: 2000,
        range: [0, 2000],
        rating: [5,4,3,2,1],
      }
    },
    computed: {
      priceIcon(){
        if (this.range[0] === 0 && this.range[1] === 2000) {
          return 'mdi-tag';
        }
        return ``
      },
      popularIcon() {
        if (this.check_popular.length === 0) {
          return 'mdi-octagram-outline';
        }
        return `${this.check_popular.length}`
      },
      starIcon() {
        if (this.check_star.length === 0) {
          return 'mdi-star';
        }
        if (this.check_star.length === 1) {
          for(let i of this.check_star){
            return `${this.rating[i]}`
          }
        }
        return `${this.check_star}`
      },
      areaIcon() {
        if (this.check_area.length === 0) {
          return 'mdi-map-marker';
        }
        return `${this.check_area.length}`
      },
      moreIcon() {
        if (this.check_more.amenities.length === 0 && this.check_more.facilities.length === 0 && this.check_more.offers.length === 0 && this.check_more.type.length === 0 && this.check_more.options.length === 0) {
          return '';
        }
        return `${this.check_more.amenities.length + this.check_more.facilities.length + this.check_more.offers.length + this.check_more.type.length + this.check_more.options.length}`
      },
      priceText()  {
        if (this.range[0] === 0 && this.range[1] === 2000) {
          return 'Your budget';
        }
        return `$${this.range[0]} - $${this.range[1]}`
      },
    },
    created() {
      window.addEventListener('scroll', () => {
        window.pageYOffset >= 120 ? this.fixed =true : this.fixed = false;
      });
    }
  };
</script>

<style>
    /*.filters{*/
    /*    display: flex;*/
    /*}*/
    .filters_select .v-input__slot{
        margin-bottom: 0 !important;
        width: 160px!important;
    }
    .v-toolbar__title {
        font-size: .8rem !important;
        font-weight: bold;
        line-height: 3 !important;
        margin-right: 0.5rem;
    }
    .filters .v-text-field.v-text-field--solo .v-input__control {
        min-height: 40px !important;
    }
    .filters .v-text-field--rounded>.v-input__control>.v-input__slot {
        padding: 0 7px!important;
    }
     .v-rating .v-icon {
         padding: 0 !important;
    }
     .v-list--two-line .v-list-item, .v-list-item--two-line {
        min-height: 40px !important;
    }
    .price .v-text-field.v-text-field--solo .v-input__control {
        min-height: 35px !important;
    }
    .region{
        height: 500px;
        overflow-y: auto;
        background-color: white;
    }
    .filters .v-btn__content {
        font-size: smaller !important;
        font-weight: bold !important;
    }
    .filters .mdi:before, .mdi-set {
        font-size: medium !important;
    }
    .filters .v-btn__content .v-icon {
        font-size: inherit !important;
        font-weight: bold !important;
        margin-right: 5px !important;
    }
    .v-btn:not(.v-btn--round).v-size--default {
        padding: 0 12px !important;
        margin-right: 0.2rem;
    }
    .showMore{
        flex-wrap: wrap !important;
    }
</style>
