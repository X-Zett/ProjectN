<template>
    <div class="py-[20px] px-[70px] flex justify-between items-center shadow-md sticky top-0 bg-white">
        <span class="font-pangolin font-normal not-italic text-[40px]">Lemon</span>
        <form action="#" method="get" class="">
            <el-input class="w-[250px] h-[40px] box-border font-monserrat font-medium" placeholder="Введите название">
                <template #append>
                    <el-button type="submit" :icon="Search">Поиск</el-button>
                </template>
            </el-input>
        </form>
        <a href=""><img src="../../public/2003191_citrus_food_lemon_nutrition_icon.png" alt=""></a>

    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
    // export default {
    //     name: "HeaderComp"
    // }
</script>

<style scoped>
.input-button {
    border: 1px #4a4a4a solid;
    background-color: #ffeeaa;
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