import { useState } from "react";

import * as S from "./styles";

function PasswordFile() {
  const [fileName, setFileName] = useState("");

  const submitFile = (e) => {
    // console.log(e);
  };

  return (
    <S.PasswordBox>
      <S.Title>File Import</S.Title>
      <S.Section>
        <S.InputBox>
          <S.FileWrapper>
            <S.InputText
              value={fileName}
              placeholder="Choose a file"
              readOnly
            />
            <S.InputFileLabel htmlFor="input-file">Upload</S.InputFileLabel>
            <S.InputFile
              id="input-file"
              onChange={(e) => setFileName(e.target.files[0].name)}
            />
          </S.FileWrapper>
          <S.Button onClick={(e) => submitFile(e)}>Import Data</S.Button>
          <S.Link>How to export my passwords from Chrome</S.Link>
        </S.InputBox>
      </S.Section>
    </S.PasswordBox>
  );
}

export default PasswordFile;
