<template>
    <div>
        <Header ></Header>
        <Order></Order>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Order from "@/components/Order.vue";
import {useStore} from 'vuex';

const store = useStore()
const cartItems = store.state.cartItems
const pizzaData = store.state.pizzaData
const totalPrice = store.state.totalPrice
console.log(cartItems, pizzaData, totalPrice)

</script>

<style scoped>

</style>