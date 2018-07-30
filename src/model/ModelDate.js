function today() {
  const date = new Date()
  date.setHours(0, 0, 0)
  return dateObjToYMD(date)
}
function dateArrToISOString([year, month, day]) {
  const d = new Date(year, month - 1, day, 0, 0, 0)
  return d.toISOString().split("T")[0]
}
export class ModelDate {
  static fromString(string) {
    return dateStrToArr(string)
  }
}

export function dateStrToArr(str) {
  const [year, month, day] = str
    .split("T")[0]
    .split(" ")[0]
    .split("-")
  console.log(getLoanAge([2018, 5, 1], [2018, 5, 1]))
  return [parseInt(year, 10), parseInt(month, 10), parseInt(day, 10)]
}

function dateObjToYMD(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
}

function getDateFromArr([year, month, day]) {
  return new Date(year, month - 1, day, 0, 0, 0)
}

export function getLoanAge(cutoff, firstpay) {
  const diff = (cutoff[0] - firstpay[0]) * 12 + cutoff[1] - firstpay[1]
  return diff
  if (firstpay[0] < cutoff[0]) {
    return 12 + cutoff[1] - firstpay[1]
  }

  if (firstpay[1] < cutoff[1]) {
    return cutoff[1] - firstpay[1]
  }
  return 0
}
export function setPrevMonth(date) {
  date[1]--
  if (date[1] == 0) {
    date[0]--
    date[1] = 12
  }

  return date
}

export function setNextMonth(date) {
  date[1]++
  if (date[1] == 13) {
    date[0]++
    date[1] = 1
  }

  return date
}
