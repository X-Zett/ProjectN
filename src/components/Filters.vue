<template>
    <div class="w-[240px]">
        <div class="font-monserrat font-semibold not-italic text-[24px] mb-[20px]">
            <span>Фильтрация</span>
        </div>
        <el-form label-width="auto" class="font-monserrat" @submit.prevent="resetFilter">
            <el-form-item style="margin-bottom: 10px">
                <el-checkbox style="margin-bottom: 0" v-model="localFilters.new"
                             @change="(val) => updateFilter('new', val)">
                    <span class="text-[16px]">Новинки</span>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <span class="w-full text-[16px] mb-[10px]">Цена:</span>
                <span class="w-[165px] flex justify-between">
                    <el-input type="number" v-model="localFilters.priceMin"
                              @input="(val) => updateFilter('priceMin', val)" placeholder="От" style="width: 80px"></el-input>
                    <el-input type="number" v-model="localFilters.priceMax"
                              @input="(val) => updateFilter('priceMax', val)" placeholder="До" style="width: 80px"></el-input>
                </span>
                <img class="w-4 h-4 ml-2 opacity-30" src="/public/tenge.png">
            </el-form-item>
            <el-form-item>
                <span class="w-full text-[16px] mb-0">Ингредиенты:</span>
                <el-checkbox-group v-model="localFilters.ingredients" @change="(val) => updateFilter('ingredients', val)">
                    <el-checkbox style="width: 100%" value="Чоризо">
                        <span>Чоризо</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Цыпленок">
                        <span>Цыпленок</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Томаты">
                        <span>Томаты</span>
                    </el-checkbox>
                    <el-checkbox style="width: 100%" value="Моцарелла">
                        <span>Моцарелла</span>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item class="w-[200px]">
                <button type="submit" class="bg-[#ffeeaa] w-full py-2 rounded-[10px] hover:bg-[#fff4ca]">Сбросить</button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {ref} from "vue"

const emit = defineEmits(['reset-filter', 'update-filter'])

const props = defineProps({
    filters: Object
})

const localFilters = ref(props.filters)
const resetFilter = () => {
    const defaultFilters = {
        priceMin: 0,
        priceMax: Infinity,
        ingredients: [],
        new: false
    };
    emit('reset-filter', defaultFilters);
};

const updateFilter = (key, value) => {
    localFilters.value[key] = value
    emit('update-filter', { key, value });
};
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}

.el-input {
    --el-input-border-radius: 10px;
}
</style>