<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="show"/>
  </div>
</template>

<script>
import Tabbar from './views/common/Tabbar'
export default {
 name: "",
  data () {
    return {
      show: true
    }
  },
  components: {
    Tabbar
  },
  computed: {},
  watch: {
    $route(to,from){
      if(to.name === "home" || to.name === "stat" || to.name === "my"){
        this.show = true;
      }else{
        this.show = false;
      }
    }
  },
  methods: {},
  created () {
    if(this.$route.name === "home" ||this.$route.name === "stat" || this.$route.name === "my"){
      this.show = true;
    }else{
      this.show = false;
    }
  },
  mounted () {},
}
</script>
<style lang="scss" scoped>
</style>
