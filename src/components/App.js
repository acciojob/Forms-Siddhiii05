import React from 'react'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'
import Card from './Card'
import { Link, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
        <Link id="form-link" to="/form">Form</Link> <br/><br/>
        <Link id="form-ref-link" to="/form-ref">Form Ref</Link> <br/><br/>
        <Link id="form-state-link" to="/form-state">Form State</Link> <br/><br/>

        <Switch>
            <Route path='/form' component={Form}/>
            <Route path='/form-ref' component={FormRef}/>
            <Route path='/form-state' component={FormState}/>
            <Route path='/card' component={Card}/>
        </Switch>
    </div>
  )
}

export default App