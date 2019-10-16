<template>
  <div disabled-class="base-pagination">
    <!-- v-model="page" -->
    <!-- //! :page-count="currentPageCount" 必要屬性要補上!!! -->
    <paginate
      v-if="dataExist"
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
      >
      <!-- :hide-prev-next="defaultPerPage <= 1"  -->
    </paginate>
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'

// ? bs4樣式 http://bit.ly/vue-pagi-style

export default {
  name: 'BasePagination',
  props: {
    dataExist: {
      type: Boolean,
      required: true,
    },
  },
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
