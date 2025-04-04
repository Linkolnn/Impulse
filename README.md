# Nuxt Minimal Starter

# Impulse

Проект **Impulse** создан с использованием фреймворка **Nuxt 3** и представляет собой UI/UX редизайн официального сайта *Бюджетного учреждения Ханты-Мансийского автономного округа – Югры "Урайский комплексный центр социального обслуживания населения"*. Основная цель проекта — улучшение пользовательского опыта, повышение доступности информации и создание современного, интуитивно понятного интерфейса для посетителей сайта.

## Описание компонента `app.vue`

Компонент `app.vue` является корневым компонентом приложения **Impulse**. Он задает основную структуру страницы, включая заголовок (`Header`), основное содержимое (`NuxtPage`) и подвал (`Footer`). Компонент отвечает за глобальную компоновку и рендеринг контента в зависимости от текущего маршрута.

### Объяснение кода в `app.vue`

- `<Header/>` — компонент заголовка, содержащий логотип и навигационное меню.
- `<main class="main container">` — основная область страницы, где отображается содержимое текущего маршрута через компонент `NuxtPage`. Класс `container` обеспечивает единообразные отступы.
- `<Footer/>` — компонент подвала с дополнительной информацией и ссылками.
- Стили определены с использованием препроцессора SASS, включая импорт глобальных стилей, цветов, шрифтов и миксинов. Адаптивные стили обеспечивают корректное отображение на устройствах с разными размерами экрана.

```vue
<template>
  <Header/>
  <main class="main container">
    <NuxtPage/>
  </main>
  <Footer/>
</template>
<style lang="sass">
@import '@color'
@import '@fonts'
@import '@mixin'
@import '@global'

.container
  padding: 0px 20px 

.section
  min-height: 80vh
  padding: 40px
  border-radius: $radius

.title
  border-bottom: 4px solid $red
  width: 50%

@include tablet 
  .title
    width: 100%

  .container
    padding: 0px 20px 

  .section
    padding: 20px
</style>
```

## Описание компонента `index.vue`

Компонент `index.vue`, расположенный в папке `pages`, отвечает за главную страницу сайта **Impulse**. Он представляет собой ключевой интерфейс, предоставляющий пользователю доступ к информации об учреждении, его услугах, новостях, статистике, отзывах и партнерах. Компонент структурирован в виде нескольких секций, каждая из которых выполняет определенную функцию для улучшения пользовательского опыта.

### Объяснение кода в `index.vue`

- Импортируются данные из сервиса `@services/data`, включая информацию об услугах (`ServicesData`), материалах (`MaterialsData`), отделениях (`departmentsData`), расписании (`schedule`), статистике (`StatisticData`), основных карточках (`MainData`), отзывах (`ReviewData`) и партнерах (`PartnersCardsData`).
- Шаблон разделен на несколько секций:
  - `welcome__section` — приветственная секция с названием учреждения и карточками услуг.
  - `about__section` — информация об учреждении, его целях, учредителе и контактах.
  - `useful-materials__section` — блок с полезными материалами.
  - `available-number__section` — таблица с данными о количестве свободных мест в отделениях.
  - `mode__section` — расписание работы учреждения.
  - `statistic__section` — статистика работы за год.
  - `cards__section` — основные карточки с дополнительной информацией.
  - `review__section` — слайдер с отзывами клиентов.
  - `partners__section` — слайдер с информацией о партнерах.
- Стили определены с использованием препроцессора SASS, включая адаптивные настройки для планшетов и мобильных устройств. Используются глобальные переменные для цветов, миксинов и стилей, обеспечивающие единообразный дизайн.

```vue
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
            Дата государственной регистрации Учреждения – 24 февраля 1999 года
        </p>
        <p class="about__section-text font-text_extra-large">
            Дата государственной регистрации в качестве поставщика социальных услуг 31 декабря 2014 года
        </p>
        <h2 class="about__section-title font-h2">
            Учредитель
        </h2>
        <p class="about__section-text font-text_extra-large">
            Департамент социального развития Ханты-Мансийского автономного округа – Югры
        </p>
        <p class="about__section-text font-text_extra-large">
            Директор: Терехин Антон Владиславович
        </p>
        <p class="about__section-text font-text_extra-large">
            Фактический адрес: 628011, г. Ханты-Мансийск, ул. Мира, 14А, Ханты-Мансийский автономный округ – Югра, Тюменская область
        </p>
        <p class="about__section-text font-text_extra-large">
            Почтовый адрес: 628006, г. Ханты-Мансийск, ул. Мира, 5, Ханты-Мансийский автономный округ - Югра, Тюменская область
        </p>
        <p class="about__section-text font-text_extra-large">
            Телефон: 8(3467) 32-20-40 (доб.3602, 3603, 3696);<br> Факс: 8(3467) 32-93-15
        </p>
        <p class="about__section-text font-text_extra-large">
            Сайт: depsr.admhmao.ru
        </p>
        <p class="about__section-text font-text_extra-large">
            E-mail: Socprotect@admhmao.ru
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
            <strong>Дата обновления сайта: 22.03.2025 года</strong>
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
```

## Описание компонента `Table.vue`

Компонент `Table.vue` находится в папке `components` и отвечает за отображение таблицы с данными, такими как названия отделов и количество мест. Он поддерживает динамическое объединение ячеек по строкам и столбцам (rowspan/colspan). Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `Table.vue`

- В `<script setup>`:
  - Импортируется `computed` из Vue для обработки данных таблицы.
  - Определяются свойства (`props`) для передачи строк (`rows`), колонок (`columns`), а также функций для стилизации строк и ячеек.
  - Функция `hasHtml` проверяет наличие HTML в содержимом ячейки.
  - Вычисляемое свойство `processedRows` обрабатывает строки таблицы, вычисляя `rowspan` и `colspan` для объединения ячеек.
- В шаблоне компонента:
  - Определена таблица с классом `departments-table`, содержащая строки и ячейки, генерируемые на основе `processedRows`.
  - Поддерживается отображение HTML-контента в ячейках с помощью `v-html`.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Таблица адаптируется для мобильных устройств с горизонтальной прокруткой.

```vue
<template>
  <div class="departments-table">
    <table class="departments-table__inner">
      <tbody>
        <template v-for="(row, rowIndex) in processedRows" :key="rowIndex">
          <tr class="departments-table__row" :class="rowClasses(row)">
            <template v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
              <td
                class="departments-table__cell"
                :class="cellClasses(cell)"
                :rowspan="cell.rowspan"
                :colspan="cell.colspan"
              >
                <template v-if="hasHtml(cell.content)">
                  <span class="cell-content" v-html="cell.content"></span>
                </template>
                <template v-else>
                  {{ cell.content }}
                </template>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => [
      { name: 'name', width: '70%', align: 'left' },
      { name: 'places', width: '30%', align: 'right' }
    ]
  },
  cellClasses: {
    type: Function,
    default: (cell) => ({
      'departments-table__cell--name': cell.column === 'name',
      'departments-table__cell--places': cell.column === 'places',
      'departments-table__cell--subsection': cell.type === 'subsection',
      'departments-table__cell--department': cell.type === 'department'
    })
  },
  rowClasses: {
    type: Function,
    default: (row) => ({
      'departments-table__row--subsection': row.type === 'subsection',
      'departments-table__row--department': row.type === 'department'
    })
  }
})

const hasHtml = (content) => {
  return typeof content === 'string' && (content.includes('<br>') || content.includes('</'))
}

const processedRows = computed(() => {
  const processed = []
  const rowSpans = {}

  props.columns.forEach(col => {
    rowSpans[col.name] = { count: 0, content: null, rowIndex: -1 }
  })

  props.rows.forEach((row, rowIndex) => {
    const processedRow = { ...row, cells: [] }

    props.columns.forEach((col, colIndex) => {
      const cellKey = col.name
      const cellValue = row[cellKey]
      const cellType = row.type || 'normal'
      
      if (rowSpans[cellKey].count > 0) {
        rowSpans[cellKey].count--
        return
      }

      const cell = {
        column: cellKey,
        content: cellValue,
        type: cellType,
        rowspan: 1,
        colspan: 1
      }

      if (typeof cellValue === 'object' && cellValue.rowspan) {
        cell.rowspan = cellValue.rowspan
        cell.content = cellValue.content
        rowSpans[cellKey] = { count: cellValue.rowspan - 1, content: cellValue.content, rowIndex }
      }

      if (typeof cellValue === 'object' && cellValue.colspan) {
        cell.colspan = cellValue.colspan
      }

      processedRow.cells.push(cell)
    })

    processed.push(processedRow)
  })

  return processed
})
</script>

<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.departments-table 
  width: 100%
  margin-top: 24px
  border-collapse: collapse

.departments-table__inner 
  width: 100%
  border-collapse: collapse

.departments-table__cell 
  padding: 16px 
  vertical-align: top
  border: 4px solid $red

.departments-table__cell--name 
  width: 80%

.departments-table__cell--places 
  text-align: center
  border-left: 4px solid $red

.cell-content
  line-height: 3

.departments-table__row--subsection .departments-table__cell--name 
  padding-left: 24px
  font-weight: 400

.departments-table__row--department .departments-table__cell--name 
  font-weight: 600

@include mobile 
  .departments-table
      overflow-x: scroll 
</style>
```

## Описание компонента `ReviewSlider.vue`

Компонент `ReviewSlider.vue` находится в папке `components` и отвечает за отображение слайдера с карточками, использующего библиотеку Swiper. Он поддерживает автопрокрутку, навигационные кнопки и адаптивный дизайн. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `ReviewSlider.vue`

- В `<script setup>`:
  - Импортируются модули Swiper (`Swiper`, `SwiperSlide`, `Autoplay`, `Navigation`) и стили Swiper.
  - Определяются свойства (`props`) для передачи массива карточек (`cards`).
  - Используются реактивные переменные `swiper` для управления слайдером и `isMobile` для проверки мобильного устройства.
  - Настраиваются точки останова (`breakpoints`) для адаптивности и функции для навигации (`next`, `prev`).
  - При монтировании проверяется, является ли устройство мобильным (`checkIsMobile`).
- В шаблоне компонента:
  - Определен блок `review-slider__block`, содержащий кнопки навигации (отображаются только на не-мобильных устройствах) и слайдер `Swiper`.
  - Карточки отображаются через `SwiperSlide` с использованием компонента `CardsMain`.
- Стили определены с использованием SASS, включая импорт миксинов и цветов. Реализованы эффекты наведения, адаптивность для планшетов и мобильных устройств.

```vue
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
```

## Описание компонента `CardsMain.vue`

