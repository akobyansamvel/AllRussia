<template>
    <div>
      <main-section></main-section>
      <div class="container">
        <div class="item item_1">1</div>
        <div class="item item_2">2</div>
        <div class="item item_3">3</div>
        <div class="item item_4">4</div>
        <div class="item item_5">5</div>
        <div class="item item_6">6</div>
        <div class="item item_7">7</div>
        <div class="item item_8">8</div>
      </div>
    </div>
</template>

<script>
import MainSection from '@/components/mainSection.vue';
export default {
  name: 'MainPage',
  components: { MainSection }
}
</script>

<style>

.container {
  margin: 80px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 400px);
  grid-row-gap: 32px;
  grid-column-gap: 20px;
}
.item_1 {
  grid-column: 1 / 4; /* Занимает первые три колонки первого ряда */
}


.item {
  border: 1px solid black;
}


</style>