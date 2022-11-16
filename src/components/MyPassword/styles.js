import styled from "styled-components";

export const MyPasswordPageLayout = styled.div`
  height: 100%;
  background: #edf2fb;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const SectionBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
