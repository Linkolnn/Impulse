<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const props = defineProps(['cards']); 

const 
    swiper = ref(null),
    isMobile = ref(false);

const modules = [Autoplay, Navigation];

const breakpoints = {
    '1919': { 
        slidesPerView: 3,
        spaceBetween: 40 
    },
    '1364': { 
        slidesPerView: 3,
        spaceBetween: 30 
    },
    '859': { 
        slidesPerView: 'auto',
        spaceBetween: 30 
    },
    '365': { 
        slidesPerView: 'auto',
        spaceBetween: 20 
    },
};

const onSwiper = (instance) => {
    swiper.value = instance;
};

const next = () => {
    swiper?.value.slideNext();
};

const prev = () => {
    swiper?.value.slidePrev();
};

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 450;
};

onMounted(() => {
    checkIsMobile(); 
});

</script>
<template>
    <article class="review-slider__block">
        <div class="review-slider__btn-block">
            <button 
                v-if="!isMobile" 
                class="review-slider__btn-left left" 
                @click="prev" 
            >
                <IconArrow class="review-slider__icon review-slider__icon--left" filled/>
            </button>
            <button 
                v-if="!isMobile" 
                class="review-slider__btn-right right" 
                @click="next" 
            >
                <IconArrow class="review-slider__icon review-slider__icon--right" filled/>
            </button>
        </div>
        <Swiper
            class="review-slider"
            @swiper="onSwiper"
            :autoplay="{ 
                delay: 2500,       
                disableOnInteraction: false,     
            }"
            :modules="modules"
            :slides-per-view="isMobile ? 'auto' : 3"
            :breakpoints="breakpoints"
        >
            <SwiperSlide class="review-slider__items" v-for="(card, index) in cards" :key="index">
                <CardsMain
                    :main="card"
                />
            </SwiperSlide>
        </Swiper>
    </article>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.review-slider__block
    box-sizing: border-box
    display: flex
    position: relative
    width: 100%

.review-slider__items
    display: flex
    justify-content: center
    width: 400px
    height: 400px
    .main-card
        width: 400px
        background: $red
        color: $white
        cursor: pointer
        &__title
            color: $white
            margin-bottom: 5px
        &__text
            font-size: 24px 
            -webkit-line-clamp: 10
        &:hover
            transform: translateY(0)

.review-slider__btn-block
    box-sizing: border-box
    z-index: 2
    top: 182px
    position: absolute
    width: 100%
    .review-slider__btn-left,
    .review-slider__btn-right
        position: absolute
        width: 60px
        height: 60px
        border-radius: 50%
        background: $white
        @include transition
        .review-slider__icon
            width: 20px
            height: 20px
            path[fill]
                fill: $black
            path[stroke]
                stroke: $black
            @include transition
            &--right
                rotate: 180deg

    .review-slider__btn-left
        left: -40px 

    .review-slider__btn-right
        right: -40px 

.review-slider 
    display: flex
    flex-direction: row
    width: 100%

@include hover 
    .review-slider__btn-left:hover,
    .review-slider__btn-right:hover
        background: $red
        .review-slider__icon
            path[fill]
                fill: $white
            path[stroke]
                stroke: $white

@include tablet 
    .review-slider__items
        width: 100% !important

@include mobile
    .review-slider__items
        .main-card
            width: 90%
            max-width: 400px
            pointer-events: all
            .main-card__textblock
                .main-card__text
                    font-size: 20px
                    -webkit-line-clamp: 13
    
    .review-slider__btn-block
        top: 124px
        padding: 0px

    .review-slider__btn-left,
    .review-slider__btn-right
        width: 40px
        height: 40px
</style>