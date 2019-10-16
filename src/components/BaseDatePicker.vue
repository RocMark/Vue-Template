<template>
  <div class="base-date-picker">
    <h4>DatePicker SelectedDate {{ testDate }}</h4>
    <!-- :format="customFormatter" -->
    <Datepicker 
      v-model=testDate
      :language="languageMode.en" 
      :inline="calendarMode"
      :disabled-dates="disabledDates"
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
      calendarMode: false, // :inline 屬性 設定是否將日曆預設打開
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
  props: {
    oldestDate: {
      type: Date,
      // required: true,
    },
  },
  mounted() {
    // this.setDefaultDisableDate()
    // this.setOldestDate()
  },
  methods: {
    customFormatter(date) {
      return this.moment(date).format('MMMM Do YYYY, h:mm:ss a')
      // return this.moment(date).format('YYYY-MM-DD')
    },
    setDefaultDisableDate() {
      this.disabledDates.from = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())
    },
    // 測驗未成功
    setOldestDate() {
      // this.disabledDates.to = this.oldestDate2 || ''
      // this.disabledDates.to = new Date(2019, 10, 8)
    },
  },
  components: {
    Datepicker,
  },
}
</script>

<style scoped lang="scss">

</style>
