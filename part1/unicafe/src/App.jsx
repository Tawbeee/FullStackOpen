import { useState } from "react";

const Header = () => <h3>Give feedback !</h3>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({
  goodValue,
  badValue,
  neutralValue,
  totalValue,
  averageValue,
  positiveValue,
}) => {
  if (totalValue == 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <StatisticLine text="Good" value={goodValue} />
          <StatisticLine text="Bad" value={badValue} />
          <StatisticLine text="Neutral" value={neutralValue} />
          <StatisticLine text="Total" value={totalValue} />
          <StatisticLine text="Average" value={averageValue} />
          <StatisticLine text="Positive" value={positiveValue} />
        </tbody>
      </table>
    </div>
  );
};
const StatisticLine = ({ value, text }) => {
  if (text == "Positive") {
    return (
      <tr>
        <th>{text}:</th>
        <th> {value} %</th>
      </tr>
    );
  }
  return (
    <tr>
      <th> {text}:</th>
      <th> {value}</th>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(good + 1);
    const newTotal = newGood + bad + neutral;
    setTotal(newTotal);
    const newAverage = (newGood - bad) / newTotal;
    setAverage(newAverage);
    const newPositive = (newGood / newTotal) * 100;
    setPositive(newPositive);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(bad + 1);
    const newTotal = newBad + good + neutral;
    setTotal(newTotal);
    const newAverage = (good - newBad) / newTotal;
    setAverage(newAverage);
    const newPositive = (good / newTotal) * 100;
    setPositive(newPositive);
  };
  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(neutral + 1);
    const newTotal = newNeutral + bad + good;
    setTotal(newTotal);
    const newAverage = (good - bad) / newTotal;
    setAverage(newAverage);
    const newPositive = (good / newTotal) * 100;
    setPositive(newPositive);
  };

  return (
    <div>
      <Header />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleBad} text="bad" />
      <Button onClick={handleNeutral} text="neutral" />

      <Statistics
        goodValue={good}
        badValue={bad}
        neutralValue={neutral}
        totalValue={total}
        averageValue={average}
        positiveValue={positive}
      />
    </div>
  );
};
export default App;
