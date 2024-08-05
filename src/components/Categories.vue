<template>
    <div class="w-[1080px]">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Категории</span>
        </div>
        <div class="flex flex-wrap justify-between gap-[40px]">
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/pizza-item.jpg" alt="">
                    <span class="">Пицца</span>
                    <p class="">Сырная основа, томатный соус и разнообразные начинки на любой вкус</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/sushi-item.jpg" alt="">
                    <span>Суши и роллы</span>
                    <p>Свежие морепродукты и овощи, завернутые в рис и нори</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/burger-item.jpg" alt="">
                    <span>Бургер</span>
                    <p>Сочная котлета, свежие овощи и ароматные соусы в мягкой булочке</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/doner-item.jpg" alt="">
                    <span>Донер</span>
                    <p>Мясо, приготовленное на вертеле, с овощами и соусами в лаваше</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/shashlyk-item.jpg" alt="">
                    <span>Шашлык</span>
                    <p>Маринованное мясо, приготовленное на углях, с овощами и специями</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/wok-item.jpg" alt="">
                    <span>Вок</span>
                    <p>Обжаренные овощи и мясо с лапшой в восточном стиле</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/lagman-item.jpeg" alt="">
                    <span>Лагман</span>
                    <p>Традиционное узбекское блюдо с лапшой, мясом и овощами</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/pasta-item.jpg" alt="">
                    <span>Паста</span>
                    <p>Итальянские макароны с различными соусами и начинками</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/plov-item.jpg" alt="">
                    <span>Плов</span>
                    <p>Ароматный рис с мясом, морковью и специями</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/ramen-item.png" alt="">
                    <span>Рамен</span>
                    <p>Японский суп с лапшой, мясом и овощами</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/salad-item.jpg" alt="">
                    <span>Салаты</span>
                    <p>Свежие овощи и зелень с разнообразными заправками</p>
                </div>
            </a>
            <a class="hover:text-[#ffdd55] transition" href="">
                <div class="categories-item">
                    <img src="../../public/desert-item.jpg" alt="">
                    <span>Десерты</span>
                    <p>Сладкие угощения для завершения трапезы</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
    // export default {
        
    // }
</script>

<style scoped>
.categories-item {
    width: 220px;
    height: 270px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.categories-item>span:first-of-type {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    margin: 5px 0 5px 0;
    line-height: normal;

}

.categories-item>p {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    line-height: normal;
    font-weight: 300;
    font-size: 14px;
}

.categories-item>img {
    width: 220px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
}

</style>