import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import actions from "store/actions";
import { darkTheme, lightTheme } from "styles/theme.js";
import styled from "styled-components";
function App() {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    theme === "lightTheme"
      ? (document.body.style = `background-color: ${lightTheme.background};`)
      : (document.body.style = `background-color: ${darkTheme.background};`);
  }, [theme]);
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <button
        onClick={() => {
          dispatch(actions.appActions.setTheme());
        }}
      >
        Change theme
      </button>
      <Text>Hello WOrlld</Text>
    </ThemeProvider>
  );
}

export default App;

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
