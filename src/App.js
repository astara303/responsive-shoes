import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shoes from './components/Pages/Shoes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Shoes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
