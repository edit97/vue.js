<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card class="justify-center pa-3 mb-5">
                    <v-col>
                        <div class="title mb-2">Let’s find your ideal car</div>
                        <el-date-picker
                                v-model="$store.state.rentDate"
                                format="yy/MM/dd"
                                value-format="yyyy-MM-dd"
                                type="daterange"
                                align="right"
                                start-placeholder="Start Date"
                                end-placeholder="End Date"
                                style="width: 220px"
                        ></el-date-picker>
                        <el-time-picker
                                v-model="$store.state.rentTime[0]"
                                format="h:mm"
                                value-format="h:mm"
                                placeholder="Drop-off Time:"
                                class="my-2"
                        ></el-time-picker>
                        <el-time-picker
                                v-model="$store.state.rentTime[1]"
                                placeholder="Pick-up Time:"
                                format="h:mm"
                                value-format="h:mm"
                                class="mb-2"
                        >
                        </el-time-picker>
                        <v-btn dark color="#4caf50">Search</v-btn>
                    </v-col>
                </v-card>

                <v-card v-show="filtersCount !== 0" class="mb-5" flat outlined>
                    <v-layout class="pl-5 py-3 white--text bg_blue">
                        <div>{{filtersCount}} Filters Applied</div>
                        <v-spacer></v-spacer>
                        <v-btn
                                @click="clearAll()"
                                color="white" small text>
                            <span class="caption">Clear All</span>
                        </v-btn>
                    </v-layout>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.supplier">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'supplier')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.supplierRating">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'supplierRating')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.supplierLocation">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'supplierLocation')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.fuel">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'fuel')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.car">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'car')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.seats">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'seats')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.damageExcess">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'damageExcess')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.paymentCards">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'paymentCards')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row
                            :key="index + item"
                            class="mx-2"
                            v-for="(item, index) in applied.kilometres">
                        <span>{{item}}</span>
                        <v-spacer></v-spacer>
                        <v-btn @click="removeApplied(index, 'kilometres')" color="red" icon small>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </v-card>

                <v-expansion-panels accordion multiple :value="[1,2,3,4,5,6,7,8,9]">
                    <v-expansion-panel readonly>
                        <v-expansion-panel-header hide-actions>
                            <span class="title">Filter by</span>
                        </v-expansion-panel-header>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase  body-2 font-weight-bold"
                        >
                            <span><v-icon class="" left></v-icon>Supplier</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.supplier"
                                    v-model="applied.supplier"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-star</v-icon>Supplier Rating</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.supplierRating"
                                    v-model="applied.supplierRating"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-earth</v-icon>
                                Supplier Location
                                <v-tooltip top tight color="black" :max-width="250">
                                <template v-slot:activator="{ on }">
                                    <v-icon small left color="blue" v-on="on" >mdi-information-outline</v-icon>
                                </template>
                                <div>
                                    <strong>In Terminal</strong>
                                    <span class="caption"> - Just go to the car hire counter in the terminal.</span>
                                    <div>
                                        <strong> Meet & Greet</strong>
                                        <span class="caption">- Someone from the car hire company will come and take you to your car.</span>
                                    </div>
                                </div>
                            </v-tooltip>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.supplierLocation"
                                    v-model="applied.supplierLocation"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="text-uppercase body-2 font-weight-bold">
                            <span><v-icon left>mdi-fuel</v-icon>
                                Fuel policy
                                <v-tooltip top color="black" :max-width="250">
                                <template v-slot:activator="{ on }">
                                    <v-icon small right color="blue" v-on="on" >mdi-information-outline</v-icon>
                                </template>
                                <div>
                                    <strong>Full to Full</strong>
                                   <span class="caption">
                                        - The vehicle is supplied with a full tank of fuel. It should be returned full or refuelling charges will be applied
                                   </span>
                                </div>
                            </v-tooltip>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                :key="index"
                                :label="item"
                                :value="item"
                                color="primary"
                                hide-details
                                v-for="(item, index) in filters.fuel"
                                v-model="applied.fuel"
                        ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-car</v-icon>Car Specifications</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.car"
                                    v-model="applied.car"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-seat-recline-normal</v-icon>Seats</span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.seats"
                                    v-model="applied.seats"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-car-key</v-icon>
                                Damage excess
                                <v-tooltip top tight color="black" :max-width="250">
                                <template v-slot:activator="{ on }">
                                    <v-icon small left color="blue" v-on="on" >mdi-information-outline</v-icon>
                                </template>
                                <div>
                                    <span class="caption">The damage excess is the most you’d pay for any damage to the car’s bodywork.</span>
                                </div>
                            </v-tooltip>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.damageExcess"
                                    v-model="applied.damageExcess"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-credit-card-settings</v-icon>
                                Payment cards at pick-up
                                <v-tooltip top tight color="black" :max-width="250">
                                <template v-slot:activator="{ on }">
                                    <v-icon small left color="blue" v-on="on" >mdi-information-outline</v-icon>
                                </template>
                                <span class="caption">You will need this type of card with you to pay for your deposit and any extras</span>
                            </v-tooltip>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.paymentCards"
                                    v-model="applied.paymentCards"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header
                                class="text-uppercase body-2 font-weight-bold"
                        >
                            <span><v-icon left>mdi-car-cruise-control</v-icon>
                                Mileage/Kilometres
                                <v-tooltip top tight color="black" :max-width="250">
                                <template v-slot:activator="{ on }">
                                    <v-icon small left color="blue" v-on="on" >mdi-information-outline</v-icon>
                                </template>
                                <strong>Unlimited</strong>
                                <span class="caption">- You can drive as many kilometres as you like.</span>
                                <strong>Limited</strong>
                                <span class="caption">- If you drive more than a certain number of kilometres, the rental company will charge you for every extra kilometre.</span>
                            </v-tooltip>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-checkbox
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                    color="primary"
                                    hide-details
                                    v-for="(item, index) in filters.kilometres"
                                    v-model="applied.kilometres"
                            ></v-checkbox>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="9">
                <v-card>
                    <v-row class="px-3">
                        <v-col>
                            <div class="caption">Pick-up</div>
                            <div class="subtitle-2">Yerevan Airport - {{$store.state.rentTime[0]}} {{$store.state.rentDate[0]}}</div>
                        </v-col>
                        <v-icon>mdi-chevron-double-right</v-icon>
                        <v-col>
                            <div class="caption">Drop-off</div>
                            <div class="body-1">Yerevan Airport - {{$store.state.rentTime[1]}} {{$store.state.rentDate[0]}}</div>
                        </v-col>
                    </v-row>
                </v-card>
                <v-item-group
                        v-model="selected"
                        multiple
                >
                    <v-row class="pa-2">
                        <v-col
                                :key="i"
                                class="pa-1"
                                cols="2"
                                v-for="(item, i) in items"
                        >
                            <v-hover v-slot:default="{ hover }">
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card :class="active ? 'border_green' : ''" class="text-center">
                                        <span class="caption font-weight-bold">{{item.text}}</span>
                                        <v-img
                                                :src="item.src"
                                                class="text-right pa-2"
                                                height="100"
                                        >
                                        </v-img>
                                        <v-fade-transition>
                                            <div
                                                    :class="active ? 'green lighten-2' : 'light-blue lighten-4'"
                                                    @click="toggle"
                                                    class="d-flex  v-card--reveal display-3 white--text"
                                                    style="height: 100%;"
                                                    v-if="hover"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-icon color="white" right>{{ active ? 'mdi-close' : 'mdi-check' }}
                                                </v-icon>
                                            </div>
                                        </v-fade-transition>
                                    </v-card>
                                </v-item>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-item-group>
                <div v-show="selected.length !== 0">
                    <span>Car filters</span>
                    <v-chip
                            v-for="(item, index) in selected" :key="index"
                            class="ml-2 my-2"
                            close
                            color="#20274d"
                            text-color="white"
                            @click:close="closefilterCar(index)"
                    >
                        {{ items[item].text }}
                    </v-chip>
                </div>
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 2 : 0" class="ticket" flat outlined>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <v-row>
                                    <v-col class="py-0" cols="12">
                                        <v-img
                                                src="https://cdn2.rcstatic.com/images/car_images/new_images/kia/picanto_5_door_lrg.jpg"
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
                                            <v-tooltip color="black" top :max-width="250">
                                                <template v-slot:activator="{ on }">
                                                    <v-btn v-on="on"  dark icon @click="likeTour  = !likeTour">
                                                        <v-icon color="red">
                                                            {{ likeTour ? 'mdi-heart' : 'mdi-heart-outline' }}
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Click here for a no-obligation email with a link to this deal.</span>
                                            </v-tooltip>
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col class="pa-0">
                                <!--                                            <router-link class="link text&#45;&#45;black" :to="{name:'Hotel'}">-->
                                <span class="link black_text text--black title mt-3 pr-2">Kia Picanto</span>
                                <small>or Similar</small>
                                <!--                                            </router-link>-->

                                <v-row class="caption">
                                    <v-col cols="6">
                                        <div><v-icon color="black" small left>mdi-seatbelt</v-icon>4 Seats</div>
                                        <div><v-icon color="black" small left>mdi-bag-checked</v-icon>1 Large bag</div>
                                        <div><v-icon color="black" small left>mdi-snowflake</v-icon>Air Conditioning</div>
                                    </v-col>
                                    <v-col cols="6">
                                        <div><v-icon color="black" small left>mdi-car-door</v-icon>4 Doors</div>
                                        <div><v-icon color="black" small left>mdi-bag-carry-on</v-icon>1 Small bag</div>
                                        <div><v-icon color="black" small left>mdi-car-shift-pattern</v-icon>Manual gearbox</div>
                                    </v-col>
                                </v-row>
                                <v-chip
                                        class="my-1 font-weight-bold"
                                        color="#f1dda0"
                                        label small
                                        text-color="white"
                                >Mini</v-chip>
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
                                <v-divider class="my-2"></v-divider>
                                <v-row>
                                    <v-col class="grey--text caption py-0" cols="5">
                                        <div class="row px-2">
                                            <v-icon left large color="#28871c">mdi-gas-station</v-icon>
                                            <div class="green_text font-weight-bold ">
                                                <span>Fuel Policy</span>
                                                <v-tooltip color="black" top :max-width="250">
                                                    <template v-slot:activator="{ on }">
                                                        <span v-on="on" class="d-block">Cancellation</span>
                                                    </template>
                                                    <span>FREE cancellation up to 48 hours before your pick-up (deposit payments excluded)</span>
                                                </v-tooltip>
                                            </div>
                                        </div>
                                        <div class="row px-2">
                                            <v-icon left large color="#28871c">mdi-map-marker-distance</v-icon>
                                            <div class="green_text font-weight-bold ">
                                                <span>Fuel PolicMileage</span>
                                                <span class="d-block">Unlimited</span>
                                            </div>
                                        </div>
                                        <div class="row px-2">
                                            <v-icon left large >mdi-airplane</v-icon>
                                            <div class="font-weight-bold ">
                                                <span>Yerevan Airport</span>
                                                <v-tooltip color="black" top :max-width="250">
                                                    <template v-slot:activator="{ on }">
                                                        <span v-on="on" class="d-block">Meet & Greet</span>
                                                    </template>
                                                    <span>Someone from the car hire company will come and take you to your car.</span>
                                                </v-tooltip>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="caption py-0" cols="7">
                                        <div class="green_text font-weight-bold">Included in the price:</div>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0 px-1 font-weight-bold d-block"
                                                        color="transparent"
                                                        label small
                                                        v-on="on"
                                                >
                                                    <v-icon small left color="#28871c">mdi-check-bold</v-icon>
                                                    <span>Cancellation</span>
                                                </v-chip>
                                            </template>
                                            <span>FREE cancellation up to 48 hours before your pick-up (deposit payments excluded)</span>
                                        </v-tooltip>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0 px-1 font-weight-bold d-block"
                                                        color="transparent"
                                                        label small
                                                        v-on="on"
                                                >
                                                    <v-icon small left color="#28871c">mdi-check-bold</v-icon>
                                                    <span>Amendments</span>
                                                </v-chip>
                                            </template>
                                            <span>See full Terms and Conditions</span>
                                        </v-tooltip>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0 px-1 font-weight-bold d-block"
                                                        color="transparent"
                                                        label small
                                                        v-on="on"
                                                >
                                                    <v-icon small left color="#28871c">mdi-check-bold</v-icon>
                                                    <span>Theft Protection</span>
                                                </v-chip>
                                            </template>
                                            <span>If the car is stolen, all you’ll pay is the theft excess – not the full cost of the car.</span>
                                        </v-tooltip>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0 px-1 font-weight-bold d-block"
                                                        color="transparent"
                                                        label small
                                                        v-on="on"
                                                >
                                                    <v-icon small left color="#28871c">mdi-check-bold</v-icon>
                                                    <span>Collision Damage Waiver</span>
                                                </v-chip>
                                            </template>
                                            <span>If the car’s bodywork gets damaged, the most you’ll pay is the damage excess.</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-divider class="mx-3 my-0" inset vertical></v-divider>
                            <v-col class="py-0" cols="3">
                                <v-layout column fill-height justify-end text-right>
                                    <v-spacer></v-spacer>
                                    <v-col>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0"
                                                        color="#dde9fd"
                                                        label outlined small
                                                        text-color="#396fc6"
                                                        v-on="on"
                                                >
                                                    <v-icon small left>mdi-check-circle-outline</v-icon>
                                                    <span>Book Now, Pay Later</span>
                                                </v-chip>
                                            </template>
                                            <span>Book today and pay the balance 4 weeks before travel with a deposit of only US$86.56</span>
                                        </v-tooltip>
                                        <div class="body-2 mt-1">Price for 183 days:</div>
                                        <div class="title price gray font-weight-bold">$ <span>2,491.67</span></div>
                                        <v-tooltip color="black" top :max-width="250">
                                            <template v-slot:activator="{ on }">
                                                <v-chip
                                                        class="my-0 font-weight-bold"
                                                        color="transparent"
                                                        label
                                                        small text-color="#28871c"
                                                        v-on="on"
                                                >
                                                    <v-icon small left>mdi-check-bold</v-icon>
                                                    <span class="green_text">Free Cancellation</span>
                                                </v-chip>
                                            </template>
                                            <span>FREE cancellation up to 48 hours before your pick-up (deposit payments excluded)</span>
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
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Rent',
    data() {
      return {
        time: [],
        date: [],
        applied: {
          supplier: [],
          supplierRating: [],
          supplierLocation: [],
          fuel: [],
          car: [],
          seats: [],
          damageExcess: [],
          paymentCards: [],
          kilometres: [],
        },
        filters: {
          supplier: ['Alamo', 'Autorent', 'Avis', 'Budget', 'Enterprise', 'Firefly', 'Keddy By Europcar'],
          supplierRating: ['Excellent: 8+'],
          supplierLocation: ['In Terminal', 'Meet & Greet'],
          fuel: ['Full to Full'],
          car: ['With Air-conditioning', 'Automatic Transmission', 'Manual gearbox', '4+ Doors'],
          seats: ['4 Seats', '5 Seats', '6+ Seats'],
          damageExcess: ['Under RUB 19900', 'Under RUB 39800', 'Under RUB 59750', 'Under RUB 79650',],
          paymentCards: ['Debit card', 'Credit card',],
          kilometres: ['Unlimited',],
        },
        items: [
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/kia/picanto_5_door_lrg.jpg',
            text: 'Small Cars',
          },
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/hyundai/accent_lrg.jpg',
            text: 'Medium Cars',
          },
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/hyundai/elantra_lrg.jpg',
            text: 'Large Cars',
          },
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/lada/niva_lrg.jpg',
            text: 'Premium Cars',
          },
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/volkswagen/caravelle_lrg.jpg',
            text: 'People Carriers',
          },
          {
            src: 'https://cdn2.rcstatic.com/images/car_images/new_images/toyota/prado_lrg.jpg',
            text: 'SUVs',
          },
        ],
        selected: [],
        likeTour: false,
      };
    },
    computed: {
      filtersCount() {
        let count = this.applied.supplier.length + this.applied.supplierRating.length + this.applied.supplierLocation.length +
            this.applied.fuel.length + this.applied.car.length + this.applied.seats.length + this.applied.damageExcess.length +
            this.applied.paymentCards.length + this.applied.kilometres.length;

        return count;
      },
    },
    methods: {
      clearAll() {
        this.applied = {
          supplier: [],
          supplierRating: [],
          supplierLocation: [],
          fuel: [],
          car: [],
          seats: [],
          damageExcess: [],
          paymentCards: [],
          kilometres: [],
        };
      },
      removeApplied(index, item) {
        this.applied[item].splice(index, 1);
      },
      closefilterCar(index){
        this.selected.splice(index, 1)
      },
      // rentDate(){
      //   this.$store.commit('rentDate', true);
      // },
    }
  };
</script>

<style scoped>
    .green_text{
        color: #28871c;
    }
    .bg_blue {
        background-color: #5392f9;
    }
    .border_green{
        outline: 2px solid #28871c;
    }
    .v-card--reveal {
        align-items: end;
        bottom: 0;
        justify-content: end;
        opacity: .4;
        position: absolute;
        width: 100%;
    }
</style>
