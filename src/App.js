import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <div>
      {/* /add /edit/:id   */}
      <ToastContainer />
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddContact} />
        <Route path="/edit/:id" exact component={EditContact} />
      </Switch>
    </div>
  )
}

export default App
