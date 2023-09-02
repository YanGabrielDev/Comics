import { styled, css } from "styled-components";

export const Field = styled.input`
  ${({ theme, error }) => css`
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;
    flex: 1 1 0%;
    border: 1px solid ${error ? theme.colors.danger : theme.colors.text};
    border-radius: 0.25rem;
    color: ${theme.colors.text};
    background: ${theme.colors.main};
  `}
`;

export const FieldError = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.size.small};
    white-space: nowrap;
  `}
`;