Компонент `CardsMain.vue` находится в папке `components` и отвечает за отображение карточки с изображением, заголовком и текстовыми блоками. При клике на карточку открывается модальное окно с деталями. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `CardsMain.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи данных карточки (`main`).
  - Используется реактивная переменная `showModal` для управления видимостью модального окна.
  - Определены функции `openModal` и `closeModal` для открытия и закрытия модального окна.
- В шаблоне компонента:
  - Определена карточка `main-card` с изображением (`main.img`), заголовком (`main.title`) и текстовыми блоками (`main.contentBlocks`), отображаемыми динамически.
  - Используется `Teleport` для перемещения модального окна в `body`, где отображается компонент `ModalsMain` с переданными данными.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы эффекты наведения и адаптивность для мобильных устройств.

```vue
<script setup>
defineProps(['main']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <article class="main-card" @click="openModal">
        <img v-if="main.img" :src="main.img" :alt="main.title" class="main-card__img" />
        <h2 v-if="main.title" class="main-card__title font-h2">{{ main.title }}</h2>
        <div v-if="main.contentBlocks" class="main-card__textblock" v-for="(block) in main.contentBlocks">
            <p v-if="block.text" v-for="(paragraph) in block.text" class="main-card__text font-text_medium">
                {{ paragraph }}
            </p>
        </div>
    </article>

    <Teleport to="body">
        <Modals v-if="showModal" @close="closeModal">
            <ModalsMain :data="main" />
        </Modals>
    </Teleport>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.main-card
    max-height: 425px
    min-width: 200px
    padding: 20px
    background: $white
    border-radius: $radius
    cursor: pointer
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    @include transition

.main-card__title
    color: $black
    overflow: hidden
    overflow-wrap: break-word
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    text-overflow: ellipsis

.main-card__img
    border-radius: $radius
    height: 80%
    width: 100%
    object-fit: cover

.main-card__textblock
    display: flex
    flex-direction: column
    gap: 20px
    overflow-wrap: break-word
    > *
        @include transition
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        text-overflow: ellipsis

@include hover
    .main-card:hover
        background: $red
        transform: translateY(-5px)
        .main-card__title
            color: $white
        .main-card__text
            color: $white

@include mobile
    .main-card
        &:active
            background: $red
            transform: translateY(-5px)
            .main-card__title
                color: $white
            .main-card__text
                color: $white

    .main-card__img
        max-height: 400px
        height: 300px
</style>
```

## Описание компонента `PartnersSlider.vue`

Компонент `PartnersSlider.vue` находится в папке `components` и отвечает за отображение слайдера с карточками партнеров, использующего библиотеку Swiper. Он поддерживает автопрокрутку и адаптивный дизайн. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `PartnersSlider.vue`

- В `<script setup>`:
  - Импортируются модули Swiper (`Swiper`, `SwiperSlide`, `Autoplay`) и стили Swiper.
  - Определяются свойства (`props`) для передачи массива карточек (`cards`).
  - Используется реактивная переменная `swiper` для управления слайдером.
  - Настраиваются точки останова (`breakpoints`) для адаптивности и функция `onSwiper` для инициализации слайдера.
- В шаблоне компонента:
  - Определен блок `partners__swiper-slider`, содержащий слайдер `Swiper`.
  - Карточки партнеров отображаются через `SwiperSlide` с использованием компонента `CardsPartners`, принимающего `url` и `img`.
- Стили определены с использованием SASS, включая импорт цветов и миксинов. Реализована адаптивность для мобильных устройств с фиксированной шириной элементов.

```vue
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
```

## Описание компонента `Header.vue`

Компонент `Header.vue` находится в папке `components` и отвечает за отображение шапки сайта с логотипом и контактной информацией. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `Header.vue`

- В шаблоне компонента:
  - Определена шапка `header` с логотипом (`IconLogo`), ссылками на телефон и email, а также вложенным компонентом `NavMenu`.
  - Контакты представлены через `NuxtLink` для возможности клика.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализована базовая адаптивность для мобильных устройств с добавлением отступа.

```vue
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
</style>
```

## Описание компонента `NavMenu.vue`

Компонент `NavMenu.vue` находится в папке `components` и отвечает за отображение навигационного меню сайта с адаптивным поведением для мобильных устройств. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `NavMenu.vue`

- В `<script setup>`:
  - Импортируются данные меню из `@services/data` и анимации из `../animation/animation`.
  - Используются реактивные переменные `navMenuVisible` и `isMobile` для управления видимостью и проверки мобильного устройства.
  - Функция `toggleNavMenu` переключает меню на мобильных устройствах с анимацией.
  - Функция `isActiveLink` определяет активную ссылку на основе текущего маршрута.
  - При монтировании проверяется, является ли устройство мобильным (`checkIsMobile`).
- В шаблоне компонента:
  - Определено меню `header__menu` с кнопкой закрытия и списком ссылок, отображаемых через `NuxtLink`.
  - Кнопка бургер-меню отображается отдельно для переключения меню.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализована адаптивность для планшетов и мобильных устройств.

```vue
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
        top: 85px
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
```

## Описание компонента `Footer.vue`

Компонент `Footer.vue` находится в папке `components` и отвечает за отображение подвала сайта с контактной информацией, социальными сетями и копирайтом. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `Footer.vue`

- В шаблоне компонента:
  - Определен подвал `footer` с тремя основными блоками: телефон и копирайт (`footer__left`), информация об учреждении (`footer__middle`), социальные сети и email (`footer__right`).
  - Добавлен дополнительный блок `footer__middle--mobile` для отображения информации на мобильных устройствах.
- Стили определены с использованием SASS, включая импорт глобальных стилей, шрифтов, цветов и миксинов. Реализована адаптивность с использованием сетки для планшетов и мобильных устройств, с центрированием элементов и переключением видимости блоков.

```vue
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
```

## Описание компонента `MainCard.vue`

Компонент `MainCard.vue` находится в папке `components/Cards` и отвечает за отображение карточки с изображением, заголовком и текстовыми блоками. При клике на карточку открывается модальное окно с дополнительной информацией. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `MainCard.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи данных карточки (`main`).
  - Используется реактивная переменная `showModal` для управления видимостью модального окна.
  - Определены функции `openModal` и `closeModal` для открытия и закрытия модального окна.
- В шаблоне компонента:
  - Определена карточка `main-card` с изображением (`main.img`), заголовком (`main.title`) и текстовыми блоками (`main.contentBlocks`), отображаемыми динамически.
  - Используется `Teleport` для перемещения модального окна в `body`, где отображается компонент `ModalsMain` с переданными данными.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы эффекты наведения, ограничение текста с помощью `-webkit-line-clamp`, а также адаптивность для мобильных устройств с активацией эффекта при нажатии.

```vue
<script setup>
defineProps(['main']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <article class="main-card" @click="openModal">
        <img v-if="main.img" :src="main.img" :alt="main.title" class="main-card__img" />
        <h2 v-if="main.title" class="main-card__title font-h2">{{ main.title }}</h2>
        <div v-if="main.contentBlocks" class="main-card__textblock" v-for="(block) in main.contentBlocks">
            <p v-if="block.text" v-for="(paragraph) in block.text" class="main-card__text font-text_medium">
                {{ paragraph }}
            </p>
        </div>
    </article>

    <Teleport to="body">
        <Modals v-if="showModal" @close="closeModal">
            <ModalsMain :data="main" />
        </Modals>
    </Teleport>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.main-card
    max-height: 425px
    min-width: 200px
    padding: 20px
    background: $white
    border-radius: $radius
    cursor: pointer
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    @include transition

.main-card__title
    color: $black
    overflow: hidden
    overflow-wrap: break-word
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    text-overflow: ellipsis

.main-card__img
    border-radius: $radius
    height: 80%
    width: 100%
    object-fit: cover

.main-card__textblock
    display: flex
    flex-direction: column
    gap: 20px
    overflow-wrap: break-word
    > *
        @include transition
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        text-overflow: ellipsis

@include hover
    .main-card:hover
        background: $red
        transform: translateY(-5px)
        .main-card__title
            color: $white
        .main-card__text
            color: $white

@include mobile
    .main-card
        &:active
            background: $red
            transform: translateY(-5px)
            .main-card__title
                color: $white
            .main-card__text
                color: $white

    .main-card__img
        max-height: 400px
        height: 300px
</style>
```

## Описание компонента `Main.vue`

Компонент `Main.vue` находится в папке `components/modals` и отвечает за отображение модального окна с информацией о новости, включая заголовок, дату, изображение, текстовые блоки и ссылки. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `Main.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи данных новости (`data`).
- В шаблоне компонента:
  - Определено модальное окно `main-modal` с заголовком (`data.title`), датой (`data.date`), изображением (`data.img`) и текстовыми блоками (`data.contentBlocks`), отображаемыми динамически.
  - Текстовые блоки включают подзаголовки (`block.subtitle`) и абзацы (`block.text`).
  - Ссылки (`data.links`) отображаются через `NuxtLink` с кнопками внутри.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы ограничения по ширине и высоте, прокрутка и адаптивность для мобильных устройств.

```vue
<script setup>
defineProps(['data']);
</script>
<template>
    <div class="main-modal modal">
        <h3 class="main-modal__title title font-h2">{{ data.title }}</h3>
        <p class="main-modal__date">{{ data.date }}</p>
        <img v-if="data.img" :src="data.img" :alt="data.title" class="main-modal__img" />
        <div class="main-modal__textblock" v-if="data.contentBlocks" v-for="(block, index) in data.contentBlocks" :key="'block-'+index">
            <p v-if="block.subtitle" class="main-modal__subtitle title">
              <strong>{{ block.subtitle }}</strong>
            </p>
            <p v-for="(paragraph, pIndex) in block.text" 
               :key="'p-'+index+'-'+pIndex" 
               class="main-modal__text font-text_medium">
              {{ paragraph }}
            </p>
        </div>           
        <NuxtLink v-if="data.links" v-for="(link, index) in data.links"
            :key="'link-'+index"
            class="main-modal__link font-text_medium"
            :to="link.url"
            >
            <button class="btn font-text_medium">
                {{ link.text }}
            </button>
        </NuxtLink>
    </div>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.main-modal
    padding: 20px
    background: $white
    border-radius: 8px
    max-width: 600px
    width: 100%
    max-height: 80vh
    overflow-y: auto

    .btn 
        width: 100%
        margin-top: 10px

.main-modal__textblock
    margin-bottom: 10px

.main-modal__title
    width: 90%
    margin-bottom: 10px

.main-modal__subtitle
    font-size: 20px
    width: 100% 
    margin-bottom: 20px

.main-modal__img
    width: 100%
    object-fit: cover
    border-radius: $radius
    margin-bottom: 10px

.main-modal__link
    display: block
    padding: 5px

@include mobile
    .main-modal
        padding: 20px
</style>
```

## Описание компонента `index.vue`

Компонент `index.vue` находится в папке `components/modals` и отвечает за отображение базового модального окна с затемненным фоном и кнопкой закрытия. Он служит оберткой для контента, переданного через слот, и поддерживает анимацию открытия и закрытия. Стили компонента определены с использованием препроцессора SASS с областью видимости (`scoped`).

### Объяснение кода в `index.vue`

- В `<script setup>`:
  - Импортируются функции анимации `showModal` и `hideModal` из `@/animation/animation`.
  - Используется `defineEmits` для события `close`, которое вызывается при закрытии модального окна.
  - Реактивная переменная `modalContent` ссылается на элемент контента модального окна.
  - Функция `close` запускает анимацию закрытия и инициирует событие `close`.
  - При монтировании (`onMounted`) запускается анимация открытия через `showModal`.
- В шаблоне компонента:
  - Определен контейнер `modal-overlay` с затемненным фоном, который закрывает модальное окно при клике вне контента.
  - Внутри находится блок `modal__content` с кнопкой закрытия (`modal__close`) и слотом для пользовательского контента.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы фиксированное позиционирование, центрирование, ограничения размеров и эффекты перехода.

```vue
<template>
    <article class="modal-overlay" @click.self="close">
        <div class="modal__content" ref="modalContent">
            <button class="modal__close" @click="close">
                <IconX class="modal__close-icon" filled />
            </button>
            <slot></slot>
        </div>
    </article>
</template>
<script setup>
import { showModal, hideModal } from '@/animation/animation';

const emit = defineEmits(['close']);
const modalContent = ref(null);

function close() {
    hideModal(modalContent.value, () => emit('close'));
}

onMounted(() => {
    showModal(modalContent.value);
});
</script>
<style lang="sass" scoped>
@import '@color'
@import '@mixin'
@import '@global'

.modal-overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
    display: flex
    justify-content: center
    align-items: center
    z-index: 10

.modal__content
    position: relative
    max-width: 90%
    max-height: 90vh
    background: transparent 
    border-radius: $radius
    transform-origin: center

.modal__close
    position: absolute
    top: 10px
    right: 10px
    background: transparent
    width: 30px
    height: 30px
    font-size: 18px
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    transition: background 0.2s ease

.modal__close-icon
    width: 12px
    height: 12px
</style>
```

## Описание компонента `ServicesCard.vue`

Компонент `ServicesCard.vue` находится в папке `components/Cards` и отвечает за отображение карточки услуги с иконкой и заголовком, которая является ссылкой. Тип карточки определяет отображаемую иконку (новости, опрос или услуги). Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `ServicesCard.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи URL (`url`), заголовка (`title`) и типа карточки (`type`).
- В шаблоне компонента:
  - Определена ссылка `NuxtLink` с классом `services-card`, содержащая иконки (`IconServicesNews`, `IconServicesQuiz`, `IconServicesWorksheet`) и заголовок (`title`).
  - Иконки отображаются в зависимости от значения `type` (news, quiz, services).
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы эффекты масштабирования при наведении и адаптивность для мобильных устройств, где эффект активируется при нажатии.

```vue
<script setup>
const props = defineProps(['url', 'title', 'type']);
</script>

<template>
    <NuxtLink :to="url" class="services-card" :class="type">
        <IconServicesNews filled class="services-card__icon services-card__icon--news"/>
        <IconServicesQuiz filled class="services-card__icon services-card__icon--quiz"/>
        <IconServicesWorksheet filled class="services-card__icon services-card__icon--services"/>
        <h3 class="font-h3 title-top">
            {{ title }}
        </h3>
    </NuxtLink>
</template>

<style lang="sass">
@import "@global"
@import "@color"
@import "@mixin"
.services-card
    background: $red
    text-decoration: none
    padding: 20px
    height: 260px
    width: 225px
    border-radius: $radius
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    gap: 10px
    @include transition
    *
        font-family: 'Source-Sans-3', sans-serif
        text-decoration: none
        color: $white
        @include transition

.services-card__icon
    width: 100% 
    height: 100%

    &--quiz
        display: none

    &--services
        display: none
    
    &--news
        display: none

    
.services-card.quiz
    .services-card__icon
        &--quiz
            display: block

.services-card.services
    .services-card__icon
        &--services
            display: block

.services-card.news
    .services-card__icon
        &--news
            display: block

@include hover
    .services-card:hover
        transform: scale(1.05)

@include mobile
    .services-card
        height: 180px
        width: 130px
    
    .services-card:active
        transform: scale(1.05)
</style>
```

## Описание компонента `PartnersCard.vue`

Компонент `PartnersCard.vue` находится в папке `components/Cards` и отвечает за отображение карточки партнера с изображением, которая является ссылкой. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `PartnersCard.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи URL (`url`) и пути к изображению (`img`).
- В шаблоне компонента:
  - Определена ссылка `NuxtLink` с классом `partners-card`, содержащая изображение (`img`), отображаемое через тег `<img>`.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Карточка имеет фиксированные размеры, рамку и адаптивность для мобильных устройств, где размеры уменьшаются.

```vue
<script setup>
const props = defineProps(['img', 'url']);
</script>
<template>
    <NuxtLink :to="url" class="partners-card">
        <img class="partners-card__img" :src="img" alt="">
    </NuxtLink>
</template>
<style lang="sass">
@import "@color"
@import "@global"
@import "@mixin"

.partners-card
    display: flex
    flex-direction: row
    justify-content: center
    box-sizing: border-box
    border-radius: $radius
    background: $white
    border: 4px solid $red
    width: 294px
    height: 140px
    padding: 20px

.partners-card__img
    width: max-content
    height: 100%
    border-radius: $radius
    object-fit: cover
    object-position: center

@include mobile
    .partners-card
        width: 214px
        height: 100px
        padding: 10px
</style>
```

## Описание компонента `NewsCard.vue`

Компонент `NewsCard.vue` находится в папке `components/Cards` и отвечает за отображение карточки новости с изображением, заголовком и датой. При клике на карточку открывается модальное окно с дополнительной информацией. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `NewsCard.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи данных новости (`news`).
  - Используется реактивная переменная `showModal` для управления видимостью модального окна.
  - Определены функции `openModal` и `closeModal` для открытия и закрытия модального окна.
- В шаблоне компонента:
  - Определена карточка `news-card` с изображением (`news.img`), заголовком (`news.title`) и датой (`news.date`).
  - При клике на карточку открывается компонент `Modals`, содержащий `ModalsMain` с переданными данными новости.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы эффекты наведения, ограничение текста с помощью `-webkit-line-clamp`, а также адаптивность для мобильных устройств с активацией эффекта при нажатии.

```vue
<script setup>
defineProps(['news']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <article class="news-card" @click="openModal">
        <img v-if="news.img" :src="news.img" :alt="news.title" class="news-card__img" />
        <div class="news-card__textblock">
            <h2 class="news-card__title font-h2">{{ news.title }}</h2>
            <p class="news-card__date font-text_small">{{ news.date }}</p>
        </div>
    </article>

    <Modals v-if="showModal" @close="closeModal">
        <ModalsMain :data="news" />
    </Modals>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.news-card
    max-height: 425px
    padding: 20px
    background: $white
    border-radius: $radius
    cursor: pointer
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    @include transition

.news-card__img
    border-radius: $radius
    width: 100%
    height: 50%
    object-fit: cover

.news-card__textblock
    display: flex
    flex-direction: column
    gap: 20px
    overflow-wrap: break-word
    > *
        @include transition
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        text-overflow: ellipsis

@include hover
    .news-card:hover
        background: $red
        transform: translateY(-5px)

        .news-card__textblock
            > * 
                color: $white

@include mobile
    .news-card
        height: max-content
        &:active
            background: $red
            transform: translateY(-5px)
            
            .news-card__textblock
                > * 
                    color: $white

    .news-card__img
        height: 250px
</style>
```

## Описание компонента `Materials.vue`

Компонент `Materials.vue` находится в папке `components/Cards` и отвечает за отображение карточки полезных материалов с изображением, заголовком и текстом, которая является ссылкой. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `Materials.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи URL (`url`), изображения (`img`), заголовка (`title`) и текста (`text`).
- В шаблоне компонента:
  - Определена ссылка `NuxtLink` с классом `useful-materials__card`, содержащая изображение (`img`) и текстовый блок (`useful-materials__textblock`) с заголовком (`title`) и текстом (`text`), если они переданы.
  - Условный класс `useful-materials__card--centered-img` применяется, если заголовок и текст отсутствуют, для центрирования изображения.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Реализованы горизонтальная компоновка с рамками, адаптивность для мобильных устройств с изменением направления на вертикальное и корректировкой размеров изображения.

```vue
<script setup>
const props = defineProps(['url', 'img', 'title', 'text']);
</script>
<template>
    <NuxtLink :to="url" class="useful-materials__card" :class="{ 'useful-materials__card--centered-img': !title && !text }">
        <img v-if="img" class="useful-materials__img" :src="img" alt="">
        <div v-if="title || text" class="useful-materials__textblock">
            <h3 v-if="title" class="font-h4">{{ title }}</h3>
            <p v-if="text" class="useful-materials__text"><strong>{{ text }}</strong></p>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.useful-materials__card
    text-decoration: none
    color: $black
    padding: 15px 20px
    border-top: 4px solid $red
    border-bottom: 4px solid $red
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    gap: 40px

    &--centered-img
        .useful-materials__img
            width: 50%

.useful-materials__img
    width: 30%
    object-fit: cover

.useful-materials__textblock
    display: flex
    flex-direction: column
    gap: 10px

@include mobile
    .useful-materials__card
        flex-direction: column
        justify-content: center
        gap: 10px

        &--centered-img
            .useful-materials__img
                width: 100%

    .useful-materials__img
        width: 100%
</style>
```

## Описание компонента `services.vue`

Компонент `services.vue` находится в папке `pages` и отвечает за отображение страницы с информацией об услугах социального обслуживания. Он включает в себя секции с описанием форм социального обслуживания и списком предоставляемых услуг. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `services.vue`

- Импортируются данные из `@services/data`: `ServicesTableData` для таблицы и `ServicesLinkData` для ссылок.
- В шаблоне компонента определены две секции:
  - `services-welcome__section` — содержит заголовки, описание полустационарной формы социального обслуживания и таблицу с данными (`Table`).
  - `services-link__section` — содержит заголовок и блок ссылок на социальные услуги, отображаемых через компонент `MainLink`.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов.

```vue
<script setup>
import { ServicesTableData, ServicesLinkData } from '@services/data';
</script>
<template>
    <section class="services-welcome__section section">
        <h1 class="services-welcome__title font-h1">Услуги</h1>   
        <h2 class="services-welcome__subtitle font-h2 title">Формы социального обслуживания</h2>
        <h3 class="services-welcome__subtitle font-h3">Полустационарная</h3>
        <p class="services-welcome__text font-text_medium">
            В БУ "Урайский комплексном центре социального обслуживания населения" гражданам предоставляются социальные услуги 
            в соответствии с Законом Ханты-Мансийского автономного округа – Югры №93 «Об утверждении перечня социальных услуг, 
            предоставляемых поставщиками социальных услуг в Ханты-Мансийском автономном округе - Югре» в полустационарной форме 
            социального обслуживания.
        </p>
        <Table 
            :rows="ServicesTableData"
        />
    </section>
    <section class="services-link__section section">
        <h2 class="services-link__title font-h2 title">Социальные услуги, предоставляемые в Учреждении</h2>
        <div class="services-link__block">
            <MainLink
                v-for="item in ServicesLinkData" 
                :main="item"
            />
        </div>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.services-welcome
    &__title
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px

.services-welcome__section
    .departments-table__row--department .departments-table__cell--places
        font-weight: 600

.services-link
    &__title
        margin-bottom: 20px
    &__block
        display: flex
        flex-direction: column
        gap: 20px
</style>
```

## Описание компонента `MainLink.vue`

Компонент `MainLink.vue` находится в папке `components` и отвечает за отображение ссылки с заголовком и иконкой стрелки, которая при клике открывает модальное окно с дополнительной информацией. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `MainLink.vue`

- В `<script setup>`:
  - Определяются свойства (`props`) для передачи данных ссылки (`main`).
  - Используется реактивная переменная `showModal` для управления видимостью модального окна.
  - Определены функции `openModal` и `closeModal` для открытия и закрытия модального окна.
- В шаблоне компонента:
  - Определена ссылка `NuxtLink` с классом `main-link__nuxt-link`, содержащая заголовок (`main.title`) и иконку (`IconArrow`).
  - При клике на ссылку открывается модальное окно через `Teleport` в `body`, где отображается компонент `ModalsMain` с переданными данными (`main`).
- Стили определены с использованием SASS, включая импорт цветов и миксинов. Реализованы эффекты наведения с изменением цвета и поворотом иконки, а также адаптивность для мобильных устройств с активацией эффекта при нажатии.

```vue
<script setup>
defineProps(['main']);

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>
<template>
    <NuxtLink class="main-link__nuxt-link" @click="openModal" :to="main.links">
        <h2 class="font-h2 title">{{ main.title }}</h2>
        <IconArrow class="main-link__icon" filled />
    </NuxtLink>

    <Teleport to="body">
        <Modals v-if="showModal" @close="closeModal">
            <ModalsMain :data="main" />
        </Modals>
    </Teleport>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.main-link__nuxt-link
    display: flex
    flex-direction: row-reverse
    justify-content: flex-end
    gap: 20px
    text-decoration: none
    color: $black
    @include transition
    .title
        width: 90%

.main-link__icon
    display: flex
    align-items: center
    z-index: -1
    rotate: 135deg
    width: 40px
    height: 40px
    path[fill]
        fill: $black
    @include transition

@include hover    
    .main-link__nuxt-link:hover
        color: $red
        .main-link__icon
            transform: scale(1.2)
            rotate: 180deg
            path[fill]
                fill: $red

@include mobile
    .main-link__nuxt-link
        gap: 10px
        .title
            font-size: 18px
        &:active
            .main-link__icon    
                transform: scale(1.2)
                rotate: 180deg
                path[fill]
                    fill: $red

    .main-link__icon
        width: 30px
        height: 30px
</style>
```

## Описание компонента `news.vue`

Компонент `news.vue` находится в папке `pages` и отвечает за отображение страницы с новостями. Он включает в себя секцию с заголовком и блок карточек новостей. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `news.vue`

- Импортируются данные из `@services/data`: `NewsData` для списка новостей.
- В шаблоне компонента определена секция `news__section`, содержащая заголовок и блок карточек новостей, отображаемых через компонент `CardsNews`.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Блок карточек использует сетку (`grid`) с адаптивным дизайном для разных размеров экранов.

```vue
<script setup>
import {
    NewsData,
} from '@services/data';
</script>
<template>
    <section class="news__section section">
        <h2 class="news__title font-h2 title">Новости</h2>
        <div class="news__cards-block">
            <CardsNews 
                v-for="news in NewsData" 
                :key="news.id" 
                :news="news"
            />
        </div>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.news
    &__title
        margin-bottom: 40px

    &__cards-block
        display: grid
        grid-template-columns: repeat(4, 1fr)
        gap: 20px
        justify-content: space-between
        grid-auto-rows: minmax(auto, 1fr) 

@include tablet 
    .news__cards-block
        grid-template-columns: repeat(3, 1fr)

@include mobile
    .news__cards-block
        grid-template-columns: repeat(1, 1fr)
        grid-auto-rows: minmax(auto, auto)
</style>
```

## Описание компонента `quality.vue`

Компонент `quality.vue` находится в папке `pages` и отвечает за отображение страницы с информационно-разъяснительной кампанией о независимой оценке качества. Он включает в себя две секции: описание кампании и приглашение к участию в оценке. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `quality.vue`

- В шаблоне компонента определены две секции:
  - `quality-welcome__section` — содержит заголовки, описание независимой оценки качества, критерии оценки и ссылку на перечень информации о деятельности учреждения.
  - `quality-review__section` — содержит призыв к участию в оценке, ссылки на форму опроса, QR-код, изображение QR-кода и контактную информацию для вопросов.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов. Адаптивный дизайн применяется к изображению QR-кода.

```vue
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
```

## Описание компонента `university.vue`

Компонент `university.vue` находится в папке `pages` и отвечает за отображение страницы с информацией о программе «Университет третьего возраста». Он включает в себя секцию с описанием программы и текстовыми блоками, содержащими дополнительные сведения. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `university.vue`

- Импортируются данные из `@services/data`: `universityText` для текстовых блоков программы.
- В шаблоне компонента определена секция `university-welcome__section`, содержащая заголовки и динамически генерируемые текстовые блоки на основе данных `universityText`. Каждый блок включает подзаголовок и абзацы текста.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов, с акцентом на отступы и читаемость текста.

```vue
<script setup>
import { universityText } from '@services/data';
</script>
<template>
    <section class="university-welcome__section section">
        <h1 class="university-welcome__title font-h1">Программа обучения граждан старшего поколения «Университет третьего возраста»</h1>   
        <h2 class="university-welcome__subtitle font-h2 title">
            В целях повышение качества жизни граждан пожилого возраста, организации непрерывного процесса обучения 
            людей пожилого возраста  с целью получения новых знаний, создания благоприятных условий для самообразования и самосовершенствования,
            активации творческого потенциала и сохранения позитивного отношения к жизни, адаптации граждан пожилого возраста в современном обществе, 
            оказания содействия в сохранении и укреплении психического и физического состояния, повышения уровня активности пожилых людей на базе 
            БУ «Урайский комплексный центр социального обслуживания населения» функционирует программа обучения граждан старшего поколения «Университет третьего возраста»
            (далее Университет)
        </h2>
        <div class="university-welcome__textblock" v-for="group in universityText" >
          <h3 class="university-welcome__subtitle font-h3">{{ group.title }}</h3>
          <p v-for="text in group.text" class="university-welcome__text font-text_medium">
            {{ text }}
          </p>
        </div>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.university-welcome
    margin-bottom: 10px
    &__title
      margin-bottom: 20px
    &__subtitle
      width: 100%
      margin-bottom: 10px
    &__text
      margin-bottom: 10px
    &__textblock
      margin-bottom: 20px
</style>
```

## Описание компонента `inform.vue`

Компонент `inform.vue` находится в папке `pages` и отвечает за отображение страницы с информационными ссылками. Он включает в себя секцию с заголовком и списком ссылок, отображаемых через компонент `MainLink`. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `inform.vue`

- Импортируются данные из `@services/data`: `InformLinkData` для списка информационных ссылок.
- В шаблоне компонента определена секция `inform-welcome__section`, содержащая заголовок и динамически генерируемый список ссылок с использованием компонента `MainLink`.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов, с акцентом на отступы между элементами.

```vue
<script setup>
import { InformLinkData } from '@services/data';
</script>
<template>
    <section class="inform-welcome__section section">
        <h1 class="inform-welcome__title font-h1">Информация</h1>
        <MainLink
            v-for="item in InformLinkData"
            :main="item"
        />   
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.inform-welcome
    &__section
        .main-link__nuxt-link
            margin-bottom: 30px
    &__title
        margin-bottom: 20px
    &__subtitle
        width: 100%
        margin-bottom: 20px
</style>
```

## Описание компонента `contact.vue`

Компонент `contact.vue` находится в папке `pages` и отвечает за отображение страницы с контактной информацией. Он включает в себя две секции: общие контакты учреждения с карточками сотрудников и адреса корпусов. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `contact.vue`

- Импортируются данные из `@services/data`: `contactCardsData` для карточек контактов сотрудников.
- В шаблоне компонента определены две секции:
  - `contact-welcome__section` — содержит заголовок, описание учреждения и блок карточек сотрудников, отображаемых через компонент `CardsContact`.
  - `contact-address__section` — содержит заголовок и текстовые абзацы с адресами корпусов учреждения.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов, с акцентом на отступы и компоновку элементов.

```vue
<script setup>
import { contactCardsData } from '@services/data';
</script>
<template>
    <section class="contact-welcome__section section">
        <h1 class="contact-welcome__title font-h1">Контактная информация</h1>
        <p class="contact-welcome__text font-text_medium">
            <strong>
                Бюджетное учреждение Ханты-Мансийского автономного округа – Югры «Урайский комплексный центр социального обслуживания населения» (БУ «Урайский комплексный центр социального обслуживания населения»)
            </strong>
        </p>   
        <h2 class="contact-welcome__subtitle font-h2 title">Контакты Учреждения</h2>
        <div class="contact-welcome__cardblock">
            <CardsContact
                v-for="card in contactCardsData"
                :position="card.position"
                :name="card.name"
                :phone="card.phone"
                :email="card.email"
            />
        </div>
    </section>
    <section class="contact-address__section section">
        <h2 class="contact-address__subtitle font-h2 title">Наш адрес</h2>
        <p class="contact-address__text font-text_medium">
            628285, Ханты-Мансийский автономный округ – Югра, г. Урай, мкр.2, дом 24 (Главный корпус) ;
        </p>
        <p class="contact-address__text font-text_medium">
            628285, Ханты-Мансийский автономный округ – Югра, г. Урай, ул. Узбекистанская, 8 (Корпус 2)
        </p>
    </section>
</template>
<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'

.contact-welcome, .contact-address
    &__title
        margin-bottom: 20px
    &__text
        margin-bottom: 20px
    &__subtitle
        margin-bottom: 20px
    &__cardblock
        display: flex
        flex-direction: column
        gap: 10px

.contact-address__section
    min-height: max-content
</style>
```

## Описание компонента `quiz.vue`

Компонент `quiz.vue` находится в папке `pages` и отвечает за отображение страницы с опросом. Он включает в себя секцию с информацией об опросе, ссылками и QR-кодом для участия. Стили компонента определены с использованием препроцессора SASS.

### Объяснение кода в `quiz.vue`

- В шаблоне компонента определена секция `quiz-welcome__section`, содержащая заголовки, текстовые абзацы с информацией об опросе и ссылками на внешние ресурсы (сайт bus.gov.ru, опрос и мобильное приложение), а также изображение QR-кода.
- Стили определены с использованием SASS, включая импорт глобальных стилей, цветов и миксинов, с акцентом на центрирование изображения и адаптивность.

```vue
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
```

## Описание модуля `animation.js`

Модуль `animation.js`, расположенный в папке `animation`, отвечает за реализацию анимаций в проекте **Impulse**. Он использует библиотеку **GSAP** (GreenSock Animation Platform) для создания плавных и современных анимационных эффектов, таких как отображение/скрытие меню и модальных окон.

### Объяснение кода в `animation.js`

- Импортируется библиотека `gsap` для работы с анимациями.
- Определяются четыре функции для управления анимациями:
  - `showMenu(element)` — отображает меню с плавным горизонтальным появлением.
  - `hideMenu(element)` — скрывает меню с горизонтальным смещением и убирает его из отображения после завершения анимации.
  - `showModal(element)` — анимирует появление модального окна с эффектом увеличения и изменения прозрачности.
  - `hideModal(element, onComplete)` — анимирует скрытие модального окна с уменьшением и изменением прозрачности, выполняя функцию `onComplete` после завершения.
- Все анимации используют `duration: 0.5` и easing-функцию `power3.inOut` для создания естественного и плавного эффекта.

```javascript
import { gsap } from 'gsap';

export const showMenu = (element) => {
    gsap.set(element, { display: 'flex' });
    gsap.to(element, {
        duration: 0.5,
        x: 0,
        ease: 'power3.inOut'
    });
};

export const hideMenu = (element) => {
    gsap.to(element, {
        duration: 0.5,
        x: '-100%',
        ease: 'power3.inOut',
        onComplete: () => {
            gsap.set(element, { display: 'none' });
        }
    });
};

export const showModal = (element) => {
    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        { duration: 0.5, opacity: 1, scale: 1 }
    );
};

