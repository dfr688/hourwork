<template>
  <div class="stat">
    <Swiper ref="swiper">
      <div class="top">
          <i class="left"></i><span>2019.09.01-09.30</span><i class="right"></i>
      </div>
      <van-tabs v-model="active">
        <van-tab title="记月工资">
          <div class="all_amount">
            <p class="money">¥ 480.00</p>
            <span class="all">本月小时工总收入</span>
            <ul>
              <li>
                <van-circle
                  v-model="currentRate1"
                  :rate="rate1"
                  :speed="20"
                  :clockwise="false"
                  :stroke-width="160"
                  :color="color1"
                  layer-color="#eee"
                />
                <p>工时收入</p>
                <span>+380.00</span>
              </li>
              <li>
                <van-circle
                  v-model="currentRate2"
                  :rate="rate2"
                  :speed="100"
                  :clockwise="false"
                  :stroke-width="160"
                  :color="color2"
                  layer-color="#eee"
                />
                <p>补贴</p>
                <span>+120.00</span>
              </li>
              <li>
                <van-circle
                  v-model="currentRate3"
                  :rate="rate3"
                  :speed="100"
                  :clockwise="false"
                  :stroke-width="160"
                  :color="color3"
                  layer-color="#eee"
                />
                <p>扣款</p>
                <span>-20.00</span>
              </li>
            </ul>
          </div>
          <div class="height_20"></div>
          <div class="sort">
            <van-collapse v-model="activeName" accordion :border="false" @change="change">
              <van-collapse-item
                title="工时收入"
                name="1"
                :value="'+'+'380.00'"
                icon="gold-coin"
              >
                <ul>
                  <li>
                    <div class="left">
                        小时工资
                    </div>
                    <div class="right">
                        20.00x19.00=380.00
                    </div>
                  </li>
                  <li>
                    <div class="left">
                        小时工资
                    </div>
                    <div class="right">
                        20.00x19.00=380.00
                    </div>
                  </li>
                </ul>
              </van-collapse-item>
              <div class="height_20"></div>
              <van-collapse-item
                title="补贴"
                name="2"
                :value="'+'+'380.00'"
                icon="gold-coin"
              >
                <ul>
                  <li @click="handlePopOne">
                    <div class="left">
                        晚班补贴
                    </div>
                    <div class="right">
                        +80.00<i></i>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                        晚班补贴
                    </div>
                    <div class="right">
                        +80.00<i></i>
                    </div>
                  </li>
                </ul>
                <div class="add" @click="goSubsidy">
                  +添加补贴
                </div>
              </van-collapse-item>
              <div class="height_20"></div>
              <van-collapse-item
                title="扣款"
                name="3"
                :value="'+'+'380.00'"
                icon="gold-coin"
              >
                <ul>
                  <li @click="handlePopTwo">
                    <div class="left">
                        迟到扣款
                    </div>
                    <div class="right">
                        -20.00<i></i>
                    </div>
                  </li>
                </ul>
                <div class="add" @click="goDeduction">
                  +添加扣款
                </div>
              </van-collapse-item>
            </van-collapse>
          </div>
        </van-tab>
        <van-tab title="工时明细">
          <ul class="shifts">
            <li>
              <p>0h</p>
              <div class="one">
                <i></i><span>早班</span>
              </div>
            </li>
            <li>
              <p>23.5h</p>
              <div class="two">
                <i></i><span>白班</span>
              </div>
            </li>
            <li>
              <p>16h</p>
              <div class="three">
                <i></i><span>中班</span>
              </div>
            </li>
            <li>
              <p>2h</p>
              <div class="four">
                <i></i><span>晚班</span>
              </div>
            </li>
          </ul>
          <div class="height_20"></div>
          <div class="details">
            <div class="title">
              <div class="left">
                本月工时
              </div>
              <div class="right">
                <span>380.00</span><i>19h</i>
              </div>
            </div>
            <ul>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3h</span>
              </li>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3.5h</span>
              </li>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3.5h</span>
              </li>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3.5h</span>
              </li>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3.5h</span>
              </li>
              <li>
                <div>
                  <i></i>2019.09.20
                </div>
                <p>70.00</p>
                <span>3.5h</span>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </Swiper>
    <van-popup v-model="show1">
      <div class="pop">
          <p>设置晚班补贴</p>
          <div>
            <span>¥</span><input type="tel" placeholder="0.00"/>
          </div>
          <button>保存</button>
      </div>
    </van-popup>
    <van-popup v-model="show2">
      <div class="pop">
          <p>设置扣款金额</p>
          <div>
            <span>¥</span><input type="tel" placeholder="0.00"/>
          </div>
          <button>保存</button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
