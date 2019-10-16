<template>
  <div class="home">
      <Swiper>
        <div class="top">
            <div class="time">
              2019.10.01-10.30<i></i>
            </div>
            <ul>
              <li>
                <span>本月工时</span>
                <p>0.00</p>
              </li>
              <li>
                <span>本月收入</span>
                <p>0.00</p>
              </li>
            </ul>
        </div>
        <Calendars/>
      </Swiper> 
      <van-popup v-model="show1" position="bottom" round>
        <div class="wrap">
          1
        </div>
      </van-popup> 
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
import Calendars from './Calendars'
export default {
 name: "",
  data () {
    return {
      show1: true
    }
  },
  components: {
    Swiper,
    Calendars
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
.home{
  height: 100%;
  padding-bottom: 1rem;
  @include background_img("./images/background.png");
  .top{
    color: #fff;
    font-size: .32rem;
    padding-top: 1rem;
    margin-left: .4rem;
    .time{
      i{
        display: inline-block;
        width: .28rem;
        height: .27rem;
        @include background_img("./images/today.png");
        margin-left: .2rem;
        margin-bottom: -.02rem;
      }
    }
    ul{
      display: flex;
      margin-top: .8rem;
      li{
        text-align: center;
        width: 30%;
        span{
          color: #f1f1f1;
          font-size: .28rem;
        }
        p{
          font-size: .52rem;
        }
      }
    }
  }
  .wrap{
    width: 100%;
  }
}
</style>