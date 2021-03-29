import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
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
    <div className="bg-gradient-to-br from-red-500 via-purple-500  to-blue-500  text-white font-nunito min-h-screen min-w-screen p-5 md:p-0 overflow-hidden">
      <Nav className={classes} />
      <Switch>
        <Route exact path="/react-tailwind-glassmorphic/" component={Home} />
        <Route
          exact
          path="/react-tailwind-glassmorphic/project"
          component={Project}
        />
        <Route path="/react-tailwind-glassmorphic" component={Home} />
      </Switch>
    </div>
  );
}
