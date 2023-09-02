import { ThemeProvider } from "styled-components"
import { Router } from "./routes"
import { GlobalStyles } from "./styles/global-styles"
import { theme } from "./styles/theme"
import { CartContextProvider } from "./contexts/Cart"

export function App  () {
    return(
      <CartContextProvider>
          <ThemeProvider theme={theme}>
            <Router/>
            <GlobalStyles/>
        </ThemeProvider>
      </CartContextProvider>
      
        
    )
}

export default App;