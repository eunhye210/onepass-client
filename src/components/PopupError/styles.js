import styled from "styled-components";

import LogoImg from "../../assets/check-mark.png";

export const PopupPageLayout = styled.div`
  width: 430px;
  height: 260px;
  background: #021691;
  padding-top: 25px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 45px;
  height: 45px;
  margin-right: 5px;
`;

export const LogoName = styled.div`
  color: #ffffff;
  font-size: 35px;
`;

export const Content = styled.div`
  height: 40px;
  color: #949494;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.font};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #b5b5b5;
  margin-top: 25px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: #949494;
  }
`;
