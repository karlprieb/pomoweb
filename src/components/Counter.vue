<template>
<div class="counter">
  <section class="timer">
    <span class="minutes">{{minutes}}</span>
    <span class="middle">:</span>
    <span class="seconds">{{seconds}}</span>
  </section>
  <section class="buttons">
    <button class="start button">
      <span>Start</span>
    </button>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      pomoTimer: 1500,
      shortTimer: 300,
      longTimer: 600,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    setCounter (counter) {
      this.minutes = Math.floor(counter / 60)
      this.seconds = counter - this.minutes * 60
    },
    start (counter) {
      setTimeout(() => {
        counter -= 1;
      }, 1000)
    }

  },
  mounted () {
    this.setCounter(this.pomoTimer)
  }
}
</script>

<style scoped>
.counter {
  margin-top: 30px;
}
.timer {
  color: #fff;
  font-size: 5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.middle {
  position: relative;
  top: -.6rem;
}
.buttons {
  display: flex;
  justify-content: center;
}
.button {
  border: 1px solid #fff;
  border-radius: 50px;
  background: rgba(255, 255, 255, .2);
  width: 80px;
  height: 80px;
}
.button span {
  text-transform: uppercase;
  font-size: 1rem;
  color: rgba(0, 0, 0, .8);
  font-weight: 100;
}
</style>
