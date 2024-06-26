<template>
    <div class="header">
        <span class="lemon-logo">Lemon</span>
        <form action="#" method="get">
            <input type="text" class="input-search" placeholder="Введите название">
            <button type="submit" class="input-button">Поиск</button>
        </form>
        <a href=""><img src="../../public/2003191_citrus_food_lemon_nutrition_icon.png" alt=""></a>

    </div>
</template>

<script setup>
    // export default {
    //     name: "HeaderComp"
    // }
</script>

<style scoped>
.header {
    padding: 20px 70px 20px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lemon-logo {
    font-family: "Pangolin", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
}

form {
    display: flex;
    align-items: center;
}

.input-search {
    width: 250px;
    height: 40px;
    box-sizing: border-box;
    border: 1px #4a4a4a solid;
    border-right: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
}

.input-button {
    width: 80px;
    height: 40px;
    border: 1px #4a4a4a solid;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffeeaa;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #1a1a1a;
}

img {
    width: 60px;
    height: 60px;
}
</style>