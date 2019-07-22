// 模板
<template>
  <div class="app-container index-form-inline">
    index-form-inline
    <FormInline :dynamic-form="dynamicForm" @change="formInlineChange" />
  </div>
</template>
<script>
import FormInline from './FormInline'
export default {
  name: 'IndexFormInline',
  components: { FormInline },
  props: {},
  data() {
    return {
      dynamicForm: { form: [{
        name: 'name',
        label: '模型名称',
        value: null,
        rules: [{ required: true, message: '请输入模型名称' }],
        // rules: null,
        element: 'input'
      }, {
        name: 'type',
        label: '模型类型',
        value: null,
        rules: [{ required: true, message: '请输入模型类型' }],
        // rules: null,
        element: 'select',
        options: [{
          label: '类型1', value: '01'
        }, {
          label: '类型2', value: '02'
        }, {
          label: '类型3', value: '03'
        }]
      }, {
        name: 'name1',
        label: '模型名称1',
        value: null,
        // rules: [{ required: true, message: '输入错误' }],
        rules: null,
        element: 'daterange'
      }] }
    }
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
    formInlineChange(item) {
      console.log(item)
    }
  }
}
</script>
<style lang="scss">
.index-form-inline {
  font-size: inherit;
}
</style>
