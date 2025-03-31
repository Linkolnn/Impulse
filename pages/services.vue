<script setup>
import { ServicesTableData, ServicesLinkData } from '@services/data';
</script>
<template>
    <section class="services-welcome__section section">
        <h1 class="services-welcome__title font-h1">Услуги</h1>   
        <h2 class="services-welcome__subtitle font-h2 title">Формы социального обслуживания</h2>
        <h3 class="services-welcome__subtitle font-h3">Полустационарная</h3>
        <p class="services-welcome__text font-text_medium">
            В БУ "Урайский комплексном центре социального обслуживания населения" гражданам предоставляются социальные услуги 
            в соответствии с Законом Ханты-Мансийского автономного округа – Югры №93 «Об утверждении перечня социальных услуг, 
            предоставляемых поставщиками социальных услуг в Ханты-Мансийском автономном округе - Югре» в полустационарной форме 
            социального обслуживания.
        </p>
        <Table 
            :rows="ServicesTableData"
        />
    </section>
    <section class="services-link__section section">
        <h2 class="services-link__title font-h2 title">Социальные услуги, предоставляемые в Учреждении</h2>
        <div class="services-link__block">
            <MainLink
                v-for="item in ServicesLinkData" 
                :main="item"
            />
        </div>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.services-welcome
    &__title
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px

.services-welcome__section
    .departments-table__row--department .departments-table__cell--places
        font-weight: 600

.services-link
    &__title
        margin-bottom: 20px
    &__block
        display: flex
        flex-direction: column
        gap: 20px
    
</style>
