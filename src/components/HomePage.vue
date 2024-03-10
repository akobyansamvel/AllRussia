<template>
    <div>
        MAIN page
        <div class="wrap">
          <NavigationBar></NavigationBar>
        </div>
    </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue"

export default {
  name: 'MainPage',
  components: {
    NavigationBar,
  }
}
</script>

<style>
.wrap{
  margin-left:100px ;
}
</style>