<script setup>
import { InformLinkData } from '@services/data';
</script>
<template>
    <section class="inform-welcome__section section">
        <h1 class="inform-welcome__title font-h1">Информация</h1>
        <MainLink
            v-for="item in InformLinkData"
            :main="item"
        />   
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.inform-welcome
    &__section
        .main-link__nuxt-link
            margin-bottom: 30px
    &__title
        margin-bottom: 20px
    &__subtitle
        width: 100%
        margin-bottom: 20px

</style>
