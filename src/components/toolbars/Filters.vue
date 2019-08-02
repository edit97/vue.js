<template>
    <v-app-bar :fixed="fixed">
        <v-container d-flex pa-0 class="filters">
            <v-flex row class="filters_select">
                <v-toolbar-title>Filters</v-toolbar-title>
                <v-menu offset-y v-model="popular" min-width="400" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#20274d"
                                dark rounded
                                v-on="on"
                        >
                            <v-icon>{{popularIcon}}</v-icon>
                            {{popularText}}
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
                            {{starText}}
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
                            {{areaText}}
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
            </v-flex>

            <v-spacer></v-spacer>

            <v-text-field
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    hide-details
                    rounded
                    solo
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
        popular: false,
        price: false,
        star: false,
        area: false,
        check_popular: [],
        check_star: [],
        check_area: [],
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
        return ``
      },
      starIcon() {
        if (this.check_star.length === 0) {
          return 'mdi-star';
        }
        return ``
      },
      areaIcon() {
        if (this.check_area.length === 0) {
          return 'mdi-map-marker';
        }
        return ``
      },
      popularText() {
        if (this.check_popular.length === 0) {
          return 'Popular';
        }
        return `${this.check_popular.length + '  Popular'}`
      },
      priceText() {
        if (this.range[0] === 0 && this.range[1] === 2000) {
          return 'Your budget';
        }
        return `$${this.range[0]} - $${this.range[1]}`
      },
      starText() {
        if (this.check_star.length === 0) {
          return 'Stars';
        }
        return `${this.rating[this.check_star]}  Stars`
      },
      areaText() {
        if (this.check_area.length === 0) {
          return 'Area';
        }
        return `${this.check_area.length + '  Area'}`
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
    .filters_select .v-input__slot{
        margin-bottom: 0 !important;
        width: 160px!important;
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
    }
    .filters .v-btn__content {
        font-size: 12px;
        font-weight: bold;
    }
    .filters .mdi:before, .mdi-set {
        font-size: large !important;
    }
</style>
