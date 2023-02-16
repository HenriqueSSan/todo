import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import todoStore from './store/todoStore';

import { Provider } from 'react-redux';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
);
