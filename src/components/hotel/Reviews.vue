<template>
    <v-col>
        <p class="display-1">Reviews of Vale Apartments Barcelona from real guests</p>
        <v-row>
            <v-col class="d-inline-flex" cols="12" sm="4">
                <v-select
                        :items="reviews.guests"
                        label="All guests"
                        prepend-inner-icon="mdi-account-group-outline"
                        outlined
                ></v-select>
            </v-col>
            <v-col class="d-inline-flex" cols="12" sm="4">
                <v-select
                        :items="reviews.rooms"
                        label="All room types"
                        prepend-inner-icon="mdi-hotel"
                        outlined
                ></v-select>
            </v-col>
            <v-col class="d-inline-flex" cols="12" sm="4">
                <v-select
                        :items="reviews.languages"
                        label="All languages"
                        prepend-inner-icon="mdi-earth"
                        outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><span class="caption font-weight-bold">Show reviews that mention</span></v-col>
            <v-col cols="9">
                <v-chip-group
                        column
                        active-class="primary--text"
                >
                    <v-chip outlined v-for="(item ,index) in mention_reviews" :key="index">
                        <span class="pa-1">{{ item }}</span>
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        <v-layout class="justify-center my-3">
            <el-pagination
                    :page-size="20"
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="1000"
            ></el-pagination>
        </v-layout>
        <v-row>
            <v-col cols="3">
                <div class="blue_text"><span class="display-1 ">10.0</span><span class="subtitle-1"> Exceptional</span></div>
                <div class="caption"><v-icon small left>mdi-hotel</v-icon>Double Room</div>
                <div class="caption"><v-icon small left>mdi-hotel</v-icon>Couple</div>
                <div class="caption"><v-icon small left>mdi-calendar-blank-outline</v-icon>Stayed 3 nights in February 2019</div>
            </v-col>
            <v-col>
                <v-card
                        class="mx-auto pa-5"
                        color="#F9F9F9">
                    <strong>"Amazing!!! 6 star Hotel”</strong>
                    <p class="body-2">Friendly and helpful staff Location can't be better Bus from the airport stop
                        just 2 min from the hotel Good and rich breakfast From 2 pm till 11 on there is
                        complemantry Snack Bar bat you can have
                        drinks and light food very helpful. Big Rooms with a very good shower. Waiting to come back this hotel soon
                    </p>
                    <p class="caption grey--text">Reviewed June 20, 2019</p>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
  export default {
    name: 'Reviews',
    data(){
      return {
        reviews: {
          languages: [
            'All languages', 'English', 'Français', 'Español', 'Italiano', 'Nederlands', 'Deutsch', 'Português (PT)', '日本語', '繁體中文 (香港)', 'עברית'
          ],
          rooms: ['All room types', 'Double for Single Use','Double Room','Junior Suite'],
          guests: [
            'All guests (348)', 'Couple (10)', 'Solo traveler (4)', 'Family with young children (141)', 'Group (193)',
          ],
        },
        mention_reviews: ['All reviews', 'walking distance', 'great location', 'free snacks'],
      }
    }
  };
</script>

<style scoped>

</style>
