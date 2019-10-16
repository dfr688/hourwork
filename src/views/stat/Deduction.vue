<template>
  <div class="subsidy">
      <Swiper>
          <div class="subsidy_top">
              <HeaderTop title="扣款" :isTrue="false"/>
          </div>
          <div class="choose_list">
                <van-checkbox-group v-model="result">
                    <van-cell-group>
                        <van-cell
                        v-for="(item, index) in list"
                        clickable
                        :key="item"
                        :title="`${item}`"
                        @click="toggle(index)"
                        >
                        <van-checkbox
                            :name="item"
                            ref="checkboxes"
                            slot="right-icon"
                        />
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
          </div>
          <Btn text="确定"/>
      </Swiper>    
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
import HeaderTop from '../common/HeaderTop'
import Btn from '../common/Btn'
const list = ["事假","病假","食堂消费","水电费","住宿费","其他扣款"];
export default {
 name: "",
  data () {
    return {
        result: [],
        list: list
    }
  },
  components: {
      Swiper,
      HeaderTop,
      Btn
  },
  computed: {},
  watch: {},
  methods: {
      toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  },
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.subsidy{
    height: 100%;
    .subsidy_top{
        width: 100%;
        height: 1.28rem;
        @include background_img("./images/top_bg.png");
    }
    .choose_list{
        margin-top: .2rem;
        margin-bottom: .6rem;
    }
}
</style>