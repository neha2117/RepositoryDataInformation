import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// configs
import store from './store';
import registerServiceWorker from '../commons/registerServiceWorker';
import RepositoryList from './components/RespositoryList/index';
import ShowRepository from './components/ShowRepositoryData/showRepository';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
	<Router>
	  <div>
		<Route exact path="/" component={RepositoryList} />
		<Route path="/repository_info" component={ShowRepository} />
	  </div>
	</Router>
  )

var root = document.getElementById('root')

if(root)
	ReactDOM.render(
		<Provider store = {store}>
			{routing}
		</Provider>,
	root);

// register service worker
registerServiceWorker();