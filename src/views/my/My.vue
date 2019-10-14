<template>
  <div class="my">
      <Swiper>
        <div class="top">
          我的
        </div>
        <div class="info">
          <img src="./images/user.png" alt=""/>
          <p v-if="isLogin">183****7595</p>
          <p v-if="!isLogin">登录/注册</p>
          <ul>
            <li>
              <span>历史总收入</span>
              <p>1895.00</p>
            </li>
            <li>
              <span>本月收入</span>
              <p>520.00</p>
            </li>
            <li>
              <span>记账总笔数</span>
              <p>58</p>
            </li>
          </ul>
        </div>
        <ul class="sort">
          <li>
            <div class="left">
              <i class="icon_1"></i><span>提醒记工时</span>
            </div>
            <div class="right">
              <i></i>
            </div>
          </li>
          <li @click="goSuggest">
            <div class="left">
              <i class="icon_2"></i><span>意见反馈</span>
            </div>
            <div class="right">
              <i></i>
            </div>
          </li>
          <li @click="goModify">
            <div class="left">
              <i class="icon_3"></i><span>修改密码</span>
            </div>
            <div class="right">
              <i></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="icon_4"></i><span>版本信息</span>
            </div>
            <div class="right">
              v2.1
            </div>
          </li>
        </ul>
        <Btn text="退出登录"/>
      </Swiper>  
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
import Btn from '../common/Btn'
export default {
 name: "",
  data () {
    return {
      isLogin: true
    }
  },
  components: {
    Swiper,
    Btn
  },
  computed: {},
  watch: {},
  methods: {
    // 意见反馈
    goSuggest() {
      this.$router.push("/suggest");
    },
    // 修改密码
    goModify() {
      this.$router.push("/modify");
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.my{
  height: 100%;
  padding-bottom: 1rem;
  .top{
    width: 100%;
    height: 3.38rem;
    @include background_img("./images/my_bg.png");
    color: #fff;
    text-align: center;
    font-size: .4rem;
    padding-top: .7rem;
  }
  .info{
    width: 6.7rem;
    height: 3.1rem;
    background: #fff;
    border-radius: .1rem;
    margin: 0 auto;
    margin-top: -1rem;
    font-size: .32rem;
    position: relative;
    img{
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: -.7rem;
      left: 50%;
      margin-left: -.75rem;
    }
    &>p{
      text-align: center;
      padding-top: 1rem;
    }
    ul{
      display: flex;
      margin: 0 .4rem;
      margin-top: .4rem;
      li{
        width: 33.3%;
        text-align: center;
        span{
          color: #666;
          font-size: .24rem;
        }
        p{
          font-size: .36rem;
        }
      }
    }
  }
  .sort{
    font-size: .32rem;
    margin: .4rem;
    li{
      @include flex;
      padding-bottom: .4rem;
      margin-bottom: .3rem;
      border-bottom: 1px solid #f1f1f1;
      .left{
        i{
          display: inline-block;
          width: .4rem;
          height: .4rem;
          margin-right: .26rem;
          margin-bottom: -.05rem;
          &.icon_1{
            @include background_img("./images/icon_1.png");
          }
          &.icon_2{
            @include background_img("./images/icon_2.png");
          }
          &.icon_3{
            @include background_img("./images/icon_3.png");
          }
          &.icon_4{
            @include background_img("./images/icon_4.png");
          }
        }
      }
      .right{
        i{
          display: inline-block;
          width: .15rem;
          height: .28rem;
          @include background_img("./images/arrow.png");
          margin-bottom: -.04rem;
        }
      }
    }
  }
}
</style>