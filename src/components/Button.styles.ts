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

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
