<template>
    <v-app-bar :class="$store.state.filter_overlay ? 'filters_app' : ''" :fixed="fixed">
        <v-container pa-0 class="filters d-flex">
            <v-flex xs12 class="filters_select">
                <v-toolbar-title class="d-inline caption font-weight-bold mx-3">Filters</v-toolbar-title>
                <v-menu offset-y v-model="popular" min-width="400" nudge-bottom="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-chip
                                class="caption font-weight-bold mr-1"
                                :color="popularChipColor"
                                text-color="white"
                                :close="popularChipClose"
                                @click="filtersMenu()"
                                @click:close="clearPopular"
                                v-on="on"
                        >
                            <v-avatar v-show="check_popular.length !== 0" :class="(check_popular.length === 0) ? '' : 'white black--text'" left>
                                {{check_popular.length}}
                            </v-avatar>
                            <v-icon v-show="check_popular.length === 0" small left>mdi-octagram-outline</v-icon>
                                Popular
                            <v-icon v-show="check_popular.length === 0" small right>mdi-menu-down</v-icon>
                        </v-chip>
                    </template>
                    <v-list flat dense>
                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Popular filters for Barcelona:</v-subheader>
                        <el-checkbox-group v-model="check_popular">
                            <el-checkbox
                                    v-for="(item, index) in populars"
                                    :key="index" :label="item"
                                    class="d-block pl-2 pb-2"
                            >
                                <span class="caption" >{{item.location}} ({{item.count}})</span>
                            </el-checkbox>
                        </el-checkbox-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="price" min-width="350" nudge-bottom="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-chip
                                class="caption font-weight-bold mr-1"
                                :color="priceChipColor"
                                text-color="white"
                                :close="priceChipClose"
                                @click="filtersMenu()"
                                @click:close="clearPrice"
                                v-on="on"
                        >
                            <v-icon small left>mdi-tag</v-icon>
                            {{priceText}}
                            <v-icon v-show="range[0] === 0 && range[1] === 2000" small right>mdi-menu-down</v-icon>
                        </v-chip>
                    </template>
                    <v-card
                            class="mx-auto"
                            min-width="400"
                    >
                        <v-toolbar flat dense>
                            <v-toolbar-title>
                                <span class="subtitle-2 font-weight-bold grey--text">Price per night:</span>
                            </v-toolbar-title>
                            <div class="flex-grow-1"></div>
                            <v-btn
                                    text
                                    v-show="this.range[0] !== 0 || this.range[1] !== 2000"
                                    @click="clearPrice()"
                            >
                                Clear
                            </v-btn>
                        </v-toolbar>

                        <v-card-text>
                            <v-row
                                    class="mb-4"
                                    justify="space-between"
                            >
                                <v-col cols="2" sm="2" md="2" class="text-left pb-0">
                                    <v-text-field
                                            v-model.number="range[0]"
                                            label="MIN"
                                            height="48"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-sparkline
                                            :value="value"
                                            color="#e0ecff"
                                            :smooth="8 || false"
                                            line-width="1"
                                            fill
                                            type="trend"
                                    ></v-sparkline>
                                    <el-slider
                                            v-model="range"
                                            :show-tooltip="false"
                                            :max="2000"
                                            range
                                    >
                                    </el-slider>
                                </v-col>
                                <v-col cols="2" sm="2" md="2" class="text-right pb-0">
                                    <v-text-field
                                            v-model="range[1]"
                                            label="MAX"
                                            height="48"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-flex sm8 md8 class="justify-center mx-auto">

                            </v-flex>
                            <!--<v-range-slider
                                    v-model="range"
                                    :max="max"
                                    :min="min"
                                    hide-details
                                    track-color="#e0ecff"
                                    class="align-center mb-4"
                            >
                            </v-range-slider>-->
                        </v-card-text>
                    </v-card>
                </v-menu>
                <v-menu offset-y v-model="star" min-width="300" nudge-bottom="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-chip
                                class="caption font-weight-bold mr-1"
                                :color="starChipColor"
                                text-color="white"
                                :close="starChipClose"
                                @click="filtersMenu()"
                                @click:close="clearStar"
                                v-on="on"
                        >
                            <v-icon small left>mdi-star</v-icon>
                            {{starText}} Stars
                            <v-icon v-show="check_star.length === 0" small right>mdi-menu-down</v-icon>
                        </v-chip>
                    </template>
                    <v-list flat dense>
                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Star rating:</v-subheader>
                        <el-checkbox-group v-model="check_star">
                            <el-checkbox
                                    v-for="(item, index) in rating"
                                    :key="index" :label="item"
                                    class="d-block pl-2 pb-2">
                                <v-rating
                                        v-model="rating[index]"
                                        background-color="orange lighten-3"
                                        color="orange" size="20"
                                        empty-icon readonly dense
                                        class="pa-0"
                                ></v-rating>
                            </el-checkbox>
                        </el-checkbox-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y v-model="area" min-width="300" nudge-bottom="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-chip
                                class="caption font-weight-bold mr-1"
                                :color="areaChipColor"
                                text-color="white"
                                :close="areaChipClose"
                                @click="filtersMenu()"
                                @click:close="clearArea"
                                v-on="on"
                        >
                            <v-avatar v-show="check_area.length !== 0" :class="(check_area.length === 0) ? '' : 'white black--text'" left>
                                {{check_area.length}}
                            </v-avatar>
                            <v-icon v-show="check_area.length === 0" small left>mdi-map-marker</v-icon>
                            Area
                            <v-icon v-show="check_area.length === 0" small right>mdi-menu-down</v-icon>
                        </v-chip>
                    </template>
                    <v-list flat dense class="region">
                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Area:</v-subheader>
                        <el-checkbox-group v-model="check_area">
                            <el-checkbox
                                    v-for="(item, index) in areas"
                                    :key="index" :label="item"
                                    class="d-block pl-2 pb-2"
                            >
                                <span class="caption" >{{item.area}} ({{item.count}})</span>
                            </el-checkbox>
                        </el-checkbox-group>
                    </v-list>
                </v-menu>
                <v-menu offset-y left v-model="more" max-width="800" nudge-bottom="20" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-chip
                                class="caption font-weight-bold mr-1"
                                :color="moreChipColor"
                                text-color="white"
                                :close="moreChipClose"
                                @click="filtersMenu()"
                                @click:close="clearMore"
                                v-on="on"
                        >
                            <v-avatar v-show="moreShow" :class="(!moreShow) ? '' : 'white black--text'" left>
                                {{moreIcon}}
                            </v-avatar>
