import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { store } from './store';
import ScrollToTop from 'components/widgets/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <RouterConfig />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
export default App;
