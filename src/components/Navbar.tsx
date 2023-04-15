import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLogo />
      <NavContent href={`${process.env.PUBLIC_URL}/signin`}>로그인</NavContent>
      <NavContent href={`${process.env.PUBLIC_URL}/signup`}>
        회원가입
      </NavContent>
      <NavContent href={`${process.env.PUBLIC_URL}/todo`}>TodoList</NavContent>
    </NavWrapper>
  );
};
const NavLogo = styled.div``;

const NavWrapper = styled.nav`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  background-color: #263344;
`;

const NavContent = styled.a`
  padding: 0.5rem;
  font-weight: 700;
  color: white;
`;

export { Navbar };
