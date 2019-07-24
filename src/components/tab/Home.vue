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
  components: {Ticket, MainTab}
};
</script>

<style scoped>
.sale{
    color: #e12d2d;
}
</style>
