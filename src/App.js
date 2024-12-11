import React from 'react'
import "./App.css"
import Header from './Header'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Home from './Home'
import About from './About'
import CourseHome from './CourseHome'
import Team from './Team'
import Pricing from './Pricing'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
const App = () => {
  return (
    <>
    <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/courses' exact component={CourseHome} />
      <Route path='/team' exact component={Team} />
      <Route path='/pricing' exact component={Pricing} />
      <Route path='/journal' exact component={Blog} />
      <Route path='/contact' exact component={Contact} />
    </Switch>
    <Footer />
    </Router>
    </>
  )
}

export default App