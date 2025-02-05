import React from "react";

import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle} from "util/class-utils.tsx";
import compactTxt from "assets/SecretPolicy/compact.txt";
import detailTxt from "assets/SecretPolicy/detail.txt";

const PrivacyPolicy: React.FC = () => {
  const [compactTxtContent, setCompactTxtContent] = React.useState("");
  const [detailTxtContent, setDetailTxtContent] = React.useState("");

  React.useEffect(() => {
    fetch(compactTxt)
      .then((response) => response.text())
      .then((data) => setCompactTxtContent(data));
    fetch(detailTxt)
      .then((response) => response.text())
      .then((data) => setDetailTxtContent(data));
  }, []);

  const renderTxt = (txtContent: string) => {
    return txtContent.split("\n").map((line, index) => (
      <p key={index}>{line}</p> // Render each line as a paragraph
    ))
  }
  return (
    <div className="overflow-hidden">
        <Container className="mw-800px">
          <Title>Datenschutzbestimmungen</Title>
          <Subtitle>Privacy Policy</Subtitle>
        </Container>
        <Container className="mw-800px">

          <Row><Col><h3>Kompakte Version</h3></Col></Row>
          <Row>
            <Col>
              {renderTxt(compactTxtContent)}
            </Col>
          </Row>
          <Row><Col><h3>Ausführliche Version</h3></Col></Row>
          <Row>
            <Col>
              {renderTxt(detailTxtContent)}
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default PrivacyPolicy;
