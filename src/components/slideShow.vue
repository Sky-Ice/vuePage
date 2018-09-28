<template>
  <div class="slide-show" @mouseover="clearIntervalSlides" @mouseout="slideChange">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">

        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>

      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goTo(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goTo(index)">
        <a :class="{on:index===nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goTo(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      slidesTime: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    methods: {
      goTo(index) {
        this.isShow = false;
        setTimeout(() => {
          this.isShow = true;
          this.nowIndex = index;
          this.$emit('onchange', index);
        }, 1)
      },
      slideChange() {
        this.timer = setInterval(() => {
          this.goTo(this.nextIndex);
        }, this.slidesTime)
      },
      clearIntervalSlides() {
        clearInterval(this.timer);
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1;
        } else {
          return this.nowIndex - 1;
        }
      },
      nextIndex() {
        if (this.nowIndex == this.slides.length - 1) {
          return 0;
        } else {
          return this.nowIndex + 1;
        }
      }
    },
    mounted() {
      this.slideChange();
    }
  }
</script>

<style scoped>
  .slide-trans-enter-active, .slide-trans-old-leave-active {
    transition: all .5s ease;
  }

  .slide-trans-enter {
    /*transform: translateX(900px);*/
    opacity: 1;
  }

  .slide-trans-old-leave-active {
    /*transform: translateX(-900px);*/
    opacity: 0;
  }

  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }

  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }

  .slide-img {
    width: 100%;
  }

  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
    transition: all 0.5s;
  }

  .slide-img img:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }

  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
