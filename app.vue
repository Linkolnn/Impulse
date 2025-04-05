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

p, strong, h2
  word-break: break-all

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
