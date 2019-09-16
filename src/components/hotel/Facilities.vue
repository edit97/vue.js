<template>
    <div>
        <v-row>
            <v-col cols="3">
                <v-divider class="my-3"></v-divider>
                <p class="subtitle-1">What they offer</p>
            </v-col>
            <v-col cols="9">
                <v-divider class="my-3"></v-divider>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-thumb-up-outline</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Popular facilities</div>
                        <v-row class="blue_text">
                            <v-col class="py-0" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-dumbbell</v-icon>
                                            Fitness center
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-glass-cocktail</v-icon>
                                            Bar
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-account-tie</v-icon>
                                            Front desk [24-hour]
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-pool</v-icon>
                                            Swimming pool
                                            [outdoor]
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-silverware-fork-knife</v-icon>
                                            Restaurants
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2 ">
                    <v-col cols="1"><v-icon large>mdi-earth</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Languages spoken</div>
                        <v-row class="pl-3">
                            <v-col class="py-0" cols="4">
                                <div class="row">
                                    <v-img
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
                                            contain
                                            height="20"
                                            max-width="30"
                                            class="mr-2"
                                    ></v-img>
                                    English
                                </div>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <div class="row">
                                    <v-img
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"
                                            contain
                                            height="20"
                                            max-width="30"
                                            class="mr-2"
                                    ></v-img>
                                    Spanish
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-wifi</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Internet access</div>
                        <v-row class="">
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-wifi</v-icon>
                                Free Wi-Fi in all rooms!
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-access-point-network</v-icon>
                                Wi-Fi in public areas
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-pool</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Things to do, ways to relax</div>
                        <v-row>
                            <v-col class="py-0 blue_text" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-dumbbell</v-icon>
                                            Fitness center
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-solar-power</v-icon>
                                Solarium
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-bag-personal</v-icon>
                                Tours
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-account-outline</v-icon>
                                Massage
                            </v-col>
                            <v-col class="py-0 blue_text" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-pool</v-icon>
                                            Swimming pool
                                            [outdoor]
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-silverware-fork-knife</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Dining, drinking, and snacking</div>
                        <v-row>
                            <v-col class="py-0 blue_text" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-glass-cocktail</v-icon>
                                            Bar
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0 blue_text" cols="4">
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            <v-icon color="#5392f9" small left>mdi-silverware-fork-knife</v-icon>
                                            Restaurants
                                        </div>
                                    </template>
                                    <v-img
                                            src="//pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-room-service-outline</v-icon>
                                Room service
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-room-service-outline</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Services and conveniences</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-broom</v-icon>
                                Daily housekeeping
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-waves</v-icon>
                                Laundry service
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-hair-dryer</v-icon>
                                Salon
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-washing-machine</v-icon>
                                Dry cleaning
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-cctv</v-icon>
                                Luggage storage
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <v-icon small left>mdi-smoking</v-icon>
                                Smoking area
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-divider class="my-3"></v-divider>
                <p class="subtitle-1">Nearest essentials</p>
            </v-col>
            <v-col cols="9">
                <v-divider class="my-3"></v-divider>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-airport</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Airports</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>Barcelona-El Prat Airport (BCN)</p>
                                <div class="grey--text">
                                    <span>12.1 km - </span>
                                    <v-icon small left color="grey">mdi-car</v-icon>
                                    <span>24 minutes</span>
                                </div>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <p>Girona-Costa Brava Airport (GRO)</p>
                                <div class="grey--text">
                                    <span>75.2 km</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-bus</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Public transportation</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>Urquinaona Metro Station</p>
                                <div class="grey--text">
                                    <span>230 m - </span>
                                    <v-icon small left color="grey">mdi-walk</v-icon>
                                    <span>3 minutes</span>
                                </div>
                            </v-col>
                            <v-col class="py-0" cols="4">
                                <p>Plaça Catalunya Metro Station</p>
                                <div class="grey--text">
                                    <span>75.2 m</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-hospital-building</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Hospital or clinic</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>Fundacio Puigvert</p>
                                <div class="grey--text">
                                    <span>2.7 km</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-shopping</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Shopping</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>Portal de l'Angel</p>
                                <div class="grey--text">
                                    <span>320 m</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-store</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Convenience store</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>Carrefour Express</p>
                                <div class="grey--text">
                                    <span>1.8 km</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-phone-classic</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <div class="mb-2 font-weight-bold">Cash withdrawal</div>
                        <v-row>
                            <v-col class="py-0" cols="4">
                                <p>ATM</p>
                                <div class="grey--text">
                                    <span>80 m</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <p>Distances shown are straight-line distances on the map. Actual travel distances may vary.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-divider class="my-3"></v-divider>
                <p class="subtitle-1">What to eat nearby</p>
            </v-col>
            <v-col cols="9">
                <v-divider class="my-3"></v-divider>
                <v-row class="mb-2">
                    <v-col cols="3">
                        <v-img
                                src="//pix6.agoda.net/geo/cuisine/1110/5_1110.jpg?s=270x360"
                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                height="120"
                                class="text-right pa-2"
                        ></v-img>
                        <div class="mt-3">
                            <v-icon small left>mdi-silverware-fork-knife</v-icon>
                            Spanish cuisine
                        </div>
                        <v-divider class="mt-3"></v-divider>
                        <div class="mt-3">
                            <p>Granja Restaurant Bon Bar</p>
                            <div class="grey--text">
                                <span>100 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Las Euras</p>
                            <div class="grey--text">
                                <span>160 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Casa Alfredo</p>
                            <div class="grey--text">
                                <span>180 m - Spanish</span>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3" class="mx-5">
                        <v-img
                                src="//pix6.agoda.net/geo/cuisine/1079/5_1079.jpg?s=270x360"
                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                height="120"
                                class="text-right pa-2"
                        ></v-img>
                        <div class="mt-3">
                            <v-icon small left>mdi-silverware-fork-knife</v-icon>
                            Spanish cuisine
                        </div>
                        <v-divider class="mt-3"></v-divider>
                        <div class="mt-3">
                            <p>Granja Restaurant Bon Bar</p>
                            <div class="grey--text">
                                <span>100 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Las Euras</p>
                            <div class="grey--text">
                                <span>160 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Casa Alfredo</p>
                            <div class="grey--text">
                                <span>180 m - Spanish</span>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <v-img
                                src="//pix6.agoda.net/geo/cuisine/1048/5_1048.jpg?s=270x360"
                                lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                height="120"
                                class="text-right pa-2"
                        ></v-img>
                        <div class="mt-3">
                            <v-icon small left>mdi-silverware-fork-knife</v-icon>
                            Spanish cuisine
                        </div>
                        <v-divider class="mt-3"></v-divider>
                        <div class="mt-3">
                            <p>Granja Restaurant Bon Bar</p>
                            <div class="grey--text">
                                <span>100 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Las Euras</p>
                            <div class="grey--text">
                                <span>160 m - Spanish</span>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Casa Alfredo</p>
                            <div class="grey--text">
                                <span>180 m - Spanish</span>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-divider class="my-3"></v-divider>
                <p class="subtitle-1">What's nearby</p>
            </v-col>
            <v-col cols="9">
                <v-divider class="my-3"></v-divider>
                <v-row class="mb-2">
                    <v-col cols="1"><v-icon large>mdi-map-search</v-icon></v-col>
                    <v-divider vertical></v-divider>
                    <v-col  class="body-2 ml-2">
                        <v-row>
                            <v-col class="py-0 blue_text" cols="5">
                                <div class="mb-2 font-weight-bold text--black">Popular landmarks</div>
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            Casa Batllo - 640 m
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            La Boqueria - 760 m
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            Gothic Quarter (Barri Gotic) - 810 m
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                                <v-menu :open-on-hover="true" offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on">
                                            La Pedrera Casa Mila - 1.2 km
                                        </div>
                                    </template>
                                    <v-img
                                            src="http://pix6.agoda.net/hotelImages/566538/-1/b7821815c089ee3d4f5bdb9ee4ddf29f.jpg?s=360x270"
                                            lazy-src="https://eholot-gps.com.ua/images/no-image.png"
                                            height="350"
                                            width="350"
                                            class="text-right pa-2"
                                    ></v-img>
                                </v-menu>
                            </v-col>
                            <v-col class="py-0" cols="5">
                                <div class="mb-2 font-weight-bold">Nearby landmarks</div>
                                <p>Teatre Tívoli - 100 m</p>
                                <p>El Corte Inglés - 100 m</p>
                                <p>Laie - 160 m</p>
                                <p>Barcelona Walking Tours - 180 m</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
  export default {
    name: 'Children',
  };
</script>

<style scoped>

</style>