export const hideModal = (element, onComplete) => {
    gsap.to(element, {
        duration: 0.5,
        opacity: 0,
        scale: 0.9,
        onComplete
    });
};
```

## Описание модуля `data.js`

Модуль `data.js`, расположенный в папке `services`, содержит статические данные, используемые в проекте **Impulse** для отображения информации на страницах сайта. Он предоставляет структурированные объекты и массивы, которые включают данные для навигации, услуг, материалов, отделений, расписания, статистики, отзывов, партнеров, новостей и других разделов.

### Объяснение кода в `data.js`

- **navMenuItems**: Функция, возвращающая массив объектов для построения навигационного меню с URL и текстом пунктов.
- **ServicesData**: Массив объектов с данными для карточек услуг на главной странице (опрос, услуги, новости).
- **MaterialsData**: Массив полезных материалов с ссылками, изображениями и текстом (например, справочники, QR-коды, горячие линии).
- **departmentsData**: Данные о количестве свободных мест в отделениях учреждения с учетом структуры (отделения и подсекции).
- **schedule**: Расписание работы учреждения с указанием дней и времени.
- **StatisticData**: Статистика работы учреждения за 2024 год (количество услуг и обслуженных граждан).
- **MainData**: Основные карточки с информацией о волонтерах, благотворительности, профсоюзе и других аспектах деятельности.
- **ReviewData**: Отзывы клиентов с именами и текстом благодарности.
- **PartnersCardsData**: Данные о партнерах с ссылками и изображениями логотипов.
- **NewsData**: Список новостей с заголовками, датами, изображениями и содержимым.
- **ServicesTableData** и **ServicesLinkData**: Данные о формах социального обслуживания и перечень услуг по категориям.
- **universityText**: Информация об Университете третьего возраста (задачи, условия, организация работы).
- **InformLinkData**: Памятки и информация о горячих линиях, социальной поддержке и других услугах.
- **contactCardsData**: Контактные данные сотрудников учреждения с должностями, именами, телефонами и email.

```javascript
const data = {
    navMenuItems() {
        return [
            {
                url: '/',
                text: 'Главная'
            },
            {
                url: '/news',
                text: 'Новости'
            },
            {
                url: '/services',
                text: 'Услуги'
            },
            {
                url: '/quality',
                text: 'Независимая оценка качества'
            },
            {
                url: '/university',
                text: 'Университет тртьего возраста'
            },
            {
                url: '/inform',
                text: 'Информация'
            },
            {
                url: '/contacts',
                text: 'Контакты'
            },
        ]
    }
};

