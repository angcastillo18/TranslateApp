<template>
  <v-container class="home">
    <h1>{{ $t('inicio.title') }}</h1>
    <p>{{ $t('message') }}</p>
    <img 
    alt="Vue logo" src="../assets/logo.png">
    <p v-html=" $t('inicio.content') "></p>
  </v-container>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'Home',
  components: {
/*     HelloWorld */
  }
}
</script>
