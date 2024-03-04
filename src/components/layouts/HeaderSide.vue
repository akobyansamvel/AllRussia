<template>
  <header class="header">
  <nav class="navigation">

    <div class="menu-logo">
      <img class="menu-icon" src="../../assets/Вкладки.png" /><span class="logo ">ALLRUSSIA</span>
    </div>


    <ul class="nav-links">
      <li><a href="#">ВсяРоссия</a></li>
      <li><a href="#">РФ</a></li>
      <li><a href="#">CHГ</a></li>
      <li><a href="#">Арабский Мир</a></li>
      <li><a class="border" href="#">Школа русского языка РКИ</a></li>
    </ul>



    <div class="search">
      <input type="text" placeholder="Поиск">
      <div> 🇷🇺 🇸🇦 </div>
    </div>

  </nav>
  <!-- Блок с курсами валют -->
  <div class="currency-block">
    <div class="currency">
      <span>USD</span>
      <span>81,95 </span>
      <span class="currency-diff negative">-0,02 ↓</span>
    </div>
    <div class="currency">
      <span>EUR</span>
      <span>89,99 </span>
      <span class="currency-diff positive">+0,41 ↑</span>
    </div>
    <div class="currency">
      <span>CNY</span>
      <span>11,87 </span>
      <span class="currency-diff positive">+0,02 ↑</span>
    </div>
    <div class="currency">
      <span>BYN</span>
      <span>27,73 </span>
      <span class="currency-diff positive">+0,03 ↑</span>
    </div>
  </div>
</header>

</template>

<script>
export default {
name: 'HeaderSide',
}
</script>

<style scoped>
.header {
background-color: #222222;
color: #ffffff;
display: flex;
flex-direction: column;

}
.logo {
font-size: 36px;
}
.navigation {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
border-bottom: 1px solid #ffffff;
}

.menu-logo, .currency-block, .search {
display: flex;
align-items: center;
}

.nav-links {
display: flex;
list-style: none;
font-size: 24px;
margin: 0;
padding: 0;
align-items: center;
flex-grow: 1;
justify-content: space-between;
}

.nav-links li {
margin: 0 10px;
}

.nav-links a {
color: #fff;
text-decoration: none;
}

.currency-block {
margin-top: 4px;
justify-content: space-around;
}

.search input {
padding: 5px;
margin-right: 5px;
background-color: #626262;
color: #fff;
border: 1px solid #626262;
}


.search {
margin-left: 80px;
margin-right:200px;


}

.search button {
background: #555;
color: #fff;
border: none;
padding: 5px 10px;
cursor: pointer;
}
.menu-icon {
justify-content: center;
margin-right:200px;
}
.menu-logo {
display: flex;
align-items: center;

}
.menu-logo .logo::after {
content: '';
display: inline-block;
height: 25px;
width: 1px;
background-color: #fff;
margin-left: 10px;
margin-bottom: -1px;
margin-right:40px;

}




.nav-links li:not(:last-child) {
margin-right: 20px;
}
.border {
border-right: 1px solid #ffffff;
padding-right: 18px;
}

</style>
