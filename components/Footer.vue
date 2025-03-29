<template>
    <footer class="footer">
        <div class="footer__left">
            <NuxtLink class="footer__number" to="tel:+73467620200">
                <h2 class="font-h2">
                    +7 34676 2-02-00
                </h2>
            </NuxtLink>
            <div class="footer__copyright-block">
                <p class="font-text_medium">© УКЦСОН 2013-2025</p>
                <p class="font-text_medium">Обновлено 22.03.2025 г.</p>
            </div>
        </div>
        <div class="footer__middle">
            <p class="font-text_medium">
                Урайский комплексный центр социального обслуживания населения<br>г.Урай ХМАО-Югра
            </p>
            <p class="font-text_medium">Обработка персональных данных</p>
        </div>
        <div class="footer__right">
            <div class="footer__socials">
                <NuxtLink to="https://t.me/UKCSON">
                    <IconTG class="footer__socials-icon" filled />
                </NuxtLink>
                <NuxtLink to="https://vk.com/dsrhmao">
                    <IconVK class="footer__socials-icon" filled />
                </NuxtLink>
                <NuxtLink to="https://ok.ru/group/54050422718599">
                    <IconOK class="footer__socials-icon footer__socials-icon--ok" filled />                    
                </NuxtLink>
            </div>
            <NuxtLink to="mailto:info@укцсон.рф" class="footer__email">
                <p class="font-text_medium">info@укцсон.рф</p>
            </NuxtLink>
        </div>
        <div class="footer__middle--mobile">
            <p class="font-text_medium">
                Урайский комплексный центр социального обслуживания населенияг. Урай ХМАО-Югра
            </p>
            <p class="font-text_medium">Обработка персональных данных</p>
            <div class="footer__copyright-block--mobile">
                <p class="font-text_medium">© УКЦСОН 2013-2025</p>
                <p class="font-text_medium">Обновлено 22.03.2025 г.</p>
            </div>
        </div>
    </footer>
</template>
<style lang="sass">
@import '@color'
@import '@fonts'
@import '@mixin'
@import '@global'

.footer
    padding: 40px 20px 20px 20px
    display: flex
    flex-direction: row
    justify-content: space-between

    &__left
        display: flex
        flex-direction: column
        gap: 10px

    &__number
        text-decoration: none
        color: $black

    &__email
        text-decoration: none
        color: $black


    &__middle
        display: flex
        flex-direction: column
        gap: 20px

        &--mobile
            display: none

    &__right
        display: flex
        flex-direction: column
        gap: 10px
        align-items: flex-end

    &__socials
        display: flex
        flex-direction: row
        gap: 10px

    &__socials-icon
        width: 40px
        height: 40px
        path[fill]
            fill: $red
        &--ok
            path[fill]:last-child
                fill: $white

@include tablet
    .footer
        display: grid
        grid-template-columns: repeat(2, 1fr)

        &__middle
            display: none
            &--mobile
                grid-column: 1 / -1 
                display: block
                p
                    text-align: center

@include mobile
    .footer
        grid-template-columns: repeat(1, 1fr)
        gap: 30px

        &__left
            align-items: center 

        &__right
            align-items: center

        &__copyright-block
            display: none
            &--mobile
                margin-top: 20px 
                display: block


</style>