<template>
    <div>
        <v-row>
            <v-img
                    class="white--text fill-height "
                    lazy-src="../../../public/images/no-image.png"
                    max-height="400"
                    src="https://d3hne3c382ip58.cloudfront.net/resized/1920x700/-400X400_.JPG"
            >
                <template v-slot:placeholder>
                    <v-row
                            align="center"
                            class="fill-height ma-0"
                            justify="center"
                    >
                        <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
                    </v-row>
                </template>
                <v-overlay absolute z-index="-1"></v-overlay>
                <v-layout column fill-height justify-end>
                    <v-spacer></v-spacer>
                    <v-col class="mx-auto" cols="9">
                        <span class="display-2">Spain Group Tours 2019/2020</span>
                        <p class="subtitle-1 font-weight-bold">Find 278 Group Tours and Group Departures in Spain with
                            more than 754 customer reviews.
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
                    align-with-title
                    background-color="transparent"
                    v-model="tab"
            >
                <v-tabs-slider color="primary"></v-tabs-slider>

                <v-tab :key="index" v-for="(item, index) in hotel_menu">
                    {{ item }}
                </v-tab>
                <v-tab-item>
                    <v-row>
                        <v-col cols="3">
                            <v-card v-show="showApplied" class="mb-5" flat outlined>
                                <v-layout class="pl-5 py-3 white--text bg_blue">
                                    <div>{{filtersCount}} Filters Applied</div>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            @click="clearAll()"
                                            color="white" small text>
                                        <span class="caption">Clear All</span>
                                    </v-btn>
                                </v-layout>
                                <v-row class="mx-2" v-show="applied.date !== null">
                                    <span>{{applied.date}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedDatePiker()" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.dates">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedDates(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.destinations">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedDestinations(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.type">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedType(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.price">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedPrice(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.duration">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedDuration(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.age">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedAge(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.operators">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedOperators(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row
                                        :key="index + item"
                                        class="mx-2"
                                        v-for="(item, index) in applied.discounts">
                                    <span>{{item}}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="removeAppliedDiscounts(index)" color="red" icon small>
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card>

                            <v-expansion-panels accordion multiple :value="[1,2,3,4,5,6,7,8]">
                                <v-expansion-panel readonly>
                                    <v-expansion-panel-header hide-actions>
                                        <span class="title">Filter by</span>
                                    </v-expansion-panel-header>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                            class="text-uppercase  body-2 font-weight-bold"
                                    >
                                        <span><v-icon class="" left>mdi-calendar-today</v-icon>Departure Date</span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-menu
                                                :close-on-content-click="false"
                                                :return-value.sync="applied.date"
                                                full-width
                                                min-width="290px"
                                                offset-y
                                                ref="menu"
                                                transition="scale-transition"
                                                v-model="menuDate"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                        class="mt-3"
                                                        hide-details
                                                        outlined
                                                        placeholder="Select specific date" prepend-inner-icon="mdi-calendar-today"
                                                        readonly
                                                        v-model="applied.date"
                                                        v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker no-title scrollable v-model="applied.date">
                                                <div class="flex-grow-1"></div>
                                                <v-btn @click="menuDate = false" color="primary" text>Cancel</v-btn>
                                                <v-btn @click="$refs.menu.save(applied.date)" color="primary" text>OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>

                                        <v-checkbox
                                            :key="index"
                                            :label="item"
                                            :value="item"
                                            color="primary"
                                            hide-details
                                            v-for="(item, index) in filters.date"
                                            v-model="applied.dates"
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
                                                :items="filters.destinations"
                                                :return-object="true"
                                                @input="filterDestinations($event)"
                                                class="pa-0"
                                                dense selectable
                                                selected-color="primary"
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
                                                :key="index"
                                                :label="item"
                                                :value="item"
                                                color="primary"
                                                hide-details
                                                v-for="(item, index) in filters.type"
                                                v-model="applied.type"
                                        ></v-checkbox>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="text-uppercase body-2 font-weight-bold">
                                        <span><v-icon left>mdi-cash-usd</v-icon>Price</span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-sparkline
                                                :smooth="8 || false"
                                                :value="filters.value"
                                                color="#e0ecff"
                                                fill
                                                line-width="1"
                                                type="trend"
                                        ></v-sparkline>
                                        <el-slider
                                                :max="2000"
                                                :show-tooltip="false"
                                                @change="filterRange()"
                                                range
                                                v-model="filters.price"
                                        >
                                        </el-slider>
                                        <v-row class="mb-4 justify-space-between">
                                            <v-col class="text-left pb-0" cols="3">
                                                <v-text-field
                                                        height="48"
                                                        hide-details
                                                        label="MIN"
                                                        v-model.number="filters.price[0]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="text-right pb-0" cols="3">
                                                <v-text-field
                                                        height="48"
                                                        hide-details
                                                        label="MAX"
                                                        v-model="filters.price[1]"
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
                                                :max="50"
                                                :min="1"
                                                :show-tooltip="false"
                                                @change="filterDuration()"
                                                range
                                                v-model="filters.duration"
                                        >
                                        </el-slider>
                                        <v-row
                                                class="mb-4"
                                                justify="space-between"
                                        >
                                            <v-col class="text-left pb-0" cols="3">
                                                <v-text-field
                                                        height="48"
                                                        hide-details
                                                        label="MIN"
                                                        v-model.number="filters.duration[0]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="text-right pb-0" cols="3">
                                                <v-text-field
                                                        height="48"
                                                        hide-details
                                                        label="MAX"
                                                        v-model="filters.duration[1]"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                            class="text-uppercase body-2 font-weight-bold"
                                    >
                                        <span><v-icon left>mdi-human-male</v-icon>Age price</span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-checkbox
                                                :key="index"
                                                :label="item"
                                                :value="item"
                                                color="primary"
                                                hide-details
                                                v-for="(item, index) in filters.age"
                                                v-model="applied.age"
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
                                                class="mb-2"
                                                clearable
                                                placeholder="Search Operators"
                                                prefix-icon="el-icon-search"
                                                v-model="filters.inputOperators"
                                        >
                                        </el-input>
                                        <v-checkbox
                                                :key="index"
                                                :label="item"
                                                :value="item"
                                                color="primary"
                                                hide-details
                                                v-for="(item, index) in filters.operators"
                                                v-model="applied.operators"
                                        ></v-checkbox>

                                        <v-btn class="mt-3" color="rgb(83, 146, 249)" dark><span class="caption">View All Spain Tour Operators</span>
                                        </v-btn>
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
                                                :key="index"
                                                :label="item"
                                                :value="item"
                                                color="primary"
                                                hide-details
                                                v-for="(item, index) in filters.discounts"
                                                v-model="applied.discounts"
                                        ></v-checkbox>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                        <v-col cols="9">
                            <v-hover v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 2 : 0" class="ticket" flat outlined>
                                    <v-row>
                                        <v-col class="py-0" cols="4">
                                            <v-row>
                                                <v-col class="py-0" cols="12">
                                                    <v-img
                                                            :src="$store.state.tourImages[0]"
                                                            class="text-right pa-2"
                                                            height="200"
                                                            lazy-src="../../../public/images/no-image.png"
                                                    >
                                                        <template v-slot:placeholder>
                                                            <v-row
                                                                    align="center"
                                                                    class="fill-height ma-0"
                                                                    justify="center"
                                                            >
                                                                <v-progress-circular color="grey lighten-5"
                                                                                     indeterminate></v-progress-circular>
                                                            </v-row>
                                                        </template>
                                                        <v-btn dark icon @click="likeTour  = !likeTour">
                                                            <v-icon>
                                                                {{ likeTour ? 'mdi-heart' : 'mdi-heart-outline' }}
                                                            </v-icon>
                                                        </v-btn>
                                                    </v-img>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                    <v-col class="py-0" cols="6">
                                                        <iframe
                                                                frameborder="0"
                                                                height="102"
                                                                id="gmap_canvas"
                                                                marginheight="0"
                                                                marginwidth="0"
                                                                scrolling="no"
                                                                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                                width="160"
                                                        ></iframe>
                                                    </v-col>
                                                    <v-col class="py-0" cols="6">
                                                        <v-menu attach="tourImg" offset-y open-on-hover top>
                                                            <template v-slot:activator="{ on }">
                                                                    <v-row class="px-3" id="tourImg">
                                                                        <v-col
                                                                                :key="i"
                                                                                class="pa-0 zoom border_white"
                                                                                cols="6"
                                                                                v-for="(item,i) in $store.state.tourImages"
                                                                                v-if="i <= 3"
                                                                        >
                                                                            <v-img
                                                                                    :src="item"
                                                                                    @mouseout="mouseImgOut(item)"
                                                                                    @mouseover="mouseImgOver(item)"
                                                                                    class="text-right pa-2"
                                                                                    height="50"
                                                                                    lazy-src="../../../public/images/no-image.png"
                                                                                    v-on="on"
                                                                            >
                                                                                <template v-slot:placeholder>
                                                                                    <v-row
                                                                                            align="center"
                                                                                            class="fill-height ma-0"
                                                                                            justify="center"
                                                                                    >
                                                                                        <v-progress-circular
                                                                                                color="grey lighten-5"
                                                                                                indeterminate></v-progress-circular>
                                                                                    </v-row>
                                                                                </template>
                                                                            </v-img>
                                                                        </v-col>
                                                                        <v-col
                                                                                @click.stop="dialog = true"
                                                                                class="pa-0 pointer border_white"
                                                                                cols="6"
                                                                        >
                                                                            <v-img
                                                                                    @mouseover="menu.src = 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-463756_1549280496.JPG'"
                                                                                    class="text-right pa-2"
                                                                                    height="50"
                                                                                    lazy-src="../../../public/images/no-image.png"
                                                                                    src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-463756_1549280496.JPG"
                                                                                    v-on="on"
                                                                            >
                                                                                <template v-slot:placeholder>
                                                                                    <v-row
                                                                                            align="center"
                                                                                            class="fill-height ma-0"
                                                                                            justify="center"
                                                                                    >
                                                                                        <v-progress-circular
                                                                                                color="grey lighten-5"
                                                                                                indeterminate></v-progress-circular>
                                                                                    </v-row>
                                                                                </template>
                                                                                <v-overlay
                                                                                        absolute
                                                                                        class="caption"
                                                                                        color="black"
                                                                                        opacity="0.8"
                                                                                >
                                                                                    See All
                                                                                </v-overlay>
                                                                            </v-img>
                                                                        </v-col>
                                                                    </v-row>
                                                            </template>
                                                            <v-img
                                                                    :src="menu.src"
                                                                    class="text-right pa-2"
                                                                    height="350"
                                                                    lazy-src="../../../public/images/no-image.png"
                                                                    width="350"
                                                            >
                                                                <template v-slot:placeholder>
                                                                    <v-row
                                                                            align="center"
                                                                            class="fill-height ma-0"
                                                                            justify="center"
                                                                    >
                                                                        <v-progress-circular color="grey lighten-5"
                                                                                             indeterminate></v-progress-circular>
                                                                    </v-row>
                                                                </template>
                                                            </v-img>
                                                        </v-menu>
                                                    </v-col>
                                                </v-row>
                                        </v-col>
                                        <v-col class="pa-0">
                                            <!--                                            <router-link class="link text&#45;&#45;black" :to="{name:'Hotel'}">-->
                                            <span class="link black_text text--black title mt-3">Gibraltar Sightseeing Tour From Malaga</span>
                                            <!--                                            </router-link>-->

                                            <v-tooltip color="black" top>
                                                <template v-slot:activator="{ on }">
                                                    <v-chip-group
                                                            active-class="primary--text"
                                                            column
                                                    >
                                                        <v-chip
                                                                class="my-0"
                                                                color="black"
                                                                label
                                                                outlined
                                                                small
                                                                v-on="on"
                                                        >Free cancellation
                                                        </v-chip>
                                                        <v-chip
                                                                class="my-0"
                                                                color="black"
                                                                label
                                                                outlined
                                                                small
                                                                v-on="on"
                                                        >Best price guaranteed
                                                        </v-chip>
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
                                                        class="my-1 font-weight-bold"
                                                        color="red  accent-4"
                                                        label
                                                        small text-color="white"
                                                >
                                                    Popular!
                                                </v-chip>
                                                Last booked 9 hours ago
                                            </p>
                                            <p class="coupon mb-0">
                                                <v-chip
                                                        class="my-1 font-weight-bold"
                                                        color="#d8eed5"
                                                        label
                                                        outlined small style="border: 2px dotted #4caf50; background-color: #d8eed5 !important;"
                                                        text-color="success"
                                                >
                                                    WEEKENDSALE
                                                </v-chip>
                                                Coupon Code WEEKENDSALE applied - $ 21 off!
                                            </p>
                                            <v-row>
                                                <v-col class="py-0" cols="5">
                                                    <v-tooltip color="black" top>
                                                        <template v-slot:activator="{ on }">
                                                            <span class="caption pointer" v-on="on">
                                                                <v-icon color="#5392f9" left small>mdi-flash</v-icon>
                                                                Instant Booking
                                                            </span>
                                                            <!--<v-chip
                                                                    label
                                                                    outlined
                                                                    color="black"
                                                                    small
                                                                    class="my-0"
                                                                    v-on="on"
                                                            >Instant Booking</v-chip>-->
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
                                                <v-col class="py-0" cols="7">
                                                    <v-tooltip class="ml-3" color="black" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-chip
                                                                    class="my-0"
                                                                    color="#5392f9"
                                                                    label
                                                                    outlined
                                                                    small
                                                                    v-on="on"
                                                            >
                                                                <v-icon color="#5392f9" left small>mdi-check-circle
                                                                </v-icon>
                                                                Instant Booking
                                                            </v-chip>
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
                                                <v-col class="grey--text overline py-0" cols="5">
                                                    <span>DESTINATIONS</span>
                                                </v-col>
                                                <v-col class="caption py-0" cols="7">
                                                    <div>
                                                        Rome, Orvieto, Venice
                                                        <span @click="showMore = true" class="blue_text pointer"
                                                              v-show="!showMore">+7 more</span>
                                                        <span v-show="showMore">, Lake Garda, Florence, Tuscany, Pisa, Cinque Terra, San Gimignano, Siena</span>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col class="grey--text overline py-0" cols="5">
                                                    <div class="mb-1">STARTS/ ENDS IN</div>
                                                    <div class="mb-1">AGE price</div>
                                                    <div class="mb-1">ACCOMMODATION</div>
                                                    <div class="mb-1">TRANSPORT</div>
                                                    <div class="mb-1">TRAVEL STYLE</div>
                                                    <div class="mb-1">OPERATOR</div>
                                                </v-col>
                                                <v-col class="caption py-0" cols="7">
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
                                        <v-col class="py-0" cols="3">
                                            <v-layout column fill-height justify-end text-right>
                                                <v-spacer></v-spacer>
                                                <v-col>
                                                    <v-chip
                                                            class="my-1 font-weight-bold"
                                                            color="red  accent-4"
                                                            label
                                                            small text-color="white"
                                                    >
                                                        ONLY 2 LEFT
                                                    </v-chip>
                                                    <v-chip
                                                            class="my-0 font-weight-bold"
                                                            color="#d8eed5"
                                                            label
                                                            small text-color="#28871c"
                                                    >
                                                        <v-avatar left>
                                                            <v-icon ma-0 x-small>mdi-arrow-bottom-right</v-icon>
                                                        </v-avatar>
                                                        <span class="caption">Save US $ 3</span>
                                                    </v-chip>
                                                    <div class="title past_price font-weight-bold">372</div>
                                                    <div class="title price gray font-weight-bold">$ <span>238</span>
                                                    </div>
                                                    <v-tooltip color="black" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-chip
                                                                    class="my-0"
                                                                    color="#dde9fd"
                                                                    label
                                                                    outlined
                                                                    small
                                                                    text-color="#396fc6"
                                                                    v-on="on"
                                                            ><span class="green_text">Next Departures</span></v-chip>
                                                        </template>
                                                        <v-layout class="body-2" column>
                                                            <span>Next Departures:</span>
                                                            <span class="mr-4"><v-icon color="#396fc6" dark samll>mdi-clock-outline</v-icon>Sep 21</span>
                                                            <span class="mr-4"><v-icon color="#396fc6" dark samll>mdi-clock-outline</v-icon>Sep 22</span>
                                                        </v-layout>
                                                    </v-tooltip>
                                                    <v-chip
                                                            class="my-1 font-weight-bold text-uppercase"
                                                            color="red  accent-4"
                                                            label
                                                            small text-color="white"
                                                    >
                                                        Make your offer
                                                    </v-chip>
                                                </v-col>
                                            </v-layout>
                                        </v-col>
                                    </v-row>
                                    <v-dialog
                                            dark
                                            max-width="950"
                                            v-model="dialog"
                                    >
                                        <v-card color="black">
                                            <v-layout>
                                                <v-flex lg7 md7 pa-5 sm7>
                                                    <v-carousel height="400" hide-delimiters v-model="model">
                                                        <v-carousel-item
                                                                :key="index"
                                                                :src="item"
                                                                v-for="(item, index) in $store.state.tourImages"
                                                        ></v-carousel-item>
                                                    </v-carousel>
                                                    <v-slide-group
                                                            active-class="success"
                                                            class="modal_slide"
                                                            show-arrows
                                                            v-model="model"
                                                    >
                                                        <v-slide-item
                                                                :key="index"
                                                                v-for="(item, index) in $store.state.tourImages"
                                                                v-slot:default="{ active, toggle }"
                                                        >
                                                            <v-img
                                                                    :class="active ? 'text-right active_class ma-1' : 'text-right ma-1'"
                                                                    :src="item"
                                                                    @click="toggle"
                                                                    height="60"
                                                                    lazy-src="../../../public/images/no-image.png"
                                                                    width="85"
                                                            >
                                                                <template v-slot:placeholder>
                                                                    <v-row
                                                                            align="center"
                                                                            class="fill-height ma-0"
                                                                            justify="center"
                                                                    >
                                                                        <v-progress-circular color="grey lighten-5"
                                                                                             indeterminate></v-progress-circular>
                                                                    </v-row>
                                                                </template>
                                                            </v-img>
                                                        </v-slide-item>
                                                    </v-slide-group>
                                                </v-flex>
                                                <v-divider vertical></v-divider>
                                                <v-flex lg5 md5 pa-5 sm5>
                                                    <v-layout column fill-height justify-space-between>
                                                        <v-flex class="modal_text">
                                                            <v-row class="d-flex justify-space-between">
                                                                <p class="font-weight-bold pl-3">Property overview</p>
                                                                <v-btn @click="dialog = !dialog" fab right text>
                                                                    <v-icon>mdi-close</v-icon>
                                                                </v-btn>
                                                            </v-row>
                                                            <p class="caption">
                                                                <v-icon class="pr-1" color="green darken-1" small>
                                                                    mdi-wifi
                                                                </v-icon>
                                                                Free Wi-Fi in all rooms!
                                                            </p>
                                                            <p class="caption">
                                                                <v-icon class="pr-1" color="green darken-1" small>
                                                                    mdi-air-conditioner
                                                                </v-icon>
                                                                Air conditioning
                                                            </p>
                                                            <p class="caption">
                                                                <v-icon class="pr-1" color="green darken-1" small>
                                                                    mdi-broom
                                                                </v-icon>
                                                                Daily housekeeping
                                                            </p>
                                                            <p class="caption">
                                                                <v-icon class="pr-1" color="green darken-1" small>
                                                                    mdi-glass-wine
                                                                </v-icon>
                                                                Bar
                                                            </p>
                                                            <p class="font-weight-bold">Nearby Attraction</p>
                                                            <div class="caption">La Pedrera Casa Mila<span
                                                                    class="float-right">1.23 km</span></div>
                                                            <div class="caption">Casa Batllo<span class="float-right">1.55 km</span>
                                                            </div>
                                                            <div class="caption">Camp Nou<span class="float-right">2.39 km</span>
                                                            </div>
                                                            <div class="caption">Parc Guell<span class="float-right">2.41 km</span>
                                                            </div>
                                                            <p class="font-weight-bold">Dining, drinking and
                                                                snacking</p>
                                                            <p class="caption">Coffee/tea maker</p>
                                                            <p class="caption">Mini bar</p>
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-layout class="justify-center fill-height align-end">
                                                                <v-btn
                                                                        bottom
                                                                        class="font-weight-bold align-center" color="#5392f9"
                                                                        large
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
    data() {
      return {
        hotel_menu: ['Rooms', 'Facilities', 'Children and extra beds', 'Reviews', 'Map', 'Check-in'],
        tab: null,
        menuDate: false,
        applied: {
          date: null,
          dates: [],
          destinations: [],
          type: [],
          price: [],
          duration: [],
          age: [],
          operators: [],
          discounts: [],
        },
        filters: {
          date: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020'],
          destinations: [
            {
              id: 1,
              name: 'Madrid',
              children: [
                {id: 2, name: 'Segovia'},
                {id: 3, name: 'Cadalso De Los Vidrios'},
              ],
            },
            {
              id: 4,
              name: 'Andalucia',
              children: [
                {id: 5, name: 'Seville'},
                {id: 6, name: 'Malaga'},
                {id: 7, name: 'Ronda'},
                {id: 8, name: 'Granada'},
                {id: 9, name: 'Cordoba'},
                {id: 10, name: 'Gibraltar'},
                {id: 11, name: 'Sierra Nevada'},
                {id: 12, name: 'Costa del Sol'},
                {id: 13, name: 'Cadiz'},
                {id: 14, name: 'Algamitas'},
                {id: 15, name: 'Aracena'},
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
                {id: 19, name: 'San Sebastian'},
                {id: 20, name: 'Bilbao'},
                {id: 21, name: 'Las Arenas'},
              ],
            },
            {
              id: 22,
              name: 'Castilla-La Mancha',
              children: [
                {id: 23, name: 'Toledo'},
              ],
            },
          ],
          type: ['Day Tours', 'Multiday Tours'],
          price: [0, 2000],
          value: [0, 0, 0, 9, 5, 10, 3, 5, 0, 0, 1, 8, 0, 0, 0],
          duration: [1, 50],
          age: ['18 - 40 yrs', '40+ yrs', '50+ yrs', '60+ yrs', '70+ yrs', 'Family'],
          operators: ['Exodus Travels', 'Urban Adventures', 'Utracks', 'Intrepid Travel', '70+ yrs', 'VPT Tours'],
          inputOperators: '',
          discounts: ['Discounted Tours', 'Last Minute Deals'],
        },
        showMore: false,
        likeTour: false,
        dialog: false,
        model: 0,
        tag: 0,
        menu: {
          src: '',
        },
      };
    },
    computed: {
      filtersCount() {
        let count = this.applied.dates.length + this.applied.destinations.length + this.applied.type.length +
            this.applied.price.length + this.applied.duration.length + this.applied.age.length +
            this.applied.operators.length + this.applied.discounts.length;
        if (this.applied.date !== null) count += 1;
        return count;
      },
      showApplied() {
        return !(this.filtersCount === 0);
      },
    },
    watch: {
     /* applied: {
        handler(val, oldVal){
          console.log(val === oldVal);
          // if(val) this.showApplied = true;
        },
        deep: true
      },*/
    },
    methods: {
      clearAll() {
        this.applied = {
          date: null,
          dates: [],
          destinations: [],
          type: [],
          price: [],
          duration: [],
          age: [],
          operators: [],
          discounts: [],
        };
        this.filters.price = [0, 2000];
        this.filters.duration = [1, 50];
      },
      removeAppliedDatePiker() {
        this.applied.date = null;
      },
      removeAppliedDates(index) {
        console.log(this.applied);
        this.applied.dates.splice(index, 1);
      },
      removeAppliedDestinations(index) {
        this.applied.destinations.splice(index, 1);
      },
      removeAppliedType(index) {
        this.applied.type.splice(index, 1);
      },
      removeAppliedPrice(index) {
        this.applied.price.splice(index, 1);
        this.filters.price = [0, 2000];
      },
      removeAppliedDuration(index) {
        this.applied.duration.splice(index, 1);
        this.filters.duration = [1, 50];
      },
      removeAppliedAge(index) {
        this.applied.age.splice(index, 1);
      },
      removeAppliedOperators(index) {
        this.applied.operators.splice(index, 1);
      },
      removeAppliedDiscounts(index) {
        this.applied.discounts.splice(index, 1);
      },

      filterRange() {
        if (this.filters.price[0] !== 0 || this.filters.price[1] !== 2000)
          this.applied.price.pop();
          this.applied.price.push(`Price: ${this.filters.price[0]} - ${this.filters.price[1]} US $`);
      },
      filterDuration() {
        if (this.filters.duration[0] !== 1 || this.filters.duration[1] !== 50)
          this.applied.duration.pop();
          this.applied.duration.push(`Duration: ${this.filters.duration[0]} - ${this.filters.duration[1]} days`);
      },
      filterDestinations(event) {
        this.applied.destinations = [];
        for (let item of event) {
          this.applied.destinations.push(item.name);
        }
      },

      mouseImgOver(item) {
        this.menu.src = item;
      },
      mouseImgOut() {
        this.menu.src = '';
      },
    },
    created() {
      // console.log(this.filters.destinations[0].children);
    },
  };
</script>

<style>
    .d_contents {
        display: contents;
    }

    .bg_blue {
        background-color: #5392f9;
    }

    .blue_text {
        color: #5392f9;
    }
    .pointer{
        cursor: pointer !important;
    }
    .el-slider__runway {
        margin: 0 !important;
        top: -8px;
    }
</style>
