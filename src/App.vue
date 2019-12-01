<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #E5F2ED;
    color:#D48B92;
    font-weight: bold;
  }

  #app {
    font-family: 'Amatic SC', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
