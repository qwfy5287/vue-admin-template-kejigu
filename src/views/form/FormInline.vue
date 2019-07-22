// 模板-行内表单
<template>
  <div class="form-inline">
    form-inline

    {{ dynamicForm.form }}

    <!-- 动态验证表单 -->
    <el-form ref="ruleForm" :inline="isInline" :model="dynamicForm" label-width="80px">
      <span v-for="(item,index) in dynamicForm.form" :key="'item_'+index">
        <!-- input -->
        <el-form-item v-if="item.element==='range'" :prop="'form['+index+'].value'" :rules="item.rules">
          <el-col :span="11">
            <el-form-item :prop="'form['+index+'].start.value'" :rules="item.start.rules">
              <el-input-number v-model.number="item.start.value" :min="0" controls-position="right" />
            </el-form-item>
          </el-col>
          <el-col :span="2" class="line">
            -
          </el-col>
          <el-col :span="11">
            <el-form-item :prop="'form['+index+'].end.value'" :rules="item.end.rules">
              <el-input-number v-model.number="item.end.value" :min="0" controls-position="right" />
            </el-form-item>
          </el-col>
        </el-form-item>

        <!-- 其他 -->
        <el-form-item v-else v-show="item.isShow!=false" :prop="'form['+index+'].value'" :rules="item.rules">
          <!-- input -->
          <el-input v-if="item.element=='input'" v-model.trim="item.value" :placeholder="item.label" />

          <!-- switch -->
          <el-switch v-if="item.element=='switch'" v-model="item.value" />

          <!-- select -->
          <el-select v-if="item.element=='select'" v-model="item.value" :placeholder="item.label">
            <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value" />
          </el-select>

          <!-- textarea -->
          <el-input v-if="item.element=='textarea'" v-model.trim="item.value" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="请输入内容" />

          <!-- radio -->
          <el-radio-group v-if="item.element=='radio'" v-model="item.value">
            <el-radio v-for="(radioItem,radioIndex) in item.options" :key="radioIndex" :label="radioItem.value">
              {{ radioItem.label }}
            </el-radio>
          </el-radio-group>

          <!-- checkbox -->
          <el-checkbox-group v-if="item.element=='checkbox'" v-model="item.value">
            <el-checkbox v-for="(checkItem,checkIndex) in item.options" :key="checkIndex" :label="checkItem.value">
              {{ checkItem.label }}
            </el-checkbox>
          </el-checkbox-group>

          <!-- daterange -->
          <!-- :picker-options="pickerOptions" -->
          <!-- v-if="form.dateRange.length" -->
          <!-- @change="dateRangeChange" -->
          <el-date-picker
            v-if="item.element=='daterange'"
            v-model="item.value"
            :clearable="false"
            :placeholder="item.label"
            :default-time="['00:00:00', '23:59:59']"
            type="daterange"
            unlink-panels
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />

        </el-form-item>
        <!-- End 其他 -->
      </span>

      <el-form-item>
        <el-button type="primary" @click="submitForm">
          查询
        </el-button>
        <el-button @click="resetForm">
          重置
        </el-button>
      </el-form-item>

      <!-- <div class="form-footer">

      </div> -->

      <!-- buttom -->
      <!-- <el-form-item>
          <el-button @click="submitForm">submit</el-button>
          <el-button @click="resetForm">reset</el-button>
          <el-button @click="clearValidate">clearValidate</el-button>
        </el-form-item> -->
      <!-- End buttom -->
    </el-form>
    <!-- End 动态验证表单 -->
  </div>
</template>
<script>
import { hasValue } from '@/utils/common'

export default {
  name: 'FormInline',
  components: {},
  props: {
    dynamicForm: { type: Object, default: () => { return {} } }
  },
  data() {
    return {
      isInline: true
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
    submitForm() {
      const result = this.toSaveData()
      if (result) {
        this.$emit('save', result)
      }

      // this.$refs.ruleForm.validate(valid => {
      //   if (valid) {
      //     // this.$message('submit')
      //     this.$emit('save', this.toSaveData())
      //     this.dialogVisible = false
      //   } else {
      //     // this.$message('error submit')
      //     return false
      //   }
      // })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    },
    /**
     * 获取表单数据
     * 验证成功 返回表单对象
     * 验证失败 返回false
     */
    getSaveData() {
      let result = {}

      // 校验表单
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.dynamicForm.form.forEach(d => {
            if (hasValue(d.value)) {
              result[d.name] = d.value
            }
          })
        } else {
          result = false
        }
      })

      return result
    }
  }
}
</script>
<style lang="scss">
.form-inline {
  font-size: inherit;
}
</style>
