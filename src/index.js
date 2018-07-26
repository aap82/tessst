import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

class DatesForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(2018, 7, 1),
    }
  }

  setDate = date => {
    console.log(date)
  }

  render() {
    console.log("a", this.state.date)
    return (
      <div>
        <input type="date" onChange={this.setDate} />
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DatesForm />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
