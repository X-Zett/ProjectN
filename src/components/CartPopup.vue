<template>
    <div v-auto-animate class="fixed w-full h-full top-0 left-0 flex justify-end items-center z-20">
        <div @click="hideCart" class="fixed w-full h-full bg-black opacity-50">
        </div>
        <div v-if="cartItems.length" class="w-[400px] h-full z-20 bg-white
        flex flex-col font-monserrat pt-8 justify-between">
            <span class="text-[22px] font-medium px-5">В корзине {{cartItems.length}} товара</span>
            <div class="flex flex-col w-full flex-grow">
                <el-scrollbar max-height="540px" class="mt-8">
                    <div v-for="(item, index) in cartItems" :key="index" class="flex w-full px-5 mb-8 bg-white gap-x-[10px]">
                        <div class="flex justify-center items-center w-[100px]">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="flex flex-col flex-grow">
                            <span class="font-medium text-[18px]">{{item.name}}</span>
                            <span>{{pizzaData[index].description}}</span>
                            <el-divider></el-divider>
                            <div class="flex justify-between">
                                <div class="flex gap-x-3 items-center">
                                    <button @click="decQuantity(index)" class="w-[35px] h-[35px] bg-[#ffffff]
                            border-2 border-[#ffdd55] rounded-[10px]
                            flex justify-center items-center text-[22px] font-medium
                            text-[#ffdd55] hover:text-white hover:bg-[#ffdd55]">
                                        −
                                    </button>
                                    <span>{{pizzaData[index].quantity}}</span>
                                    <button @click="incQuantity(index)" class="w-[35px] h-[35px] bg-[#ffffff]
                            border-2 border-[#ffdd55] rounded-[10px]
                            flex justify-center items-center text-[22px] font-medium
                            text-[#ffdd55] hover:text-white hover:bg-[#ffdd55]">
                                        +
                                    </button>
                                </div>
                                <div>
                                    <span class="text-[18px] font-medium">{{pizzaData[index].price}} тг.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
            <div class="flex pb-8 flex-col px-5">
                <div class="my-5 flex w-full items-end text-[18px]">
                    <span class="w-auto">Итого: </span>
                    <el-divider class="flex-grow" border-style="dashed" style="margin: 0 5px 5px 5px;"></el-divider>
                    <span class="text-end flex-shrink-0">{{totalPrice}} тг.</span>
                </div>
                <button class="bg-[#ffeeaa] w-full
            py-3 rounded-[13px] flex justify-center items-center
            gap-3" @click="goToOrder">
                    Оформить заказ
                    <svg width="16" height="15" viewBox="0 -1 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7.21167H14.7143" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.71436 1.21753L14.7144 7.21161L8.71436 13.2057" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div v-else class="w-[400px] h-full z-20 bg-white flex justify-center flex-col items-center font-monserrat">
            <span class="text-[22px] font-medium">Корзина пустая</span>
            <span class="text-[14px] w-[300px] text-center mt-1">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ</span>
            <button class="bg-[#ffeeaa] w-[250px]
            py-2 rounded-[13px] mt-5 flex justify-center items-center
            gap-3" @click="hideCart">
                <svg width="16" height="15" viewBox="0 -1 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7144 7.21143L1.00007 7.21142" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 13.2056L1 7.21149L7 1.21741" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Вернуться назад
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref, watchEffect, computed, watch} from "vue";
import router from "@/router/router.js";
import {useStore} from 'vuex';

const store = useStore()
const props = defineProps({
    cartItems: Array,
    pizzaData: Array,
    totalPrice: {}
})
const emit = defineEmits(['create', 'update:pizzaData'])

const hideCart = () => {
    emit('create')
}

const goToOrder = () => {
    store.commit('setCartItems', {
        items:props.cartItems,
        data:props.pizzaData,
        price:props.totalPrice
    })
    router.push('/order');
}

const decQuantity = (index) => {
    if (props.pizzaData[index].quantity > 1) {
        props.pizzaData[index].quantity -= 1
        emit('update:pizzaData', props.pizzaData)
    }
    else if (props.pizzaData[index].quantity === 1) {
        props.cartItems.splice(index, 1)
        props.pizzaData.splice(index, 1)
    }
}

const incQuantity = (index) => {
    if (props.pizzaData[index].quantity < 20) {
        props.pizzaData[index].quantity += 1
        emit('update:pizzaData', props.pizzaData)
    }
}


</script>

<style scoped>
.el-divider {
    margin: 10px 0 10px 0;
}
</style>