<!--                            <v-icon v-show="check_more.length === 0" small left>{{moreIcon}}</v-icon>-->
                            More
                            <v-icon v-show="!moreShow" small right>mdi-menu-down</v-icon>
                        </v-chip>
                    </template>
                    <v-list
                            flat dense
                            class="region"
                    >
                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Room amenities:</v-subheader>
                        <el-checkbox-group v-model="check_more.amenities" class="d-flex showMore">
                           <v-col cols="4" v-for="(item, index) in moreMenu.room_amenities" :key="index" class="py-1">
                               <el-checkbox
                                       :label="item.amenities"
                               >
                                   <span class="caption" >{{item.amenities}}</span>
                               </el-checkbox>
                           </v-col>
                        </el-checkbox-group>

                        <v-divider></v-divider>

                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Property facilities:</v-subheader>
                        <el-checkbox-group v-model="check_more.facilities" class="d-flex showMore">
                            <v-col cols="4" v-for="(item, index) in moreMenu.property_facilities" :key="index" class="py-1">
                                <el-checkbox
                                        :label="item.facilities"
                                >
                                    <span class="caption" >{{item.facilities}} ({{item.count}})</span>
                                </el-checkbox>
                            </v-col>
                        </el-checkbox-group>
                        <v-divider></v-divider>

                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Room offers:</v-subheader>
                        <el-checkbox-group v-model="check_more.offers" class="d-flex showMore">
                            <v-col cols="4" v-for="(item, index) in moreMenu.room_offers" :key="index" class="py-1">
                                <el-checkbox
                                        :label="item.offers"
                                >
                                    <span class="caption" >{{item.offers}} ({{item.count}})</span>
                                </el-checkbox>
                            </v-col>
                        </el-checkbox-group>
                        <v-divider></v-divider>

                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Property type:</v-subheader>
                        <el-checkbox-group v-model="check_more.type" class="d-flex showMore">
                            <v-col cols="4" v-for="(item, index) in moreMenu.property_type" :key="index" class="py-1">
                                <el-checkbox
                                        :label="item.type"
                                >
                                    <span class="caption" >{{item.type}} ({{item.count}})</span>
                                </el-checkbox>
                            </v-col>
                        </el-checkbox-group>
                        <v-divider></v-divider>

                        <v-subheader class="subtitle-2 font-weight-bold grey--text">Payment options:</v-subheader>
                        <el-checkbox-group v-model="check_more.options" class="d-flex showMore">
                            <v-col cols="4" v-for="(item, index) in moreMenu.payment_options" :key="index" class="py-1">
                                <el-checkbox
                                        :label="item.options"
                                >
                                    <span class="caption" >{{item.options}} ({{item.count}})</span>
                                </el-checkbox>
                            </v-col>
                        </el-checkbox-group>
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
                    class="d-inline-block mx-3"
                    xs12
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
        value: [0, 0, 0, 9, 5, 10, 3, 5, 0, 0, 1, 8, 0, 0, 0],
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
    methods: {
      filtersMenu(){
        this.$store.commit('filtersMenu', true);
      },
      closeLayer() {
        if(!this.popular && !this.price && !this.star && !this.area && !this.more)
          this.$store.commit('filtersMenu', false);
      },
      clearPopular () {
        this.check_popular = [];
      },
      clearPrice(){
        this.range = [0, 2000];
      },
      clearStar(){
        this.check_star = [];
      },
      clearArea(){
        this.check_area = [];
      },
      clearMore(){
        this.check_more = {
                  amenities: [],
                  facilities: [],
                  offers: [],
                  type: [],
                  options: [],
            }
      },
    },
    watch: {
      popular(show) {
        if (!show) this.closeLayer();
      },
      price(show) {
        if (!show) this.closeLayer();
      },
      star(show) {
        if (!show) this.closeLayer();
      },
      area(show) {
        if (!show) this.closeLayer();
      },
      more(show) {
        if (!show) this.closeLayer();
      },
    },
    computed: {
      popularChipColor(){
        return (!this.popular && this.check_popular.length === 0) ? '#20274d': '#425ff9';
      },
      popularChipClose(){
        return (this.check_popular.length === 0) ? !!0 : !!1;
      },

      priceChipColor(){
        return (!this.price && this.range[0] === 0 && this.range[1] === 2000) ? '#20274d': '#425ff9';
      },
      priceChipClose(){
        return (this.range[0] === 0 && this.range[1] === 2000) ? !!0 : !!1;
      },
      priceText()  {
        if (this.range[0] === 0 && this.range[1] === 2000) {
          return 'Your budget';
        }
        return `$${this.range[0]} - $${this.range[1]}`
      },

      areaChipColor(){
        return (!this.area && this.check_area.length === 0) ? '#20274d': '#425ff9';
      },
      areaChipClose(){
        return (this.check_area.length === 0) ? !!0 : !!1;
      },

      moreChipColor(){
        return (!this.more && !this.moreShow) ? '#20274d': '#425ff9';
      },
      moreChipClose(){
        return (!this.moreShow) ? !!0 : !!1;
      },

      starText() {
        if (this.check_star.length === 0) {
          return '';
        }
        if (this.check_star.length === 1) {
          for(let i of this.check_star){
            return `${this.rating[i]}`
          }
        }
        return `${this.check_star}`
      },
      starChipColor(){
        return (!this.star && this.check_star.length === 0) ? '#20274d': '#425ff9';
      },
      starChipClose(){
        return (this.check_star.length === 0) ? !!0 : !0;
      },

      moreIcon() {
        if (this.check_more.amenities.length === 0 && this.check_more.facilities.length === 0 && this.check_more.offers.length === 0 && this.check_more.type.length === 0 && this.check_more.options.length === 0) {
          return '';
        }
        return `${this.check_more.amenities.length + this.check_more.facilities.length + this.check_more.offers.length + this.check_more.type.length + this.check_more.options.length}`
      },
      moreShow() {
        if (this.check_more.amenities.length === 0 && this.check_more.facilities.length === 0 && this.check_more.offers.length === 0 && this.check_more.type.length === 0 && this.check_more.options.length === 0) {
          return !!0;
        }
        return !0
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
    .filters_app{
        z-index: 2;
    }
    .filters .v-text-field.v-text-field--solo .v-input__control {
        min-height: 32px !important;
    }
    .region{
        height: 500px;
        overflow-y: auto;
        background-color: white;
    }
    .showMore{
        flex-wrap: wrap !important;
    }
    .el-slider__runway{
        margin: 0 !important;
        top: -8px;
    }
</style>
