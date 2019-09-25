<template>
  <div id="app">

    <TheNav></TheNav>

    <router-view/>

  </div>
</template>


<script>

import { mapState } from 'vuex'
import TheNav from '@/components/TheNav'
import exampleMixins from '@/mixins/exampleMixins'


export default {
  name: 'App',
  mixins: [exampleMixins],
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
  },
}

</script>

<style lang="scss">
</style>
