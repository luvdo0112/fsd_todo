import * as S from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
