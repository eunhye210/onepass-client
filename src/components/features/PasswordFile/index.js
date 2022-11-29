import { useState } from "react";
import { useDispatch } from "react-redux";

import csvFileToArray from "../../../services/csvFileToArray";
import { setModalOpen } from "../../../store/slices/modalSlice";

import * as S from "./styles";

function PasswordFile() {
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const handleSubmit = () => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);

      fileReader.onload = async (e) => {
        const csvOutput = e.target.result;
        const csvArray = csvFileToArray(csvOutput);

        dispatch(setModalOpen({ type: "file", message: csvArray }));
        setFile();
      };
    }
  };

  return (
    <S.PasswordBox>
      <S.Title>File Import</S.Title>
      <S.Section>
        <S.InputBox>
          <S.FileWrapper>
            <S.InputText
              value={file?.name || ""}
              placeholder="Choose a file"
              readOnly
            />
            <S.InputFileLabel htmlFor="input-file">Upload</S.InputFileLabel>
            <S.InputFile
              id="input-file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </S.FileWrapper>
          <S.Button onClick={(e) => handleSubmit(e)}>Import Data</S.Button>
          <S.Link>How to export my passwords from Chrome</S.Link>
        </S.InputBox>
      </S.Section>
    </S.PasswordBox>
  );
}

export default PasswordFile;
