import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getColor } from '../.';

import "../css/_index.css"

const App = () => {
  return (
    <div style={{color: 'var(--color-green-500)', fontWeight: 'var(--fontWeight-extrabold)'}}>
HI
<p>Random color: {getColor('gray.600')}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
