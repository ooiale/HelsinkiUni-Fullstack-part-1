import { useState } from 'react'

const Header = ({message}) => {
  return (
    <h2>{message}</h2>
  )
}



const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}> {text} </button>
  )
}

const StatisticsLine = ({text, avaliation}) => {
  return(
    <tr>
      <th>{text}</th>
      <td>{avaliation}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all == 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  const average = all != 0 ?((good - bad)/all).toFixed(2) :0
  const positive = all !=0 ?((good / all) * 100).toFixed(2) :0
  const positiveToString = positive.toString() + " %"
  return (
    <table>
      <tbody>
      <StatisticsLine text = 'good' avaliation={good}/>
      <StatisticsLine text = 'neutral' avaliation={neutral}/>
      <StatisticsLine text = 'bad' avaliation={bad}/>
      <StatisticsLine text = 'all' avaliation={all}/>
      <StatisticsLine text = 'average' avaliation={average}/>
      <StatisticsLine text = 'positive' avaliation={positiveToString}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const incrementGood = () => {
    setGood(good + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header message = 'give feedback'/>
      <Button onClick = {incrementGood} text = 'good'/>
      <Button onClick = {incrementNeutral} text = 'neutral'/>
      <Button onClick = {incrementBad} text = 'bad'/>
      <Header message = 'statistics' />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      
    </div>
  )
}

export default App