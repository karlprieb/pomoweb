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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100|Source+Code+Pro:200');

#app {
  font-family: 'Josefin Sans', sans-serif;

  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background: rgb(241,255,226);
  background: linear-gradient(to bottom,  rgba(241,255,226,1) 0%,rgba(255,173,182,1) 100%);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
}

.header {
  margin-top: 20px;

  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: 100;

  margin: 30px 0 0;

  color: rgba(0,0,0,.5);
}
</style>
