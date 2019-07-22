/* eslint-disable no-undef */
export function hasValue(val) {
  let result = true

  if (_.isArray(val)) {
    // 数组
    // 空数组
    if (val.length === 0) {
      result = false
    }

    // [null]
    if (val.length === 1 && _.isNil(val[0])) {
      result = false
    }

    // range [null,null] 有一个为 nil
    if (val.length === 2 && (_.isNil(val[0]) || _.isNil(val[1]))) {
      result = false
    }
  } else {
    // 字符串，数值
    if (_.isNil(val)) {
      result = false
    }
  }

  return result
}
