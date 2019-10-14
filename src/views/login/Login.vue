<template>
  <div class="login">
      <span class="back"></span>
      <div class="welcome">
        Hi,欢迎您
      </div>
      <div class="login_register">
        <swiper :options="swiperOption">
          <swiper-slide class="slide-1">
            <span>1</span>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <p>22222</p>
          </swiper-slide>
        </swiper>
      </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
export default {
 name: "",
  data () {
    return {
      swiperOption: {
        effect: 'fade',
				slidesPerView: 'auto',
				fadeEffect: {
          crossFade: true,
        }
			}
    }
  },
  components: {
      swiper,
			swiperSlide
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.login{
    height: 100%;
    background-image: linear-gradient(0deg, #5f4594 0%, #7d55b4 100%), linear-gradient(180deg, #1c71ff 0%, #49a7ff 100%);
    .back{
      display: inline-block;
      width: .32rem;
      height: .32rem;
      @include background_img("./images/back.png");
      margin-left: .4rem;
      margin-top: 1rem;
    }
    .welcome{
      color: #fff;
      font-size: .48rem;
      margin-left: .56rem;
      margin-top: .6rem;
    }
    .login_register{
      span{
        display: inline-block;
        background: red;
        height: 1rem;
        width: 2rem;
        margin: 0 auto;
      }
      p{
        background: #000;
        height: 2rem;
        width: 3rem;
        margin: 0 auto;
      }
    }
}
</style>