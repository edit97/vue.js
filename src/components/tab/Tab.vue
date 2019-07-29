<template>
    <v-app id="inspire">
        <v-tabs fixed-tabs light class="tab_styles">
            <v-tab>
               <span class="tab_title"> Отели и жилье</span>
            </v-tab>
            <v-tab-item>
                <v-card flat tile>
                    <home></home>
                </v-card>
            </v-tab-item>
            <v-tab>
                <span class="tab_title">Отели</span>
            </v-tab>
            <v-tab-item>
                <v-card flat tile>
                    <home></home>
                </v-card>
            </v-tab-item>
            <v-tab>
                <span class="tab_title">Для семей</span>
            </v-tab>
            <v-tab>
                <span class="tab_title"> СО СКИДКОЙ!</span>
            </v-tab>
            <v-flex row  class="tab_switch">
                <v-tooltip color="white" top >
                    <template v-slot:activator="{ on }">
                        <v-btn text small color="transparent" v-on="on">
                            <p>Семейный режим</p>
                        </v-btn>
                        <v-btn text small color="transparent" v-on="on">
                            <v-switch v-model="value" label="value"></v-switch>
                        </v-btn>
                    </template>
                    <v-layout>
                        <span style="color: black" class="mr-2 text-black"><v-icon>mdi-account-group-outline</v-icon>
                            Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor
                        </span>
                    </v-layout>
                </v-tooltip>
            </v-flex>
        </v-tabs>
    </v-app>
</template>

<script>
  import Home from './Home';
  export default {
    name: 'Tab',
    components: {Home},
    data(){
      return{
        value: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
            ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    }
  };
</script>

<style>
    .tab_title{
        font-weight: bold;
        margin: 1rem !important;
    }
    .tab_styles .v-tabs-bar {
        height: 65px !important;
    }
    .tab_styles .theme--light.application {
        background: #eff6f9;
    }
    .tab_styles .application {
        font-family: inherit;
    }
    .tab_styles .v-tab--active, .v-tab--active .v-icon {
         border-top: 5px solid #1976d2 ;
         background: white;
     }
    .tab_styles .tab_switch .v-input--selection-controls {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }
    .tab_styles  .tab_switch p{
        color: #8660c7;
        font-weight: bold;
        padding-top: 9px;
    }
    .tab_styles .v-tabs-slider {
        height:0 !important;
        width: 0 !important;
    }
</style>
