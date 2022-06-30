import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

export const LabelContainer = styled.label`
  align-items: center;
  background-color: #fff;
  border-radius: .5rem;
  cursor: text;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: .5rem 1rem;
  width: 100%;

  input {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: inherit;
    font-family: inherit;
    font-size: 1.125rem;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #afb8c1;
    }
  }

  img {
    margin-left: 1rem;
    max-width: 20px;
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
    padding: .75rem 1.5rem;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #033d8b;
    }
  }
`
