<template>
    <v-app-bar
            hide-on-scroll>
        <v-img
                    src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.png"
                    contain
                    height="50"
                    max-width="100"
                    class="nav_img"
            ></v-img>
        <v-divider class="mx-3" inset vertical></v-divider>
        <v-toolbar-items>
            <v-btn text>Link 1</v-btn>
            <v-btn text>Link 2</v-btn>
            <v-btn text>Link 3</v-btn>
            <v-btn text>Link 4</v-btn>
            <v-btn text>Link 5</v-btn>
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
                    <v-list-item
                            v-for="n in 2"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-btn class="ma-2" outlined color="red darken-1"> Button</v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-img
                src="http://www.apsf.ru/style/flag_rf.png"
                contain
                height="20"
                max-width="30"
        ></v-img>
        <v-btn icon small>
            <v-icon>$</v-icon>
        </v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn text color="primary">LogIn</v-btn>
        <v-btn class="ma-2" outlined color="primary"> Create</v-btn>
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

<style scoped>
    /*.menu{*/
    /*    z-index: 10!important;*/
    /*}*/
</style>
