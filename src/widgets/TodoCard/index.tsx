import * as S from "./TodoCard.styled";

export default function TodoCard() {
  return (
    <S.Wrapper>
      <S.TodoInfoSection>
        <S.TodoTitle>Sprint meeting</S.TodoTitle>
        <S.TodoTime>09:00 am - 11:00 am</S.TodoTime>
      </S.TodoInfoSection>
    </S.Wrapper>
  );
}
