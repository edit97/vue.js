<template>
    <v-app-bar color="blue-grey darken-4" :scroll-threshold="40">
        <v-container d-flex  pa-0>
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
        </v-container>
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

<style scoped></style>
