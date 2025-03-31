<template>
    <div class="contact-card">
        <div class="contact-card__header">
            <h3 class="contact-card__position font-h3">{{ position }}</h3>
        </div>
        <div class="contact-card__body">
            <p class="contact-card__name font-text_large">{{ name }}</p>
            <p class="contact-card__phone font-text_medium">
                <strong>Контактный телефон:</strong> {{ phone }}
            </p>
            <p class="contact-card__email font-text_medium">
                <strong>E-Mail:</strong> {{ email }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps(['position', 'name', 'phone', 'email']);
</script>

<style lang="sass">
@import '@color'
@import '@mixin'
@import '@global'


.contact-card
    width: 100%
    border-bottom: 4px solid $red
    padding: 20px
    
    &__position
        color: $black
        margin-bottom: 15px
        
    &__name
        margin-bottom: 10px
        font-weight: 500
        
    &__phone, &__email
        margin-bottom: 8px
        
    strong
        font-weight: 600
</style>