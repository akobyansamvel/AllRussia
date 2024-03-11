<script>
export default {
  name: 'mainPolitic'
};
</script>

<template>
  <div>
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>

      <div class="container">
        <div class="item item_1">1</div>
        <div class="item item_2">2</div>
        <div class="item item_3">3</div>
        <div class="item item_4">4</div>
      </div>

  </div>
</template>

<style scoped>

.container {
  max-width: 1440px;
  margin: 0 auto;
}



.horizontal-line {
  height: 1px;
  width: 1440px;
  background-color: #000;
  margin: 0 auto;
}

.red-rectangle {
  width: 69px; /* ширина прямоугольника */
  height: 8px; /* высота прямоугольника */
  background-color: #AA0000; /* цвет фона прямоугольника */
  margin-left: 40px;
  margin-bottom: 18px; /* изменено с 43px на 18px */
}

</style>