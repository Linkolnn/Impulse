<template>
    <header class="header">
        <div class="header__content">
            <NuxtLink class="header__logo-link" to="/">
                <IconLogo class="header__logo-icon" filled /> 
            </NuxtLink>
            <div class="header__contacts">
                <NuxtLink class="header__link" to="tel:+73467620200">
                    <p class="header__contact">
                        +7 34676 2-02-00
                    </p>
                </NuxtLink> 
                <NuxtLink class="header__link" to="mailto:info@укцсон.рф">
                    <p class="header__contact">
                        info@укцсон.рф
                    </p>
                </NuxtLink>
            </div>
        </div>
        <NavMenu />
    </header>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.header
    padding: 20px

.header__logo-icon
    width: 80px
    height: 40px
    
.header__content
    display: flex
    justify-content: space-between
    
.header__link
    text-decoration: none
    color: $black

.header__contact
    padding: 5px
    font-size: 18px
    color: $black
    text-align: end
    font-weight: bold

@include mobile 
    .header__content
        margin-bottom: 10px

    .header__contact
        font-size: 14px

</style>