import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter } from 'react-router-redux'
import promise from 'redux-promise';

import reducers from './reducers';
// import createHistory from 'history/createBrowserHistory'
import { Route, Switch, Redirect, } from 'react-router-dom'
import { BrowserRouter, HashRouter, } from 'react-router-dom';

//
import Home from './components/Home.js';
import Theatrical from './components/theatrical/TheatricalPage.js'
import Vod from './components/vod/VodPage.js';
import Theme from './components/Theme';
import Startup from './components/Startup'
// import reducers from './reducers';

// const history = createHistory( )
const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

const Root = ( ) => {
	return (

		<Provider store={createStoreWithMiddleware( reducers )}>
			<HashRouter basename="/">
				<Startup>
					<Theme>
						<Switch>
							<Route path="/" exact component={Home} title="Home"/>
							<Route path="/theatrical" component={Theatrical} title="Theatrical Release"/>
							<Route path="/vod" component={Vod} title="Video on Demand"/>

						</Switch>
					</Theme>
				</Startup>
			</HashRouter>
		</Provider>

	)
}

export default Root;
