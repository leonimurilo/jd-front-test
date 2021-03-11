import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { createTheme, BaseProvider } from "baseui";
import CreateDoc from "./CreateDoc";
import List from "./List";
import NavigationBar from "./NavigationBar";

const primitives = {
  accent: "#367C2B",
  accent200: "#306f26",
  accent300: "#25561e",
};

const overrides = {
  colors: {
    buttonPrimaryFill: primitives.accent,
    buttonPrimaryHover: primitives.accent200,
    buttonPrimaryActive: primitives.accent300,
  },
};

const theme = createTheme(primitives, overrides);

const engine = new Styletron();

function App() {
  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <div className="app">
            <NavigationBar />
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
