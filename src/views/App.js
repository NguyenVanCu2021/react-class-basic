import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route> 
            <Route exact path="/todo">
              <ListTodo />
            </Route> 
            <Route exact path="/about">
              <MyComponent />
            </Route> 
            <Route exact path="/user">
              <ListUser />
            </Route>
            <Route exact path="/user/:id">
              <DetailUser />
            </Route>
        </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;