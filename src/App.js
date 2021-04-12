import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './components/Home'
import Page from './components/Page'
import './App.css';

function App() {
  return (
    <div className="app-container">
        <Header />
        <Route render={({ location }) => (
            <AnimatePresence key="app-presence" exitBeforeEnter>
                <Switch location={ location } key={ location.pathname }>
                    <Route exact path="/" render={()=> <Home />} />
                    { /* Add Routes here */ }
                </Switch>
            </AnimatePresence>
        )} />
    </div>
  );
}

export default App;
