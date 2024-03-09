<template>
  <div id="app">
    <HeaderSide></HeaderSide>
    <router-view></router-view>
    <FooterSide></FooterSide>
  </div>
</template>

<script>
import FooterSide from "./components/layouts/FooterDefault.vue"
import HeaderSide from "./components/layouts/HeaderDefault.vue"
import '@/styles/main.css'

export default {
  name: 'App',
  components: {
    FooterSide,
    HeaderSide
  }
}
</script>

<style>

</style>
