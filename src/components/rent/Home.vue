<template>
   <v-container>
       <v-row>
           <v-col cols="6">
               <v-card class="justify-center pa-3">
                   <v-col>
                       <div class="display-1">Let’s find your ideal car</div>
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
                                   is-range
                                   v-model="time"
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
                               <div slot="append"  v-show="!betweenAge">
                                   <div class="d-flex">
                                       <span class="pt-2 pr-3">Driver's age</span>
                                       <v-col cols="1" class="pa-0">
                                           <el-input v-model.number="input" :maxlength="2"></el-input>
                                       </v-col>
                                   </div>
                               </div>
                           </v-checkbox>
                       </div>
                       <v-chip
                               color="#d8eed5"
                               text-color="success"
                               class="width_100"
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
        date: '',
        time: '',
        betweenAge: true,
        input: 30,
        radios: 'Leisure',
      };
    }
  };
</script>

<style scoped>
    .width_100{
        width: 100%;
    }
    .height_100{
        height: 100% !important;
    }
</style>
