<template>
  <div class="headerTop" :class="{textColor:!isTrue}">
    <i :class="{black:isTrue,white:!isTrue }"></i>{{ title }}
  </div>
</template>

<script>
export default {
 name: "",
  data () {
    return {
    }
  },
  props: [
    "title",
    "isTrue"
  ],
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_mixins.scss';
.headerTop{
  font-size: .42rem;
  text-align: center;
  position: relative;
  padding-top: .7rem;
  &.textColor{
    color: #fff;
  }
  i{
    display: inline-block;
    width: .48rem;
    height: .48rem;
    position: absolute;
    top: .75rem;
    left: .4rem;
    &.black{
      @include background_img("./images/black_back.png");
    }
    &.white{
      @include background_img("./images/white_back.png");
    }
  }
}
</style>