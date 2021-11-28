import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getColor } from '../.';

const App = () => {
  return (
    <div>
HI
<p>Random color: {getColor('gray.600')}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
