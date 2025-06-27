import './App.css';
import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";
import { Button, Nav, Navbar } from 'react-bootstrap';
import Contact from "./components/contact"

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user)
  }
  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={'/movies'}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/Contact'}>Contact</Link>
            </Nav.Link>

          </Nav>

          <Nav.Link>
            {user ? (<Button variant="primary" onClick={logout}>Logout User</Button>) : (<Link to={"/login"}>
              <Button
                variant='success'>Login</Button>
            </Link>)}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        {/* what displays is the movies list  */}
        <Route exact path={["/", "/movies"]} component={MoviesList}>
        </Route>
        {/* adding a review */}
        <Route path="/movies/:id/review" render={(props) =>
          <AddReview {...props} user={user} />
        }>
          {/* finding specific movie */}
        </Route>
        <Route path="/movies/:id/" render={(props) =>
          <Movie {...props} user={user} />
        }>
          {/* login page */}
        </Route>
        <Route path="/login" render={(props) =>
          <Login {...props} login={login} />
        }>
        </Route>
        <Route exact path="/contact" component={Contact}>
        </Route>
      </Switch>

    </div>
  );
}

export default App;