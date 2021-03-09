import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { createTheme, BaseProvider } from "baseui";
import CreateDoc from "./CreateDoc";
import List from "./List";

const primitives = {
  accent: "#367C2B",
};

const theme = createTheme(primitives, {});

const engine = new Styletron();

function App() {
  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/docs/new" component={CreateDoc} />
              <Route path="/" component={List} />
            </Switch>
          </div>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
