
<template>
  <div class="range-date-picker d-flex align-items-center">
    <BaseDatePicker v-on:getDate="getStartDate" :datePickerTitle="startTitle" class="mr-2"></BaseDatePicker>
    <BaseDatePicker v-on:getDate="getEndDate" :datePickerTitle="endTitle" :minDate="endDateMinDate" class="mr-2"></BaseDatePicker>
    <button @click="emitFunc" class="btn btn-success">送出</button>
  </div>
</template>

<script>
import BaseDatePicker from '@/components/base/BaseDatePicker'

export default {
  name: 'RangeDatePicker',
  data() {
    return {
      startTitle: '開始時間',
      endTitle: '結束時間',
      startDate: new Date(),
      endDate: new Date(),
      endDateMinDate: new Date(),
    }
  },
  methods: {
    emitFunc() {
      this.$emit('getRangeDate', {
        startDate: this.startDate,
        endDate: this.endDate,
      })
    },
    getStartDate(date) {
      this.startDate = date
      this.endDateMinDate = date
    }, 
    getEndDate(date) {
      this.endDate = date
    },
  },
  components: {
    BaseDatePicker,
  },
}
</script>

<style scoped lang="scss">

</style>
