<script setup>
const props = defineProps(['img', 'url']);

</script>
<template>
    <NuxtLink :to="url" class="partners-card">
        <img class="partners-card__img" :src="img" alt="">
    </NuxtLink>
</template>
<style lang="sass">
@import "@color"
@import "@global"
@import "@mixin"

.partners-card
    display: flex
    flex-direction: row
    justify-content: center
    box-sizing: border-box
    border-radius: $radius
    background: $white
    border: 4px solid $red
    width: 294px
    height: 140px
    padding: 20px

.partners-card__img
    width: max-content
    height: 100%
    border-radius: $radius
    object-fit: cover
    object-position: center

@include mobile
    .partners-card
        width: 214px
        height: 100px
        padding: 10px

</style>