export default data;

export const ServicesData = [
    {
        url: '/quiz',
        type: 'quiz',
        title: 'Опрос',
    },
    {
        url: '/services',
        type: 'services',
        title: 'Услуги',
    },
    {
        url: '/news',
        type: 'news',
        title: 'Новости',
    },
];

export const MaterialsData = [
    {
        url: 'https://xn--j1agclit.xn--p1ai/upload/documents/dokumenty/%D0%90%D0%A1%D0%91%D0%9D%20%D0%A3%D0%A0%D0%90%D0%99%20%D0%A2%D0%95%D0%9B%D0%95%D0%A4%D0%9E%D0%9D%D0%9D%D0%AB%D0%99%20%D0%A1%D0%9F%D0%A0%D0%90%D0%92%D0%9E%D0%A7%D0%9D%D0%98%D0%9A.pdf',
        img: '',
        title: 'Единый телефонный справочник КУ Ханты-Мансийского автономного округа – Югры «Агентство социального благополучия населения»',
        text: ''
    },
    {
        url: 'https://bus.gov.ru/qrcode/rate/457295',
        img: 'https://укцсон.рф/upload/medialibrary/5c4/5c459aeb1d6ebc67031b2da92e6191b8.png',
        title: 'Чтобы оценить условия предоставления услуг нашего учреждения используйте QR-код или перейдите по ссылке ниже',
        text: ''
    },
    {
        url: 'https://svo.admhmao.ru/',
        img: 'https://укцсон.рф/upload/medialibrary/f7e/f7e72544c62aef32a827aabf558a3d77.png',
        title: '',
        text: ''
    },
    {
        url: 'https://deprb.admhmao.ru/profilaktika-moshennichestva/',
        img: 'https://укцсон.рф/upload/medialibrary/772/7726adcbdde11f6b0030513acce9f7ad.jpg',
        title: 'Профилактика мошенничества',
        text: ''
    },
    {
        url: '',
        img: '',
        title: 'Уважаемые жители города!',
        text: 'Напоминаем вам, что в Учреждении установлен пропускной режим, усилены меры антитеррористической безопасности - просим при посещении Учреждения иметь при себе документ, удостоверяющий личность.Благодарим за понимание!'
    },
    {
        url: 'tel:88003014443',
        img: 'https://укцсон.рф/upload/medialibrary/bb7/bb74f8349b4db869f24e342a13d99ea2.jpg',
        title: 'Единая горячая линия «Контакт-центр» Номер телефона горячей линии: 88003014443',
        text: ''
    },
    {
        url: 'tel:88003016888',
        img: 'https://укцсон.рф/upload/medialibrary/b54/b54fbd20ea069b555131e946b88750fa.jpg',
        title: 'Единая горячая линия по COVID-19 в Югре работает круглосуточно!',
        text: 'в том числе по вопросам проведения вакцинации отдельных категорий граждан: граждан 60 лет и старше; маломобильных граждан; граждан, имеющих хронические заболевания.Сотовый телефон: 89088901922Номер телефона горячей линии: 88003016888'
    },
];

export const departmentsData = [
    {
        name: 'Отделение социальной реабилитации детей с ограниченными возможностями',
        places: '0 мест',
        type: 'department'
    },
    {
        name: 'Отделение социальной реабилитации и абилитации:',
        places: { content: '0 мест', rowspan: 2 },
        type: 'department'
    },
    {
        name: 'Сектор дневного пребывания<br>Университет третьего возраста<br>«Университет третьего возраста»<br>Сектор реабилитации инвалидов трудоспособного возраста<br>Сектор социально-бытовой адаптации инвалидов (в том числе с проживанием (3 койко-места)',
        places: '0 мест',
        type: 'subsection'
    },
    {
        name: 'Стационарное отделение для несовершеннолетних:',
        places: { content: '0 мест', rowspan: 3 },
        type: 'department'
    },
    {
        name: 'Стационарное отделение для несовершеннолетних – 0 мест (круглосуточно)<br>Сектор дневного пребывания несовершеннолетних – 0 мест',
        places: '0 мест',
        type: 'subsection'
    },
];

export const schedule = [
    { day: "Пн", time: "09:00 – 18:00" },
    { day: "Вт–Пт", time: "09:00 – 17:00" },
    { day: "Перерыв", time: "13:00 – 14:00" },
    { day: "Выходные", time: "Сб, Вс" }
];

export const StatisticData = [
    {
        title: '358302',
        subtitle: 'Предоставлено социальных услуг'
    },
    {
        title: '3056',
        subtitle: 'Численность обслуженных граждан'
    },
];

