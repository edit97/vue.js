<template>
    <div>
        <v-row>
            <v-img
                    src="https://d3hne3c382ip58.cloudfront.net/resized/1920x700/-400X400_.JPG"
                    lazy-src="../../../public/images/no-image.png"
                    max-height="400"
                    class="white--text fill-height "
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
                <v-overlay absolute z-index="-1"></v-overlay>
                <v-layout column justify-end fill-height>
                    <v-spacer></v-spacer>
                    <v-col cols="9" class="mx-auto">
                        <span class="display-2">Spain Group Tours 2019/2020</span>
                        <p class="subtitle-1 font-weight-bold">Find 278 Group Tours and Group Departures in Spain with more than 754 customer reviews.
                            The 278 Spain group tours and Spain group holidays are delivered by some of the top local
                            and global travel companies in Spain.
                        </p>
                        <v-btn color="rgb(50, 169, 35)" outlined>
                            Customize a trip to Spain
                        </v-btn>
                    </v-col>
                </v-layout>
            </v-img>
        </v-row>
        <v-container>
            <v-tabs
                    v-model="tab"
                    align-with-title
                    background-color="transparent"
            >
                <v-tabs-slider color="primary"></v-tabs-slider>

                <v-tab v-for="(item, index) in hotel_menu" :key="index">
                    {{ item }}
                </v-tab>
                <v-tab-item>
                    <v-col cols="3">
                        <v-card flat outlined class="mb-5"  v-show="applied.length !== 0">
                            <v-layout class="pl-5 py-3 white--text bg_blue">
                                <div>{{applied.length}} Filters Applied</div>
                                <v-spacer></v-spacer>
                                <v-btn
                                        @click="applied = []"
                                        color="white" small text>
                                    <span class="caption">Clear All</span>
                                </v-btn>
                            </v-layout>
                            <v-col>
                                <v-row
                                        v-for="(item, index) in applied"
                                        :key="index"
                                        class="mx-2">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red" icon small @click="removeApplied(index)">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>

                        <v-expansion-panels multiple focusable>
                            <v-expansion-panel readonly>
                                <v-expansion-panel-header hide-actions>
                                    <span class="title">Filter by</span>
                                </v-expansion-panel-header>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-calendar-today</v-icon>
                                    <span class="ml-2">Departure Date</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            :return-value.sync="date"
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                    v-model="date"
                                                    prepend-inner-icon="mdi-calendar-today"
                                                    placeholder="Select specific date"
                                                    readonly outlined
                                                    hide-details
                                                    v-on="on"
                                                    class="mt-3"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" no-title scrollable>
                                            <div class="flex-grow-1"></div>
                                            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>

                                    <v-checkbox
                                            v-model="applied"
                                            v-for="(item, index) in filters.date"
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                    ></v-checkbox>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-flag-variant</v-icon>
                                    <span class="ml-2">Destinations</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-treeview
                                            v-model="tree"
                                            :items="filters.items"
                                            :item-key="filters.items.name"
                                            selectable dense
                                            selected-color="primary"
                                            class="pa-0"
                                    ></v-treeview>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="text-uppercase body-2 font-weight-bold">
                                    <v-icon left class="d_contents">mdi-earth</v-icon>
                                    <span class="ml-2">Tour Type</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-checkbox
                                            v-model="applied"
                                            v-for="(item, index) in filters.type"
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                    ></v-checkbox>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="text-uppercase body-2 font-weight-bold">
                                    <v-icon left class="d_contents mr-2">mdi-cash-usd</v-icon>
                                    <span class="ml-2">Price</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-sparkline
                                            :value="filters.value"
                                            color="#e0ecff"
                                            :smooth="8 || false"
                                            line-width="1"
                                            fill
                                            type="trend"
                                    ></v-sparkline>
                                    <el-slider
                                            v-model="filters.range"
                                            :show-tooltip="false"
                                            :max="2000"
                                            range
                                            @change="filterRange()"
                                    >
                                    </el-slider>
                                    <v-row
                                            class="mb-4"
                                            justify="space-between"
                                    >
                                        <v-col cols="3" class="text-left pb-0">
                                            <v-text-field
                                                    v-model.number="filters.range[0]"
                                                    label="MIN"
                                                    height="48"
                                                    hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="3" class="text-right pb-0">
                                            <v-text-field
                                                    v-model="filters.range[1]"
                                                    label="MAX"
                                                    height="48"
                                                    hide-details
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-clock-outline</v-icon>
                                    <span class="ml-2">Duration</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <el-slider
                                            v-model="filters.duration"
                                            @change="filterDuration()"
                                            :show-tooltip="false"
                                            :max="50"
                                            :min="1"
                                            range
                                    >
                                    </el-slider>
                                    <v-row
                                            class="mb-4"
                                            justify="space-between"
                                    >
                                        <v-col cols="3" class="text-left pb-0">
                                            <v-text-field
                                                    v-model.number="filters.duration[0]"
                                                    label="MIN"
                                                    height="48"
                                                    hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="3" class="text-right pb-0">
                                            <v-text-field
                                                    v-model="filters.duration[1]"
                                                    label="MAX"
                                                    height="48"
                                                    hide-details
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-human-male</v-icon>
                                    <span class="ml-2">Age Range</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-checkbox
                                            v-model="applied"
                                            v-for="(item, index) in filters.age"
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                    ></v-checkbox>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-account-tie</v-icon>
                                    <span class="ml-2">Tour Operators</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <el-input
                                            placeholder="Search Operators"
                                            v-model="filters.inputOperators"
                                            clearable
                                            prefix-icon="el-icon-search"
                                            class="mb-2"
                                    >
                                    </el-input>
                                    <v-checkbox
                                            v-model="applied"
                                            v-for="(item, index) in filters.operators"
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                    ></v-checkbox>

                                    <v-btn dark color="rgb(83, 146, 249)" class="mt-3"><span class="caption">View All Spain Tour Operators</span></v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header
                                        class="text-uppercase body-2 font-weight-bold"
                                >
                                    <v-icon left class="d_contents">mdi-decagram-outline</v-icon>
                                    <span class="ml-2">Discounts</span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-checkbox
                                            v-model="applied"
                                            v-for="(item, index) in filters.discounts"
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                    ></v-checkbox>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-col cols="9"></v-col>
                </v-tab-item>
            </v-tabs>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Tour',
    data(){
      return {
        hotel_menu: ['Rooms','Facilities','Children and extra beds','Reviews','Map','Check-in'],
        tab: null,
        date: null,
        menu: false,
        applied: [],
        tree: [],
        filters: {
          date: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020'],
          items: [
            {
              id: 1,
              name: 'Madrid',
              children: [
                { id: 2, name: 'Segovia' },
                { id: 3, name: 'Cadalso De Los Vidrios' },
              ],
            },
            {
              id: 4,
              name: 'Andalucia',
              children: [
                { id: 5, name: 'Seville' },
                { id: 6, name: 'Malaga' },
                { id: 7, name: 'Ronda' },
                { id: 8, name: 'Granada' },
                { id: 9, name: 'Cordoba' },
                { id: 10, name: 'Gibraltar' },
                { id: 11, name: 'Sierra Nevada' },
                { id: 12, name: 'Costa del Sol' },
                { id: 13, name: 'Cadiz' },
                { id: 14, name: 'Algamitas' },
                { id: 15, name: 'Aracena' },
              ],
            },
            {
              id: 16,
              name: 'Barcelona',
            },
            {
              id: 17,
              name: 'Basque Country & Navarre',
              children: [
                { id: 19, name: 'San Sebastian' },
                { id: 20, name: 'Bilbao' },
                { id: 21, name: 'Las Arenas' },
              ],
            },
            {
              id: 22,
              name: 'Castilla-La Mancha',
              children: [
                { id: 23, name: 'Toledo' },
              ],
            },
          ],
          type: ['Day Tours', 'Multiday Tours'],
          range: [0, 2000],
          value: [0, 0, 0, 9, 5, 10, 3, 5, 0, 0, 1, 8, 0, 0, 0],
          duration: [1, 50],
          age: ['18 - 40 yrs', '40+ yrs', '50+ yrs', '60+ yrs', '70+ yrs', 'Family',],
          operators: ['Exodus Travels', 'Urban Adventures', 'Utracks', 'Intrepid Travel', '70+ yrs', 'VPT Tours',],
          inputOperators: '',
          discounts: ['Discounted Tours', 'Last Minute Deals',],
        },
      }
    },
    computed: {},
    watch: {
      menu(show) {
        if (!show) this.applied.push(this.date);
      },
      /*'filters.range'(value) {
          if(value[0] !== 0 && value[1] !== 2000)
            this.applied.push(`Price: ${value[0]} - ${value[1]} US $`);
        },*/
    },
    methods: {
      removeApplied(index){
        this.applied.splice(index, 1)
      },
      filterRange(){
        this.applied.push(`Price: ${this.filters.range[0]} - ${this.filters.range[1]} US $`);
      },
      filterDuration(){
        this.applied.push(`Price: ${this.filters.duration[0]} - ${this.filters.duration[1]} US $`);
      }
    }
  };
</script>

<style scoped>
    .d_contents{
        display: contents;
    }
    .bg_blue{
        background-color: #5392f9;
    }
</style>
