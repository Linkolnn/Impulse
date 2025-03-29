<!-- components/NewsModal.vue -->
<script setup>
defineProps(['data']);
</script>
<template>
    <div class="main-modal modal">
        <h3 class="main-modal__title title font-h2">{{ data.title }}</h3>
        <p class="main-modal__date">{{ data.date }}</p>
        <img v-if="data.img" :src="data.img" :alt="data.title" class="main-modal__img" />
        <div class="main-modal__textblock" v-if="data.contentBlocks" v-for="(block, index) in data.contentBlocks" :key="'block-'+index">
            <p v-if="block.subtitle" class="main-modal__subtitle title">
              <strong>{{ block.subtitle }}</strong>
            </p>
            <p v-for="(paragraph, pIndex) in block.text" 
               :key="'p-'+index+'-'+pIndex" 
               class="main-modal__text font-text_medium">
              {{ paragraph }}
            </p>
        </div>           
        <NuxtLink v-if="data.links" v-for="(link, index) in data.links"
            :key="'link-'+index"
            class="main-modal__link font-text_medium"
            :to="link.url"
            >
            <button class="btn font-text_medium">
                {{ link.text }}
            </button>
      </NuxtLink>
    </div>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.main-modal
    padding: 20px
    background: $white
    border-radius: 8px
    max-width: 600px
    width: 100%
    max-height: 80vh
    overflow-y: auto

    .btn 
        width: 100%
        margin-top: 10px

.main-modal__textblock
    margin-bottom: 10px

.main-modal__title
    width: 90%
    margin-bottom: 10px

.main-modal__subtitle
    font-size: 20px
    width: 100% 
    margin-bottom: 20px

.main-modal__img
    width: 100%
    object-fit: cover
    border-radius: $radius
    margin-bottom: 10px

.main-modal__link
    display: block
    padding: 5px

@include mobile
    .main-modal
        padding: 20px

</style>