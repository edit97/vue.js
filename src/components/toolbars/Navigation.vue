<template>
    <v-app-bar max-height="60" :scroll-threshold="20">
        <v-img
            src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.png"
            contain
            height="50"
            max-width="100"
            class="nav_img"
        ></v-img>
        <v-divider class="mx-3" inset vertical></v-divider>
        <v-toolbar-items class="nav">
            <v-btn text>Hotels + Homes</v-btn>
            <v-btn text>Flights</v-btn>
            <v-btn text>Airport transfer</v-btn>
            <v-btn text>Family deals</v-btn>
            <v-btn text>Agoda Homes</v-btn>
            <v-menu
                    :open-on-hover="true"
                    :offset-y="true"
                    class="menu"
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>Car rentals</v-list-item>
                    <v-list-item>Things to do</v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-btn class="ma-2 font-weight-bold nav_btn" large outlined color="red darken-1">LIST YOUR PLACE</v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-menu>
            <template v-slot:activator="{ on }">
                <v-btn text small color="transparent" v-on="on">
                    <v-img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
                            contain
                            height="20"
                            max-width="30"
                            class="mr-2"
                    ></v-img>
                    <p class="body-1 black--text" >&#36;</p>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-img
                            src="http://www.apsf.ru/style/flag_rf.png"
                            contain
                            height="20"
                            max-width="30"
                            class="mr-2"
                    ></v-img>
                    <p class="body-1 black--text">&#8381;</p>
                </v-list-item>
                <v-list-item>
                    <v-img
                            src="https://cdn.webshopapp.com/shops/94414/files/53448306/armenia-flag-icon-free-download.jpg"
                            contain
                            height="20"
                            max-width="30"
                            class="mr-2"
                    ></v-img>
                    <p class="body-1 black--text">&#1423;</p>
                </v-list-item>
            </v-list>
        </v-menu>


        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn text large color="primary" class="font-weight-bold nav_btn">SIGN IN</v-btn>
        <v-btn class="ma-2 nav_btn font-weight-bold" large outlined color="primary">CREATE ACCOUNT</v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Navigation',
    data(){
      return {
        value: '',
        hideOnScroll: true,
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
        ],
      }
    },
  };
</script>

<style>
    .v-btn__content {
        text-transform: none !important;
    }
    .nav .v-btn__content {
        font-size: smaller;
        font-weight: bold;
    }
    .nav_btn{
        letter-spacing: inherit !important;
    }
</style>
