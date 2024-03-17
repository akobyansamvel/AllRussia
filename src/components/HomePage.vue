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
import mainEconomic from '@/components/mainEconomic.vue';
import MainSection from '@/components/mainSection.vue';
import mainGrid from '@/components/mainGrid.vue';
import mainPolitic from '@/components/mainPolitic.vue';
import mainTeach from '@/components/mainTeach.vue';
import mainCulture from '@/components/mainCulture.vue';

export default {
  name: 'MainPage',
  components: { MainSection, mainGrid, mainEconomic, mainPolitic, mainTeach, mainCulture },
}
</script>

<style scoped>

.home {
}

</style>