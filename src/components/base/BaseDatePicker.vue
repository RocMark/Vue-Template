<template>
  <div class="base-date-picker d-flex align-items-center py-4">
    <!-- <h4>{{ formatedTime }}</h4> -->
    <!-- :format="customFormatter" -->
    <span v-if="datePickerTitleExist" class="mr-2">{{ datePickerTitle }}</span>
    <Datepicker 
      v-model=testDate
      :language="languageMode.en" 
      :inline="calendarMode"
      :disabled-dates="disabledDates"
      @selected="emitFunc"
      >
      </Datepicker>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import { en, zh, zhHK } from 'vuejs-datepicker/dist/locale'


export default {
  name: 'BaseDatePicker',
  data() {
    return {
      testDate: new Date(2019, 10, 16), // v-model 必須傳入 Date　物件
      languageMode: {
        en,   // English (預設)
        zh,   // Chinese
        zhHK, // Chinese_HK
      },
      disabledDates: {
        to: new Date(2019, 10, 1), // Disabled 在此之前的所有日期
        from: new Date(2019, 10, 16), // Disable 在此之後的所有日期
        // days: [6, 0], // Disable 六日 (選定 Disabled 星期幾)
        // daysOfMonth: [29, 30, 31], // Disable (選定 Disabled 月中的哪幾天)
        // dates: [ // Disable an array of dates 設定排除那些天數不可選取
        //   new Date(2016, 9, 16),
        //   new Date(2016, 9, 17),
        //   new Date(2016, 9, 18)
        // ],
        // ranges: [{ // Disable 給定的範圍期間內 (首尾仍可選擇)
        //   from: new Date(2019, 10, 8),
        //   to: new Date(2019, 10, 10),
        // }, {
        //   from: new Date(2017, 1, 12),
        //   to: new Date(2017, 2, 25),
        // }],
      },
    }
  },
  computed: {
    formatedTime() {
      return this.moment(this.testDate).format('YYYY-MM-DD')
    },
    datePickerTitleExist() {
      return this.datePickerTitle !== ''
    },
    // ? 思考一下這要用父元件傳，還是 Vuex 管理，或從 .env 設定?
    // oldestDate() {
    //   return new Date(process.env.VUE_APP_FINREPORT_COIN_OLDEST_DATA_DATE)
    // },
  },
  props: {
    minDate: {
      type: Date,
      required: false,
    },
    datePickerTitle: {
      type: String,
      default: '',
      required: false,
    },
    // :inline 屬性 設定是否將日曆預設打開
    calendarMode: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  // ! watch midDate Props 聯動 EndDate
  watch: { 
    minDate(startDate) {
      this.disabledDates.to = startDate
    },
  },
  mounted() {
    // this.setDefaultDisableDate()
    this.setOldestDate()
  },
  methods: {
    emitFunc(date) {
      this.$emit('getDate', date)
    },
    customFormatter(date) {
      return this.moment(date).format('MMMM Do YYYY, h:mm:ss a')
      // return this.moment(date).format('YYYY-MM-DD')
    },
    setDefaultDisableDate() {
      this.disabledDates.from = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())
    },
    setOldestDate() {
      this.disabledDates.to = new Date(process.env.VUE_APP_FINREPORT_COIN_OLDEST_DATA_DATE)
    },
    setDefaultMinDate() {
      this.disabledDates.to = this.minDate
    },
  },
  components: {
    Datepicker,
  },
}
</script>

<style scoped lang="scss">

</style>
