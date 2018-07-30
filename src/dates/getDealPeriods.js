export function getPeriodsForDeal(dates) {
  const accruedArr = emptyArr.slice(0)
  const reservedArr = emptyArr.slice(0)
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
    reservedArr[i] = m + 1
    m++
    m === 12 && rollYear()
    m === 3 && addReserve(i)
  }
  // accruedArr[0] -= day
  return new DealPeriodsModel(accruedArr, reservedArr)
}
