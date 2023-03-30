import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { store } from './store';
import ScrollToTop from 'components/widgets/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <RouterConfig />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
