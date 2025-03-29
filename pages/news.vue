<script setup>
import {
    NewsData,
} from '@services/data';
</script>
<template>
    <section class="news__section section">
        <h2 class="news__title font-h2 title">Новости</h2>
        <div class="news__cards-block">
            <CardsNews 
                v-for="news in NewsData" 
                :key="news.id" 
                :news="news"
            />
        </div>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.news
    &__title
        margin-bottom: 40px

    &__cards-block
        display: grid
        grid-template-columns: repeat(4, 1fr)
        gap: 20px
        justify-content: space-between
        grid-auto-rows: minmax(auto, 1fr) 

@include tablet 
    .news__cards-block
        grid-template-columns: repeat(3, 1fr)

@include mobile
    .news__cards-block
        grid-template-columns: repeat(1, 1fr)
        grid-auto-rows: minmax(auto, auto)


</style>