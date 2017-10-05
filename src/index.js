import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import About from './components/AboutUs';
import Beer from './components/Beer';
import Liquor from './components/Liquor';
import Wine from './components/Wine';
import ContactUs from './components/ContactUs';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/beer" component={Beer} />
        <Route path="/liquor" component={Liquor} />
        <Route path="/wine" component={Wine} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>



  , document.getElementById('root'));
registerServiceWorker();
