import TodoCard from "../TodoCard";
import * as S from "./TodoListSection.styled";

export function TodoListSection() {
  return (
    <S.Wrapper>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </S.Wrapper>
  );
}
