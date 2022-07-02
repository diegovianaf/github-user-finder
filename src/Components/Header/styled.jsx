import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const LabelContainer = styled.label`
  align-items: center;
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: #51596b33 2px 4px 8px;
  cursor: text;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: .5rem 1rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: .125rem;
    padding: .25rem;
  }

  input {
    background-color: transparent;
    border: 1px solid transparent;
    font-family: inherit;
    font-size: 1.125rem;
    line-height: 1.5;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #afb8c1;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  img {
    margin-left: 1rem;
    max-width: 20px;

    @media (max-width: 480px) {
      display: none;
    }
  }

  button {
    background-color: #0550ae;
    border: none;
    border-radius: .5rem;
    color: #f1f8fc;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 700;
    padding: .625rem 1.25rem;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #033d8b;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: .5rem;
    }
  }
`
