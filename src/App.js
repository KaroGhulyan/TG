import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { AppWrapper } from './style';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import City from './components/City/City';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:city" component={City} />
        </Switch>
        <Footer/>
      </AppWrapper>
    </Router>
  );
}

export default App;
