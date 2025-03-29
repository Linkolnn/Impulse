<!-- components/Modal.vue -->
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