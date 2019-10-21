<template>
  <div id="app">
    <TheNav></TheNav>
    <div v-if="testMode">
      <BaseDatePicker></BaseDatePicker>
      <RangeDatePicker v-on:getRangeDate="getRangeDate"></RangeDatePicker>
      <BasePagination></BasePagination>
    </div>
    <router-view/>
  </div>
</template>


<script>

import { mapState } from 'vuex'
import TheNav from '@/components/TheNav'
import exampleMixins from '@/mixins/exampleMixins'
import BaseDatePicker from '@/components/base/BaseDatePicker'
import BasePagination from '@/components/base/BasePagination'
import RangeDatePicker from '@/components/base/RangeDatePicker'


export default {
  name: 'App',
  mixins: [exampleMixins],
  data() {
    return {
      testMode: true,
    }
  },
  methods: {
    getRangeDate(data) {
      console.warn(data)
    },
  },
  computed: {
    ...mapState(['rootTest']),
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

    const loader = this.$loading.show() 
    setTimeout(() => { loader.hide() }, 500)
  },
  components: {
    TheNav,
    BaseDatePicker,
    BasePagination,
    RangeDatePicker,
  },
}

</script>

<style lang="scss">
</style>
