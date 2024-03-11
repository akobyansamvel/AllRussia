<template>
    <div class="home">
      <main-section></main-section>
      <main-grid></main-grid>
      <mainEconomic/>
      <main-politic></main-politic>
    </div>
</template>

<script>
import mainEconomic from '@/components/Home/mainEconomic.vue';
import MainSection from '@/components/Home/mainSection.vue';
import mainGrid from '@/components/Home/mainGrid.vue';
import mainPolitic from '@/components/Home/mainPolitic.vue';

export default {
  name: 'MainPage',
  components: { MainSection, mainGrid, mainEconomic, mainPolitic },
}
</script>

<style scoped>

.home {
}

</style>