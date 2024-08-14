<template>
    <div class="w-full h-full bg-[#f1f1f1] px-[70px] pt-12">
        <span class=" font-monserrat text-[24px] font-medium">
            Оформление заказа
        </span>
        <div class="flex w-full h-full mt-8 font-monserrat">
            <div class="flex flex-col w-[800px] h-full gap-10">
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[16px] font-medium pt-5">
                    <span class="pl-8">1. Корзина</span>
                    <el-divider></el-divider>
                </div>
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[16px] font-medium pt-5">
                    <span class="pl-8">2. Персональная информация</span>
                    <el-divider></el-divider>
                    <el-form :inline="true" class="px-8">
                        <el-form-item label="Имя" label-position="top">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="Фамилия" label-position="top">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="E-Mail" label-position="top">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="Телефон" label-position="top">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="flex flex-col bg-white w-[800px] pb-10 rounded-[15px]
                text-[16px] font-medium pt-5">
                    <span class="pl-8">3. Адрес доставки</span>
                    <el-divider></el-divider>
                </div>
            </div>
            <div class="flex flex-col w-full h-full items-end ">
                <div class="flex flex-col bg-white w-[400px] h-[450px] rounded-[15px] pt-5">
                    <div class="pl-8 flex flex-col">
                        <span class="text-[16px]">Итого:</span>
                        <span class="text-[24px] font-semibold">2700 тг.</span>
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

.el-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
}

.el-form-item {
    margin: 0;
    width: 48%;
}

.el-input {
    --el-input-height: 40px;
}
</style>