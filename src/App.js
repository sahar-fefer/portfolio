import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import translate from './languages.json';

import Loader from "./components/loader";
import Header from "./components/header";
// import SideNav from './components/sideNav';
import Home from './components/home';
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotFound";

const App = () => {
  const [language, setLanguage] = useState('en')
  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lang = navigator.language || navigator.userLanguage;
    if (lang.includes("en") || lang !== "he") {
      setLanguage("en")
    } else {
      setLanguage("he");
    }
  }, []);

  useEffect(() => {
    let lang = navigator.language || navigator.userLanguage;
    if (lang.includes("en") || lang !== "he") {
      setLanguage("en")
    } else {
      setLanguage("he");
    }
    setContent(translate[language])
  }, []);

  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
    setContent(translate[language])
    HEADER = content[HEADER];
    HOME = content[HOME];
    ABOUT = content[ABOUT];
    PROJECTS = content[PROJECTS];
    CONTACT = content[CONTACT];
    FOOTER = content[FOOTER];
  }

  let { HEADER, HOME, ABOUT, PROJECTS, CONTACT, FOOTER } = content;
  return (
    <Router>
      { loading
        ? <Loader />
        : <Switch>
          <Route exact path="/">
            <Header handleChangeLanguage={handleChangeLanguage} HEADER={HEADER} />
            <Home HOME={HOME} />
            <About ABOUT={ABOUT} />
            <Portfolio PROJECTS={PROJECTS} />
            <Contact CONTACT={CONTACT} />
            <Footer FOOTER={FOOTER} />
          </Route>
          <Route path='/404' component={PageNotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      }
    </Router >
  );
}

export default App;
