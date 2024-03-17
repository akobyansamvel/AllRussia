<script>

export default {
  name: 'mainTeach',
}
</script>

<template>
  <div class="container">
    <div class="item item_1">
      <img class="item_1-img" src="@/assets/syrikaty-2%201.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="item item_2">
      <img src="@/assets/prem1%20(2).png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="item item_3">
      <img src="@/assets/prem1%20(3).png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="item item_4">
      <img src="@/assets/prem1%20(4).png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div class="item item_5">
      <img src="@/assets/prem1%20(1).png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
  </div>

</template>

<style scoped>

  .container {
    margin: 0 auto;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 340px);
    grid-row-gap: 32px;
    grid-column-gap: 20px;
  }

  .item p{
    text-align: center;
  }
  .item_1{
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .item_1-img {
    width: 100%;
  }

</style>