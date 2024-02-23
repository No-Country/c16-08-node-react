
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../build/styles/styles.css'
import './main.module.css'
import './Fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />    
  </BrowserRouter> 

)
