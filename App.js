'use strict';

const e = React.createElement;

const Button = () => {
  return (
    <button>Hello</button>
  )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Button));