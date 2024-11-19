import { ThemeProvider } from "styled-components"

import { NavigationBar } from "components/NavigationBar";
import { theme } from "themes";
import { RouteApp } from "Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteApp />
    </ThemeProvider>
  );
}

export default App;
