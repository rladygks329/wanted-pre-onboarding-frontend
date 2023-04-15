import styled from 'styled-components';

export const Header = () => {
  const today = new Date();

  return (
    <HeaderWrapper>
      <DateWrapper>
        <LeftBox>{today.getMonth().toLocaleString()}</LeftBox>
        <RightBox>
          <div>{today.getFullYear()}</div>
          <div>{today.getDate()}</div>
        </RightBox>
      </DateWrapper>
      <HeaderTitle>Todo List</HeaderTitle>
      <TextDiv>수요일</TextDiv>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  font-weight: 700;
  height: 100%;
  width: 3rem;
  color: black;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: larger;
  font-weight: 1000;
`;

const TextDiv = styled.div`
  padding: 0.5rem;
`;
