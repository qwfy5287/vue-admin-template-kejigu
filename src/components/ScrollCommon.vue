// 滚动监听组件

// 事件
//   scroll：滚动时的方法
//   onBottom：滚动到底部

<template>
  <div class="scroll-common">
    <!-- scroll-common -->
    加载更多...
  </div>
</template>
<script>
export default {
  name: 'ScrollCommon',
  components: {},
  props: {
    // 节流时间 默认 300 毫秒
    delay: { type: Number, default: 300 },
    // 滚动的元素
    element: { type: String, default: null }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
    this.init()
    if (this.element) {
      document.querySelector(this.element).addEventListener('scroll', this.handleScroll)
    } else {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  created() {
    const _vm = this
    // eslint-disable-next-line no-undef
    this.handleScroll = _.throttle(function() {
      _vm.handleOnBottom()
      _vm.$emit('scroll')
    }, this.delay)
  },
  destroyed() {
    if (this.element) {
      document.querySelector(this.element).removeEventListener('scroll', this.handleScroll)
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    init() { },
    async fetchData() { },
    render() { },
    //
    /**
     * 滚动到底部
     */
    handleOnBottom() {
      const isBottom = (this.$el.offsetTop - window.scrollY - window.innerHeight) < -180
      if (isBottom) {
        this.$emit('onBottom')
      }
    }
  }
}
</script>
<style lang="scss">
.scroll-common {
  font-size: inherit;

  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>

