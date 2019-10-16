<template>
  <div class="login">
      <span class="back"></span>
      <div class="welcome">
        Hi,欢迎您
      </div>
      <div class="login_register">
        <div class="mid-center">
          <div class="stack-wrapper">
            <Stack ref="stack" :stackinit="stackinit"></Stack>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Stack from './Stack'
export default {
 name: "",
  data () {
    return {
      stackinit: {
        visible: 2,
      }
    }
  },
  components: {
     Stack
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
      height: 1rem;
      .stack-wrapper{
        margin: 0 auto;
        margin-top: .5rem;
        position: relative;
        z-index: 1000;
        width: 6.7rem;
        height: 9rem;
        border-radius: .28rem;
        padding: 0;
        list-style: none;
        pointer-events: none;
        box-shadow: 0px 6px 33px 2px rgba(50, 60, 95, 0.19);
      }
    }
}
</style>