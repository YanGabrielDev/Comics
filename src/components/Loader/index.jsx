import { LoaderContainer, LoaderIcon } from "./styles"

export const Loader = (id) => {
    return(
        <LoaderContainer>
            <LoaderIcon id={id}></LoaderIcon>
        </LoaderContainer>
    )
}