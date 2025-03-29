<script setup>
import data from '@services/data';
import { showMenu, hideMenu } from '../animation/animation';

const navMenuItems = data.navMenuItems();
const navMenuVisible = ref(false); 
const navMenu = ref(null);
const isMobile = ref(false);
const route = useRoute();

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
        top: 60px
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