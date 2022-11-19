/* global chrome */
import * as S from "./styles";

function MainPopup() {
  const resetStorage = () => {
    localStorage.removeItem("userId");
  };

  return (
    <>
      <div>main</div>
      <button onClick={resetStorage}>delete</button>
    </>
  );
}

export default MainPopup;
