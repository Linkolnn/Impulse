<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiper = ref(null);
const modules = [Autoplay];

const onSwiper = (instance) => {
  swiper.value = instance;
};

const props = defineProps(['cards']); 

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
            slides-per-view="auto"
            :breakpoints="{
                '1919': {spaceBetween: 20},
                '1364': {spaceBetween: 18},
                '859': {spaceBetween: 16},
                '365': {spaceBetween: 14},
            }">
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

.partners__slider-item-logo
  object-fit: contain
  height: 100%
  width: 100%
</style>