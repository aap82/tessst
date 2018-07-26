import { getDaysInMonth } from "date-fns"
const setLeap = i => {
  // console.log("leap")
}
const zeroes = (n = 131) => {
  const arr = new Array(n)
  for (let i = 0; i < n; i++) {
    arr[i] = 0
  }

  return function() {
    return arr.slice(0)
  }
}

const defPeriods = zeroes()
export default class DealPeriods {
  // constructor() {
  // this.
  month = defPeriods()
  day = defPeriods()
  year = defPeriods()
  // this.
  reserve = defPeriods()

  static create(cutoffDate) {
    cutoffDate.setDate(1)
    const periods = new DealPeriods()
    const day = periods.day
    const month = periods.month
    const reserves = periods.reserve
    const length = day.length

    month[0] = cutoffDate.getMonth() + 1
    for (let i = 1; i < length; i++) {
      const days = getDaysInMonth(cutoffDate)
      day[i] = days
      // days == 28 && setLeap(i)

      cutoffDate.setMonth(month[i - 1])
      month[i] = cutoffDate.getMonth() + 1
    }

    return periods
  }
}
