<template>
    <div class="categories-main">
        <div class="categories-title">
            <span>Категории</span>
        </div>
        <div class="categories-list">
            <div class="categories-item">
                <span>Пицца</span>
                <div class="item-gradient"></div>
                <img src="../../public/pizza-item.jpg" alt="">
            </div>
            <div class="categories-item">
                <span>Суши и роллы</span>
                <div class="item-gradient"></div>
                <img src="../../public/sushi-item.jpg" alt="">
            </div>
            <div class="categories-item">
                <span>Бургеры</span>
                <div class="item-gradient"></div>
                <img src="../../public/burger-item.jpg" alt="">
            </div>
            <div class="categories-item">
                <span>Донеры</span>
                <div class="item-gradient"></div>
                <img src="../../public/doner-item.jpg" alt="">
            </div>
            <div class="categories-item">
                <span>Шашлыки</span>
                <div class="item-gradient"></div>
                <img src="../../public/shashlyk-item.jpg" alt="">
            </div>
            <div class="categories-item">
                <span>Вок</span>
                <div class="item-gradient"></div>
                <img src="../../public/wok-item.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    // export default {
        
    // }
</script>

<style scoped>
.categories-main {
    margin: 40px 0 0 0;
    padding: 0 70px 0 70px;
}

.categories-title {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    margin-bottom: 20px;
}

.categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 44px;
}

.categories-item {
    position: relative;
    width: 300px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
}

.item-gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top right, #ffeeaa, transparent);
    position: absolute;
}

.categories-item>span {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: italic;
    font-size: 42px;
    border-radius: 5px;
    bottom: 5px;
    left: 10px;
    color: #ffffffd8;
    z-index: 1;
}

.categories-item>img {
    width: 300px;
    border-radius: 10px;
}

</style>