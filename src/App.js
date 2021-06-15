import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import SignIn from "./views/signin";
import Layout from "./components/Layout";
import { AuthStateProvider } from "./hooks/useAuthState";

export function App() {
  return (
    <Layout>
      <AuthStateProvider>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AuthStateProvider>
    </Layout>
  );
}
export default App;
