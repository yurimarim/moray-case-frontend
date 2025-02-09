import { ThemeProvider } from "styled-components";
import { Main } from "./components/Main";
import defaultTheme from "./assets/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
    </ThemeProvider>
  );
}