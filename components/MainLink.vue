<script setup>
defineProps(['main']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <NuxtLink class="main-link__nuxt-link" @click="openModal" :to="main.links">
        <h2 class="font-h2 title">{{ main.title }}</h2>
        <IconArrow class="main-link__icon" filled />
    </NuxtLink>

    <Teleport to="body">
        <Modals v-if="showModal" @close="closeModal">
            <ModalsMain :data="main" />
        </Modals>
    </Teleport>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.main-link__nuxt-link
    display: flex
    flex-direction: row-reverse
    justify-content: flex-end
    gap: 20px
    text-decoration: none
    color: $black
    @include transition
    .title
        width: 90%

.main-link__icon
    display: flex
    align-items: center
    z-index: -1
    rotate: 135deg
    width: 40px
    height: 40px
    path[fill]
        fill: $black
    @include transition

@include hover    
    .main-link__nuxt-link:hover
        color: $red
        .main-link__icon
            transform: scale(1.2)
            rotate: 180deg
            path[fill]
                fill: $red

@include mobile
    .main-link__nuxt-link
        gap: 10px
        .title
            font-size: 18px
        &:active
            .main-link__icon    
                transform: scale(1.2)
                rotate: 180deg
                path[fill]
                    fill: $red

    .main-link__icon
        width: 30px
        height: 30px

</style>
