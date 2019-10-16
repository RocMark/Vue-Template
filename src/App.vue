<template>
  <div id="app">
    <TheNav></TheNav>
    <div v-if="testMode">
      <BaseDatePicker></BaseDatePicker>
      <BasePagination></BasePagination>
    </div>
    <h1>test master</h1>
    <router-view/>
  </div>
</template>


<script>

import { mapState } from 'vuex'
import TheNav from '@/components/TheNav'
import exampleMixins from '@/mixins/exampleMixins'
import BaseDatePicker from '@/components/base/BaseDatePicker'
import BasePagination from '@/components/base/BasePagination'


export default {
  name: 'App',
  mixins: [exampleMixins],
  data() {
    return {
      testMode: true,
    }
  },
  computed: {
    // Global
    ...mapState(['rootTest']),
    // 區域
    ...mapState('exampleApi', ['exampleApiTestStr']),
    // vuex-router-sync
    ...mapState('route', 
      {
        routePath: 'path',
      }),
  },
  mounted() {
    this.globalTestFunc()
    this.exampleTestFunc()
    console.warn('state', this.$store.state.route)
    console.warn('routePath', this.routePath)
  },
  components: {
    TheNav,
    BaseDatePicker,
    BasePagination,
  },
}

</script>

<style lang="scss">
</style>
