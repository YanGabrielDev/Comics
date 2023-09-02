import { ThemeProvider } from "styled-components"
import { Router } from "./routes"
import { GlobalStyles } from "./styles/global-styles"
import { theme } from "./styles/theme"

export function App  () {
    return(
        <ThemeProvider theme={theme}>
            <Router/>
            <GlobalStyles/>
        </ThemeProvider>
        
    )
}

export default App;