export const MainData = [
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/b25/280_280_2/b2530ce6c70dd89f026cb04cf7fc5a1f.jpg',
    title: 'Волонтёры',
    date: 'Обновлено 22.03.2025 г.',
    contentBlocks: [
      {
        subtitle: 'Ответственное лицо за организацию добровольческой (волонтёрской) деятельности в учреждении',
        text: [
          'Балтина Наталья Сергеевна',
          'Директор',
          'Контактная информация:',
          'Телефон: 8 (34676) 20200 (Добавочный: 301)'
        ]
      },
      {
        subtitle: 'В рамках реализации технологии социальной работы с гражданами пожилого возраста «Алло, волонтёр» разработано:',
        text: [
          'Программа сопровождения пожилых людей',
          'Система мотивации волонтёров',
          'Методические рекомендации'
        ]
      }
    ],
    links: [
      { text: 'info@укцсон.рф', url: 'mailto:info@укцсон.рф' },
      { text: 'Сайт "Алло ВОЛОНТЁР"', url: 'https://allo-volonter.tilda.ws/' }
    ]
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/80f/280_280_2/80f23f81dd9df98d01d8e282aacc0d30.jpg',
    title: 'Благотворительность',
    date: 'Обновлено 22.03.2025 г.',
    contentBlocks: [
      {
        subtitle: 'Ознакомиться можно по данной ссылке',
        text: [
          'Наша организация активно сотрудничает с благотворительными фондами',
          'Ежегодно мы помогаем более 1000 нуждающихся'
        ]
      }
    ],
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/a0e/280_280_2/a0ebbb7bfdecd89b202cdcbe52b4a050.jpeg',
    title: 'Профсоюз',
    date: 'Обновлено 22.03.2025 г.',
    links: [
      { text: 'Коллективный договор', url: 'https://укцсон.рф/upload/documents/profsoyuz/kollektivnyj-dogovor-2018.doc' },
      { text: 'План мероприятий профсоюзной организации на 2025 год', url: 'https://укцсон.рф/upload/documents/profsoyuz/2025/%D0%9F%D0%BB%D0%B0%D0%BD%20%D0%BF%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7%D0%B0%202025.pdf' },
      { text: 'Отчёт работы профсоюзной организации', url: 'https://укцсон.рф/upload/documents/profsoyuz/2025/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BF%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7%D0%B0%202024.pdf' },
    ]
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/348/280_280_2/348b24501ec9022def6a893af0e25688.jpg',
    title: 'Книга достижений',
    date: 'Обновлено 22.03.2025 г.',
    links: [
        { text: 'Книгу достижений 2024 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2024/%D0%98%D1%82%D0%BE%D0%B3%D0%B8%20%D0%9A%D0%94%202024.pdf' },
        { text: 'Книгу достижений 2023 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2024/%D0%98%D1%82%D0%BE%D0%B3%D0%B8%202023.pdf' },
        { text: 'Книгу достижений 2022 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2022/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%D1%85%202022.pdf' },
        { text: 'Книгу достижений 2021 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2022/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%94%D0%BE%D1%81%D1%82%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%202021%20%D0%B3%D0%BE%D0%B4.pdf' },
        { text: 'Книгу достижений 2020 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2022/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%94%D0%BE%D1%81%D1%82%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%202020%20%D0%B3%D0%BE%D0%B4.pdf' },
        { text: 'Книгу достижений 2019 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2022/%D0%9A%D0%94%202019.pdf' },
        { text: 'Книгу достижений 2018 год', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/2022/%D0%9A%D0%94%202018.pdf' },
        { text: 'Книгу достижений 2015-2017 гг.', url: 'https://укцсон.рф/upload/documents/kniga-dostizheniy/kniga-dostizhenij-ukcson.pdf' },
    ]
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/435/280_280_2/435aa5eb871bfb956c04aea06cc592b6.jpg',
    title: 'СМИ о нас',
    date: 'Обновлено 22.03.2025 г.',
    links: [
      { text: 'Культурно-исторический центр г.Урай', url: 'http://vk.com/kic_uray' },
      { text: 'Югорская епархия Русской православной церкви (Московский патриархат)', url: 'http://yugorsk-eparhia.ru/2015-03-17-06-28-21/2913-2018-09-20-08-41-05.html' },
      { text: '«Социальная защита в России» — информационно-аналитический журнал издательского дома «ЕвроМедиа»', url: 'http://ugra.mk.ru/social/2018/09/19/kak-v-yugre-razvivaetsya-dvizhenie-vozrastnykh-volontyorov.html' },
      { text: 'РИЦ Югра', url: 'https://informugra.ru/news/press-relizy/uray/14962/' },
    ]
  },
  {
    img: 'https://укцсон.рф/upload/iblock/978/978d87f795671e03f46ab752301d29cb.png',
    title: 'В помощь негосударственным поставщикам социальных услуг',
    date: 'Обновлено 22.03.2025 г.',
    contentBlocks: [
      {
        subtitle: 'Уважаемые негосударственные поставщики социальных услуг, а также желающие стать поставщиками социальных услуг!',
        text: [
          'Управление социальной защиты населения по г. Ураю информирует Вас о работе «горячей линии» для разъяснения законодательства о порядке и условиях предоставления социальных услуг, правах и обязанностях поставщиков и получателей социальных услуг, а также по вопросам включения в реестр поставщиков социальных услуг, порядка и условиях оказания социальных услуг, механизмах финансирования.',
          'По всем интересующим вопросам Вы можете обратиться по телефону «горячей линии»:',
          '8 34676 3-42-26',
          'Телефон «горячей линии» работает ежедневно:',
          'Понедельник с 09:00 до 18:00;',
          'Вторник-пятница с 09:00 до 17:00 часов;',
          'С перерывом на обед с 13:00 до 14:00 часов. ',
        ]
      }
    ],
    links: [
      { text: 'Реестр поставщиков социальных услуг автономного округа', url: 'https://socportal.admhmao.ru/' },
    ]
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/1e1/280_280_2/1e1a8f2893d7cdc476a26b58acfc9469.jpg',
    title: 'Антикоррупционная деятельность',
    date: 'Обновлено 22.03.2025 г.',
    contentBlocks: [
      {
        subtitle: 'Уважаемые граждане!',
        text: [
          'В целях повышения уровня правосознания граждан Генеральной прокуратурой Российской Федерации разработан ряд тематических информационно-разъяснительных материалов:',
          '- памятки и буклеты с пояснениями законодательства в сферах, имеющих повышенный коррупционный риск, и обоснованием целесообразности некоррупционного поведения;',
          '- короткометражные видеоролики о негативных последствиях коррупционных действий;',
          '- компьютерный программный продукт с образовательным наполнением в виде игрового тестирования.',
          'Электронная версия материалов размещена на сайте Генеральной прокуратуры Российской Федерации в сети Интернет, в разделе «Противодействие коррупции».',
          'Также информирую, что аналогичные методические материалы опубликованы на официальном сайте «Противодействие коррупции Ханты-Мансийского автономного округа – Югры»',
        ]
      }
    ],
    links: [
      { text: 'Противодействие коррупции', url: 'https://epp.genproc.gov.ru/web/gprf/activity/combating-corruption' },
      { text: 'Противодействие коррупции Ханты-Мансийского автономного округа – Югры', url: 'https://corruption.admhmao.ru/metodicheskie-materialy/' },
    ]
  },
  {
    img: 'https://укцсон.рф/upload/resize_cache/iblock/88b/280_280_2/88b0bf9d5c8c5693cb0a74d1c544c549.jpg',
    title: 'Антитеррористическая деятельность',
    date: 'Обновлено 22.03.2025 г.',
    contentBlocks: [
      {
        subtitle: 'План мероприятий по антитеррористической безопасности на 2025 год',
      }
    ],
    links: [
      { text: 'План', url: 'https://укцсон.рф/upload/documents/antiterroristicheskaya-deyatelnost/2025/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%B0%D0%BD%D1%82%D0%B8%D1%82%D0%B5%D1%80%D0%BE%D1%80%20%D0%BD%D0%B0%202025%20%D0%B3%D0%BE%D0%B4.pdf' },
    ]
  },
];

export const ReviewData = [
    {
        title: 'Екатерина',
        contentBlocks: [
            {
                text: [
                    'Хочу выразить огромную благодарность Ларисе Юрьевне!!! Огромное Вам спасибо за прекрасный, душевный тренинг, после которого я почувствовала облегчение и сделала несколько важных выводов. Вы профессионал высочайшего уровня!!! Огромное Вам спасибо за прекрасный, душевный тренинг, после которого я почувствовала облегчение и сделала несколько важных выводов. Вы профессионал высочайшего уровня!!!'
                ]
            }
        ]
    },
    {
        title: 'Кичигина Галина',
        contentBlocks: [
            {
                text: [
                    'Благодарю за хорошую работу Елену Сергеевну! Она очень трудолюбивая, отзывчивый человек. Имеет большую выдержку с работой инвалидами с детства, а также пенсионного возраста. Многому научилась от нее, только жалко , что такой специалист работает только 0,5 ставки. Но она умудряется в свое время , научить , подскажет и поможет советом. Спасибо за все что она делает , за ее терпение с нами. Хотелось в 2020 году увидеть увидеть ее на полный рабочий день! Здоровья, счастья и успехов в творческой работе Елена Сергеевна! С Новым годом Вас и весь Ваш коллектив. И еще хочу благодарить Наталью Вячеславовну отдельно. Желаю ей на отлично защитить диплом, здоровья и личного счастья. Большое спасибо Анастасии Федоровне. С Новым годом и всех благ'
                ]
            }
        ]
    },
    {
        title: 'Николай',
        contentBlocks: [
            {
                text: [
                    'Моя дочь посещала курс реабилитации в Урайском отделении. Я остался очень доволен профессионализмом всех работников. Особенно хочу выделить специалиста в физио-кабинете, внимательная и компетентная женщина. Так же логопеда, реабилитолога, за их трудовую деятельность. И особенно педагога по музыке'
                ]
            }
        ]
    },
    {
        title: 'Семья Худяковых',
        contentBlocks: [
            {
                text: [
                    'Выражаю огромную благодарность всему коллективу детского отделения БУ УКЦСОН за профессионализм, доброе и внимательное отношение к моему сыну. Мой ребёнок всегда с удовольствием посещает центр. Придём к вам летом'
                ]
            }
        ]
    },
    {
        title: 'Мухамадеева Анастасия',
        contentBlocks: [
            {
                text: [
                    'Выражаю огромную благодарность сотрудникам отделения социальной реабилитации и абилитации детей с ограниченными возможностями! В отделении работают профессионалы своего дела. Доброжелательные и отзывчивые люди, которые относятся к детям и родителям с пониманием, успокоят, помогут советом. Здесь спокойная, умиротворяющая обстановка, интересные занятия. Мой сын со слезами уходит домой. А самое главное, после курса реабилитации я вижу результаты у ребенка! Хочется выразить благодарность каждому сотруднику за столь не легкий труд! Спасибо!'
                ]
            }
        ]
    },
    {
        title: 'Владимирова Наталья Алексеевна',
        contentBlocks: [
            {
                text: [
                    'Уважаемые сотрудники! Огромное Вам спасибо за помощь которую вы мне оказали, за тот вклад что Вы делаете для нас. Я многому научилась за время проживания у Вас. Желаю Вам крепкого здоровья, счастья. Пусть Вас хранит господь! С уважением к Вам Владимирова Наталья Алексеевна'
                ]
            }
        ]
    }
];

export const PartnersCardsData = [
    {
        url: "https://uraycgb.ru/",
        img: "https://укцсон.рф/upload/resize_cache/iblock/f64/288_144_1/f6472a1c5bfc698a5f56a4e4628bca9a.png",
    },
    {
        url: "https://gov.admhmao.ru/",
        img: "https://укцсон.рф/upload/resize_cache/iblock/1ec/288_144_1/1ec01015a900baa36aef5f11ed09ddd8.jpg",
    },
    {
        url: "https://uray.ru/",
        img: "https://укцсон.рф/upload/iblock/a60/a6065164c37940efe4c15bad5469ae65.png",
    },
    {
        url: "https://www.gosuslugi.ru/",
        img: "https://xn--j1agclit.xn--p1ai/upload/iblock/299/2992c75b4a8da7e964ad82ac3188de4f.jpg",
    },
    {
        url: "https://www.hmnpf.ru",
        img: "https://укцсон.рф/upload/resize_cache/iblock/63c/200_800_1/63cd6ddfe34e0284efdfd8251f2bc83b.jpg",
    },
    {
        url: "https://укцсон.рф/upload/resize_cache/iblock/2a1/288_144_1/2a19987c63a1b6652fb3eaedbc98f2a4.pnghttps://vashkontrol.ru/",
        img: "https://укцсон.рф/upload/iblock/b61/b617f32d42b8f281671ac353d89990c5.gif",
    },
    {
        url: "https://mfc.admhmao.ru/",
        img: "https://mfc.admhmao.ru/bitrix/templates/rpgu-theme/content/main-page/brsk/img/logo.png?1",
    },
    {
        url: "https://sfr.gov.ru/",
        img: "https://sfr.gov.ru/thm/pfrf2020/img/logo.svg",
    },
    {
        url: "https://fond-detyam.ru/detskiy-telefon-doveriya/reklamno-informatsionnye-materialy/",
        img: "https://fond-detyam.ru/upload/iblock/97b/zz1ov8aui2ham8h7gmq4ciazdx0h7zmh/fond.png",
    },
    {
        url: 'https://www.voi.ru/',
        img: 'https://www.voi.ru/img/logo/logo.png',
    },
    {
        url: 'https://asbnhmao.ru/',
        img: 'https://asbnhmao.ru/upload/images/o/logo3d.png',
    },
];

