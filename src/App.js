import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import route from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          {route.map((e, i) => {
            const index = i + 1;
            return (
              <Switch key={`pages-${index}`}>
                <Route exact path={e.url}>
                  {e.page}
                </Route>
              </Switch>
            );
          })}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
