
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import UserForm from './components/userForm';
import Alldata from './components/Alldata';
import Resizablebox from './components/Resizablebox';

import AppLayout from './components/hoc/Layout';

function App() {

  

  let routes;

  routes = (
    <Switch>
      <Route path="/Add-data" exact component={UserForm} />
      <Route path="/edit-data/:value" exact component={UserForm} />
      <Route path="/All-data" exact component={Alldata} />
      <Route path="/Resizeable" exact component={Resizablebox} />
      <Redirect to="/Add-data" />
    </Switch>
  )

  return (
    <div  className="vh-100">
        <AppLayout>
            {routes}
        </AppLayout>
    </div>
  );
}

export default App;
