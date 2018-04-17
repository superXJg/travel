<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'fade',

  }
</script>

<style lang='less' scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
