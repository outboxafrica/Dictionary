import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Logoutpage, LookBookpage, Profilepage, Homepage } from './components/home/list'
// import Main from './components/home/main';
import Homepage from './components/home/homepage';
import Logoutpage from './components/home/log';
import LookBookpage from './components/home/look';
import Profilepage from './components/home/profile';
import Signinpage from './components/home/sign';
import Loginpage from './components/home/login';

ReactDOM.render(
   <>
    <Router>
    <Switch>
           <Route exact path="/" component={Homepage}/>
          <Route exact path="/profilepage" component={Profilepage }/>
		    <Route exact path="/lookbookpage" component={LookBookpage}/>
			<Route exact path="/logoutpage" component={Logoutpage}/>
     </Switch>
     </Router>

 </>, document.getElementById('root')
)
