import { ThemeProvider } from "styled-components";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import { CartContextProvider } from "./contexts/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <CartContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyles />
        </ThemeProvider>
      </CartContextProvider>
  );
}

export default App;
