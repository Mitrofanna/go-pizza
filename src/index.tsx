import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter basename="/go-pizza">
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>,
);
