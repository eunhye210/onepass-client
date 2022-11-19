import styled from "styled-components";

import LogoImg from "../../assets/check-mark.png";

export const MainPageLayout = styled.div`
  width: 430px;
  height: 260px;
  background: #021691;
  padding-top: 20px;
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
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const LogoName = styled.div`
  color: #ffffff;
  font-size: 30px;
`;
