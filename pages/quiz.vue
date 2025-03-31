<template>
    <section class="quiz-welcome__section section">
        <h1 class="quiz-welcome__title font-h1">Опрос</h1>   
        <h2 class="quiz-welcome__subtitle font-h2 title">Ваше мнение важно!</h2>
        <p class="quiz-welcome__text font-text_medium">
            На сайте <NuxtLink to="https://vk.com/away.php?to=http%3A%2F%2Fbus.gov.ru&utf=1">bus.gov.ru</NuxtLink> 
            вы можете найти информацию об Учреждении, оценить качество работы и оставить отзыв.            
        </p>
        <p class="quiz-welcome__text font-text_medium">
            Пройдите <NuxtLink to="https://vk.com/away.php?to=https%3A%2F%2Fclck.ru%2F3GJjRr&utf=1">короткий опрос,</NuxtLink>
            либо перейдите к опросу отсканировав QR-код.
        </p>
        <p class="quiz-welcome__text font-text_medium">
            Ваши ответы помогут улучшить качество обслуживания граждан.<br>
            Установите удобное <NuxtLink to="https://vk.com/away.php?to=https%3A%2F%2Fclck.ru%2F34SLHR&utf=1">мобильное приложение</NuxtLink>
            для ещё большего взаимодействия.
        </p>
        <img class="quiz-welcome__img" src="https://укцсон.рф/upload/medialibrary/390/3901f1aa2debcc2a9a7ed1fb50fe8f30.jpg" alt="qr-code">
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.quiz-welcome
    &__section
        display: flex
        flex-direction: column
    &__title
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px
    &__text
        margin-bottom: 10px
    &__img
        align-self: center
        width: 100%
        max-width: 800px
        object-fit: cover

</style>
