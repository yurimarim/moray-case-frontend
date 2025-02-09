import { ThemeProvider } from "styled-components";
import defaultTheme from "./assets/styles/themes/default";
import { Home } from "./components/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}