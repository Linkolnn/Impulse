<script setup>
defineProps(['news']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <article class="news-card" @click="openModal">
        <img v-if="news.img" :src="news.img" :alt="news.title" class="news-card__img" />
        <div class="news-card__textblock">
            <h2 class="news-card__title font-h2">{{ news.title }}</h2>
            <p class="news-card__date font-text_small">{{ news.date }}</p>
        </div>
    </article>

    <Modals v-if="showModal" @close="closeModal">
        <ModalsMain :data="news" />
    </Modals>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.news-card
    max-height: 425px
    padding: 20px
    background: $white
    border-radius: $radius
    cursor: pointer
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    @include transition

.news-card__img
    border-radius: $radius
    width: 100%
    height: 50%
    object-fit: cover

.news-card__textblock
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
    .news-card:hover
        background: $red
        transform: translateY(-5px)

        .news-card__textblock
            > * 
                color: $white

@include mobile
    .news-card
        height: max-content
        &:active
            background: $red
            transform: translateY(-5px)
            
            .news-card__textblock
                > * 
                    color: $white

    .news-card__img
        height: 250px

</style>