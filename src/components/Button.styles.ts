import { styled, css } from "styled-components"

export type ButtonVariants = "primary" | "secondary" | "success" | "danger"

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: "purple",
  secondary: "blue",
  success: "green",
  danger: "red",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;


  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
