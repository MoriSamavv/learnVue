<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 按照规范.vue文件都应该被抽象为一个组件，所以这一个是根组件
export default {
  name: 'app',
  mounted() {}
}
</script>
