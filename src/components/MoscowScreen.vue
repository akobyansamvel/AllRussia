<template>
    <div class="main">
      <div class="wrapper">
        <div class="headding">
          <img class="headding__logo" src="" alt="Герб">
          <p class="headding__text">Москва</p>
        </div>
        <div class="box">
          <p class="bow__text">Население:  12 330 126 человек</p>
          <p class="bow__text">Площадь: 2,561 тыс.км²  </p>
        </div>
        <div class="box box-borderbottom">
          <p class="bow__text">Часовой пояс:  MSK (UTC+3) </p>
          <p class="bow__text">Статус: Город Федерального значения, Столица Российской Федерации </p>
          <p class="bow__text">Автомобильный код: 77, 177, 777; 97, 197, 797; 99, 199, 799  </p>
          <p class="bow__text">Официальные сайты: Правительство Москвы, Московская городская Дума </p>
          <p class="bow__text">Мэр города: Московская городская Дума </p>
          <p class="bow__text">Экономический район: Центральный</p>
        </div>
        <div class="list">
          <div class="list__card card">
            <p class="card__text">Москва́ — столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит. Мегаполис; крупнейший по численности населения город России и её субъект — 13 104 177 человек (2023), самый населённый из городов, полностью расположенных в Европе, занимает 22-е место среди городов мира по численности населения. Центр Московской городской агломерации. Самый крупный город Европы по площади.</p>
            <img src="" alt="Храм" class="card__img">
          </div>
          <div class="list__card card">
            <img src="" alt="Храм" class="card__img">
            <p class="card__text">Москва́ — столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит. Мегаполис; крупнейший по численности населения город России и её субъект — 13 104 177 человек (2023), самый населённый из городов, полностью расположенных в Европе, занимает 22-е место среди городов мира по численности населения. Центр Московской городской агломерации. Самый крупный город Европы по площади.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MoscowScreen',
}
</script>

<style scoped>

.headding{
  display: flex;
  justify-content: center;
  font-size: 100px;
  color: red;
  font-weight: bold;
}

.headding__text{
  margin-left: 30px;
}

.wrapper{
  max-width: 1200px;
  margin: 0 auto;
}

.box{
  border-top: 1px black solid;
}

.box-borderbottom{
  border-bottom: 1px solid black;
}

.card{
  display: flex;
  margin-top: 30px;
  font-size: 20px;
  justify-content: space-around;
}

.card__text{
  max-width: 500px;
}

/* .card__text{
  max-width: 400px;
  max-height: 320px;
} */

</style>