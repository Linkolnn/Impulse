<script setup>
const props = defineProps(['url', 'img', 'title', 'text']);
</script>
<template>
    <NuxtLink :to="url" class="useful-materials__card" :class="{ 'useful-materials__card--centered-img': !title && !text }">
        <img v-if="img" class="useful-materials__img" :src="img" alt="">
        <div v-if="title || text" class="useful-materials__textblock">
            <h3 v-if="title" class="font-h4">{{ title }}</h3>
            <p v-if="text" class="useful-materials__text"><strong>{{ text }}</strong></p>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.useful-materials__card
    text-decoration: none
    color: $black
    padding: 15px 20px
    border-top: 4px solid $red
    border-bottom: 4px solid $red
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    max-width: 835px
    gap: 40px

    &--centered-img
        .useful-materials__img
            width: 50%

.useful-materials__img
    width: 30%
    object-fit: cover

.useful-materials__textblock
    display: flex
    flex-direction: column
    gap: 10px

@include mobile
    .useful-materials__card
        flex-direction: column
        justify-content: center
        gap: 10px

        &--centered-img
            .useful-materials__img
                width: 100%

    .useful-materials__img
        width: 100%

</style>