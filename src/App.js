import React from 'react';

import {HashRouter} from 'react-router-dom';

import Menu from './components/menu'
import routes from './routes';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Menu />
      {routes}
    </div>
    </HashRouter>
  );
}

export default App;
