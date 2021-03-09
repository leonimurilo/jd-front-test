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
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <div className="App">
          <h2>Create</h2>
          <CreateDoc />
          <h2>List</h2>
          <List />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
