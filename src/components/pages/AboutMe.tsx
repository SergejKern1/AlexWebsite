import {Container, Row, Col, Form, Button, Image} from "react-bootstrap";
import { loremIpsumText } from "../../util/loremIpsum";
import { Spacing } from "../../util/class-utils";

const AboutMe: React.FC = () => {
  return (
    <div>
        <Container id="about-me">
          <Spacing top={50} />
          <div className="fl-j-center-al-i-center">
            <p className="d-block-mx-auto col-primary">
              "Die größte Inspiration und Ruhe<br/>
              finde ich in der Natur. <br/>
              und ihrer undenlichen Vielfalt." 
            </p>
          </div>
          <Spacing top={50} />

        </Container>

        <Row className="m-0 p-0"> 
            <Col xs={12} md={6} className="p-0"><Image fluid src="/About/Alex-foto.jpg" /></Col>
            <Col xs={12} md={6} className="p-4 fl-col-j-center-al-i-center" style={{color:"white", backgroundColor: "var(--primary)"}}>
              <div className="d-block-mx-auto">
                <p className="d-block">
                  Schön, dass du<br/>
                  hergefunden hast!
                </p>
                <p className="d-block">
                  Wenn du nach<br/>
                  Illustrationen und<br/>
                  Designs mit Liebe zum Detail<br/>
                  suchst, dann bist du bei mir<br/>
                  genau richtig.
                </p>
              </div>
            </Col>
        </Row>
        <Row className="m-2 p-2 custom-column-txt"> 
            <Col xs={12} md={6} className="d-block-mx-auto m-4">
              <p className="col-primary"><b>Bio</b></p>
              <p className="d-block">
                Ich bin Designerin mit mehrjähriger<br/>
                Agenturerfahrung, dabei liegt mein<br/>
                Schwerpunkt auf Corporate & Motion<br/>
                Design sowie UI Design für Spiele<br/>
                und Apps.
              </p>
              <p className="d-block">
                Als Illustratorin gefällt mir<br/>
                besonders das Entwickeln von Charak-<br/>
                teren mit Fokus auf harmonischen<br/>
                Farben um Geschichten zu erzählen.
              </p>
            </Col>

            <Col xs={12} md={6} className="d-block-mx-auto m-4">
              <p className="col-primary"><b>Work</b></p>
              <p className="d-block">
                Bei meiner Arbeit ist es mir besonders<br/>
                wichtig mir Zeit für dich und den Proz-<br/>
                ess zu nehmen, damit du dich während des<br/>
                gesamten Projekts gut aufgehoben<br/>
                fühlst und wir zu einem Ergebnis<br/>
                kommen, das mit dir resoniert.
              </p>
              <p className="col-primary"><b>Don'ts</b></p>
              <p className="d-block">
                Da mir der Planet sehr am Herzen liegt,<br/>
                möchte ich nicht für Firmen arbeiten,<br/>
                denen Soziales Gemeinwohl und Nach-<br/>
                haltigkeit egal sind. 
              </p>
            </Col>
        </Row>

        <Row>
          Kontakt
          {loremIpsumText}
          Alexandra
        </Row>
        <Row id="contact">
          <h4 className="col-primary">Reach out!</h4>
          <Form>
            <Form.Group className="mb-3" controlId="form-name">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Max Muster" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="maxmuster@mail.de" />
              {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-subject">
              <Form.Label>Betreff</Form.Label>
              <Form.Control placeholder="Reaching out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-message">
              <Form.Label>Message</Form.Label>
              <textarea className="form-control" id="form-message" rows={3}></textarea>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Absenden
            </Button>
          </Form >
        </Row>
    </div>
  );
}

export default AboutMe;
