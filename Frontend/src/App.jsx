import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import AppRoutes from './Routes/appRouter';
import './styles/index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;