import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions";
import { darkTheme, lightTheme } from "../../styles/theme.js";
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
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            outline: "none",
            padding: "5px 10px",
            boder: "none",
          }}
          onClick={() => {
            dispatch(actions.appActions.setTheme());
          }}
        >
          Change theme
        </button>
        <Text>Hello WOrlld</Text>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
