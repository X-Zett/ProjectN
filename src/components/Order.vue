<template>
    <div class="w-full h-full bg-[#f1f1f1] px-[70px] pt-12">
        <span class=" font-monserrat text-[24px] font-medium">
            Оформление заказа
        </span>
        <div class="flex w-full h-full mt-8 font-monserrat">
            <div class="flex flex-col w-[800px] h-full gap-10">
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[18px] font-medium pt-5">
                    <span class="pl-8">1. Корзина</span>
                    <el-divider></el-divider>
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
                        <span class="text-[24px] font-semibold">2700 тг.</span>
                    </div>
                    <el-divider style="margin-bottom: 20px"></el-divider>
                    <div class="px-8 flex flex-col gap-y-[10px]">
                        <div class="flex justify-between">
                            <span>Стоимость товаров</span>
                            <span>2000</span>
                        </div>
                        <span>Налоги</span>
                        <span>Доставка</span>
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
</template>

<script setup>

</script>

<style scoped>
.el-divider {
    margin: 20px 0 40px 0;
}

.el-input {
    --el-input-height: 40px;
}

</style>