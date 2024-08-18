<template>
    <div>
        <Header @create="openCart" :cart-items="cartItems"
                :pizza-data="pizzaData" :total-price="totalPrice"></Header>
        <Main :show-cart="showCart" @update:show-cart="showCart = $event" @cart-data="addToCart"></Main>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Establishments from "@/components/Establishments.vue"
import Main from "@/components/Main.vue";
import {ref} from "vue";

const cartItems = ref([])
const pizzaData = ref([])
const totalPrice = ref(0)

const showCart = ref(false)
const openCart = () => {
    showCart.value = true
}

const addToCart = (first, second) => {
    cartItems.value = first
    pizzaData.value = second
    totalPrice.value = 0
    for (const item of second) {
        totalPrice.value += item.price
    }
    console.log('В хедер', cartItems.value, pizzaData.value, totalPrice)
}
</script>

<style>

</style>