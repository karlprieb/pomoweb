<template>
<div class="counter">
  <section class="timer">
    <span class="minutes">{{minutes}}</span>
    <span class="middle">:</span>
    <span class="seconds">{{seconds}}</span>
  </section>
  <section class="buttons">
    <button v-if="!running" class="start button" @click="start(pomoTimer)">
      <span>Start</span>
    </button>
    <button v-if="running" class="start button" @click="stop()">
      <span>Stop</span>
    </button>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      running: false,
      pomoTimer: 1500,
      shortTimer: 300,
      longTimer: 600,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    padTime () {
      if (this.minutes < 10) {
        this.minutes = `0${this.minutes}`
      }
      if (this.seconds < 10) {
        this.seconds = `0${this.seconds}`
      }
    },
    setCounter (counter) {
      this.minutes = Math.floor(counter / 60)
      this.seconds = counter - this.minutes * 60
      this.padTime()
    },
    runCounter (counter) {
      if (this.running) {
        if (this.minutes != 0 || this.seconds != 0) {
          setTimeout(() => {
            console.log('timeout', this.seconds)
            if (this.seconds == 0) {
              this.minutes -= 1
              this.seconds = 59
              this.padTime()
            } else {
              this.seconds -= 1
              this.padTime()
            }
            this.runCounter(counter)
          }, 1000)
        }
      }
    },
    start (counter) {
      this.running = true
      this.runCounter(counter)
    },
    stop () {
      this.running = false
    }
  },
  mounted () {
    this.setCounter(this.pomoTimer)
  }
}
</script>

<style scoped>
.timer {
  font-family: 'Source Code Pro', monospace;
  font-size: 5rem;

  display: flex;

  margin: 30px 0;

  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .3);

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
  width: 80px;
  height: 80px;

  cursor: pointer;

  border: 1px solid #fff;
  border-radius: 50px;
  outline: none;
  background: rgba(255, 255, 255, .2);
}
.button:hover {
  background: rgba(255, 255, 255, .7);
}

.button span {
  font-size: 1rem;
  font-weight: 100;

  text-transform: uppercase;

  color: rgba(0, 0, 0, .8);
}
</style>
