<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup v-if="PopupState" @create="hidePopup" :sel-item="selItem" @add-to-cart="addToCart"></Popup>
        <Categories @create="showPopup"></Categories>
        <CartPopup v-if="showCart" @create="hideCart" :cart-items="cartItems"></CartPopup>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
import {inject, ref} from "vue";
import CartPopup from "@/components/CartPopup.vue";

const PopupState = ref(false)
const selItem = ref({})
const cartItems = ref([])

defineProps({
    showCart: Boolean
})

const emit = defineEmits(['update:showCart'])

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

const addToCart = () => {
    cartItems.value.push(selItem.value)
    console.log('Корзина:', cartItems.value)
}
</script>

<style lang="scss" scoped>

</style>