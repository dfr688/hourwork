<template>
  <div class="btn">
      {{ text }}
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
      "text"
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
.btn{
    width: 6.7rem;
    height: .8rem;
    line-height: .8rem;
	background: #6e51b0;
    border-radius: .1rem;
    margin: 0 auto;
    margin-bottom: .4rem;
    font-size: .36rem;
    color: #fff;
    text-align: center;
}
</style>