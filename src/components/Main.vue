<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup v-if="PopupState" @create="hidePopup" :sel-item="selItem"></Popup>
        <Categories @create="showPopup"></Categories>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
import {ref} from "vue";

const PopupState = ref(false)
const selItem = ref({})

const showPopup = (item) => {
    PopupState.value = true
    selItem.value = item
    console.log(selItem.value)
}

const hidePopup = () => {
    PopupState.value = false
}
</script>

<style lang="scss" scoped>

</style>