import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "store/actions";
import { darkTheme, lightTheme } from "styles/theme.js";
import styled from "styled-components";
function App() {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <Text>Hello WOrlld</Text>
    </ThemeProvider>
  );
}

export default App;

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
