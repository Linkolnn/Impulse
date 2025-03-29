<script setup>
import {
    ServicesData,
    MaterialsData,
    departmentsData,
    schedule,
    StatisticData,
    MainData,
    ReviewData,
    PartnersCardsData
} from '@services/data';
</script>
<template>
    <section class="welcome__section section">
        <h1 class="welcome__section-title font-h1">
            "Бюджетное учреждение Ханты-Мансийского автономного округа - Югры"
            <br>
            "Урайский комплексный центр социального обслуживания населения"
        </h1>
        <div class="welcome__section-cardblock">
            <CardsServices 
                v-for="item in ServicesData"
                :url="item.url"
                :type="item.type"
                :title="item.title"
            />
        </div>
    </section>
    <section class="about__section section">
        <h2 class="about__section-title font-h2">
            Государственное учреждение
        </h2>
        <p class="about__section-text font-text_extra-large">
            Предназначенное для удовлетворения потребности общества в оказании семьям, 
            несовершеннолетним и отдельным категориям граждан, 
            попавшим в трудную жизненную ситуацию, помощи в реализации законных прав и интересов, 
            срочной социальной помощи и содействия в улучшении их социального и материального положения, 
            а также психологического статуса, предоставление социальных услуг
        </p>
        <p class="about__section-text font-text_extra-large">
            Дата государственной регистрации Учреждения – 24 февраля 1999 года
        </p>
        <p class="about__section-text font-text_extra-large">
            Дата государственной регистрации в качестве поставщика социальных услуг 31 декабря 2014 года
        </p>
        <h2 class="about__section-title font-h2">
            Учредитель
        </h2>
        <p class="about__section-text font-text_extra-large">
            Департамент социального развития Ханты-Мансийского автономного округа – Югры        </p>
        <p class="about__section-text font-text_extra-large">
            Директор: Терехин Антон Владиславович
        </p>
        <p class="about__section-text font-text_extra-large">
            Фактический адрес: 628011, г. Ханты-Мансийск, ул. Мира, 14А, Ханты-Мансийский автономный округ – Югра, Тюменская область
        </p>
        <p class="about__section-text font-text_extra-large">
            Почтовый адрес: 628006, г. Ханты-Мансийск, ул. Мира, 5, Ханты-Мансийский автономный округ - Югра, Тюменская область
        </p>
        <p class="about__section-text font-text_extra-large">
            Телефон: 8(3467) 32-20-40 (доб.3602, 3603, 3696);<br> Факс: 8(3467) 32-93-15
        </p>
        <p class="about__section-text font-text_extra-large">
            Сайт: depsr.admhmao.ru
        </p>
        <p class="about__section-text font-text_extra-large">
            E-mail: Socprotect@admhmao.ru
        </p>
        <div class="about__socials">
            <p class="about__section-text font-text_extra-large">
                Официальные аккаунты в социальных сетях: 
            </p>
            <div class="about__socials-block">
                <NuxtLink class="about__socials-link" to="https://vk.com/dsrhmao">
                    <IconVK class="about__socials-icon" filled />
                </NuxtLink>
                <NuxtLink class="about__socials-link" to="https://ok.ru/group/54050422718599">
                    <IconOK class="about__socials-icon" filled />
                </NuxtLink>
            </div>            
        </div>
        <p class="about__section-text font-text_extra-large">
            <strong>Дата обновления сайта: 22.03.2025 года</strong>
        </p>
    </section>
    <section class="useful-materials__section section">
        <h2 class="useful-materials__title title font-h2">Полезное материалы</h2>
        <div class="useful-materials__card-block">
            <CardsMaterials
                v-for="item in MaterialsData"
                :url="item.url"
                :img="item.img"
                :title="item.title"
                :text="item.text"
            />
        </div>
    </section>
    <section class="available-number__section section">
        <h2 class="available-number__title title font-h2">Количество свободных мест в отделениях</h2>
        <p class="available-number__text font-text_extra-large"><strong>(01.03. – 31.03.2025 г.)</strong></p>
        <Table 
          :rows="departmentsData"
        />
    </section>
    <section class="mode__section section">
      <div class="mode__textblock">
        <h2 class="mode__title title font-h2">Режим работы</h2>
        <p class="mode__text font-text_extra-large"><strong>Учреждения</strong></p>    
        <div class="mode__schedule">
          <div 
            v-for="(item, index) in schedule" 
            :key="index" 
            class="mode__schedule-row"
          >
            <span class="mode__schedule-day font-text_extra-large">
                <strong>
                    {{ item.day }}
                </strong>
            </span>
            <span class="mode__schedule-dots"></span>
            <span class="mode__schedule-time font-text_extra-large">
                <strong>
                    {{ item.time }}
                </strong>            
            </span>
          </div>
        </div>
      </div>
      <IconClock class="mode__icon-clock" filled/>
    </section>
    <section class="statistic__section section">
        <h2 class="statistic__title title font-h2">Статистика работы учреждения</h2>
        <p class="statistic__text font-text_extra-large"><strong>За 2024 год</strong></p>
        <div class="statistic__count-block">
            <div v-for="item in StatisticData" class="statistic__count-content">
                <h2 class="statistic__count-title">
                    {{ item.title }}
                </h2>
                <h2 class="statistic__count-subtitle font-h2">
                    {{ item.subtitle }}
                </h2>
            </div>
        </div>
    </section>
    <section class="cards__section section">
        <CardsMain 
            v-for="data in MainData"
            :main="data"
        />
    </section>
    <section class="review__section section">
        <h2 class="statistic__title title font-h2">Отзывы наших клиентов</h2>
        <ReviewSlider
            :cards="ReviewData"
        />
    </section>
    <section class="partners__section section">
        <h2 class="partners__title title font-h2">Партнеры</h2>
        <PartnersSlider 
            :cards="PartnersCardsData"
        />
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.welcome__section
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 60px