export default {
 name: "",
  data () {
    return {
      active: 0, //tab标签选中值
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      rate1: 30,
      rate2: 40,
      rate3: 60,
      color1: "#f33916",
      color2: "#fd9f0b",
      color3: "#39bdfb",
      activeName: "0",
      show1: false,//设置晚班补贴弹框
      show2: false //设置扣款金额
    }
  },
  components: {
    Swiper
  },
  computed: {},
  watch: {},
  methods: {
    change() {
      this.$refs.swiper.update();
    },
    // 添加补贴
    goSubsidy() {
      this.$router.push("/subsidy");
    },
    // 添加扣款
    goDeduction() {
      this.$router.push("/deduction");
    },
    // 设置晚班补贴
    handlePopOne() {
      this.show1 = true;
    },
    // 设置扣款金额
    handlePopTwo() {
      this.show2 = true;
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.stat{
  height: 100%;
  padding-bottom: 1rem;
  .top{
    width: 100%;
    height: 1.28rem;
    @include background_img("./images/top_bg.png");
    font-size: .4rem;
    color: #fff;
    line-height: 1.28rem;
    text-align: center;
    i{
      display: inline-block;
      width: .36rem;
      height: .36rem;
      margin-bottom: -.05rem;
      &.left{
        @include background_img("./images/left.png");
        margin-right: .1rem;
      }
      &.right{
        @include background_img("./images/right.png");
        margin-left: .1rem;
      }
    }
  }
  .all_amount{
    text-align: center;
    font-size: .28rem;
    .money{
      font-size: .6rem;
      margin-top: .4rem;
    }
    .all{
      color: #999;
    }
    ul{
      display: flex;
      margin: .8rem .4rem;
      li{
        flex: 1;
        text-align: center;
        .van-circle{
          width: 1.2rem!important;
          height: 1.2rem!important;
        }
        p{
          color: #999;
        }
        span{
          font-size: .42rem;
        }
      }
    }
  }
  .height_20{
    width: 100%;
    height: .2rem;
    background: #fcfafb;
  }
  .sort{
    .van-hairline--top::after{
      border-top-width: 0;
    }
    ul{
      li{
        @include flex;
        font-size: .32rem;
        margin-bottom: .4rem;
        color: #999;
        &:last-child{
          margin-bottom: 0;
        }
        .right{
          i{
            display: inline-block;
            width: .15rem;
            height: .28rem;
            @include background_img("../my/images/arrow.png");
            margin-left: .2rem;
            margin-bottom: -.02rem;
          }
        }
      }
    }
    .add{
      text-align: center;
      color: #6e51b0;
      font-size: .32rem;
      margin-top: .4rem;
    }
  }
  .shifts{
    display: flex;
    font-size: .3rem;
    margin: .6rem 0;
    li{
      flex: 1;
      text-align: center;
      p{
        font-size: .46rem;
        margin-bottom: .2rem;
      }
      div{
        i{
          display: inline-block;
          margin-right: .1rem;
        }
        &.one{
          color: #f78e45;
          i{
            width: .32rem;
            height: .29rem;
            @include background_img("./images/one.png");
            margin-bottom: -.02rem;
          }
        }
        &.two{
          color: #f15b3f;
          i{
            width: .26rem;
            height: .26rem;
            @include background_img("./images/two.png");
            margin-bottom: -.02rem;
          }
        }
        &.three{
          color: #f9b845;
          i{
            width: .32rem;
            height: .32rem;
            @include background_img("./images/three.png");
            margin-bottom: -.04rem;
          }
        }
        &.four{
          color: #543c80;
          i{
            width: .3rem;
            height: .3rem;
            @include background_img("./images/four.png");
            margin-bottom: -.04rem;
          }
        }
      }
    }
  }
  .details{
    margin: 0 .4rem;
    margin-top: .4rem;
    .title{
      @include flex;
      font-size: .32rem;
      .right{
        font-size: .42rem;
        span{
          color: #ff0303;
          margin-right: .36rem;
        }
        i{
          font-style: normal;
          color: #6e51b0;
        }
      }
    }
    ul{
      margin-top: .6rem;
      li{
        display: flex;
        font-size: .32rem;
        margin-bottom: .6rem;
        div{
          flex: 1.2;
          color: #999;
          i{
            display: inline-block;
            width: .32rem;
            height: .32rem;
            @include background_img("./images/three.png");
            margin-right: .18rem;
            margin-bottom: -.04rem;
          }
        }
        p{
          flex: 1;
          text-align: center;
          color: #999;
        }
        span{
          flex: 1;
          text-align: right;
          color: #f15b3f;
        }
      }
    }
  }
  .van-popup{
    width: 4.6rem;
    padding: .5rem .2rem;
    border-radius: .1rem;
    .pop{
      width: 100%;
      border-radius: .1rem;
      font-size: .28rem;
      div{
        font-size: .48rem;
        margin: .4rem 0;
        margin-bottom: .3rem;
        padding-bottom: .1rem;
        border-bottom: 1px solid #f1f1f1;
        input{
          width: 80%;
          font-size: .48rem;
          margin-left: .2rem;
        }
      }
      button{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        font-size: .36rem;
        color: #fff;
        background: #6e51b0;
	      border-radius: .1rem;
      }
    }
  }
}
</style>