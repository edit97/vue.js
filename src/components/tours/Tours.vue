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
                    <v-row>
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
                            </v-card>

                            <v-expansion-panels accordion multiple>
                                <v-expansion-panel readonly>
                                    <v-expansion-panel-header hide-actions>
                                        <span class="title">Filter by</span>
                                    </v-expansion-panel-header>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                            class="text-uppercase  body-2 font-weight-bold"
                                    >
                                        <span><v-icon left class="">mdi-calendar-today</v-icon>Departure Date</span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-menu
                                                ref="menu"
                                                v-model="menuDate"
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
                                                <v-btn text color="primary" @click="menuDate = false">Cancel</v-btn>
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
                                        <span><v-icon left>mdi-flag-variant</v-icon>Destinations</span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-treeview
                                                v-model="tree"
                                                @input="filterDestinations($event)"
                                                :items="filters.destinations"
                                                :return-object="true"
                                                selectable dense
                                                selected-color="primary"
                                                class="pa-0"
                                        ></v-treeview>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                            class="text-uppercase body-2 font-weight-bold"
                                    >
                                        <span><v-icon left>mdi-earth</v-icon>Tour Type</span>
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
                                        <span><v-icon left>mdi-cash-usd</v-icon>Price</span>
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
                                        <v-row class="mb-4 justify-space-between">
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
                                        <span><v-icon left>mdi-clock-outline</v-icon>Duration</span>
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
                                        <span><v-icon left>mdi-human-male</v-icon>Age Range</span>
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
                                        <span><v-icon left>mdi-account-tie</v-icon>Tour Operators</span>
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
                                        <span><v-icon left>mdi-decagram-outline</v-icon>Discounts</span>
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
                        <v-col cols="9">
                            <v-hover  v-slot:default="{ hover }">
                                <v-card outlined flat :elevation="hover ? 2 : 0" class="ticket">
                                    <v-row>
                                        <v-col cols="4" class="py-0">
                                            <v-item-group v-model="selected">
                                                <v-row>
                                                    <v-col cols="12" class="py-0">
                                                        <v-item v-slot:default="{ active, toggle }">
                                                            <v-img
                                                                    :src="$store.state.tourImages[0]"
                                                                    lazy-src="../../../public/images/no-image.png"
                                                                    height="200"
                                                                    class="text-right pa-2"
                                                                    @click="toggle"
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
                                                                <v-btn icon dark>
                                                                    <v-icon>
                                                                        {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                                                                    </v-icon>
                                                                </v-btn>
                                                            </v-img>
                                                        </v-item>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="6" class="py-0">
                                                        <iframe
                                                                height="102"
                                                                width="160"
                                                                id="gmap_canvas"
                                                                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                                frameborder="0"
                                                                scrolling="no"
                                                                marginheight="0"
                                                                marginwidth="0"
                                                        ></iframe>
                                                    </v-col>
                                                    <v-col cols="6" class="py-0">
                                                        <v-menu open-on-hover top offset-y attach="menu">
                                                            <template v-slot:activator="{ on }">
                                                                <v-item v-slot:default="{ active, toggle }">
                                                                    <v-row class="px-3" id="menu">
                                                                        <v-col
                                                                                v-for="(item,i) in $store.state.tourImages"
                                                                                v-if="i <= 3"
                                                                                :key="i"
                                                                                cols="6"
                                                                                class="pa-0 zoom border_white"
                                                                        >
                                                                            <v-img
                                                                                    :src="item"
                                                                                    lazy-src="../../../public/images/no-image.png"
                                                                                    @mouseover="mouseImgOver(item)"
                                                                                    @mouseout="mouseImgOut(item)"
                                                                                    height="50"
                                                                                    class="text-right pa-2"
                                                                                    v-on="on"
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
                                                                            </v-img>
                                                                        </v-col>
                                                                        <v-col
                                                                                cols="6"
                                                                                class="pa-0 pointer border_white"
                                                                                @click.stop="dialog = true"
                                                                        >
                                                                            <v-img
                                                                                    src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-463756_1549280496.JPG"
                                                                                    lazy-src="../../../public/images/no-image.png"
                                                                                    height="50"
                                                                                    class="text-right pa-2"
                                                                                    @mouseover="menu.src = 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-463756_1549280496.JPG'"
                                                                                    v-on="on"
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
                                                                                <v-overlay
                                                                                        absolute
                                                                                        color="black"
                                                                                        opacity="0.8"
                                                                                        class="caption"
                                                                                >
                                                                                    See All
                                                                                </v-overlay>
                                                                            </v-img>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-item>
                                                            </template>
                                                            <v-img
                                                                    :src="menu.src"
                                                                    lazy-src="../../../public/images/no-image.png"
                                                                    height="350"
                                                                    width="350"
                                                                    class="text-right pa-2"
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
                                                            </v-img>
                                                        </v-menu>
                                                    </v-col>
                                                </v-row>
                                            </v-item-group>
                                        </v-col>
                                        <v-col class="pa-0">
<!--                                            <router-link class="link text&#45;&#45;black" :to="{name:'Hotel'}">-->
                                                <span class="link black_text text--black title mt-3">Gibraltar Sightseeing Tour From Malaga</span>
<!--                                            </router-link>-->

                                            <v-tooltip color="black" top>
                                                <template v-slot:activator="{ on }">
                                                    <v-chip-group
                                                            column
                                                            active-class="primary--text"
                                                    >
                                                        <v-chip
                                                                label
                                                                outlined
                                                                color="black"
                                                                small
                                                                class="my-0"
                                                                v-on="on"
                                                        >Free cancellation</v-chip>
                                                        <v-chip
                                                                label
                                                                outlined
                                                                color="black"
                                                                small
                                                                class="my-0"
                                                                v-on="on"
                                                        >Best price guaranteed</v-chip>
                                                    </v-chip-group>
                                                </template>
                                                <v-layout>
                                                    <span class="mr-2">5 hour cultural, religious and historic sites <br>
                                                        tour through Segovia and Madrid. Read
                                                    </span>
                                                </v-layout>
                                            </v-tooltip>
                                            <p class="reserve mb-0">
                                                <v-chip
                                                        color="red  accent-4"
                                                        text-color="white"
                                                        class="my-1 font-weight-bold"
                                                        small label
                                                >
                                                    Popular!
                                                </v-chip>
                                                Last booked 9 hours ago
                                            </p>
                                            <p class="coupon mb-0">
                                                <v-chip
                                                        color="#d8eed5"
                                                        text-color="success"
                                                        class="my-1 font-weight-bold"
                                                        small label outlined
                                                        style="border: 2px dotted #4caf50; background-color: #d8eed5 !important;"
                                                >
                                                    WEEKENDSALE
                                                </v-chip>
                                                Coupon Code WEEKENDSALE applied - $ 21 off!
                                            </p>
                                            <v-row>
                                               <v-col cols="6" class="py-0">
                                                   <v-tooltip color="black" top>
                                                       <template v-slot:activator="{ on }">
                                                           <v-chip
                                                                   label
                                                                   outlined
                                                                   color="black"
                                                                   small
                                                                   class="my-0"
                                                                   v-on="on"
                                                           >Instant Booking</v-chip>
                                                       </template>
                                                       <v-layout>
                                                           <v-col class="mr-2 text-center">
                                                               <span class="font-weight-bold">Instant Booking</span><br>
                                                               Secure your space instantly<br>
                                                               without needing to wait for<br>
                                                               operator’s approval<br>
                                                           </v-col>
                                                       </v-layout>
                                                   </v-tooltip>
                                               </v-col>
                                                <v-col cols="6" class="py-0">
                                                    <v-tooltip color="black" class="ml-3" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-chip
                                                                    label
                                                                    outlined
                                                                    color="black"
                                                                    small
                                                                    class="my-0"
                                                                    v-on="on"
                                                            >Instant Booking</v-chip>
                                                        </template>
                                                        <v-layout>
                                                            <v-col class="mr-2 text-center">
                                                                You can pay with Visa, <br>
                                                                MasterCard, Maestro, AMEX or <br>
                                                                PayPal. For select departures, <br>
                                                                you can also pay in interest- <br>
                                                                free instalments.
                                                            </v-col>
                                                        </v-layout>
                                                    </v-tooltip>
                                                </v-col>
                                            </v-row>
                                            <v-divider class="my-2"></v-divider>
                                            <v-row>
                                                <v-col cols="6" class="grey--text overline py-0">
                                                    <div class="mb-1">DESTINATIONS</div>
                                                    <div class="mb-1">STARTS/ ENDS IN</div>
                                                    <div class="mb-1">AGE RANGE</div>
                                                    <div class="mb-1">ACCOMMODATION</div>
                                                    <div class="mb-1">TRANSPORT</div>
                                                    <div class="mb-1">TRAVEL STYLE</div>
                                                    <div class="mb-1">OPERATOR</div>
                                                </v-col>
                                                <v-col cols="6" class="caption py-0">
                                                    <div>
                                                        Rome, Orvieto, Venice
                                                        <span class="blue_text">+7 more</span>
                                                    </div>
                                                    <div>Rome / Rome</div>
                                                    <div>10 to 90 year olds</div>
                                                    <div>Hotel</div>
                                                    <div>Coach / Bus</div>
                                                    <div>Coach / Bus, Discovery</div>
                                                    <div>Expat Explore Travel</div>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-divider class="mx-3 my-0" inset vertical></v-divider>
                                        <v-col cols="3" class="py-0">
                                            <v-layout column justify-end fill-height text-right>
                                                <v-spacer></v-spacer>
                                                <v-col>
                                                    <v-chip
                                                            color="red  accent-4"
                                                            text-color="white"
                                                            class="my-1 font-weight-bold"
                                                            small label
                                                    >
                                                        ONLY 2 LEFT
                                                    </v-chip>
                                                    <v-chip
                                                            color="#d8eed5"
                                                            text-color="#28871c"
                                                            class="my-0 font-weight-bold"
                                                            small label
                                                    >
                                                        <v-avatar left>
                                                            <v-icon ma-0 x-small>mdi-arrow-bottom-right</v-icon>
                                                        </v-avatar>
                                                        <span class="caption">Save US $ 3</span>
                                                    </v-chip>
                                                    <div class="title past_price font-weight-bold">372</div>
                                                    <div class="title price gray font-weight-bold">$ <span>238</span></div>
                                                    <v-tooltip color="black" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-chip
                                                                        label
                                                                        outlined
                                                                        color="#dde9fd"
                                                                        text-color="#396fc6"
                                                                        small
                                                                        class="my-0"
                                                                        v-on="on"
                                                                ><span class="green_text">Next Departures</span></v-chip>
                                                        </template>
                                                        <v-layout column class="body-2">
                                                            <span>Next Departures:</span>
                                                            <span class="mr-4"><v-icon color="#396fc6" samll dark>mdi-clock-outline</v-icon>Sep 21</span>
                                                            <span class="mr-4"><v-icon color="#396fc6" samll dark>mdi-clock-outline</v-icon>Sep 22</span>
                                                        </v-layout>
                                                    </v-tooltip>
                                                    <v-chip
                                                            color="red  accent-4"
                                                            text-color="white"
                                                            class="my-1 font-weight-bold text-uppercase"
                                                            small label
                                                    >
                                                        Make your offer
                                                    </v-chip>
                                                </v-col>
                                            </v-layout>
                                        </v-col>
                                    </v-row>
                                    <v-dialog
                                            v-model="dialog"
                                            max-width="950"
                                            dark
                                    >
                                        <v-card color="black">
                                            <v-layout>
                                                <v-flex lg7 md7 sm7 pa-5>
                                                    <v-carousel v-model="model" hide-delimiters height="400">
                                                        <v-carousel-item
                                                                v-for="(item, index) in $store.state.tourImages"
                                                                :key="index"
                                                                :src="item"
                                                        ></v-carousel-item>
                                                    </v-carousel>
                                                    <v-slide-group
                                                            v-model="model"
                                                            active-class="success"
                                                            show-arrows
                                                            class="modal_slide"
                                                    >
                                                        <v-slide-item
                                                                v-for="(item, index) in $store.state.tourImages"
                                                                :key="index"
                                                                v-slot:default="{ active, toggle }"
                                                        >
                                                            <v-img
                                                                    :src="item"
                                                                    lazy-src="../../../public/images/no-image.png"
                                                                    height="60"
                                                                    width="85"
                                                                    @click="toggle"
                                                                    :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
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
                                                            </v-img>
                                                        </v-slide-item>
                                                    </v-slide-group>
                                                </v-flex>
                                                <v-divider vertical></v-divider>
                                                <v-flex lg5 md5 sm5 pa-5>
                                                    <v-layout column justify-space-between fill-height>
                                                        <v-flex class="modal_text">
                                                            <v-row class="d-flex justify-space-between">
                                                                <p class="font-weight-bold pl-3">Property overview</p>
                                                                <v-btn fab text right @click="dialog = !dialog">
                                                                    <v-icon>mdi-close</v-icon>
                                                                </v-btn>
                                                            </v-row>
                                                            <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-wifi</v-icon>Free Wi-Fi in all rooms!</p>
                                                            <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-air-conditioner</v-icon>Air conditioning</p>
                                                            <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-broom</v-icon>Daily housekeeping</p>
                                                            <p class="caption"><v-icon class="pr-1" small color="green darken-1">mdi-glass-wine</v-icon>Bar</p>
                                                            <p class="font-weight-bold">Nearby Attraction</p>
                                                            <div class="caption">La Pedrera Casa Mila<span class="float-right">1.23 km</span></div>
                                                            <div class="caption">Casa Batllo<span class="float-right">1.55 km</span></div>
                                                            <div class="caption">Camp Nou<span class="float-right">2.39 km</span></div>
                                                            <div class="caption">Parc Guell<span class="float-right">2.41 km</span></div>
                                                            <p class="font-weight-bold">Dining, drinking and snacking</p>
                                                            <p class="caption">Coffee/tea maker</p>
                                                            <p class="caption">Mini bar</p>
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-layout class="justify-center fill-height align-end">
                                                                <v-btn
                                                                        color="#5392f9"
                                                                        large bottom
                                                                        class="font-weight-bold align-center"
                                                                >
                                                                    View property
                                                                </v-btn>
                                                            </v-layout>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-card>
                                    </v-dialog>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Tours',
    data(){
      return {
        hotel_menu: ['Rooms','Facilities','Children and extra beds','Reviews','Map','Check-in'],
        tab: null,
        date: null,
        menuDate: false,
        applied: [],
        tree: [],
        filters: {
          date: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020'],
          destinations: [
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
        selected: null,
        dialog: false,
        model: 0,
        tag: 0,
        menu: {
          src: '',
        }
      }
    },
    computed: {},
    watch: {
      menuDate(show) {
        if (!show) this.applied.push(this.date);
      },
      /*'filters.range'(value) {
          if(value[0] !== 0 && value[1] !== 2000)
            this.applied.push(`Price: ${value[0]} - ${value[1]} US $`);
        },*/
      applied(newVal, oldVal){
        console.log(newVal, oldVal);
      }
    },
    methods: {
      removeApplied(index){
        this.applied.splice(index, 1);
      },
      filterRange(){
        if(this.filters.range[0] !== 0 || this.filters.range[1] !== 2000)
            this.applied.push(`Price: ${this.filters.range[0]} - ${this.filters.range[1]} US $`);
      },
      filterDuration(){
        if(this.filters.duration[0] !== 1 || this.filters.duration[1] !== 50)
            this.applied.push(`Duration: ${this.filters.duration[0]} - ${this.filters.duration[1]} days`);
      },
      filterDestinations(event){
        for(let item of event){
          this.applied.push(item.name);
        }
      },
      mouseImgOver(item){
        this.menu.src = item;
      },
      mouseImgOut(){
        this.menu.src = ''
      }
    },
    created(){
      // console.log(this.filters.destinations[0].children);
    }
  };
</script>

<style>
    .d_contents{
        display: contents;
    }
    .bg_blue{
        background-color: #5392f9;
    }
    .blue_text{
        color: #5392f9;
    }
    .el-slider__runway{
        margin: 0 !important;
        top: -8px;
    }
</style>
