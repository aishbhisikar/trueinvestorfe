import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import EnrollmentForm from "./components/formik/EnrollmentForm";
import LoginForm from "./components/formik/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/signup" component={EnrollmentForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
