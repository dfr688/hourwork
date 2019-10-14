<template>
  <div class="modify">
      <Swiper>
          <HeaderTop title="修改密码" :isTrue="true"/>
          <ul>
              <li>
                  <input type="password" placeholder="请输入原密码"/>
              </li>
              <li>
                  <input type="password" placeholder="请输入新密码"/>
              </li>
          </ul>
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
.modify{
    height: 100%;
    ul{
        font-size: .32rem;
        margin: 1rem .4rem;
        li{
            padding-bottom: .4rem;
            margin-bottom: .3rem;
            border-bottom: 1px solid #f1f1f1;
            input{
                font-size: .32rem;
            }
        }
    }
}
</style>