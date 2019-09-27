import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    overlay: false,
    filter_overlay: false,
    tags: ['All', 'Rooms', 'Property views', 'Facilities', 'Dining', 'Shopping', 'Nearby attraction',],
    images: [
      [
        'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
      [
        'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
      ],
      [
        'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
      [
        'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
      [
        'https://pix6.agoda.net/hotelImages/566538/-1/3a17e1732368191549388ce97b79c566.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/864761bce9168d4839b2dcbf715924e2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/362a88cef8f986da16968a277ff481d2.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/e73448c6f598636f44dd5fdce9c805be.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/a3ab3131c127472795b09d7b3774d222.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/b6312cf92171fe440d329e61d65fdaa8.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
      [
        'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
      [
        'https://pix6.agoda.net/hotelImages/566/566538/566538_14040419460018975836.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/c04af35cf95f32991e5f2f4ac514b062.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/f011671e14e3e0443c937de4df30ab70.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/149455bc040cc2bd7dcf0c60e154e135.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/0bda81d9aeb80bd8a2ec945711621132.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/965a214863f754bcf101325fe52a8a6a.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/eac4ff70ac107c806d3024af4feed8dc.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/8dd98fb80a3aca23ad3b93e701950fd9.jpg?s=1024x768',
        'https://pix6.agoda.net/hotelImages/566538/-1/5ca20f0d786717b0bab0539ac8214d98.jpg?s=1024x768'
      ],
    ],
    tourImages: [
        'https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-454989_1567921614.JPG',
        'https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-454988_1543760668.JPG',
        'https://d3hne3c382ip58.cloudfront.net/resized/750x420/segovia-half-day-tour-from-madrid-tour-2-463756_1549280496.JPG',
    ],
    rentDate: '',
    rentTime: '',
  },
  mutations: {
    searchMenu (state, payload) {
      state.overlay = payload
    },
    filtersMenu (state, payload) {
      state.filter_overlay = payload
    },
    // rentDate(state, payload){
    //   state.rentDate = payload
    // },
  }
});
