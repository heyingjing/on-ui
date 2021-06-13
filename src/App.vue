<template>
  <div id="app">
    <on-button class="butn one" @click="handle" disabled>按钮</on-button>
    <on-button type="primary" icon="on-icon-bluetoothoff" class="butn one"></on-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup () {
    const handle = (e: MouseEvent) => {
      console.log('1')
    }

    return {
      handle
    }
  }
})
</script>
<style scoped>
.one {
  width: 140px;
  height: 35px;
  line-height: 35px;
  margin-right: 10px;
}
</style>
