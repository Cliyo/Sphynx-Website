import { ThemeProvider } from "styled-components"

import { NavigationBar } from "components/NavigationBar";
import { theme } from "themes";
import { RouteApp } from "Routes";
import { AlertContextProvider } from "contexts/AlertContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertContextProvider>
        <RouteApp />
      </AlertContextProvider>
    </ThemeProvider>
  );
}

export default App;
