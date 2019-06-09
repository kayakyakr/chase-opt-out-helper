import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Faq from './screens/Faq'
import Form from './screens/Form'
import Printout from './screens/Printout'
import Support from './screens/Support'
import { Provider as StoreContextProvider } from './contexts/Store'

import 'bootstrap/dist/css/bootstrap.min.css'
import style from './styles/index.module.css'

const FormPage = () => (
  <React.Fragment>
    <Faq />
    <Form />
  </React.Fragment>
)

const PrintPage = () => (
  <React.Fragment>
    <Printout />
    <Support />
  </React.Fragment>
)

function App() {
  return (
    <StoreContextProvider>
      <Router basename={window.location.pathname.replace(/\/$/, '')}>
        <Container className={style.body}>
          <header className={style.header}>
            <h1>Opt Out of Chase&apos;s Forced Arbitration Clause</h1>
          </header>
          <Route path="/" exact component={FormPage} />
          <Route path="/print" component={PrintPage} />
        </Container>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
