<template>
    <div class="main">
        <div class="wrapper">
            <div class="contact">
                <span class="red-line"></span>
                <p class="contact__headding">Контакты</p>
                <p class="contact__text">Фактический адрес: 121170, г.Москва, Кутузовский проспект 36, стр.7Б, Метро "Кутузовская" или "Парк Победы"</p>
                <p class="contact__text">Адрес для корреспонденции: 121170, г.Москва, Кутузовский пр.,36,стр.7Б (Муса АЖ) </p>
                <p class="contact__text contact__text-underline">E-mail: info@allrussia.info</p>
                <p class="contact__text">Телефоны: +7 (495) 784-73-55; +7 (926) 393-40-64</p>
                <img class="contact__img" src="../assets/map.png" alt="Map">
            </div>
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

<style scoped>

.wrapper{
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.contact{
    border-top: 1px solid #AAAAAA;
}

.red-line{
    display: block;
    width: 80px;
    height: 13px;
    background-color: #aa0000;
}

.contact__headding{
    text-transform: uppercase;
}

</style>