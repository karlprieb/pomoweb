<template>
<div class="counter">
  <section class="timer">
    <span class="minutes">{{minutes}}</span>
    <span class="middle">:</span>
    <span class="seconds">{{seconds}}</span>
  </section>
  <section class="buttons">
    <button v-if="!running" class="start button" @click="start()">
      <span>Start</span>
    </button>
    <button v-else class="start button" @click="stop()">
      <span>Stop</span>
    </button>
    <button v-if="running" class="start button" @click="reset()">
      <span>Reset</span>
    </button>
  </section>
</div>
</template>

<script>
const audio = new Audio('../../static/audio/arpeggio.mp3')

export default {
  data () {
    return {
      pomodoro: 15,
      shortBreak: 3,
      longBreak: 9,
      pomodoroCounter: 0,
      current: null,
      next: null,
      minutes: 0,
      seconds: 0,
      running: false,
      timer: null
    }
  },
  methods: {
    padTime () {
      if (this.minutes.toString().length < 2) {
        this.minutes = `0${this.minutes}`
      }
      if (this.seconds.toString().length < 2) {
        this.seconds = `0${this.seconds}`
      }
    },
    setCounter (counter) {
      this.minutes = Math.floor(counter / 60)
      this.seconds = counter - this.minutes * 60
      this.padTime()
    },
    runCounter () {
      this.timer = setInterval(() => {
        if (this.minutes != 0 || this.seconds != 0) {
          if (this.seconds == 0) {
            this.minutes -= 1
            this.seconds = 59
            this.padTime()
          } else {
            this.seconds -= 1
            this.padTime()
          }
        } else {
          if (this.pomodoroCounter < 4) {
            this.pomodoroCounter += 1
            this.running = false
            clearInterval(this.timer)
            this.setCounter(this.next)

            if (this.current === this.pomodoro) {
              this.current = this.shortBreak
              this.next = this.pomodoro
            } else {
              this.current = this.pomodoro
              this.next = this.shortBreak
            }
          } else {
            this.pomodoroCounter = 0
            this.running = false
            clearInterval(this.timer)
            this.setCounter(this.longBreak)
            this.current = this.longBreak
            this.next = this.pomodoro
          }

          audio.play()
        }
      }, 1000)
    },
    start () {
      this.runCounter()
      this.running = true
    },
    stop () {
      clearInterval(this.timer)
      this.running = false
    },
    reset () {
      clearInterval(this.timer)
      this.running = false
      this.setCounter(this.current)
    }
  },
  mounted () {
    this.current = this.pomodoro
    this.next = this.shortBreak
    this.setCounter(this.current)
  }
}
</script>

<style scoped>
.timer {
  font-family: 'Source Code Pro', monospace;
  font-size: 5rem;

  display: flex;

  margin: 4vh 0;

  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .3);

  align-items: center;
  justify-content: center;
}

.middle {
  position: relative;
  top: -.4rem;
}

.buttons {
  display: flex;

  justify-content: center;
}

.button {
  width: 80px;
  height: 80px;

  margin: 0 1rem;

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
