<template>
  <div id="app">
    <TheNav></TheNav>
    <div v-if="testMode">
      <BaseDatePicker></BaseDatePicker>
    </div>

    <router-view/>

  </div>
</template>


<script>

import { mapState } from 'vuex'
import TheNav from '@/components/TheNav'
import exampleMixins from '@/mixins/exampleMixins'
import BaseDatePicker from '@/components/BaseDatePicker'


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
  },
  mounted() {
    this.globalTestFunc()
    this.exampleTestFunc()
    console.warn(this.exampleApiTestStr)
    console.warn(this.rootTest)
  },
  components: {
    TheNav,
    BaseDatePicker,
  },
}

</script>

<style lang="scss">
</style>
