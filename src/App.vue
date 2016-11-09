<template>
  <div id="app">
    <header>
      <logo></logo>
      <h1>PomoWeb</h1>
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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,300');
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  background: rgb(241,255,226); /* Old browsers */
  background: linear-gradient(to bottom,  rgba(241,255,226,1) 0%,rgba(255,173,182,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
h1 {
  font-weight: 100;
  color: rgba(0,0,0,0.5);
  margin: 30px 0 0;
  font-size: 3rem;
}
header {
  margin-top: 20px;
  text-align: center;
}
</style>
