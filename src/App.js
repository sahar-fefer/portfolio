import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Helmet } from "react-helmet";

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
    setContent(translate[language])
  }, [language]);

  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  }

  return (
    <Router>
      <Helmet>
        <html lang={language} />
      </Helmet>
      { loading
        ? <Loader />
        : <Switch>
          <Route exact path="/">
            <Header handleChangeLanguage={handleChangeLanguage} HEADER={content.HEADER} />
            <Home HOME={content.HOME} />
            <About ABOUT={content.ABOUT} />
            <Portfolio PROJECTS={content.PROJECTS} />
            <Contact CONTACT={content.CONTACT} />
            <Footer FOOTER={content.FOOTER} />
          </Route>
          <Route path='/404' component={PageNotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      }
    </Router >
  );
}

export default App;
