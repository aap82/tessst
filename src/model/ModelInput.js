class ModelInputDate {
  _date = new Date(0)
  constructor() {
    this._date.setHours(0, 0, 0)
  }

  set(...args) {
    if (typeof args[0] == "number") {
      const [year, month, day] = args
      this._date.setFullYear(...args)
      month && month > 0 && this._date.setMonth(month - 1)
    }
  }

  get() {
    return this._date.toString()
  }

  get month() {
    return this._date.getMonth() + 1
  }
  set month(m) {
    return this._date.setMonth(m + 1)
  }
}
function Dates(cutoff, settle, pricing, first_pay) {
  this.cutoff = new Date()
}
class ModelDatesInputModel {
  cutoff = new ModelInputDate()
  settle = new Date(0)
  pricing = new Date(Date.now())
  payday = 10
  first_pay = new Date(0)
}

class ModelDatesInput {
  _cutoff = new ModelInputDate()

  _dates = new ModelDatesInputModel()
  cutoff(year, month) {
    this._cutoff.set(year, month, 1)

    return this
  }
  settle(year, month, day) {
    this._dates.settle.setFullYear(year, month, day)
    return this
  }
  pricing(year, month) {
    this._dates.pricing.setFullYear(year, month)
    return this
  }
}

const self = new ModelDatesInput()
export default self
export { ModelDatesInputModel }