export const NewsData = [
    {
        id: 1,
        title: 'Уважаемые жители города!',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/310/600_400_1/31067f53bd22fc819417230ecbe17e10.jpg',
        date: '25 Марта 2025',
        contentBlocks: [
            {
                text: [
                    'Это текст второй новости. Здесь может быть ещё больше информации.'
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Профилактика детской смертности',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/c0d/600_400_1/c0d78e9ca521cb977aa8aee41e107d23.png',
        date: '20 Марта 2025',
        contentBlocks: [
            {
                text: [
                    'Среди причин детской смертности во всех возрастных группах лидируют травмы и отравления. Предлагаем ознакомиться с брошюрой по Профилактике детской смертности'
                ]
            }
        ],
        links: [
            { text: 'Перейти', url: '#' }
        ]
    },
    {
        id: 3,
        title: 'В преддверии Ежегодного Послания Президента Российской Федерации В.В.Путина Федеральному Собранию 2025 года',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/0c2/600_400_1/0c2d5df158782fae645756151a8f7be2.jpg',
        date: '17 Марта 2025',
        contentBlocks: [
            {
                text: [
                    'В преддверии Ежегодного Послания Президента Российской Федерации В.В.Путина Федеральному Собранию 2025 года, руководствуясь задачей информирования федеральных органов власти о достижениях регионов России в вопросах социальной поддержки семей и детей, редакция журнала «Экономическая политика России — 21 век» (учреждён 12.04.2007 года Минобрнауки России, Минэкономразвития России, Минпромторгом России и Росстатом, свидетельство о регистрации ПИ № ФС 77-27975) формирует на портале ГосИнформБюро сводную федеральную презентацию "Социальное развитие регионов России"'
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Приглашаем Вас приять участие в 6-м Международном фотоконкурсе «Мама и дети в национальных костюмах»',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/e81/600_400_1/e812dc78dccc8ebf6eb9472b0ac1932e.jpg',
        date: '17 Марта 2025',
        contentBlocks: [
            {
                text: [
                    'В преддверии Ежегодного Послания Президента Российской Федерации В.В.Путина Федеральному Собранию 2025 года, руководствуясь задачей информирования федеральных органов власти о достижениях регионов России в вопросах социальной поддержки семей и детей, редакция журнала «Экономическая политика России — 21 век» (учреждён 12.04.2007 года Минобрнауки России, Минэкономразвития России, Минпромторгом России и Росстатом, свидетельство о регистрации ПИ № ФС 77-27975) формирует на портале ГосИнформБюро сводную федеральную презентацию "Социальное развитие регионов России"'
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Приглашаем Вас приять участие в 6-м Международном фотоконкурсе «Мама и дети в национальных костюмах»',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/f21/600_400_1/f210da9519a8c48af13354e810808bdf.jpg',
        date: '19 Февраля 2025',
        contentBlocks: [
            {
                text: [
                    'В преддверии Ежегодного Послания Президента Российской Федерации В.В.Путина Федеральному Собранию 2025 года, руководствуясь задачей информирования федеральных органов власти о достижениях регионов России в вопросах социальной поддержки семей и детей, редакция журнала «Экономическая политика России — 21 век» (учреждён 12.04.2007 года Минобрнауки России, Минэкономразвития России, Минпромторгом России и Росстатом, свидетельство о регистрации ПИ № ФС 77-27975) формирует на портале ГосИнформБюро сводную федеральную презентацию "Социальное развитие регионов России"'
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Будьте бдительны! Псевдо-газета "Про здоровье"',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/d9c/600_400_1/d9c03b6c9e3019852ff6fb59572a9e2b.png',
        date: '13 Февраля 2025',
        contentBlocks: [
            {
                text: [
                    'В последние годы отмечается активизация мошеннических схем, ориентированных преимущественно на пожилое население. Злоумышленники используют различные каналы продвижения, в том числе печатные издания, якобы посвящённые медицине и поддержанию здоровья, чтобы внушить гражданам доверие и побудить их к покупке сомнительных товаров или услуг.',
                    'Одним из типичных примеров выступает псевдо-газета с громким названием «Про здоровье». Судя по её внешнему виду, может показаться, что перед читателем серьёзное издание о состоянии здоровья, профилактике и лечении различных заболеваний. Однако более подробное рассмотрение показывает отсутствие сведений о правообладателях, указания тиража, а также любой достоверной информации об издательстве.'
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Стартует весенняя сессия онлайн-занятий по финансовой грамотности для пенсионеров Тюменской области!',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/dd7/600_400_1/dd7ddf7e5b589ba1240b3532b79c7d3c.png',
        date: '6 Февраля 2025',
        contentBlocks: [
            {
                text: [
                    'С 05 февраля по 18 апреля 2025 года на сайте Банк России проходите бесплатные онлайн-курсы: безопасность онлайн-платежей, цифровой рубль, защита от мошенников и многое другое! Защитите себя от финансовых афер!'
                ]
            }
        ],
        links: [
            { text: 'Перейти', url: 'https://pensionfg.ru/' }
        ]
    },
    {
        id: 8,
        title: 'Приглашаем югорские семьи принять участие в окружном конкурсе «Семья – основа государства» в 2025 году',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/543/600_400_1/5433a3111d06c8076541bd9d74d4b2ad.jpg',
        date: '6 Февраля 2025',
        contentBlocks: [
            {
                text: [
                    'Конкурс в 2025 году проводится по шести номинациям:',
                    '«Сила семьи» – принимают участие семьи, имеющие опыт совместного преодоления трудностей и взаимной поддержки в период участия члена семьи в специальной военной операции;',
                    '«Наследие поколений» – принимают участие семьи, сохраняющие память о подвигах воинов (героев), сражавшихся в разные исторические периоды за Родину;',
                    '«Добрая семья» – принимают участие семьи, участвующие в добровольческом (волонтерском) движении, являющиеся примером формирования в семье активной социальной позиции;',
                    '«Большая семья – будущее Югры» – принимают участие многодетные семьи, воспитывающие детей на основе традиционных ценностей и проявляющие активную гражданскую позицию, являющиеся инициаторами и участниками социальных, творческих, исторических и иных проектов;'
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'С 01 по 23 февраля 2025 года Единая социально-психологическая служба «Телефон доверия» в Ханты-Мансийском автономном округе – Югре проводит акцию «Защитим эмоции вместе»',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/ed0/600_400_1/ed064808700e029219b4f71b2296f8e0.jpg',
        date: '1 Февраля 2025',
        contentBlocks: [
            {
                text: [
                    'Эмоции – это неотъемлемая часть человеческого опыта, их подавление или игнорирование может привести к стрессу, тревоге и депрессии. Эмоции важны для нашего психического и эмоционального благополучия, необходимы для сохранения здоровья и гармонии в отношениях с другими людьми, помогают понять себя.',
                    'Развитие навыков управления эмоциями улучшает эмоциональный интеллект, что, в свою очередь, помогает в профессиональной сфере и личных отношениях. Важно уметь выражать свои чувства, чтобы избежать эмоционального выгорания – это ключ к здоровым отношениям с собой и окружающими.'
                ]
            }
        ]
    },
    {
        id: 10,
        title: 'Всероссийский проект «Многодетная Россия»',
        img: 'https://укцсон.рф/upload/resize_cache/iblock/96b/600_400_1/96bc673758a6ff30d3fe1c48a12f7f1e.jpg',
        date: '30 Января 2025',
        contentBlocks: [
            {
                text: [
                    'Проект реализуется с 2020 года и направлен на формирование позитивного образа многодетных семей и решение задач по улучшению качества жизни семей с детьми и демографической ситуации в стране.',
                    'В рамках проекта реализуются два масштабных мероприятия: Форум многодетных семей «Многодетная Россия» и Всероссийский спортивный фестиваль «Здоровая семья – сильная Россия». К участию в мероприятиях на разных этапах привлечены представители исполнительной и законодательной власти федерального и регионального уровня, экспертное сообщество, многодетные семьи.',
                    'Всего в проекте примут участие более 80 регионов страны и более 3000 многодетных семей и 100 общественных организаций. Партнерами Фонда являются Объединение многодетных семей города Москвы, региональные органы исполнительной власти, общественные объединения многодетных семей в субъектах Российской Федерации'
                ]
            }
        ]
    }
];

export const ServicesTableData = [
    {
        name: 'Наименование структурного подразделения',
        places: 'Форма социального обслуживания',
        type: 'department'
    },
    {
        name: ' Отделение социальной реабилитации и абилитации',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
    {
        name: ' Отделение для несовершеннолетних',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
    {
        name: 'Отделение психологической помощи гражданам',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
    {
        name: 'Отделение социального сопровождения граждан',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
    {
        name: 'Социально-медицинское отделение',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
    {
        name: ' Отделение социальной реабилитации и абилитации детей с ограниченными возможностями',
        places: { content: 'Полустационарная', rowspan: 1 },
        type: 'subsection'
    },
];

export const ServicesLinkData = [
    {
        title: 'Социально-бытовые, направленные на поддержание жизнедеятельности граждан в быту',
        contentBlocks: [
            {
                text: [
                    '1. Содействие населению всех категорий и групп в получении им предусмотренных законодательством Российской Федерации льгот и преимуществ в социально-бытовом обеспечении.'
                ]
            },
            {
                text: [
                    '2. Предоставление клиентам учреждений социального обслуживания жилой площади, помещений для организации реабилитационных и лечебных мероприятий, лечебно-трудовой и учебной деятельности, культурного и бытового обслуживания.'
                ]
            },
            {
                text: [
                    '3. Предоставление клиентам учреждений социального обслуживания в пользование мебели согласно утвержденным нормативам.'
                ]
            },
            {
                text: [
                    '4. Приготовление и подача пищи клиентам учреждений, включая диетическое питание.'
                ]
            },
            {
                text: [
                    '5. Предоставление мягкого инвентаря (одежды, обуви, нательного белья и постельных принадлежностей) согласно утвержденным нормативам.'
                ]
            },
            {
                text: [
                    '6. Оказание социально-бытовых услуг индивидуально обслуживающего и гигиенического характера клиентам стационарных учреждений, неспособным по состоянию здоровья выполнять обычные житейские процедуры, в том числе такие действия, как встать с постели, лечь в постель, одеться и раздеться, умыться, принять пищу, пить, пользоваться туалетом или судном, передвигаться по дому и вне дома, ухаживать за зубами или челюстью, пользоваться очками или слуховыми аппаратами, стричь ногти, мужчинам — брить бороду и усы.'
                ]
            },
            {
                text: [
                    '7. Оказание помощи в написании и прочтении писем.'
                ]
            },
            {
                text: [
                    '8. Предоставление транспорта при необходимости перевоза клиентов стационарных учреждений социального обслуживания в учреждения для лечения, обучения, участия в культурных мероприятиях, если по состоянию здоровья или условиям пребывания им противопоказано пользование общественным транспортом.'
                ]
            },
            {
                text: [
                    '9. Организация ритуальных услуг (при отсутствии у умерших клиентов родственников или их нежелании заняться погребением).'
                ]
            },
            {
                text: [
                    '10. Покупка и доставка на дом продуктов питания, горячих обедов.'
                ]
            },
            {
                text: [
                    '11. Содействие в приготовлении пищи.'
                ]
            },
            {
                text: [
                    '12. Покупка и доставка на дом промышленных товаров первой необходимости.'
                ]
            },
            {
                text: [
                    '13. Помощь в уходе за детьми, другими нетрудоспособными или тяжело и длительно болеющими членами семьи.'
                ]
            },
            {
                text: [
                    '14. Доставка воды, топка печей, содействие в обеспечении топливом для проживающих в жилых помещениях без центрального отопления и (или) водоснабжения.'
                ]
            },
            {
                text: [
                    '15. Сдача вещей в стирку, химчистку, ремонт и обратная их доставка.'
                ]
            },
            {
                text: [
                    '16. Содействие в организации ремонта и уборки жилых помещений.'
                ]
            },
            {
                text: [
                    '17. Содействие в оплате жилья и коммунальных услуг.'
                ]
            },
            {
                text: [
                    '18. Содействие в организации предоставления услуг предприятиями торговли, коммунально-бытового обслуживания, связи и другими предприятиями, оказывающими услуги населению, в пределах района проживания.'
                ]
            },
            {
                text: [
                    '19. Сопровождение вне дома, в том числе к врачу.'
                ]
            },
            {
                text: [
                    '20. Создание условий отправления религиозных обрядов.'
                ]
            },
            {
                text: [
                    '21. Обеспечение сохранности вещей и ценностей, принадлежащих клиентам стационарных учреждений социального обслуживания.'
                ]
            },
            {
                text: [
                    'Содействие в направлении в стационарные учреждения'
                ]
            }
        ],
    },
    {
        title: 'Социально-медицинские, направленные на поддержание и улучшение здоровья граждан',
        contentBlocks: [
            {
                text: [
                    '1. Оказание помощи населению всех категорий и групп в получении предусмотренных законодательством Российской Федерации социально-медицинских услуг.'
                ]
            },
            {
                text: [
                    '2. Оказание или содействие в оказании клиентам учреждений медицинской помощи в объеме базовой программы обязательного медицинского страхования граждан Российской Федерации, целевых и территориальных программ обязательного медицинского страхования в государственных и муниципальных лечебно-профилактических учреждениях.'
                ]
            },
            {
                text: [
                    '3. Обеспечение ухода с учетом состояния здоровья, в том числе оказание санитарно-гигиенических услуг (обтирание, обмывание, гигиенические ванны, стрижка ногтей, причесывание).'
                ]
            },
            {
                text: [
                    '4. Содействие в проведении медико-социальной экспертизы.'
                ]
            },
            {
                text: [
                    '5. Содействие в проведении или проведение реабилитационных мероприятий социально-медицинского характера, в том числе в соответствии с индивидуальными программами реабилитации инвалидов.'
                ]
            },
            {
                text: [
                    '6. Оказание клиентам стационарных учреждений социального обслуживания первичной медико-санитарной помощи.'
                ]
            },
            {
                text: [
                    '7. Содействие в организации прохождения клиентами стационарных учреждений социального обслуживания диспансеризации.'
                ]
            },
            {
                text: [
                    '8. Госпитализация клиентов стационарных учреждений социального обслуживания в лечебно-профилактические учреждения, содействие в направлении по заключению врачей на санаторно-курортное лечение (в том числе на льготных условиях).'
                ]
            },
            {
                text: [
                    '9. Содействие в получении бесплатной зубопротезной (за исключением протезов из драгоценных металлов и других дорогостоящих материалов), протезно-ортопедической и слухопротезной помощи.'
                ]
            },
            {
                text: [
                    '10. Обеспечение техническими средствами ухода и реабилитации.'
                ]
            },
            {
                text: [
                    '11. Организация квалифицированного медицинского консультирования.'
                ]
            },
            {
                text: [
                    '12. Помощь в медико-социальной адаптации и реабилитации.'
                ]
            },
            {
                text: [
                    '13. Проведение в стационарном учреждении социального обслуживания первичного медицинского осмотра и первичной санитарной обработки.'
                ]
            },
            {
                text: [
                    '14. Организация медико-социального обследования.'
                ]
            },
            {
                text: [
                    '15. Оказание первой доврачебной помощи.'
                ]
            },
            {
                text: [
                    '16. Проведение процедур, связанных со здоровьем (прием лекарств, закапывание капель и др.).'
                ]
            },
            {
                text: [
                    '17. Оказание помощи в выполнении физических упражнений.'
                ]
            },
            {
                text: [
                    '18. Организация лечебно-оздоровительных мероприятий.'
                ]
            },
            {
                text: [
                    '19. Организация лечебно-трудовой деятельности.'
                ]
            },
            {
                text: [
                    '20. Консультирование по социально-медицинским вопросам (планирование семьи, гигиена питания и жилища, избавление от избыточного веса, вредных привычек, психосексуальное развитие и др.).'
                ]
            },
            {
                text: [
                    '21. Проведение санитарно-просветительной работы для решения вопросов возрастной адаптации.'
                ]
            },
            {
                text: [
                    '22. Организация экстренной медико-психологической помощи.'
                ]
            },
            {
                text: [
                    '23. Формирование и организация работы «групп здоровья» по медицинским показаниям и возрастным особенностям граждан.'
                ]
            },
            {
                text: [
                    '24. Социально-медицинский патронаж.'
                ]
            },
            {
                text: [
                    '25. Индивидуальная работа с несовершеннолетними, связанная с предупреждением появления вредных привычек и избавлением от них, подготовкой к созданию семьи и рождению ребенка.'
                ]
            },
            {
                text: [
                    '26. Содействие в обеспечении по заключению врачей лекарственными средствами и изделиями медицинского назначения.'
                ]
            },
            {
                text: [
                    '27. Содействие в госпитализации, сопровождение нуждающихся в лечебно-профилактические учреждения.'
                ]
            },
            {
                text: [
                    '28. Обучение родственников больных практическим навыкам общего ухода за ними.'
                ]
            },
            {
                text: [
                    '29. Оказание экстренной доврачебной помощи, вызов врача на дом, сопровождение обслуживаемых граждан в учреждения органов здравоохранения и посещение их в этих учреждениях в случае госпитализации.'
                ]
            },
            {
                text: [
                    '30. Проведение в соответствии с назначением лечащего врача медицинских процедур (подкожные и внутримышечные введения лекарственных препаратов, наложение компрессов, перевязка, обработка пролежней, раневых поверхностей, выполнение очистительных клизм, забор материалов для проведения лабораторных исследований, оказание помощи в пользовании катетерами и другими медицинскими изделиями) при наличии лицензии на медицинскую деятельность данного вида.'
                ]
            },
            {
                text: [
                    '31. Обучение членов семьи основам медико-психологических и социально-медицинских знаний для проведения реабилитационных мероприятий в домашних условиях.'
                ]
            },
            {
                text: [
                    '32. Наблюдение за состоянием здоровья (измерение температуры тела, артериального давления).'
                ]
            },
            {
                text: [
                    '33. Содействие в предоставлении нуждающимся детям услуг оздоровления и их направлении на санаторно-курортное лечение.'
                ]
            },
            {
                text: [
                    '34. Содействие семьям, имеющим детей с ограниченными умственными и физическими возможностями, в том числе детей-инвалидов, воспитываемых дома, в их лечении, обучении навыкам самообслуживания, общения, самоконтроля.'
                ]
            },
            {
                text: [
                    '35. Услуги по слухопротезированию'
                ]
            }
        ],
    },
    {
        title: "Предусматривающие коррекцию психологического состояния граждан для их адаптации в обществе",
        contentBlocks: [
            {
                "text": ["1. Социально-психологическое и психологическое консультирование."]
            },
            {
                "text": ["2. Психологическая диагностика и обследование личности."]
            },
            {
                "text": ["3. Психологическая коррекция."]
            },
            {
                "text": ["4. Психотерапевтическая помощь."]
            },
            {
                "text": ["5. Социально-психологический патронаж."]
            },
            {
                "text": ["6. Психологические тренинги."]
            },
            {
                "text": ["7. Проведение занятий в группах взаимоподдержки, клубах общения."]
            },
            {
                "text": ["8. Экстренная психологическая (в том числе по телефону) и медико-психологическая помощь."]
            },
            {
                "text": ["Оказание психологической помощи, в том числе беседы, общение, выслушивание, подбадривание, мотивация к активности, психологическая поддержка жизненного тонуса клиентов, обслуживаемых на дому."]
            }
        ]     
    },
    {
        title: 'Направленные на профилактику отклонений в поведении и аномалий личного развития клиентов социальных служб, формирование у них позитивных интересов, в том числе в сфере досуга, организацию их досуга, оказание содействия в семейном воспитании детей',
        contentBlocks: [
            {
                "text": ["1. Социально-педагогическое консультирование."]
            },
            {
                "text": ["2. Социально-педагогическая диагностика и обследование личности."]
            },
            {
                "text": ["3. Педагогическая коррекция."]
            },
            {
                "text": [
                    "4. Анимационные услуги (экскурсии, посещения театров, выставок, концерты художественной самодеятельности, праздники, юбилеи и другие культурные мероприятия).",
                    "Организация и проведение клубной и кружковой работы для формирования и развития интересов клиентов."
                ]
            },
            {
                "text": [
                    "5. Содействие в получении образования инвалидами с учетом их физических возможностей и умственных способностей.",
                    "Создание условий для дошкольного воспитания детей и получения образования по специальным программам.",
                    "Создание условий для получения школьного образования по специальным программам.",
                    "Создание условий для получения инвалидами среднего специального и профессионального образования."
                ]
            },
            {
                "text": [
                    "6. Услуги, связанные с социально-трудовой реабилитацией.",
                    "Создание условий для использования остаточных трудовых возможностей, участия в лечебно-трудовой деятельности.",
                    "Проведение мероприятий по обучению доступным профессиональным навыкам, восстановлению личностного и социального статуса."
                ]
            },
            {
                "text": ["7. Социально-педагогический патронаж."]
            },
            {
                "text": ["8. Обучение инвалидов пользованию техническими средствами реабилитации."]
            },
            {
                "text": ["9. Профессиональная реабилитация инвалидов, их профессиональное консультирование."]
            },
            {
                "text": [
                    "10. Содействие в получении образования и (или) профессии инвалидами в соответствии с их физическими возможностями и умственными способностями."
                ]
            },
            {
                "text": ["11. Содействие в организации обучения на дому детей-инвалидов."]
            },
            {
                "text": [
                    "12. Обучение основам домоводства выпускников учреждений социального обслуживания, проживающих самостоятельно.",
                    "(Приготовление пищи, мелкий ремонт одежды, уход за квартирой и т. д.)"
                ]
            },
            {
                "text": [
                    "13. Организация профессиональной ориентации, профессионального обучения, трудоустройства подростков."
                ]
            },
            {
                "text": [
                    "14. Содействие в организации труда подростков-инвалидов и членов их семей на дому, обеспечении сырьем и сбыте готовой продукции."
                ]
            },
            {
                "text": [
                    "15. Обучение детей-инвалидов навыкам самообслуживания, поведения в быту и общественных местах, самоконтролю, навыкам общения и другим формам жизнедеятельности."
                ]
            },
            {
                "text": [
                    "16. Обучение родителей детей с ограниченными возможностями, в том числе детей-инвалидов, основам их реабилитации в домашних условиях."
                ]
            },
            {
                "text": [
                    "17. Организация обучения детей и подростков, находящихся в стационарных учреждениях социального обслуживания, по школьной программе."
                ]
            },
            {
                "text": [
                    "18. Организация обучения детей-инвалидов с нарушениями слуха, их родителей и других заинтересованных лиц языку жестов."
                ]
            },
            {
                "text": ["Услуги по переводу на язык жестов."]
            }
        ]
    },    
    {
        title: 'Социально-правовые, направленные на поддержание или изменение правового статуса, ока­зание юридической помощи, защиту законных прав и интересов граждан',
        contentBlocks: [
            {
                "text": ["1. Оказание помощи в оформлении и восстановлении документов получателей социальных услуг."]
            },
            {
                "text": ["2. Оказание помощи в получении юридических услуг, в том числе бесплатно."]
            },
            {
                "text": ["3. Оказание помощи в защите прав и законных интересов получателей социальных услуг."]
            }
        ],
    },
    {
        title: 'Социально-трудовые, направленные на оказание помощи в трудоустройстве и в решении других проблем, связанных с трудовой адаптацией',
        contentBlocks: [
            {
                "text": [
                    "1. Проведение мероприятий по использованию трудовых возможностей и содействие обучению доступным профессиональным навыкам."
                ]
            },
            {
                "text": [
                    "2. Оказание помощи в трудоустройстве (помощь в оформлении документов)."
                ]
            }
        ]
    },
    {
        title: "Услуги в целях повышения коммуникативного потенциала получателей социальных услуг, имеющих ограничения жизнедеятельности, в том числе детей-инвалидов",
        contentBlocks: [
            {
                "text": [
                    "1. Обучение инвалидов (детей-инвалидов) пользованию средствами ухода и техническими средствами реабилитации."
                ]
            },
            {
                "text": [
                    "2. Проведение социально-реабилитационных мероприятий в сфере социального обслуживания."
                ]
            },
            {
                "text": [
                    "3. Обучение навыкам поведения в быту и общественных местах."
                ]
            },
            {
                "text": [
                    "4. Оказание помощи в обучении навыкам компьютерной грамотности."
                ]
            }
        ]
    },    
    {
        title: 'Срочные социальные услуги',
        contentBlocks: [
            {
                "text": [
                    "1. Содействие в получении временного жилого помещения."
                ]
            },
            {
                "text": [
                    "2. Содействие в получении юридической помощи в целях защиты прав и законных интересов получателей социальных услуг."
                ]
            },
            {
                "text": [
                    "3. Содействие в получении экстренной психологической помощи с привлечением к этой работе психологов и священнослужителей."
                ]
            },
            {
                "text": [
                    "4. Содействие в сборе и оформлении документов для признания граждан нуждающимися в социальном обслуживании, определения права на меры социальной поддержки."
                ]
            }
        ]
    },
];

export const universityText = [
    {
        title: "Основные задачи деятельности Университета:",
        text: [
            " - Повышение уровня коммуникативных навыков пожилых людей.",
            " - Содействие пожилым людям в овладении современными техническими средствами и информационными технологиями.",
            " - Пропаганда здорового образа жизни.",
            " - Проведение занятий по семейной, возрастной психологии, психологии общения.",
            " - Организация культурно-просветительской и социально-досуговой работы с пожилыми людьми.",
            " - Повышение правовой и финансовой грамотности пожилых людей.",
            " - Обучение мерам безопасности граждан пожилого возраста в быту и вне дома.",
            " - Поддержка постоянных деловых контактов с ветеранскими, религиозными, общественными и другими организациями для организации просветительской деятельности с пожилыми людьми."
        ]
    },
    {
        title: "Условия предоставления услуг в Университете",
        text: [
          "В Университет зачисляются граждане пожилого (пенсионного) возраста. К слушателям относятся женщины старше 55 лет (пенсионеры старше 50 лет) и мужчины старше 60 лет (пенсионеры старше 55 лет). Зачисление осуществляется на основании индивидуальной программы предоставления социальных услуг, личного письменного заявления и выбора факультета для обучения.",
          "Социальные услуги предоставляются бесплатно на срок до 6 месяцев в год. По истечении указанного срока возможно получение услуг за плату, частичную плату или бесплатно в зависимости от уровня доходов.",
          "Решение о зачислении в Университет оформляется приказом директора учреждения."
        ]
    },
    {
      title: "Организация работы Университета",
      text: [
        "Место проведения занятий – учреждение, а также базы партнеров Университета."
      ]
    },
    {
      text: [
        "Занятия проходят согласно плану, утвержденному директором учреждения.",
        "Каждый курс имеет программу обучения и рассчитан на определенный период времени (до 3 месяцев).",
        "План может корректироваться в течение курса в соответствии с пожеланиями слушателей и имеющимися ресурсами."
      ]
    },
    {
      text: [
        "Программы занятий включают лекции, семинары, экскурсии, тренинги, практикумы и другие формы обучения.",
        "Занятия могут проводиться как в групповой, так и в индивидуальной форме.",
        "Продолжительность одного занятия составляет не более двух академических часов."
      ]
    },
    {
      text: [
        "Наряду со штатными специалистами учреждения учебный процесс могут осуществлять работники и специалисты различных организаций и учреждений, вовлеченных в проект."
      ]
    },
    {
      text: [
        "Университет осуществляет свою деятельность по 10 направлениям (факультетам):",
        "1. Информационные технологии и компьютерная грамотность.",
        "2. Здоровье и физическая активность.",
        "3. Правовые знания.",
        "4. Финансовая грамотность.",
        "5. Волонтеры серебряного возраста.",
        "6. Социальный туризм.",
        "7. Культура и искусство.",
        "8. Психология.",
        "9. Растениеводство.",
        "10. Творческое развитие личности.",
        "11. Связь поколений."
      ]
    },
    {
      text: [
        "Слушатель может посещать несколько факультетов."
      ]
    },
    {
      text: [
        "Группа слушателей на факультете составляет не менее 5 человек."
      ]
    }
] 


export const InformLinkData = [
    {
        title: 'Памятки телефонов горячих линий Ханты-Мансийского автономного округа – Югры и г. Урай',
        contentBlocks: [
            {
                text: [
                    ''
                ]
            }
        ],
        links: [
            { 
                text: 'Памятки телефонов горячих линий Ханты-Мансийского автономного округа – Югры', 
                url: 'https://xn--j1agclit.xn--p1ai/upload/documents/informatsiya/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B8%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D1%85%20%D0%BB%D0%B8%D0%BD%D0%B8%D0%B9%20%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%D0%B0%20%E2%80%93%20%D0%AE%D0%B3%D1%80%D1%8B.pdf' 
            },
            { 
                text: 'Памятка телефонов города Урай', 
                url: 'https://xn--j1agclit.xn--p1ai/upload/documents/informatsiya/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B8%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D1%85%20%D0%BB%D0%B8%D0%BD%D0%B8%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%20%D0%A3%D1%80%D0%B0%D0%B9%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.pdf' 
            },
        ]
    },
    {
        title: 'Телефонные номера вызова экстренных оперативных служб, действующих на территории Ханты-Мансийского автономного округа – Югры',
        contentBlocks: [
            {
                subtitle: 'с мобильных телефонов:',
                text: [
                    '«112» единый номер вызова экстренных оперативных служб;',
                    '«101» пожарная охрана;',
                    '«102» полиция;',
                    '«103» скорая помощь;',
                    '«104» служба газовой сети',
                ]
            },
            {
                subtitle: 'со стационарных телефонов:',
                text: [
                    '«112» единый номер вызова экстренных оперативных служб;',
                    '«01» пожарная охрана;',
                    '«02» полиция;',
                    '«03» скорая помощь;',
                    '«04» служба газовой сети',
                ]
            },
        ],
    },
    {
        title: 'Памятки социальной поддержки',
        links: [
            { 
                text: 'Памятка о мерах социальной поддержки, воспитывающих детей-инвалидов', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B0%20%D0%BE%20%D0%BC%D0%B5%D1%80%D0%B0%D1%85%20%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8,%20%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-%D0%B8%D0%BD%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2.docx' 
            },
            { 
                text: 'Памятка о мерах социальной поддержки для инвалидов', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B0%20%D0%BE%20%D0%BC%D0%B5%D1%80%D0%B0%D1%85%20%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%BD%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2.docx' 
            },
            { 
                text: 'Памятка Штаба действий в интересах инвалидов', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B0%20%D0%A8%D1%82%D0%B0%D0%B1%D0%B0%20%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B9%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B0%D1%85%20%D0%B8%D0%BD%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2.docx' 
            }
        ]
    },
    {
        title: 'Информация о порядке выдачи заключения о нуждаемости по состоянию здоровья в постоянном постороннем уходе (помощи, надзоре) отца, матери, жены, родного брата, родной сестры, дедушки, бабушки или усыновителя граждан, призываемых на военную службу (военнослужащих, проходящих военную службу по контракту) и на военную службу по мобилизации',
        links: [
            { 
                text: 'Подробнее о порядке получения заключения', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/2024/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BE%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B5%20%D0%B2%D1%8B%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%20%D0%BD%D1%83%D0%B6%D0%B4%D0%B0%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%BF%D0%BE%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8E%20%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D1%8F.pdf',
            }
        ]
    },
    {
        title: 'Модельный порядок изоляции (разделения потоков) членов семей с не тяжёлой степенью заболевания и контактных для предупреждения распространения новой корона вирусной инфекции',
        links: [
            { 
                text: 'Смотреть полный Порядок изоляции', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D0%B8%D0%B7%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8%20%D0%BF%D1%80%D0%B8%20COVID-19.pdf',
            }
        ]
    },
    {
        title: 'Программа поддержки семей "Расту в Югре"',
        links: [
            { 
                text: 'Смотреть подробную Памятку', 
                url: 'https://укцсон.рф/upload/documents/informatsiya/pamyatkarastuvugre.pdf',
            }
        ]
    },
    {
        title: 'Уважаемые жители города Урай и Ханты-Мансийского автономного округа – Югры! С февраля 2020 года БУ «Урайский комплексный центр социального обслуживания населения» предлагает воспользоваться инновационной услугой «ДеДсаД сад для пожилых граждан»',
        contentBlocks: [
            {
                text: [
                    'Уважаемые жители города Урай и Ханты-Мансийского автономного округа – Югры!',
                    'С февраля 2020 года БУ «Урайский комплексный центр социального обслуживания населения» предлагает воспользоваться инновационной услугой «Дедсад для пожилых граждан».'
                ]
            },
            {
                text: [
                    'Если вам не на кого оставить пожилых родителей, инвалидов, а обстоятельства вынуждают целый день находиться на работе, предлагаем воспользоваться новой услугой в нашем Учреждении.'
                ]
            },
            {
                subtitle: 'Условия в нашем центре:',
                text: [
                    '- Большая благоустроенная территория для прогулок',
                    '- Комплекс медицинских услуг: соблюдение назначений врача, контроль артериального давления, пульса, термометрия',
                    '- АФК и оздоровительные процедуры',
                    '- Организация досуга: арт-терапия, рисование, лепка, рукоделие, настольные игры',
                    '- Проведение праздников, концертов, занятия по интересам, экскурсии',
                    '- Удобная транспортная доступность'
                ]
            },
            {
                subtitle: 'Контакты для записи:',
                text: [
                    'г. Урай, мкрн. 2, д. 24',
                    'Телефон: 8 (34676) 2-02-00 (доб. 315, 316)'
                ]
            }
        ],
    },
];

export const contactCardsData = [
    {
      id: 1,
      position: "Директор",
      name: "Балтина Наталья Сергеевна",
      phone: "8 (34676) 2-02-00 (Добавочный 301)",
      email: "BaltinaNS@admhmao.ru"
    },
    {
      id: 2,
      position: "Приёмная",
      name: "Шакирова Ирина Анатольевна",
      phone: "8 (34676) 2-02-00 (Добавочный 303)",
      email: "UrayKCSON@admhmao.ru"
    },
    {
      id: 3,
      position: "Заместитель директора",
      name: "Костенко Виктория Владимировна",
      phone: "8 (34676) 2-02-00 (Добавочный 312)",
      email: "KostenkoVV@admhmao.ru"
    },
    {
      id: 4,
      position: "Заместитель директора",
      name: "Скороходов Александр Николаевич",
      phone: "8 (34676) 2-02-00 (Добавочный 355)",
      email: "SkorohodovAN@admhmao.ru"
    },
    {
      id: 5,
      position: "Главный бухгалтер",
      name: "Тимшина Вера Николаевна",
      phone: "8 (34676) 2-02-00 (Добавочный 353)",
      email: "DashkovaNV@admhmao.ru"
    },
    {
      id: 6,
      position: "Отделение информационно-аналитической работы, заведующий отделением",
      name: "Скороходова Екатерина Александровна",
      phone: "8 (34676) 2-02-00 (Добавочный 374)",
      email: "SkorokhodovaEA@admhmao.ru"
    },
    {
      id: 7,
      position: "Отделение социального сопровождения граждан, заведующий отделением",
      name: "Лукашевич Ирина Викторовна",
      phone: "8 (34676) 2-02-00 (Добавочный 311)",
      email: "LukashevichIV@admhmao.ru"
    },
    {
      id: 8,
      position: "Социально-медицинское отделение, заведующий отделением",
      name: "Носкова Елена Владимировна",
      phone: "8 (34676) 2-02-00 (Добавочный 373)",
      email: "NoskovaEV@admhmao.ru"
    },
    {
      id: 9,
      position: "Отделение социальной реабилитации и абилитации детей с ограниченными возможностями, заведующий отделением",
      name: "Морохова Марина Валерьевна",
      phone: "8 (34676) 2-02-00 (Добавочный 317)",
      email: "ChalyshevaMV@admhmao.ru"
    },
    {
      id: 10,
      position: "Отделение социальной реабилитации и абилитации, заведующий отделением",
      name: "Каштанова Анастасия Федоровна",
      phone: "8 (34676) 2-02-00 (Добавочный 315)",
      email: "KashtanovaAF@admhmao.ru"
    },
    {
      id: 11,
      position: "Стационарное отделение для несовершеннолетних, заведующий отделением",
      name: "Бижанова Айжан Умурзаковна",
      phone: "8 (34676) 2-02-00 (Добавочный 360)",
      email: "BizhanovaAU@admhmao.ru"
    },
    {
      id: 12,
      position: "Отделение психологической помощи гражданам, заведующий отделением",
      name: "Тюгаева Ольга Васильевна",
      phone: "8 (34676) 2-02-00 (Добавочный 364)",
      email: "KorelinaJS@admhmao.ru"
    },
    {
      id: 13,
      position: "Сектор реабилитации инвалидов трудоспособного возраста",
      name: "Тягай Надежда Михайловна",
      phone: "8 (34676) 2-02-00 (Добавочный 328)",
      email: "TyagaiNM@admhmao.ru"
    },
    {
      id: 14,
      position: "Юрисконсульт",
      name: "Новгородова Оксана Михайловна",
      phone: "8 (34676) 2-02-00 (Добавочный 304)",
      email: "NovgorodovaOM@admhmao.ru"
    },
    {
      id: 15,
      position: "Специалист по кадрам",
      name: "",
      phone: "8 (34676) 2-02-00 (Добавочный 305)",
      email: "VladimirovaTV@admhmao.ru"
    },
    {
      id: 16,
      position: "Специалист по охране труда",
      name: "Капустина Дарья Андреевна",
      phone: "8 (34676) 2-02-00 (Добавочный 356)",
      email: "UrayKCSON@admhmao.ru"
    },
    {
      id: 17,
      position: "Специалист по пожарной профилактике",
      name: "Капустина Дарья Андреевна",
      phone: "8 (34676) 2-02-00 (Добавочный 302)",
      email: "UrayKCSON@admhmao.ru"
    },
    {
      id: 18,
      position: "Заведующий хозяйством",
      name: "Мехтиева Анастасия Михайловна",
      phone: "8 (34676) 2-02-00 (Добавочный 368)",
      email: "UrayKCSON@admhmao.ru"
    }
];
```

## Описание конфигурационного файла `nuxt.config.js`

Файл `nuxt.config.js` является основным конфигурационным файлом проекта **Impulse**, созданного на базе фреймворка **Nuxt 3**. Он определяет настройки приложения, включая совместимость, модули, псевдонимы путей, конфигурацию SVGO для работы с иконками, а также метаданные для заголовка страницы.

### Объяснение кода в `nuxt.config.js`

- **`compatibilityDate`**: Устанавливает дату совместимости (`2024-11-01`), чтобы обеспечить корректную работу с версиями Nuxt.
- **`devtools`**: Отключает инструменты разработчика (`enabled: false`) в приложении.
- **`modules`**: Подключает модуль `nuxt-svgo` для оптимизации и автоматического импорта SVG-иконок.
- **`alias`**: Определяет псевдонимы путей для упрощения импорта:
  - `@components` — путь к папке `components`.
  - `@services` — путь к папке `services`.
  - `@color` — файл стилей `color.sass` для цветовых переменных.
  - `@global` — файл стилей `global.sass` для глобальных стилей.
  - `@fonts` — файл стилей `fonts.sass` для шрифтов.
  - `@mixin` — файл стилей `mixin.sass` для SASS-миксинов.
- **`svgo`**: Настройки модуля `nuxt-svgo`:
  - `autoimportPath` — путь к папке с SVG-иконками (`./assets/icons/`).
  - `componentPrefix` — префикс для компонентов иконок (`Icon`).
- **`app.head.title`**: Устанавливает заголовок страницы приложения, соответствующий полному названию учреждения.

```javascript
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['nuxt-svgo'],
  alias: {
    '@components': resolve(__dirname, './components'),
    '@services': resolve(__dirname, './services'),
    '@color': resolve(__dirname, './assets/styles/color.sass'),
    '@global': resolve(__dirname, './assets/styles/global.sass'),
    '@fonts': resolve(__dirname, './assets/styles/fonts.sass'),
    '@mixin': resolve(__dirname, './assets/styles/mixin.sass'),
  },
  svgo: {
    autoimportPath: "./assets/icons/",
    componentPrefix: "Icon"
  },
  app: {
    head: {
      title: 'Бюджетное учреждение Ханты-Мансийского автономного округа - Югры. "Урайский комплексный центр социального обслуживания населения"'
    }
  }
})
```

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
