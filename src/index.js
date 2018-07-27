import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import { createDealPeriods } from "./dates/deal_dates"
// <div>{periods.months[i]}</div>
// <div>{y}</div>
const ItemsList = ({ periods }) =>
  periods.accruedDays.map((y, i) => (
    <li key={i}>
      <div>{i}</div>

      <div>{periods.accruedDays[i]}</div>
      <div>{periods.reservedDays[i]}</div>
    </li>
  ))

class DatesForm extends React.Component {
  constructor(props) {
    super(props)
    this.settle = React.createRef()
    this.firstpay = React.createRef()
    this.setDate = this.setDate.bind(this)
    this.state = {
      periods: undefined,
    }
  }

  setDate(e) {
    const date = new Date(...[this.settle.current.value.split("-")])
    console.time("test")

    const periods = createDealPeriods(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )
    console.timeEnd("test")
    this.setState({ periods })

    return
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose dates</legend>

          <div>
            <label htmlFor="settle">settle</label>
            <input
              type="date"
              id="settle"
              name="dates"
              ref={this.settle}
              defaultValue="2018-01-18"
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
        {this.state.periods && (
          <ul>
            <ItemsList periods={this.state.periods} />
          </ul>
        )}
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
