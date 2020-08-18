import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// Route
import route from './routes';

// Layout
import MainLayout from './layouts/MainLayout';

// SCSS
import './assets/scss/main.scss';
import './assets/scss/custom.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <MainLayout>
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
          </MainLayout>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
