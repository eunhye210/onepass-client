import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import csvFileToArray from "../../services/csvFileToArray";
import { addPassword } from "../../services/apiRequests";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

// file input reset 로직 필요
function PasswordFile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = async (event) => {
        const csvOutput = event.target.result;
        const csvArray = csvFileToArray(csvOutput);

        try {
          const result = await addPassword(userId, csvArray);
          dispatch(setModalOpen({ title: "Success", message: result }));
        } catch (err) {
          dispatch(setModalOpen({ title: "Error", message: err }));
        }
      };

      fileReader.readAsText(file);
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
