<template>
  <div class="mapouter">
    <div class="gmap_canvas">
          <v-layout row>
              <v-flex xs12 md12 sm12 lg3 pl-4 mt-3>
                  <v-card tile flat>
                      <main-tab></main-tab>
                  </v-card>
              </v-flex>
              <v-flex xs12 sm12 lg9 px-4 mt-3>
                  <v-card tile flat >
                      <v-card color="rgb(253, 238, 238)"  mt-4>
                          <v-card-text >
                              <h5 class="sale">Торопитесь! 66% объектов размещения на нашем сайте уже распроданы!</h5>
                              <p>Номера в городе Барселона пользуются спросом на выбранные вами даты. Забронируйте ваш, пока цены не выросли.</p>
                          </v-card-text>
                      </v-card>
                      <v-item-group>
                          <v-container grid-list-md px-0>
                              <v-layout wrap>
                                  <v-flex
                                          v-for="n in 4"
                                          :key="n"
                                          xs6 md3>
                                      <v-item v-slot:default="{ active, toggle }">
                                          <v-card
                                                  :color="active ? '#b7dcf5' : ''"
                                                  class="d-flex align-center tag_filter"
                                                  height="50"
                                                  @click="toggle"
                                          >
                                              <v-card-text>
                                                  {{items[n-1]}}
                                              </v-card-text>
                                              <v-scroll-y-transition>
                                                  <div v-if="active" class="display-3 flex-grow-1 text-center"></div>
                                              </v-scroll-y-transition>
                                          </v-card>
                                      </v-item>
                                  </v-flex>
                              </v-layout>
                          </v-container>
                      </v-item-group>
                      <ticket
                              v-for="i in 3"
                              :key="i"
                      ></ticket>
                  </v-card>
              </v-flex>
          </v-layout>
    </div>
  </div>
</template>

<script>
import MainTab from './Main';
import Ticket from './Ticket';
export default {
  name: "Home",
  data(){
    return{
      items: ['Лучшие результаты', 'По возрастанию цены', 'Варианты с высокими оценками', 'Секретные предложения'],
    }
  },
  components: {Ticket, MainTab}
};
</script>

<style scoped>
    .sale{
        color: #e12d2d;
    }
    .tag_filter{
        font-weight: bold;
    }
</style>
