import React, {Suspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const MicroApp1 = lazy(() => System.import('http://127.0.0.1:8080/Pay.js')) // 拉取一个远程的Pay资源 
function Pay() {
  
  return (
    <Suspense fallback="loading...">
      123465
      <MicroApp1 />
    </Suspense>
  )
}
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={ Pay }/>
        </Switch>
      </div>
    </Router>
  );
}