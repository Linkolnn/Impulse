<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const props = defineProps(['cards']); 
const swiper = ref(null);
const modules = [Autoplay];

const onSwiper = (instance) => {
  swiper.value = instance;
};

const breakpoints = {
    '1919': { 

        spaceBetween: 40 
    },
    '1364': { 

        spaceBetween: 30 
    },
    '859': { 
        slidesPerView: 'auto',
        spaceBetween: 30 
    },
};

</script>
<template>
  <div class="partners__swiper-slider">
    <Swiper class="partners__slider"
            @swiper="onSwiper"
            :autoplay="{ 
                delay: 2500,       
                disableOnInteraction: false,     
            }"
            :modules="modules"
            :slides-per-view="'auto'"
            :centeredSlides="true"
            :breakpoints="breakpoints">
      <SwiperSlide class="partners__slider-item" v-for="(card, index) in cards" :key="index">
        <CardsPartners
            :url="card.url"
            :img="card.img"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.partners__swiper-slider
  width: 100%
  gap: 20px

.partners__slider
  width: 100%

.partners__slider-item
  width: max-content
  height: max-content
  cursor: pointer
  display: flex
  justify-content: center 

.partners__slider-item-logo
  object-fit: contain
  height: 100%
  width: 100%

@include mobile  
  .partners__slider-item
    width: 214px
    padding: 0px 5px 
</style>