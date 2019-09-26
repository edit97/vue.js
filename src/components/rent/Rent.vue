<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card class="justify-center pa-3 mb-5">
                    <v-col>
                        <div class="title">Let’s find your ideal car</div>
                        <el-date-picker
                                v-model="date"
                                type="daterange"
                                align="right"
                                start-placeholder="Start Date"
                                end-placeholder="End Date"
                                style="width: 220px"
                        ></el-date-picker>
                        <el-time-picker
                                v-model="time[0]"
                                placeholder="Drop-off Time:"
                                class="my-2"
                        ></el-time-picker>
                        <el-time-picker
                                placeholder="Pick-up Time:"
                                v-model="time[1]"
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
                            <div class="body-2">Yerevan Airport - {{time[0]}}</div>
                        </v-col>
                        <v-icon>mdi-chevron-double-right</v-icon>
                        <v-col>
                            <div class="caption">Drop-off</div>
                            <div class="body-2">Yerevan Airport - {{time[1]}}</div>
                        </v-col>
                    </v-row>
                </v-card>
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
    name: 'Rent',
    data() {
      return {
        time: [],
        date: '',
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
    }
  };
</script>

<style scoped>
    .bg_blue {
        background-color: #5392f9;
    }
</style>
