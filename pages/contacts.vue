<script setup>
import { contactCardsData } from '@services/data';
</script>
<template>
    <section class="contact-welcome__section section">
        <h1 class="contact-welcome__title font-h1">Контактная информация</h1>
        <p class="contact-welcome__text font-text_medium">
            <strong>
                Бюджетное учреждение Ханты-Мансийского автономного округа – Югры «Урайский комплексный центр социального обслуживания населения» (БУ «Урайский комплексный центр социального обслуживания населения»)
            </strong>
        </p>   
        <h2 class="contact-welcome__subtitle font-h2 title">Контакты Учреждения</h2>
        <div class="contact-welcome__cardblock">
            <CardsContact
                v-for="card in contactCardsData"
                :position="card.position"
                :name="card.name"
                :phone="card.phone"
                :email="card.email"
            />
        </div>
    </section>
    <section class="contact-address__section section">
        <h2 class="contact-address__subtitle font-h2 title">Наш адрес</h2>
        <p class="contact-address__text font-text_medium">
            628285, Ханты-Мансийский автономный округ – Югра, г. Урай, мкр.2, дом 24 (Главный корпус) ;
        </p>
        <p class="contact-address__text font-text_medium">
            628285, Ханты-Мансийский автономный округ – Югра, г. Урай, ул. Узбекистанская, 8 (Корпус 2)
        </p>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.contact-welcome, .contact-address
    &__title
        margin-bottom: 20px
    &__text
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px
    &__cardblock
        display: flex
        flex-direction: column
        gap: 10px

.contact-address__section
    min-height: max-content

</style>
