import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
