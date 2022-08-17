/* The above code is importing the components from the components folder and then rendering them to the
DOM. */
import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

/* Importing the React library from the node_modules folder. */

/* To deploy go to package.json & change the homepage link with your domain name then run in terminal npm run build next go to the react project folder and you will find a new folder named build thats what you gonna use only to deploy the website */

/**
 * The app function returns a React fragment that contains the Header, Nav, About, Experience,
 * Services, Portfolio, Testimonials, Contact, and Footer components.
 */
const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

/* Exporting the app function so that it can be imported into the index.js file. */
export default app