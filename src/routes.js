import React from 'react'
import {Switch, Route} from 'react-router-dom'

//pages
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Videos from './pages/videos';
import ViewVideo from './pages/viewVideo';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/videos/:videoId' component={ViewVideo} />
        <Route path='/videos' component={Videos} />
        <Route render={() => {
            return(
                <div>
                <h1>Hidden Component</h1>
                <p>This is being rendered from the routes page</p>
                </div>
            )
        }} path='/hidden'/>
    </Switch>
)

//can either put the home component at the top with 'exact' or display it at the bottom of the routes without the 'exact'