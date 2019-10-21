<template>
  <div class="base-loading">
    <!-- 
      active: true 時顯示 loading
      can-cacel: 是否可讓使用者按一下取消讀取動畫
      loader: spinner、dots、bars
    -->
    <loading 
    :active.sync="loadingDisplay"
    :can-cancel="true" 
    :on-cancel="onCancel"
    :loader="spinner"
    :opacity="0.5"
    :is-full-page="fullPage"></loading>
    <label><input type="checkbox" v-model="fullPage">Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button>
  </div>
</template>

  
<script>
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

    
export default {
  name: 'BaseLoading',
  computed: {
    ...mapState('loadingOverlay', ['loadingDisplay', 'container']),
    fullPage() {
      return this.container === null
    },
  },
  methods: {
    doAjax() {
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    },
  },
  components: {
    Loading,
  },
}
</script>

<style scoped lang="scss">

</style>
