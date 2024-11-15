import { ThemeProvider } from "styled-components"

import { NavigationBar } from "components/NavigationBar";
import { theme } from "themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
