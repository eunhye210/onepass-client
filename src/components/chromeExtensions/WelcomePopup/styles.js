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

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
}))`
  width: 280px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid #021691;
  border-radius: 10px;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #b5b5b5;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: #949494;
  }
`;

export const Footer = styled.section`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Content = styled.div`
  height: 10px;
  color: #ffffff;
  font-size: 15px;
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.margin};
`;

export const Link = styled.a.attrs(() => ({
  href: "https://www.one-pass.co",
  target: "_blank",
}))`
  margin-left: 5px;
  margin-right: 5px;
  color: #ffffff;
  font-size: 15px;
`;
