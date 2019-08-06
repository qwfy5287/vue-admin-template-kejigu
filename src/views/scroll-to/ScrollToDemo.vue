// 模板
<template>
  <div class="app-container scroll-to-demo">
    scroll-to-demo

    <p>
      官网
      <a href="https://github.com/rigor789/vue-scrollto">GitHub</a>
    </p>

    <p>
      方式一 指令方式
      <a v-scroll-to="'#element'" href="#">Scroll to #element</a>
    </p>

    <p>
      方式二 编程方式
      <el-button @click="onScrollTo">滚动到</el-button>
    </p>

    <div class="box-space" />
    <div class="box-space" />
    <div class="box-space" />
    <div id="element">
      Hi. I'm #element.
    </div>

    <ScrollCommon />
  </div>
</template>
<script>

import ScrollCommon from '@/components/ScrollCommon'

export default {
  name: 'ScrollToDemo',
  components: {
    ScrollCommon
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() { },
    async fetchData() { },
    render() { },
    //
    onScrollTo() {
      this.$scrollTo('#element')
    }

  }
}
</script>
<style lang="scss">
.scroll-to-demo {
  font-size: inherit;

  .box-space {
    height: 300px;
  }
}
</style>
