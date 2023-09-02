import { css, styled } from "styled-components";

export const ComicDetailsContainer = styled.div`
${() => css`
display: flex;
gap: 0.5rem;
`}
`

export const ComicDetailsImage = styled.img`
${() => css`
height: 20rem;
width: auto;
`}
`
export const ComicDetailsContent = styled.div`
${() => css`
display: flex; 
flex-direction: column;
width: 100%;
`}
`