<template >
    <v-app-bar :fixed="fixed">
        <v-layout class="filters">
           <v-flex sm10 offset-xs1 row pt-4>
               <v-flex sm2>
<!--                   :menu-props="{ closeOnContentClick: true,  maxHeight:300, closeOnClick: true, }"-->
                   <v-select
                           :items="populars"
                           v-model="popular"
                           label="Popular"
                           solo dark dense rounded
                           prepend-inner-icon="mdi-octagram-outline"
                   ></v-select>
               </v-flex>
               <v-flex sm1 ml-2>
                   <v-select
                           :items="prices"
                           v-model="price"
                           label="Price"
                           solo dark dense rounded
                           prepend-inner-icon="mdi-tag"
                   ></v-select>
               </v-flex>
               <v-flex sm2 mx-2>
                   <v-select
                           :items="counts"
                           v-model="count"
                           label="Count"
                           solo dark dense rounded
                           prepend-inner-icon="mdi-star"
                   ></v-select>
               </v-flex>
               <v-flex sm2>
                   <v-select
                           :items="regions"
                           v-model="region"
                           label="Region"
                           solo dark dense rounded
                           prepend-inner-icon="mdi-map-marker"
                   ></v-select>
               </v-flex>
               <v-spacer></v-spacer>
               <v-text-field
                   solo sm3 rounded
                   label="Search"
                   prepend-inner-icon="mdi-magnify"
               ></v-text-field>
           </v-flex>
        </v-layout>
    </v-app-bar>
</template>
<script>
  export default {
    name: 'Filters',
    data(){
      return{
        populars: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        prices: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        counts: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        regions: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        popular: null,
        price: null,
        count: null,
        region: null,
        fixed: false,
      }
    },
    created() {
      window.addEventListener('scroll', () => {
        window.pageYOffset >= 120 ? this.fixed =true : this.fixed = false;
      });
    }
  };
</script>

<style>
    .filters .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
        padding: 0 10px!important;
    }
    .filters .v-input__slot{
        margin-bottom: 0 !important;
    }
</style>
