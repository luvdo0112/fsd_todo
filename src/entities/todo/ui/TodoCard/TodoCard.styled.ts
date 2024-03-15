import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  border-radius: 1rem;
`;

export const TodoInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`;

export const TodoTitle = styled.span<{ $checked: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  ${({ $checked }) =>
    $checked &&
    `
    text-decoration: line-through;;
    color: #808080;
  `}
`;

export const RadioBtn = styled.button<{ $checked: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50rem;
  border: ${({ $checked }) =>
    $checked ? "1px solid transparent" : "1px solid #808080"};
  background-color: ${({ $checked }) => ($checked ? "#E1E0F2" : "#fff")};
`;
