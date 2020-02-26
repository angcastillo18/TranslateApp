<template>
    <v-container fluid class="px-0 py-0 ">
        <v-navigation-drawer v-model="sidebar"  absolute temporary>
        <v-list nav dense rounded>
            <v-subheader>{{$t('app.menutitle')}}</v-subheader>
            <v-list-item-group>
                <v-list-item
                :to="`/${$i18n.locale}`" exact>
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>{{$t('nav.inicio')}}</v-list-item-content>
                </v-list-item>
                <v-list-item
                :to="`/${$i18n.locale}/aboutUs`">
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>{{$t('nav.sobrenosotros')}}</v-list-item-content>
                </v-list-item>
                <v-list-item
                :to="`/${$i18n.locale}/example`">
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>{{$t('nav.ejemplo')}}</v-list-item-content>
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
            <router-link :to="`/${$i18n.locale}`" tag="span" style="cursor: pointer">
            {{$t('app.title')}}
            </router-link>
        </v-toolbar-title>
      </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn
            text :to="`/${$i18n.locale}`" exact>
            {{$t('nav.inicio')}}
            </v-btn>
            <v-btn
            text :to="`/${$i18n.locale}/aboutUs`">
            {{$t('nav.sobrenosotros')}}
            </v-btn>
            <v-btn
            text :to="`/${$i18n.locale}/example`">
            {{$t('nav.ejemplo')}}
            </v-btn>
            <!-- Button switcher language-->
            <img  class="flag" src="../assets/language.png"  alt="">
            <select class="primary"
            v-model="$i18n.locale"
            @change="setLocale($event)"
            >
                <option  v-for="(lang,i) in langs" :key="`Lang${i}`" :value="lang">
                    {{lang}}</option>
            </select>
        </v-toolbar-items>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name:'NavBar',
    data(){
            return {
/*       appTitle: 'App Multilenguaje', */
      sidebar: false,
      langs: ['es', 'en'],
/*       menuItems: [
          { path: '/' },
          {path: '`/${$i18n.locale}/aboutUs`' },
          { path: '/es/example' }
     ] */
    }
    },
    methods: {
        setLocale:function(event){
            /* console.log(event.target.value); */
            //aqui pasamos el valor del idioma
            this.$i18n.locale=event.target.value;
            this.$router.push({
                params:{lang:event.target.value}
            })
        }
    },
}
</script>

<style>
.flag{
    height: 40px;
    margin: auto 5px;
    color: white;
}
select{
    cursor: pointer;
}
</style>