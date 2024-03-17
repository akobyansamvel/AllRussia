<template>
    <div class="home">
      <main-section></main-section>
      <main-grid></main-grid>
      <mainEconomic/>
      <main-politic></main-politic>
      <main-teach></main-teach>
      <main-culture/>
      <NavigationBar/>
    </div>
</template>

<script>
import mainEconomic from '@/components/mainEconomic.vue';
import MainSection from '@/components/mainSection.vue';
import mainGrid from '@/components/mainGrid.vue';
import mainPolitic from '@/components/mainPolitic.vue';
import mainTeach from '@/components/mainTeach.vue';
import mainCulture from '@/components/mainCulture.vue';
import NavigationBar from '@/components/NavigationBar.vue';
export default {
  name: 'MainPage',
  components: { MainSection, mainGrid, mainEconomic, mainPolitic, mainTeach, mainCulture, NavigationBar },
}
</script>

<style scoped>

.home {
}

</style>