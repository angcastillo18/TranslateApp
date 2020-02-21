<template>
    <v-container fluid class="px-0 py-0">
        <v-toolbar color="primary"  dark>
        <span class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        </span>
        <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
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
        </v-toolbar>


        <v-navigation-drawer v-model="sidebar" >
        <v-list>
            <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            <v-list-item-action>
            </v-list-item-action>
            <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

    </v-container>
</template>

<script>
export default {
    name:'NavBar',
    data(){
            return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home' },
          { title: 'Sign Up', path: '/signup' },
          { title: 'Sign In', path: '/signin' }
     ]
    }
    }
}
</script>

<style>

</style>