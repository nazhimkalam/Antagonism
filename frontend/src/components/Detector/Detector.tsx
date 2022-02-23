import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { detectionApi } from "../../api/DetectionApi";
import { detectorApi } from "../../api/DetectorApi";
import { userApi } from "../../api/UserApi";
import CustomButton from "../../common/CustomButton/CustomButton";
import { selectUser } from "../../redux/reducers/userReducer";

const Detector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>("");
  const [result, setResult] = useState<string | undefined>();
  const user = useSelector(selectUser);

  const handleScan = () => {
    if (!textareaContent) {
      alert("Please enter text to scan");
      return;
    }
    setIsLoading(true);
    let detectionRequestBody = { detectionText: textareaContent };
    const categories = ["Not hate", "hate"]
    axios
      .post(detectionApi.predict, detectionRequestBody)
      .then((response) => {
        let detectionResult = response.data["Prediction"];
        let userRequestBody = { fullName: user.displayName ?? "", email: user.email ?? "" };
        let detectionResultIndex = categories.indexOf(detectionResult);
        
        setResult(detectionResult);

        axios.post(userApi.create, userRequestBody).then((response) => { 
          let userId = parseInt(response.data["id"]);
          let detectorRequestBody = { userId: userId, result: detectionResultIndex.toString(), description: textareaContent };

          axios.post(detectorApi.create, detectorRequestBody).then(() => { 
            alert("Successfully scanned and saved!");
        
          }).catch(() => alert("Something weht wrong when creating detection result into the database"));
        }).catch(() => alert("Something went wrong while creating the user document"));
      })
      .catch(() => alert("Something went wrong when scanning the text"))
      .finally(() => setIsLoading(false));
  };

  const handleReset = () => {
    setTextareaContent("");
    setResult(undefined);
  };

  return (
    <DetectorStyled>
      <textarea
        rows={10}
        style={{ width: "100%" }}
        disabled={isLoading}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        placeholder="Enter message here..."
      />
      <section className="buttons">
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="primary"
          content="Scan"
          isDisabled={isLoading}
          handleEvent={handleScan}
        />
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="secondary"
          isDisabled={isLoading}
          content="Reset"
          handleEvent={handleReset}
        />
      </section>

      {result && (
        <div className="detection-result">
          <h3>Detection result:</h3> Text is of type: {result}
        </div>
      )}
    </DetectorStyled>
  );
};

export default Detector;

const DetectorStyled = styled.div`
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 2pc;
    margin-bottom: 4pc;
  }

  textarea {
    height: 100%;
    border-radius: 8px;
    padding: 1pc;
    font-size: 1.2em;
    margin: auto 1pc;
    outline: none;
  }

  .detection-result {
    margin: 4pc 1pc;
    text-transform: uppercase;

    h3 {
      font-size: 1.2em;

      font-weight: bold;
    }

    strong {
      font-size: 1.2em;

    }
  }
`;
