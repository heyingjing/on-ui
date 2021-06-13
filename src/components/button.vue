<template>
  <button class="on-button" :class="[`on-button-${type}`, {'is-plain':plain, 'is-round':round,'is-circle':circle, 'is-disabled':disabled}]" @click="handleClick" :disabled="disabled">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <!--难点: 如果传插槽则为true-->
      <slot></slot>
    </span>
  </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

interface OnButtonProps {
  type: string,
  plain: boolean,
  icon: string,
  disabled: boolean,
  round: boolean,
  circle: boolean
}
export default defineComponent({
  name: 'OnButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ['click'], // 覆盖原生事件
  setup (props: OnButtonProps, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      handleClick
    }
  }
})

</script>
<style scoped lang="scss">
.on-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  // margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  // padding: 12px 56px;
  font-size: 14px;
  border-radius: 5px;
  // width: 140px;
  // height: 35px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.on-button-primary {
  color: #fff;
  background-color: #2b6ac3;
  border-color: #2b6ac3;
  &:hover,
  &:focus {
    background: #3985ef;
    background-color: #3985ef;
    color: #fff;
  }
}
.on-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.on-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.on-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.on-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.on-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.on-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.on-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.on-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.on-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.on-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.on-button.is-round {
  border-radius: 20px;
}
// circle属性
.on-button.is-circle {
  border-radius: 50%;
}
// icon配套样式
.on-button [class*="on-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.on-button.is-disabled {
  cursor: no-drop;
}
</style>
