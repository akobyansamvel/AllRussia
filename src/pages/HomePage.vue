<template>
    <div class="home">
      <main-section></main-section>
      <main-grid></main-grid>
      <mainEconomic/>
      <main-politic></main-politic>
      <main-teach></main-teach>
      <main-culture/>
    </div>
</template>

<script>
import mainEconomic from '@/components/Home/mainEconomic.vue';
import MainSection from '@/components/Home/mainSection.vue';
import mainGrid from '@/components/Home/mainGrid.vue';
import mainPolitic from '@/components/Home/mainPolitic.vue';
import mainTeach from '@/components/Home/mainTeach.vue';
import mainCulture from '@/components/Home/mainCulture.vue';

export default {
  name: 'MainPage',
  components: { MainSection, mainGrid, mainEconomic, mainPolitic, mainTeach, mainCulture },
}
</script>

<style scoped>

.home {
}

</style>