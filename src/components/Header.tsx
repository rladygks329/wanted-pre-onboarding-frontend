import styled from 'styled-components';

export const Header = () => {
  const today = new Date();

  return (
    <HeaderWrapper>
      <DateWrapper>
        <LeftBox>{today.getMonth() + 1}</LeftBox>
        <RightBox>
          <div>{today.getFullYear()}</div>
          <div>{today.getDate()}</div>
        </RightBox>
      </DateWrapper>
      <div>수요일</div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
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
  background-color: white;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;
