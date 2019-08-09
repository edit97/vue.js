<template>
  <v-content>
    <v-layout>
        <v-hover class="m-2" v-slot:default="{ hover }">
            <v-flex sm8>
                <v-card class="mx-auto" color="grey lighten-4">
                    <v-img
                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112138.jpg?k=42b08d9b45efa1743135bd003d7b225110a174b2bdf9c0263ba8e7e3092bbfa1"
                    >
                        <v-fade-transition>
                            <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                            ></div>
                        </v-fade-transition>
                    </v-img>
                </v-card>
            </v-flex>
        </v-hover>
        <v-flex sm4 class="mt-2">
            <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" >
                    <v-img
                            min-height="250"
                            src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116150.jpg?k=e5dfcb99ac06655e16ec83aa34f0767158739e67d998e6335ad8ac071edec38c&amp;o="
                    >
                        <v-fade-transition>
                            <v-layout wrap
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                            >
                                <p class="hover_title">Deluxe Two-Bedroom  Apartment</p>
                                <p class="hover_p "><v-icon dark>mdi-hotel</v-icon> 1 queen bed or 2 single beds or 1 sofa bed</p>
                                <p class="hover_p "><v-icon dark>mdi-home-variant-outline</v-icon>Room size: 70 m²/753 ft²</p>
                                <p class="hover_p"><v-icon dark>mdi-home-city-outline</v-icon> Balcony / terrace</p>
                                <p class="hover_p"><v-icon dark>mdi-shower-head</v-icon>Shower</p>
                            </v-layout>
                        </v-fade-transition>
                    </v-img>
                </v-card>
            </v-hover>
            <v-layout>
                <v-flex sm6 class="my-2 pr-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" color="grey lighten-4">
                            <v-img
                                    min-height="145"
                                    src="//q-xx.bstatic.com/xdata/images/hotel/840x460/62116311.jpg?k=d76884a8698a7790ec416d5ae369c3104d20ad751378b68e559e821a47857c8c&amp;o=&amp;o="
                            >
                                <v-fade-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    ></div>
                                </v-fade-transition>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-flex>
                <v-flex sm6 class="my-2 pl-1">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" color="grey lighten-4">
                            <v-img
                                    min-height="145"
                                    src="//q-xx.bstatic.com/xdata/images/hotel/840x460/60112083.jpg?k=83940a10efc5386b3adf078f201a45b915ffc2478ce31ce3dc26a11a5097662e&amp;o="
                            >
                                <v-fade-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    >
                                        <p class="see_all">See all 55 photos</p>
                                    </div>
                                </v-fade-transition>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>

    <v-layout>
        <v-flex sm3>
            <v-card class="m-2">
                <v-container class="row mx-1">
                    <v-btn color="#5392f9" dark height="50" class="mr-2"><h3 class="m-0">9.5</h3></v-btn>
                    <div>
                        Exceptional<br>
                        <small>/10 <span>(348 reviews)</span></small>
                    </div>
                </v-container>
            </v-card>
            <v-card class="m-2">
                <v-container class="row mx-1" wrap>
                   <div class="mb-2">
                       <iframe
                               width="220"
                               height="120"
                               id="gmap_canvas"
                               src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                               frameborder="0"
                               scrolling="no"
                               marginheight="0"
                               marginwidth="0"
                       ></iframe>
                   </div>

                    <v-btn color="#5392f9" outlined dark height="50" class="mr-2"><h4 class="m-0">9.4</h4></v-btn>
                    <div>
                        Exceptional<br>
                        <small>Location rating score</small>
                    </div>
                    <div>
                        <small class="font-weight-bold"><v-icon>mdi-medal</v-icon>Exceptional location</small>
                        <small>- Inside city center</small>
                    <v-divider></v-divider>
                    </div>
                    <div>
                        <small><v-icon>mdi-parking</v-icon>Parking</small>
                        <small>Available</small>
                        <v-divider></v-divider>
                    </div>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>

  </v-content>
</template>

<script>
export default {
  name: "Hotel",
  data() {
    return {};
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
    .hover_title{
        font-size: 16px;
        font-weight: 600;
        width: calc(90% - 40px);
        margin: 0 2rem;
    }
    .hover_p{
        font-size: 14px;
        margin: 0 2rem;
    }
.see_all {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    line-height: 1.8;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .2px;
    padding: 16px;
    font-weight: 700;
}
</style>
