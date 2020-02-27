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
            <select class="dark my-2"
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
}
select{
    
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #222; 
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: aqua;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ce750f 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

}
select::-ms-expand {
    display: none;
}
select:hover {
    border-color: #888;
}
select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; 
    outline: none;
}
select option {
    font-weight:normal;
}
</style>