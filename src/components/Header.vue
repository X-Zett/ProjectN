<template>
    <div class="py-[10px] px-[70px] flex justify-between items-center border-b-2 sticky top-0 bg-white z-10">
        <a href="/">
            <img class="w-[70px]" src="/public/pizzaicon3.webp" alt="">
        </a>
        <div v-if="!isOrderPage" class="w-fit h-[60px] flex items-center">
            <button v-if="cartItems.length" class="w-auto h-[40px] bg-[#ffdd55]
            border-2 border-[#ffdd55] py-1 rounded-[12px] px-2
            flex justify-center items-center gap-x-2 font-monserrat font-semibold
            text-[#ffffff] hover:text-[#ffdd55] hover:bg-[#ffffff]" @click="openCart">
                <span>{{totalPrice}} тг.</span>
                <el-divider direction="vertical"></el-divider>
                <svg class="" width="20" height="20" viewBox="0 0 20 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33333 16.3332C7.06971 16.3332 7.66667 15.7362 7.66667 14.9998C7.66667 14.2635 7.06971 13.6665 6.33333 13.6665C5.59695 13.6665 5 14.2635 5 14.9998C5 15.7362 5.59695 16.3332 6.33333 16.3332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.3333 16.3332C15.0697 16.3332 15.6667 15.7362 15.6667 14.9998C15.6667 14.2635 15.0697 13.6665 14.3333 13.6665C13.597 13.6665 13 14.2635 13 14.9998C13 15.7362 13.597 16.3332 14.3333 16.3332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.78008 4.99984H16.3334L15.2134 10.5932C15.1524 10.9001 14.9855 11.1758 14.7417 11.372C14.498 11.5683 14.1929 11.6725 13.8801 11.6665H6.83341C6.50787 11.6693 6.19256 11.5528 5.94695 11.3391C5.70134 11.1255 5.54239 10.8293 5.50008 10.5065L4.48675 2.8265C4.44473 2.50599 4.2877 2.21167 4.04488 1.99828C3.80207 1.7849 3.49 1.66699 3.16675 1.6665H1.66675" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="mr-1">{{cartItems.length}}</span>
            </button>
            <button v-else class="w-[40px] h-[40px] bg-[#ffffff]
            border-2 border-[#ffdd55] py-1 rounded-[12px]
            flex justify-center items-center
            text-[#ffdd55] hover:text-white hover:bg-[#ffdd55]" @click="openCart">
                <svg class="" width="20" height="20" viewBox="0 0 20 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33333 16.3332C7.06971 16.3332 7.66667 15.7362 7.66667 14.9998C7.66667 14.2635 7.06971 13.6665 6.33333 13.6665C5.59695 13.6665 5 14.2635 5 14.9998C5 15.7362 5.59695 16.3332 6.33333 16.3332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.3333 16.3332C15.0697 16.3332 15.6667 15.7362 15.6667 14.9998C15.6667 14.2635 15.0697 13.6665 14.3333 13.6665C13.597 13.6665 13 14.2635 13 14.9998C13 15.7362 13.597 16.3332 14.3333 16.3332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.78008 4.99984H16.3334L15.2134 10.5932C15.1524 10.9001 14.9855 11.1758 14.7417 11.372C14.498 11.5683 14.1929 11.6725 13.8801 11.6665H6.83341C6.50787 11.6693 6.19256 11.5528 5.94695 11.3391C5.70134 11.1255 5.54239 10.8293 5.50008 10.5065L4.48675 2.8265C4.44473 2.50599 4.2877 2.21167 4.04488 1.99828C3.80207 1.7849 3.49 1.66699 3.16675 1.6665H1.66675" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
<!--            <a href=""><img class="w-[60px] h-[60px]" src="../../public/2003191_citrus_food_lemon_nutrition_icon.png" alt=""></a>-->
        </div>
    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import router from "@/router/router.js";
// export default {
    //     name: "HeaderComp"
    // }
const props = defineProps({
    cartItems: Array,
    pizzaData: Array,
    totalPrice: Number
})
const emit = defineEmits(['create'])

const isOrderPage = router.currentRoute.value.path === '/order'
const openCart = () => {
    emit('create')
}
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

.el-input {
    --el-input-border-radius: 10px;
}

.el-input-group {
    --el-button-bg-color: #000000;
}

.el-divider {
    --el-border-color: #ffffff;
    margin: 0 5px 0 5px;
}

button:hover .el-divider {
    --el-border-color: #ffdd55;
}
</style>