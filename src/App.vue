<template>
  <div id="app">
    <HeaderSide></HeaderSide>
    <router-view></router-view>
    <FooterSide></FooterSide>
  </div>
</template>

<script>
import FooterSide from "./components/layouts/FooterSide.vue"
import HeaderSide from "./components/layouts/HeaderSide.vue"
export default {
  name: 'App',
  components: {
    FooterSide,
    HeaderSide
  }
}
</script>

<style>
 body {
   margin:0;
 }

 .main{
  margin-top: 20px;
 }

 .red-line{
    width: 32px;
    height: 8px;
    background-color: red;
}
</style>
