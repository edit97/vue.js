<template>
    <v-app-bar color="blue-grey darken-4" :scroll-threshold="40" >
        <v-flex offset-xs1 pt-4 row xs10>
            <v-text-field
                    label="Prepend inner" prepend-inner-icon="mdi-magnify"
                    sm3
                    solo
            ></v-text-field>
            <v-flex pl-2 sm2>
                <v-text-field label="Start" solo></v-text-field>
            </v-flex>
            <v-flex pr-2 sm2>
                <v-text-field label="End" solo></v-text-field>
            </v-flex>
            <v-flex pr-1 sm3>
                <v-select
                        :items="items"
                        label="Solo field"
                        prepend-inner-icon="mdi-account-group"
                        sm3 solo
                ></v-select>
            </v-flex>
            <v-btn color="primary" height="48">Search</v-btn>
            <!-- <v-container>
                 <v-layout row>
                     <v-flex shrink pa-1>

                     </v-flex>
                     <v-flex shrink pa-1>

                         <v-card dark color="green lighten-1">
                             <v-card-text>#3 Im a Shrink Flex</v-card-text>
                         </v-card>
                     </v-flex>
                     <v-flex shrink pa-1>

                     </v-flex>
                 </v-layout>
                 &lt;!&ndash;<v-flex>
                     <v-text-field
                             solo
                             label="Prepend inner"
                             prepend-inner-icon="mdi-magnify"
                     ></v-text-field>
                 </v-flex>
                 <v-btn icon>
                     <v-icon>mdi-heart</v-icon>
                 </v-btn>

                 <v-btn icon>
                     <v-icon>mdi-magnify</v-icon>
                 </v-btn>

                 <v-menu
                         left
                         bottom
                 >
                     <template v-slot:activator="{ on }">
                         <v-btn icon v-on="on">
                             <v-icon>mdi-dots-vertical</v-icon>
                         </v-btn>
                     </template>

                     <v-list>
                         <v-list-item
                                 v-for="n in 5"
                                 :key="n"
                                 @click="() => {}"
                         >
                             <v-list-item-title>Option {{ n }}</v-list-item-title>
                         </v-list-item>
                     </v-list>
                 </v-menu>&ndash;&gt;
             </v-container>-->
        </v-flex>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'SearchNav',
    data(){
      return {
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    }
  };
</script>

<style scoped>
 nav{
     /*z-index: -1;*/
 }
</style>
