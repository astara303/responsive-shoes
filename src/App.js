import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductPage from './components/Pages/ProductPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
