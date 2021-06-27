import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";

const Loading = () => (
  <div className="loader-wrapper">
    <div className="spinner"></div>
  </div>
);

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.isLoading = setTimeout(() => {
      this.setState({ loading: false });
    }, 50);
  }
  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  timer = () =>
    setTimeout(() => {
      this.setState({ loading: false });
    }, 50);

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/Blogs">
              <Blogs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
