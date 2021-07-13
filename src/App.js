import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import './index.css';

function App() {

  let getBballLink = (array) => {

    return array[Math.floor(Math.random() * array.length)];
    
  };

  let bballLinks = [
    'https://www.youtube.com/watch?v=EAzVVKNcDbM', 
    'https://www.youtube.com/watch?v=rhCy8q2p5Jw',
    'https://www.youtube.com/watch?v=h7MFaPOfGeU',
    'https://www.youtube.com/watch?v=k9NUCr38ykE'
  ]
  

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact render={() => (
          <Home getBballLink={getBballLink} bballLinks={bballLinks} />
        )} />
        <Route component={Project} path='/project' exact />
        <Route component={Post} path='/post' exact />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={About} path='/about' exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
