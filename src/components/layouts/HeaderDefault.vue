<template>
  <div>
    <header class="header">
      <div class="item item_1">
        <a href="/">
          <img src="@/assets/icons/hamburger.svg" alt="ham" style="width: 33px; height: 24px">
        </a>
        <span class="header__logo">ALLRUSSIA</span>

      </div>
      <div class="item item_2">

        <ul class="header__list">
          <li class="header__items">ВсяРоссия</li>
          <li class="header__items">РФ</li>
          <li class="header__items">СНГ</li>
          <li class="header__items">Арабский Мир</li>
          <li class="header__items">Школа русского языка РКИ+</li>
          <li class="vertical-line_1"></li>
        </ul>
      </div>

      <div class="item item_3">
        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Поиск..."
            class="search-input"
          />
        </div>
          RU AR
      </div>

    </header>
    <div class="divider"></div>
  <header-help></header-help>
  </div>
</template>

<script>
import HeaderHelp from '@/components/layouts/headerHelp.vue';

export default {
name: 'HeaderSide',
  components: { HeaderHelp }

}
</script>

<style scoped>


.header {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.5fr 1fr;
  background-color: #222222;
  color: #FFFFFF;
  height: 70px;
}

.header__logo {
  font-size: 36px;
}

.item_1 {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.header__list {
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 16px;
}

.item_3{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vertical-line {
  width: 1px;        /* Толщина линии */
  height: 40px;      /* Длина линии */
  background-color: #FFFFFF; /* Цвет линии */
}

.search-input {
  width: 237px;
  height: 42px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #333333;
  border: none;
}

.divider {
  height: 2px; /* Толщина линии */
  background-color: #FFFFFF; /* Цвет линии */
}



</style>
