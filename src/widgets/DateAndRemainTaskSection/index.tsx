import { useTodoContext } from "../../shared/context/TodoContext";
import { getDate } from "../../shared/getDate";
import * as S from "./DateAndRemaiTaskSection.styled";

export function DateAndRemainTaskSection() {
  const {
    state: { todoList },
  } = useTodoContext();
  return (
    <S.Wrapper>
      <S.InfoSection>
        <S.Date>{getDate()}</S.Date>
        <S.TaskNum>{`${
          todoList.filter((todo) => !todo.checked).length
        } task(s)`}</S.TaskNum>
      </S.InfoSection>
    </S.Wrapper>
  );
}
