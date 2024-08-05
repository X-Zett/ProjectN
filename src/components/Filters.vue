<template>
    <div class="w-[240px]">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Фильтрация</span>
        </div>
        <el-form label-width="auto" class="font-monserrat">
            <el-form-item style="margin-bottom: 10px">
                <el-checkbox style="margin-bottom: 0">
                    <span class="text-[16px]">Новинки</span>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <span class="w-full text-[16px] mb-[10px]">Цена:</span>
                <span class="w-[190px] flex justify-between">
                    <el-input v-model="input" placeholder="От" style="width: 90px" :suffix-icon="Money"></el-input>
                    <el-input v-model="input" placeholder="До" style="width: 90px" :suffix-icon="Money"></el-input>
                </span>
            </el-form-item>
            <el-form-item>
                <span class="w-full text-[16px] mb-0">Ингредиенты:</span>
                <el-checkbox-group v-model="pizza.ingredients">
                    <el-checkbox style="width: 100%" value="Чеснок">
                        <span>Чеснок</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Сырный соус">
                        <span>Сырный соус</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Томаты">
                        <span>Томаты</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Моцарелла">
                        <span>Моцарелла</span>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <span>Тип теста:</span>
                <el-checkbox-group v-model="pizza.type">
                    <el-checkbox style="width: 100%" value="Традиционное">
                        <span>Традиционное</span>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {Money} from "@element-plus/icons-vue"
import {reactive} from "vue"
const pizza = reactive({
    ingredients: [],
    type: []
})

</script>

<style scoped>
</style>