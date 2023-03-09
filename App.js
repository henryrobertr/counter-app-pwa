'use strict';

const e = React.createElement;

const Button = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className="wrapper">
      <div className="display">{count}</div>
      <button onClick={() => setCount(0)} className="buttonClear">x</button>
      <button onClick={() => setCount((prev) => prev+1)} className="buttonPlus">+</button>
    </div>
  )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Button));