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