.welcome__section-title
    width: 100%
    text-align: center

.welcome__section-cardblock
    width: 80%
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: 10px

.about__section
    background: $red
    display: flex 
    flex-direction: column
    gap: 20px

.about__section-title
    color: $white
    border-bottom: 4px solid $white
    width: 50%

.about__section-text 
    color: $white

.about__socials-block
    display: flex
    flex-direction: row
    gap: 10px

.about__socials-icon
    height: 50px 
    width: 50px

.useful-materials__title
    margin-bottom: 40px

.useful-materials__card-block
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 60px
 

.mode 
    &__section 
      display: flex
      justify-content: space-around
      align-items: center
      background: $red
      > *
          color: $white
    
    &__icon-clock
        width: 100%
        height: 100%
        max-width: 310px

    &__textblock 
        width: 40%

    &__title
        border-bottom: 4px solid $white
    
    &__schedule 
      margin-top: 20px;
      font-size: 16px;
      line-height: 1.5;
    
    &__schedule-row 
      display: flex;
      margin-bottom: 8px;
      align-items: baseline;
    
    &__schedule-day 
      flex-shrink: 0;
    
    &__schedule-dots 
      flex-grow: 1;
      border-bottom: 4px dotted $white;
    
    &__schedule-time 
      flex-shrink: 0;


.statistic
    &__section
        min-height: 45vh

    &__title
        margin-bottom: 60px
    
    &__text
        width: 100%
        text-align: center
        margin-bottom: 20px

    &__count-block
        display: flex
        flex-direction: row
        gap: 20px
        justify-content: space-evenly

    &__count-title
        font-size: 64px
        color: $red
        text-align: center

    &__count-subtitle
        text-align: center

.cards__section
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 20px
    justify-content: space-between
    grid-auto-rows: minmax(auto, 1fr)

    .main-card__text
        display: none

.partners__title
    margin-bottom: 40px

.review__section
    min-height: 65vh

.partners__section
    min-height: max-content

@include tablet 
    .cards__section
        display: grid
        grid-template-columns: repeat(3, 1fr)


@include mobile
    .welcome__section-title
        width: 100%

    .welcome__section-cardblock
        justify-content: space-around
        flex-wrap: wrap
        width: 100%

    .about__section-title
        width: 100%

    .about__socials-icon
        height: 35px 
        width: 35px

    .useful-materials__card-block
        grid-template-columns: repeat(1, 1fr)
        gap: 40px
        
    .mode 
        &__section
            flex-direction: column
            justify-content: center
            gap: 60px

        &__textblock 
            width: 100%

    .statistic    
        &__count-block
            flex-direction: column

    .cards__section
        grid-template-columns: repeat(1, 1fr)

</style>