import { getDaysAccrued } from "./utils"

const getEmptyNumArray = (n = 121) => {
  const numArr = new Array(n)
  for (let i = 0; i < n; i++) numArr[i] = 0

  return function() {
    return numArr.slice(0)
  }
}

// class DealPeriodsModel {
//   constructor(m, y, a, r) {
//     this.months = m
//     this.years = y
//     this.accruedDays = a
//     this.reservedDays = r
//   }
// }
function DealPeriodsModel(a, r) {
  // this.months = m
  // this.years = y
  this.accruedDays = a
  this.reservedDays = r
}

const defPeriods = getEmptyNumArray()

export function createDealPeriods(year, m, day) {
  // const monthsArr = defPeriods()
  // const yearsArr = defPeriods()
  const accruedArr = defPeriods()
  const reservedArr = defPeriods()

  const rollYear = () => {
    m = 0
    year = year + 1
    return
  }
  const addReserve = i => {
    let d = 30 - accruedArr[i]
    reservedArr[i] = -d
    while (d--) {
      reservedArr[i - d - 1] = 1
    }
    return
  }

  for (let i = 0; i < 121; i++) {
    accruedArr[i] = getDaysAccrued(year, m)
    m++
    m === 12 && rollYear()
    m === 3 && addReserve(i)
  }
  // accruedArr[0] -= day
  return new DealPeriodsModel(accruedArr, reservedArr)
}
