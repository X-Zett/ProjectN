<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup v-if="PopupState" @create="hidePopup" :sel-item="selItem"></Popup>
        <Categories @create="showPopup"></Categories>
        <CartPopup v-if="showCart" @create="hideCart"></CartPopup>
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
</script>

<style lang="scss" scoped>

</style>