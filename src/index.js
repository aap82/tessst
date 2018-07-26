import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import DealPeriods from "./dates/deal_dates"

class DatesForm extends React.Component {
  constructor(props) {
    super(props)
    this.settle = React.createRef()
    this.firstpay = React.createRef()

    this.setDate = this.setDate.bind(this)
  }

  setDate(e) {
    console.time("test")

    const date = new Date(this.settle.current.value)
    const periods = DealPeriods.create(date)
    console.timeEnd("test")
    console.log(periods.day)
    console.log(periods.month)

    return
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose dates</legend>

          <div>
            <label htmlFor="settle">Settle</label>
            <input
              type="date"
              id="settle"
              name="dates"
              ref={this.settle}
              defaultValue="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>

          <div>
            <label htmlFor="firstpay">First Pay</label>
            <input
              type="date"
              id="firstpay"
              name="dates"
              defaultValue="2018-07-29"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <br />
          <div>
            <button title="submit" onClick={this.setDate}>
              Set
            </button>
          </div>
        </fieldset>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <DatesForm />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
