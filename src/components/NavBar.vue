<template>
    <v-container fluid class="px-0 py-0 ">
        <v-navigation-drawer v-model="sidebar"  absolute temporary>
        <v-list nav dense rounded>
            <v-subheader>MENÚ</v-subheader>
            <v-list-item-group>
                <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path">
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>{{ item.title }}</v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>


        <v-app-bar color="primary"  dark fixed app>
        <span class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        </span>
        <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mx-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
            </router-link>
        </v-toolbar-title>
      </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn
            text
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            {{ item.title }}
            </v-btn>
        </v-toolbar-items>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name:'NavBar',
    data(){
            return {
      appTitle: 'App Multilenguaje',
      sidebar: false,
      menuItems: [
          { title: 'Inicio', path: '/' },
          { title: 'Sobre Nosotros', path: '/aboutUs' },
          { title: 'Ejemplo', path: '/example' }
     ]
    }
    }
}
</script>

<style>

</style>