<template>
  <div class="tabbar">
      <ul>
          <li @click="goHome">
              <i class="booking_icon" :class="{active: $route.name==='home'}"></i>
              <p :class="{active: $route.name==='home'}">记账</p>
          </li>
          <li @click="goStat">
              <i class="stat_icon" :class="{active: $route.name==='stat'}"></i>
              <p :class="{active: $route.name==='stat'}">统计</p>
          </li>
          <li @click="goMy">
              <i class="my_icon" :class="{active: $route.name==='my'}"></i>
              <p :class="{active: $route.name==='my'}">我的</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  watch: {
  },
  methods: {
    //首页
    goHome() {
        this.$router.push("/home");
    },
    // 统计
    goStat() {
        this.$router.push("/stat");
    },
    // 我的
    goMy() {
        this.$router.push("/my");
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.tabbar{
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    height: 1rem;
    position: fixed;
    // left: 0;
    bottom: 0;
    font-size: .24rem;
    color: #999;
    background-color: #fff;
	box-shadow: 1px -4px 22px 2px rgba(58, 58, 58, 0.15);
    ul{
        display: flex;
        height: 100%;
        li{
            width: 33.3%;
            padding-top: .1rem;
            text-align: center;
            i{
                display: inline-block;
                &.booking_icon{
                    width: .43rem;
                    height: .39rem;
                    @include background_img("./images/booking.png");
                    &.active{
                        @include background_img("./images/booking_active.png");
                    }
                }
                &.stat_icon{
                    width: .4rem;
                    height: .37rem;
                    @include background_img("./images/stat.png");
                    &.active{
                        @include background_img("./images/stat_active.png");
                    }
                }
                &.my_icon{
                    width: .4rem;
                    height: .37rem;
                    @include background_img("./images/my.png");
                    &.active{
                        @include background_img("./images/my_active.png");
                    }
                }
            }
            p{
                &.active{
                    color: #4d357f;
                }
            }
        }
    }
}
</style>