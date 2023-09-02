import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { ComicDetails } from "./pages/ComicDetails"
import { Header } from "./components/Header"
import { Container } from "./components/Container"

export const Router = () => {
    return(
        <Container>
        <Header/>
        <BrowserRouter>
        <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route  path="/comic-details" element={<ComicDetails/>}/>
        </Routes>
        </BrowserRouter>
        </Container>
    )
}