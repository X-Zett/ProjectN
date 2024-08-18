<template>
    <div class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
        <div @click="hidePopup" class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div class="w-[820px] h-[500px] rounded-[20px] z-20 bg-white
        flex justify-between animate__animated animate__fadeIn animate__faster">
            <div class="w-[440px] h-full flex justify-center items-center">
                <img class="w-[280px] h-[280px] ml-2.5" :src="selItem.image" alt="">
            </div>
            <div class="w-[380px] flex flex-col rounded-r-[20px] bg-[#fafafa] font-monserrat">
                <span class="text-[22px] mt-8 pl-[30px]">{{ selItem.name }}</span>
                <p class="text-[14px] mt-1 pl-[30px]">{{pizzaDesc}}</p>
                <div class="w-full flex items-center flex-col mt-5 gap-3">
                    <el-segmented class="w-[320px]" v-model="sizeValue" :options="sizeOptions"></el-segmented>
                    <el-segmented class="w-[320px]" v-model="typeValue" :options="typeOptions"></el-segmented>
                </div>
                <span class="pl-[30px] mt-6">Добавить по вкусу</span>
                <div class="w-full px-[30px] flex flex-wrap gap-2.5 mt-3">
                    <div v-for="(item, index) in ingredients" :key="index" :class="{
                        'border-[#ffdd55]': selectedItems[index],
                        'border-[#f1f1f1]': !selectedItems[index]}"
                         class="relative bg-white border-2 w-[100px] h-[160px] pt-[5px] flex flex-col items-center cursor-pointer rounded-[15px]"
                         @click="toggleSelection(index)">
                        <img class="w-[80px]" :src="item.image" alt="">
                        <span class="text-[13px] text-center mt-1">{{item.name}}</span>
                        <span class="text-[15px] mt-1 text-center absolute bottom-1">{{item.price}} тг.</span>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-5">
                    <button @click="addToCart" class="bg-[#ffeeaa] w-[320px] py-2 rounded-[13px]">
                        Добавить в корзину за {{totalPrice}} тг.
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    selItem: Object
})
import {computed, inject, ref} from "vue";

// const temp = ref(false)
// const Popup = inject('pizza')
const emit = defineEmits(['create', 'addToCart'])
const sizeValue = ref('Средняя')
const sizeOptions = ['Маленькая', 'Средняя', 'Большая']
const typeValue = ref('Традиционное')
const typeOptions = ['Традиционное','Тонкое']
const ingredients = ref([
    {
        name: 'Сырный бортик',
        price: 800,
        image: 'https://cdn.dodostatic.net/static/Img/Ingredients/7dc4f7eb691b437aa09c56aa133fb1d5.png'
    },
    {
        name: 'Моцарелла',
        price: 350,
        image: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
    },
    {
        name: 'Чеддер и пармезан',
        price: 450,
        image: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBA9907841D1'
    }
])
const selectedItems = ref(Array(ingredients.value.length).fill(false))

const totalPrice = computed(() => {
    let price = props.selItem.price;
    for (const [index, isSelected] of Object.entries(selectedItems.value)) {
        if (isSelected) {
            price += ingredients.value[index].price;
        }
    }

    return price;
});

const pizzaDesc = computed(() => {
    const sizeText = sizeValue.value === 'Маленькая' ? '25см'
        : sizeValue.value === 'Средняя' ? '30см'
            : '35см';
    const crustText = typeValue.value === 'Традиционное' ? 'традиционное тесто' : 'тонкое тесто';

    return `${sizeText}, ${crustText}`;
});

const hidePopup = () => {
    emit('create')
}

const toggleSelection = (index) => {
    selectedItems.value[index] = !selectedItems.value[index]
    console.log(selectedItems.value)
}

const addToCart = () => {
    const pizzaData = {
        description: pizzaDesc.value,
        ingredients: selectedItems.value,
        price: totalPrice.value,
        quantity: 1
    }
    hidePopup()
    emit('addToCart', pizzaData)
}

</script>

<style scoped>
    .el-segmented {
        --el-segmented-item-selected-bg-color: #ffeeaa;
        --el-border-radius-base: 10px;
        --el-segmented-bg-color: #eeeeee;
        --el-segmented-padding: 0px;
        --el-segmented-item-selected-color: #000000;
    }
</style>