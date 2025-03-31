<template>
    <section class="quality-welcome__section section">
        <h1 class="quality-welcome__title font-h1">Информационно-разъяснительная кампания для населения о проведении независимой оценки качества</h1>   
        <h2 class="quality-welcome__subtitle font-h2 title">Уважаемые жители города!</h2>
        <p class="quality-welcome__text font-text_medium">
            <strong>Независимая оценка</strong> является одной из форм общественного контроля и проводится в целях предоставления получателям социальных услуг 
            информации о качестве условий оказания услуг организациями социального обслуживания, а также для повышения качества их деятельности.
            В автономном округе независимая оценка качества таких услуг проводится с 2013 года.
        </p>
        <p class="quality-welcome__text font-text_medium">
            <strong>
                Независимая оценка предусматривает оценку условий оказания услуг по следующим общим критериям:
            </strong>
        </p>
        <p class="quality-welcome__text font-text_medium">
	        - открытость и доступность информации об организации социального обслуживания;
        </p>
        <p class="quality-welcome__text font-text_medium">
            - комфортность условий предоставления социальных услуг, в том числе время ожидания предоставления услуг;
        </p>
        <p class="quality-welcome__text font-text_medium">
            - доброжелательность, вежливость работников организации социального обслуживания;
        </p>
        <p class="quality-welcome__text font-text_medium">
            - удовлетворенность качеством условий оказания услуг;
        </p>
        <p class="quality-welcome__text font-text_medium">
            - доступность услуг для инвалидов. 
        </p>
        <NuxtLink to="https://xn--j1agclit.xn--p1ai/upload/documents/nezavisimaya-otsenka-kachestva/2023/%D0%9D%D0%9E%D0%9A%20%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8.xlsx">
            Перечень информации о деятельности Учреждения, размещаемый в соответствии с законодательством
        </NuxtLink>
    </section>
    <section class="quality-review__section section">
        <h2 class="quality-review__subtitle font-h2 title">Просим вас принять участие в независимой оценке и высказать свое мнение о качестве оказания социальных услуг.</h2>
        <p class="quality-review__text font-text_medium">
            <strong>Для этого вам необходимо заполнить форму:</strong> 
        </p>
        <p class="quality-review__text font-text_medium">
            - на <NuxtLink to="https://bus.gov.ru/info-card/457295">Официальном сайте</NuxtLink> для размещения информации о государственных (муниципальных) учреждениях.
        </p>
        <p class="quality-review__text font-text_medium">
            Также свой отзыв можно оставить на сайте учреждения в разделе «Отзывы», и в аккаунтах учреждения социальных сетей: «Одноклассники»; В Контакте. В мобильном приложении «Наше мнение», которое можно скачать в RuStore 
            На сайте bus.gov.ru вы можете найти информацию об Учреждении, оценить качество работы и оставить отзыв.
            Пройдите <NuxtLink to="https://bus.gov.ru/qrcode/rate/457295">короткий опрос здесь</NuxtLink>, либо перейдите к опросу отсканировав QR-код:
        </p>
        <img class="quality-review__img" src="https://укцсон.рф/upload/medialibrary/fb5/fb562328fc424ff37edcedde3aed1c01.png" alt="qr-code">
        <p class="quality-review__text font-text_medium">
            По возникающим вопросам по проведению независимой оценки качества просим обращаться по телефону: 8 (34676) 2-02-00 (Добавочный: 374)
            Заведующий отделением информационно-аналитической работы Скороходова Екатерина Александровна
        </p>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.quality-welcome, .quality-review
    &__section
        min-height: max-content
    &__title
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px
    &__text
        margin-bottom: 10px

.quality-review
    &__img
        width: 100%
        max-width: 400px
</style>
