import * as S from "./styles";

function Sidebar({ option, setOption }) {
  const options = ["Passwords", "My Account", "Logout"];

  return (
    <S.SidebarLayout>
      <S.Wrapper>
        <S.Logo>
          <S.LogoImage />
          <S.LogoName>OnePass</S.LogoName>
        </S.Logo>
        {options.map((item) => (
          <S.OptionButton
            key={item}
            name={item}
            selected={option === item}
            onClick={(e) => setOption(item)}
          >
            <S.OptionTag selected={option === item} />
            <S.OptionText selected={option === item}>{item}</S.OptionText>
          </S.OptionButton>
        ))}
      </S.Wrapper>
    </S.SidebarLayout>
  );
}

export default Sidebar;
