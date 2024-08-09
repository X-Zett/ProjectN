<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters></Filters>
        <Popup v-if="PopupState" @create="hidePopup"></Popup>
        <Categories @create="showPopup"></Categories>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
import {ref} from "vue";

const PopupState = ref(false)

const showPopup = () => {
    PopupState.value = true
}

const hidePopup = () => {
    PopupState.value = false
}
</script>

<style lang="scss" scoped>

</style>