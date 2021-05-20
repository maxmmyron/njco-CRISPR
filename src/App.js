import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import './App.css';

// pages
import History from './components/pages/History'
import Science from './components/pages/Science'
import Process from './components/pages/Process'
import ProsAndCons from './components/pages/ProsAndCons'
import Ethics from './components/pages/Ethics'
import Resources from './components/pages/Resources'
import Applications from './components/pages/Applications';

function App() {
  return (
    <div className="app-container">
        <Route render={({ location }) => (
            <AnimatePresence key="app-presence" exitBeforeEnter>
                <Switch location={ location } key={ location.pathname }>
                    <Route exact path="/" render={()=> <Home />} />
                    <Route exact path="/pages/history" render={()=> <History />} />
                    <Route exact path="/pages/science" render={()=> <Science />} />
                    <Route exact path="/pages/process" render={()=> <Process />} />
                    <Route exact path="/pages/applications" render={()=> <Applications />} />
                    <Route exact path="/pages/pros-and-cons" render={()=> <ProsAndCons />} />
                    <Route exact path="/pages/ethics" render={()=> <Ethics />} />
                    <Route exact path="/pages/citations" render={()=> <Resources />} />
                    { /* Add Routes here */ }
                </Switch>
            </AnimatePresence>
        )} />
    </div>
  );
}

export default App;
