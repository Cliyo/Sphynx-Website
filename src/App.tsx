import { ThemeProvider } from "styled-components"

import { NavigationBar } from "components/NavigationBar";
import { theme } from "themes";
import { RouteApp } from "Routes";
import { AuthContextProvider } from "context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <RouteApp />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
