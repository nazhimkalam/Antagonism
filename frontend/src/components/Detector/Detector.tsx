import { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../common/CustomButton/CustomButton";

const Detector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>("");

  const handleScan = () => {
    alert("Scanning...");
  };

  const handleReset = () => {
    setTextareaContent("");
  };

  return (
    <DetectorStyled>
      <textarea rows={30} style={{ width: "100%" }} value={textareaContent} onChange={(e) => setTextareaContent(e.target.value)} placeholder="Enter message here..."/>
      <section className="buttons">
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="primary"
          content="Scan"
          handleEvent={handleScan}
        />
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="secondary"
          content="Reset"
          handleEvent={handleReset}
        />
      </section>
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
        font-family: arial;
        outline: none;
    }
`;
