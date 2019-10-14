<template>
  <div class="suggest">
      <Swiper>
          <HeaderTop title="意见反馈" :isTrue="true"/>
          <div class="contain">
              <div class="text">
                    <p>意见反馈</p>
                    <textarea placeholder="详细叙述你的建议，我们将不断改善">
                    </textarea>
              </div>
              <div class="contact">
                    <p>联系方式</p>
                    <input type="text" placeholder="请输入手机号或邮箱，以便我们给你反馈"/>
              </div>
          </div>
          <Btn text="确定"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
import HeaderTop from '../common/HeaderTop'
import Btn from '../common/Btn'
export default {
 name: "",
  data () {
    return {
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
.suggest{
    height: 100%;
    .contain{
        width: 6.7rem;
        margin: 0 auto;
        margin-top: .7rem;
        .text{
            width: 100%;
            height: 5.09rem;
            background: #fff;
            box-shadow: 1px -4px 22px 2px rgba(58, 58, 58, 0.15);
            border-radius: .1rem;
            padding: .4rem;
            p{
                font-size: .36rem;
                margin-bottom: .26rem;
            }
            textarea{
                width: 100%;
                height: 2rem;
                font-size: .3rem;
            }
        }
        .contact{
            width: 100%;
            height: 2rem;
            background: #fff;
            box-shadow: 1px -4px 22px 2px rgba(58, 58, 58, 0.15);
            border-radius: .1rem;
            padding: .4rem;
            margin-top: .3rem;
            margin-bottom: .5rem;
            font-size: .3rem;
            p{
                font-size: .36rem;
                margin-bottom: .26rem;
            }
            input{
                width: 100%;
                font-size: .3rem;
            }
        }
    }
}
</style>