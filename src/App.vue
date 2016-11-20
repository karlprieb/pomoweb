<template>
  <div id="app">
    <header class="header">
      <logo></logo>
      <h1 class="title">PomoWeb</h1>
    </header>
    <main>
      <counter></counter>
    </main>
  </div>
</template>

<script>
import 'normalize.css'
import './assets/fonts.css'
import './assets/global.css'
import Logo from './components/Logo'
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    Logo,
    Counter
  }
}
</script>

<style>
.header {
  margin-top: 5vh;

  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: 100;

  margin: 2vh 0 0;

  color: rgba(0,0,0,.5);
}
</style>
