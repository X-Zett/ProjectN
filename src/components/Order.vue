<template>
    <div v-if="cartItems.length" class="w-full h-full bg-[#f1f1f1] px-[70px] pt-12 pb-10">
        <span class=" font-monserrat text-[24px] font-medium">
            Оформление заказа
        </span>
        <div class="flex w-full h-full mt-8 font-monserrat">
            <div class="flex flex-col w-[800px] h-full gap-10">
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[18px] font-medium pt-5">
                    <span class="pl-8">1. Корзина</span>
                    <el-divider></el-divider>
                    <div v-auto-animate class="flex flex-col gap-y-5 w-full">
                        <div v-for="(item, index) in cartItems" :key="index" class="flex
                        justify-between w-full px-8 gap-x-5 ">
                            <div class="w-[80px] flex justify-center items-center">
                                <img :src="item.image" alt="">
                            </div>
                            <div class="flex flex-grow text-[16px] items-center">
                                <div class="flex flex-col justify-center h-full w-[50%]">
                                    <span class="font-medium">{{item.name}}</span>
                                    <span class="font-normal text-[14px]">{{item.description}}</span>
                                    <span class=""></span>
                                </div>
                                <div>
                                    <span class="">{{item.price}} тг.</span>
                                </div>
                                <div class="flex gap-x-3 items-center flex-grow h-full justify-end">
                                    <button @click="decQuantity(index)" class="w-[35px] h-[35px] bg-[#ffffff]
                            border-2 border-[#ffdd55] rounded-[10px]
                            flex justify-center items-center text-[22px] font-medium
                            text-[#ffdd55] hover:text-white hover:bg-[#ffdd55]">
                                        −
                                    </button>
                                    <span class="w-[20px] text-center">{{item.quantity}}</span>
                                    <button @click="incQuantity(index)" class="w-[35px] h-[35px] bg-[#ffffff]
                            border-2 border-[#ffdd55] rounded-[10px]
                            flex justify-center items-center text-[22px] font-medium
                            text-[#ffdd55] hover:text-white hover:bg-[#ffdd55]">
                                        +
                                    </button>
                                    <div @click="deleteItem(index)" class="w-[30px] h-[30px] ml-3 flex justify-center items-center cursor-pointer">
                                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L11 11M1 11L11 1" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[16px] font-medium pt-5">
                    <span class="pl-8 text-[18px]">2. Персональная информация</span>
                    <el-divider></el-divider>
                    <div class="flex w-full flex-wrap px-8 justify-between gap-y-8">
                        <div class="w-[45%]">
                            <span>Имя</span>
                            <el-input></el-input>
                        </div>
                        <div class="w-[45%]">
                            <span>Фамилия</span>
                            <el-input></el-input>
                        </div>
                        <div class="w-[45%]">
                            <span>E-mail</span>
                            <el-input></el-input>
                        </div>
                        <div class="w-[45%]">
                            <span>Телефон</span>
                            <el-input type="number"></el-input>
                        </div>
                    </div>

                </div>
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[16px] font-medium pt-5">
                    <span class="pl-8 text-[18px]">3. Адрес доставки</span>
                    <el-divider></el-divider>
                    <div class="px-8">
                        <span>Введите адрес</span>
                        <el-input></el-input>
                        <span class="mt-5 inline-block">Комментарий к заказу</span>
                        <el-input type="textarea" :rows="5" style="--el-input-border-radius: 10px;"></el-input>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full h-full items-end ">
                <div class="flex flex-col bg-white w-[400px] pb-7 rounded-[15px] pt-5">
                    <div class="pl-8 flex flex-col">
                        <span class="text-[16px]">Итого:</span>
                        <span class="text-[24px] font-semibold">{{totalPrice+deliveryPrice}} тг.</span>
                    </div>
                    <el-divider style="margin-bottom: 20px"></el-divider>
                    <div class="px-8 flex flex-col gap-y-[10px]">
                        <div class="flex justify-between">
                            <span>Стоимость товаров:</span>
                            <span>{{totalPrice}} тг.</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Доставка:</span>
                            <span>{{deliveryPrice}} тг.</span>
                        </div>
                    </div>
                    <el-divider style="margin-bottom: 20px"></el-divider>
                    <div class="px-8">
                        <button class="bg-[#ffeeaa] w-full py-3
                    rounded-[13px] hover:bg-[#fff4ca]">Перейти к оплате</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col w-full h-[500px] justify-center items-center">
        <span class="text-[22px] font-medium">Корзина пустая</span>
        <span class="text-[14px] w-[300px] text-center mt-1">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ</span>
        <button class="bg-[#ffeeaa] w-[250px]
            py-2 rounded-[13px] mt-5 flex justify-center items-center
            gap-3" @click="goToMain">
            <svg width="16" height="15" viewBox="0 -1 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7144 7.21143L1.00007 7.21142" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 13.2056L1 7.21149L7 1.21741" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Вернуться назад
        </button>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";
import router from "@/router/router.js";

const props = defineProps({
    cartItems: Array,
    totalPrice: {}
})

const deliveryPrice = ref(800)
const totalPrice = ref(props.totalPrice)

const deleteItem = (index) => {
    props.cartItems.splice(index, 1)
}

const decQuantity = (index) => {
    if (props.cartItems[index].quantity > 1) {
        props.cartItems[index].quantity -= 1
    }
    else if (props.cartItems[index].quantity === 1) {
        props.cartItems.splice(index, 1)
    }
}

const incQuantity = (index) => {
    if (props.cartItems[index].quantity < 20) {
        props.cartItems[index].quantity += 1
    }
}

const calculateTotalPrice = () => {
    totalPrice.value = props.cartItems.reduce((sum, pizza) => {
        return sum + (pizza.price * pizza.quantity)
    }, 0);
};

const goToMain = () => {
    router.push('/');
}

watch(
    () => props.cartItems,
    () => {
        calculateTotalPrice()
    },
    {deep: true}
)
</script>

<style scoped>
.el-divider {
    margin: 20px 0 40px 0;
}

.el-input {
    --el-input-height: 40px;
}

</style>