<template>
    <div class="w-full flex justify-between mt-10 px-[70px]">
        <Filters @reset-filter="resetFilter" :filters="filters"></Filters>
        <Popup v-if="PopupState" @create="hidePopup" :sel-item="selItem" @add-to-cart="addToCart"></Popup>
        <Categories @create="showPopup" :pizzas="filteredPizzas" @current-page="goToPage"></Categories>
        <CartPopup v-if="showCart" @create="hideCart" :cart-items="cartItems"
                   :pizza-data="pizzaData" :total-price="totalPrice"
                   @update:pizza-data="pizzaData = $event"></CartPopup>
    </div>
</template>

<script setup>
import Filters from "./../components/Filters.vue";
import Categories from "./../components/Categories.vue";
import Popup from "@/components/Popup.vue";
import {computed, inject, onMounted, ref, watch} from "vue";
import CartPopup from "@/components/CartPopup.vue";
import axios from "axios";

const data = ref([]);
const loading = ref(true);
const error = ref(null);
// const currentPage = ref(1)

const filters = ref({
    priceMin: 0,
    priceMax: Infinity,
    ingredients: [],
    new: false
})

async function fetchData() {
    try {
        loading.value = true;
        const response = await axios.get('https://6c2cf1ca9269fb85.mokky.dev/items', );
        data.value = response.data;
        console.log(data.value)
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

const PopupState = ref(false)
const selItem = ref({})
const cartItems = ref([])
const pizzaData = ref([])
const totalPrice = ref(0)
// const filteredPizzas = ref([]);

defineProps({
    showCart: Boolean
})

const emit = defineEmits(['update:showCart', 'cartData', 'update:totalPrice'])

// const goToPage = (page) => {
//     currentPage.value = page
// }

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

// const applyFilter = (filters) => {
//     filteredPizzas.value = data.value.filter(pizza => {
//         const matchPrice = pizza.price >= filters.priceMin && pizza.price <= filters.priceMax;
//         const matchIngredients = filters.ingredients.every(ingredient => pizza.ingredients.includes(ingredient));
//         const matchNew = filters.new ? pizza.new : true;
//
//         return matchPrice && matchIngredients && matchNew;
//     });
// }
const resetFilter = (newFilter) => {
    filters.value = newFilter
};

const filteredPizzas = computed(() => {
    return data.value.filter(pizza => {
        const matchPrice = pizza.price >= filters.value.priceMin && pizza.price <= filters.value.priceMax;
        const matchIngredients = filters.value.ingredients.every(ingredient => pizza.ingredients.includes(ingredient));
        const matchNew = filters.value.new ? pizza.new : true;

        return matchPrice && matchIngredients && matchNew;
    });
});

watch(
    () => pizzaData,
    () => {
        calculateTotalPrice()
    },
    {deep: true}
)

onMounted(fetchData);
</script>

<style scoped>

</style>