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
    <article class="main-card" @click="openModal">
        <img v-if="main.img" :src="main.img" :alt="main.title" class="main-card__img" />
        <h2 v-if="main.title" class="main-card__title font-h2">{{ main.title }}</h2>
        <div v-if="main.contentBlocks" class="main-card__textblock" v-for="(block) in main.contentBlocks">
            <p v-if="block.text" v-for="(paragraph) in block.text" class="main-card__text font-text_medium">
                {{ paragraph }}
            </p>
        </div>
    </article>

    <Teleport to="body">
        <Modals v-if="showModal" @close="closeModal">
            <ModalsMain :data="main" />
        </Modals>
    </Teleport>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.main-card
    max-height: 425px
    min-width: 200px
    padding: 20px
    background: $white
    border-radius: $radius
    cursor: pointer
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    @include transition

.main-card__title
    color: $black
    overflow: hidden
    overflow-wrap: break-word
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
    text-overflow: ellipsis

.main-card__img
    border-radius: $radius
    height: 80%
    width: 100%
    object-fit: cover

.main-card__textblock
    display: flex
    flex-direction: column
    gap: 20px
    overflow-wrap: break-word
    > *
        @include transition
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        text-overflow: ellipsis

@include hover
    .main-card:hover
        background: $red
        transform: translateY(-5px)
        .main-card__title
            color: $white
        .main-card__text
            color: $white

@include mobile
    .main-card
        &:active
            background: $red
            transform: translateY(-5px)
            .main-card__title
                color: $white
            .main-card__text
                color: $white

    .main-card__img
        max-height: 400px
        height: 300px
</style>