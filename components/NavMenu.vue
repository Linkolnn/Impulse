<script setup>
import data from '@services/data';
import { showMenu, hideMenu } from '../animation/animation';
import jQuery from 'jquery';

const navMenuItems = data.navMenuItems();
const navMenuVisible = ref(false);
const navMenu = ref(null);
const isMobile = ref(false);
const route = useRoute();
let isSpecialLoaded = false; 

const toggleNavMenu = () => {
  if (!isMobile.value || !navMenu.value) return;
  navMenuVisible.value = !navMenuVisible.value;
  if (navMenuVisible.value) {
    showMenu(navMenu.value);
    document.body.style.overflow = 'hidden';
  } else {
    hideMenu(navMenu.value);
    document.body.style.overflow = 'auto';
  }
};

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 859;
};

const isActiveLink = (url) => {
  return route.path === url;
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

// Переключение версии для слабовидящих
const toggleSpecialVersion = async () => {
  if (!window.jQuery) {
    window.jQuery = window.$ = jQuery;
  }
  if (!isSpecialLoaded) {
    try {
      await loadScript('https://lidrekon.ru/slep/js/uhpv-full.min.js');
      isSpecialLoaded = true;
    } catch (error) {
    }
  }

  if (window.UHPV && window.UHPV.init) {
    window.UHPV.init();
  } else {
    window.jQuery('#specialButton').trigger('click');
  }
};

onMounted(() => {
  checkIsMobile();
});
</script>
<template>
    <nav ref="navMenu" class="header__menu">
        <button @click="toggleNavMenu" class="header_burger-btn header_burger-btn--close">
            <IconX class="header_burger-icon" filled />
        </button>
        <ul class="header__list">
            <li v-for="item in navMenuItems" class="header__list-item">
                <NuxtLink @click="toggleNavMenu" :class="['header__list-link', 'font-text_small', { 'header__list-link--active': isActiveLink(item.url) }]" :to="item.url">
                    {{ item.text }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <button 
        class="btn header_btn"
        id="specialButton" 
        style="cursor:pointer; justify-self: end" 
        src="https://lidrekon.ru/images/special.png" 
        alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" 
        title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
        @click="toggleSpecialVersion"
    >
        ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ
    </button>
    <button @click="toggleNavMenu" class="header_burger-btn">
        <IconBurger class="header_burger-icon" filled />
    </button>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.header__list
    display: flex
    gap: 10px
    
.header__list-item
    display: flex
    align-items: end
    width: 100%

.header__list-link
    text-decoration: none
    text-align: center
    white-space: nowrap
    color: $black
    background: $white  
    width: 100%
    padding: 10px 10px 
    cursor: pointer
    border-bottom: 0px solid transparent
    @include transition
    
    &--active
        border-bottom: 4px solid $red    

.header_btn
    margin-top: 10px
    display: flex
    justify-self: end

.header_burger-btn
    display: none

@include hover 
    .header__list-link:hover
        border-bottom: 4px solid $red

@include tablet
    .header__list-link
        font-size: 13px !important

@include mobile
    .header__menu
        display: none
        background: $white
        transform: translateX(-100%)
        position: fixed
        top: 128px
        left: 0
        width: 100%
        height: 100%
        justify-content: center

    .header_burger-btn
        width: 40px 
        height: 40px
        background: $white
        justify-self: end
        &--close
            position: absolute
            top: 10px
            right: 20px

    .header_burger-icon
        width: 15px
        height: 15px

    .header__list
        margin-top: 40px
        flex-direction: column

    .header__list-link
        font-size: 18px !important
        white-space: pre-wrap

    .header_burger-btn
        display: block

</style>