<script>
export default {
  name: 'mainGrid',
}

</script>

<template>

  <div class="container">
    <div class="item item_1">
      <div class="item_1-one">
        <h3 class="item_1-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </h3>
        <p class="item_1-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.
        </p>
        <div class="vertical-line"></div>
        <p class="item_1-text">Похожие новости</p>
        <ul class="item_1-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
        </ul>
      </div>
      <div class="item_1-two">
        <img class="item_1-img" src="@/assets/comunicacion%20politica%20(1)%201.png" style="height: 400px; width: 600px;" alt="123">
      </div>
    </div>
    <div class="item item_2">
      <h3 class="item_2-title">
        Последние новости
      </h3>
      <img src="@/assets/284320788be7027b8bea3f687155b7fb%201.png" alt="asd" style="width: 300px">
      <p class="item_2-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p class="item_2-list">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p class="item_2-list">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p class="item_2-list">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p class="item_2-list">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p class="item_2-list">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>

    </div>
    <div class="item item_3">
      <img src="@/assets/1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="item item_4">
      <img src="@/assets/2.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="item item_5">
      <img src="@/assets/3.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  </div>


</template>

<style scoped>

.container {
  margin: 0 auto;
  margin-top: 80px;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 400px);
  grid-row-gap: 32px;
  grid-column-gap: 20px;
}
.item_1 {
  display: flex;
  justify-content: space-between;
  grid-column: 1/4;
}
.item_2 {
  max-width: 300px;
  grid-column: 4/4;
  grid-row: 1/3;
}

.vertical-line {
  height: 1px; /* Высота линии */
  width: 140px; /* Ширина линии */
  background-color: black; /* Цвет линии */
  margin: 0 auto; /* Центрирование линии по горизонтали, если нужно */
}





.item_1-title {
  width: 300px;
  font-size: 18px;
  padding: 30px  10px 10px 10px;
}
.item_1-subtitle {
  padding: 0 10px 10px 10px;
  font-size: 14px;
}

.item_1-text {
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  font-weight: 500;
}

.item_1-list {
  padding: 0 30px 30px 40px;
}


</style>