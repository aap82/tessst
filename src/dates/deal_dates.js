import { getDaysAccrued } from "./"
import dates from "../model/ModelInput"
import { setNextMonth } from "../model"
const ENTRIES = 120 + 1
const emptyArr = new Array(ENTRIES)
for (let i = 0; i < ENTRIES; i++) emptyArr[i] = 0

function DealPeriodsModel(a, r) {
  this.accruedDays = a
  this.reservedDays = r
  this.dates = dates
}

export function createDealPeriods(date) {
  const arr = date.slice(0)
  const accruedArr = emptyArr.slice(0)
  const reservedArr = emptyArr.slice(0)

  const addReserve = i => {
    const d = 30 - accruedArr[i]
    reservedArr[i] = -d
    reservedArr[i - 1] = 1
    if (d == 2) {
      reservedArr[i - 2] = 1
    }
    // while (d--) {
    //   reservedArr[i - d - 1] = 1
    // }
    return
  }
  for (let i = 0; i < 120; i++) {
    accruedArr[i] = getDaysAccrued(...arr)
    arr[1] === 3 && addReserve(i)
    setNextMonth(arr)
  }
  // accruedArr[0] -= day
  return new DealPeriodsModel(accruedArr, reservedArr)
}
