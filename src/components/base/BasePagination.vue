<template>
  <div disabled-class="base-pagination">
    <!-- v-model="page" -->
    <!-- v-if="dataExist" -->
    <paginate
      :page-count="currentPageCount"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      
      :active-class="'active'"
      :disabled-class="'disabled'"
      :hide-prev-next="currentPageCount <= 1" 
      >
    </paginate>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import paginate from 'vuejs-paginate'

// ? bs4樣式 http://bit.ly/vue-pagi-style

export default {
  name: 'BasePagination',
  // data() {
  //   return {
  //     page: 1,
  //   }
  // },
  // ! 實際使用 要用 dataExist
  props: {
    dataExist: {
      type: Boolean,
      default: true,
      required: false,
    },
    currentPageCount: {
      type: Number,
      default: 10,
      required: true,
    },
  },
  computed: {
    ...mapState('route', { 
      routeQuery: 'query', 
      routePath: 'path',
    }),
  },
  // watch: {
  //   $route() {
  //     alert('routeQuery', this.routeQuery)
  //     this.page = this.routeQuery.page
  //   },
  // },
  methods: {
    clickCallback() {
    },
  },
  components: {
    paginate,
  },
}
</script>

<style scoped lang="scss">

</style>
