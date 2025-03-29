<script setup>
const props = defineProps(['url', 'title', 'type']);
</script>

<template>
    <NuxtLink :to="url" class="services-card" :class="type">
        <IconServicesNews filled class="services-card__icon services-card__icon--news"/>
        <IconServicesQuiz filled class="services-card__icon services-card__icon--quiz"/>
        <IconServicesWorksheet filled class="services-card__icon services-card__icon--worksheet"/>
        <h3 class="font-h3 title-top">
            {{ title }}
        </h3>
    </NuxtLink>
</template>

<style lang="sass">
@import "@global"
@import "@color"
@import "@mixin"
.services-card
    background: $red
    text-decoration: none
    padding: 20px
    height: 260px
    width: 225px
    border-radius: $radius
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    gap: 10px
    @include transition
    *
        font-family: 'Source-Sans-3', sans-serif
        text-decoration: none
        color: $white
        @include transition

.services-card__icon
    width: 100% 
    height: 100%

    &--quiz
        display: none

    &--worksheet
        display: none
    
    &--news
        display: none

    
.services-card.quiz
    .services-card__icon
        &--quiz
            display: block

.services-card.worksheet
    .services-card__icon
        &--worksheet
            display: block

.services-card.news
    .services-card__icon
        &--news
            display: block

@include hover
    .services-card:hover
        transform: scale(1.05)

@include mobile
    .services-card
        height: 180px
        width: 130px
    
    .services-card:active
        transform: scale(1.05)

</style>
