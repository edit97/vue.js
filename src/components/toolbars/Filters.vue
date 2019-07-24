<template >
    <v-app-bar>
        <v-layout >
           <v-flex sm10 offset-xs1 row pt-4>
               <v-flex sm2>
                   <v-select
                           :items="items"
                           label="Popular"
                           solo dark
                           prepend-inner-icon="mdi-octagram-outline"
                           class="popSelect"
                   ></v-select>
               </v-flex>
               <v-flex sm1 ml-2>
                   <v-select
                           :items="items"
                           label="Price"
                           solo dark
                           prepend-inner-icon="mdi-tag"
                           class="popSelect"
                   ></v-select>
               </v-flex>
               <v-flex sm2 mx-2>
                   <v-select
                           :items="items"
                           label="Count"
                           solo dark
                           prepend-inner-icon="mdi-star"
                           class="popSelect"
                   ></v-select>
               </v-flex>
               <v-flex sm2>
                   <v-select
                           :items="items"
                           label="Region"
                           solo dark
                           prepend-inner-icon="mdi-map-marker"
                           class="popSelect"
                   ></v-select>
               </v-flex>
               <v-spacer></v-spacer>
               <v-text-field
                       solo sm3
                       label="Search"
                       prepend-inner-icon="mdi-magnify"
                       class="search"
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
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    }
  };
</script>

<style scoped>

</style>
