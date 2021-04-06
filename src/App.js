import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Err from './pages/404';
import './App.css';
import Nav from './components/elements/Nav';
import { useLocation } from 'react-router-dom';

export default function App() {
  const [classes, setClasses] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/react-tailwind-glassmorphic' ||
      location.pathname === '/react-tailwind-glassmorphic/'
    )
      setClasses(' top-87/100');
    else setClasses(' top-12');
  }, [location.pathname]);

  return (
    <div className="bg-gray-100  text-gray-800 font-nunito min-h-screen min-w-screen p-5 md:p-0 overflow-hidden">
      <Nav className={classes} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Err} />
      </Switch>
    </div>
  );
}
