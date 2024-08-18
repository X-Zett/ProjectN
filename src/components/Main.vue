<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup v-if="PopupState" @create="hidePopup" :sel-item="selItem" @add-to-cart="addToCart"></Popup>
        <Categories @create="showPopup"></Categories>
        <CartPopup v-if="showCart" @create="hideCart" :cart-items="cartItems"
                   :pizza-data="pizzaData" :total-price="totalPrice"
                   @update:pizza-data="pizzaData = $event"></CartPopup>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
import {inject, ref, watch} from "vue";
import CartPopup from "@/components/CartPopup.vue";

const PopupState = ref(false)
const selItem = ref({})
const cartItems = ref([])
const pizzaData = ref([])
const totalPrice = ref(0)

defineProps({
    showCart: Boolean
})

const emit = defineEmits(['update:showCart', 'cartData', 'update:totalPrice'])

const showPopup = (item) => {
    PopupState.value = true
    selItem.value = item
}

const hidePopup = () => {
    PopupState.value = false
}

const hideCart = () => {
    emit('update:showCart', false)
}

const addToCart = (first) => {
    cartItems.value.push(selItem.value)
    pizzaData.value.push(first)
    emit('cartData', cartItems.value, pizzaData.value, totalPrice.value)
    console.log('Корзина:', cartItems.value, pizzaData.value, totalPrice.value)
}

const calculateTotalPrice = () => {
    totalPrice.value = pizzaData.value.reduce((sum, pizza) => {
        return sum + (pizza.price * pizza.quantity)
    }, 0);
    emit('update:totalPrice', totalPrice.value)
};

watch(
    () => pizzaData,
    () => {
        calculateTotalPrice()
    },
    {deep: true}
)
</script>

<style scoped>

</style>