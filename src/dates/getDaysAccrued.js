export function getDaysAccrued(year, month) {
  const d = new Date(0)
  d.setFullYear(year, month - 1, 0)
  return d.getDate()
}
