import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Spacing } from "util/class-utils";
import { Navigate } from "react-router-dom";

const AboutMe: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Container id="about-me">
        <Spacing top={50} />
        <div className="fl-j-center-al-i-center">
          <p className="mx-autoblock mw-400px" style={{ fontFamily: 'verdana', textAlign: 'center', fontSize: '18pt' }}>
            "Die größte Inspiration und Ruhe
            finde ich in der Natur
            und ihrer undenlichen Vielfalt."
          </p>
        </div>
        <Spacing top={50} />

      </Container>

      <Container fluid className="p-0">
        <Row className="m-0 p-0">
          <Col xs={6} sm={6} md={4} className="p-0"><Image fluid src="/About/Alex-foto.jpg" style={{ height: '100%', objectFit:'cover'}}/></Col>
          <Col xs={6} sm={6} md={8} className="p-4 fl-col-j-center-al-i-center" style={{ color: "white", backgroundColor: "var(--primary)" }}>
            <div className="mx-autoblock">
              <p className="d-block mw-400px custom-column-txt" style={{ fontFamily: 'verdana' }}>
                Schön, dass du hergefunden hast!
                <br/> <br/>
                Wenn du nach
                Illustrationen und
                Designs mit Liebe zum Detail
                suchst, dann bist du bei mir
                genau richtig.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mw-800px p-0">
        <Row className="p-4 custom-column-txt">
          <Col xs={12} md={6} className="mx-autoblock m-4">
            <p className="col-primary"><b>Bio</b></p>
            <p className="d-block">
              Ich bin Designerin mit mehrjähriger Agenturerfahrung als auch in der Projektbetreuung als Selbstständige.
              Meine Schwerpunkte sind das Entwickeln einer einheitlichen Corporate Identity, Motion Design sowie das Gestalten eines User Interface und User Experience für Apps und Websites.
            </p>
            <p className="d-block">
              Als Illustratorin liebe ich es Charaktere zum Leben zu erwecken und eine Welt um sie herum entstehen zu lassen, indem ich den Fokus auf harmonische Farben und Details lege.
            </p>
          </Col>

          <Col xs={12} md={6} className="mx-autoblock m-4">
            <p className="col-primary"><b>Work</b></p>
            <p className="d-block">
              Bei meiner Arbeit ist es mir besonders wichtig mir ausreichend Zeit für dich und den Prozess zu nehmen, damit du dich während unserer Zusammen-arbeit gut aufgehoben und professionell beraten fühlst. 
              In der Ruhe und Planung liegt die Kraft um zu einem Ergebnis zu gelangen das mit dir resoniert.
            </p>
            <p className="col-primary"><b>Werte</b></p>
            <p className="d-block">
              Da mir unser Planet sehr am Herzen liegt, möchte ich zukunftsorientierte Projekte unterstützen denen Soziales Allgemeinwohl und Nachhaltigkeit am Herzen liegt.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mw-800px ">
        <Row className="custom-column-txt p-4">
          Kontakt
          <br/>
          Wenn du Interesse hast an einem meiner Werke aus dem Shop nutze gerne das Formular weiter unten.
          <br/><br/>
          Hast du ein konkretes Projekt oder eine Idee? Wunderbar, dann vereinbare doch einfach einen online Termin mit mir für ein erstes Kennenlernen
          oder nutze auch das untere Formular. Dann kannst du mir in aller Ruhe von dir und deinem Projekt erzählen.
          <br/><br/>
          Ich freue mich auf deine Anfrage.

          <Spacing top={20} />

          <Button className="mx-auto" variant="primary" 
            href="https://calendly.com/a-schilhart" target="_blank"
            style={{width:'200px'}}>
            Jetzt Termin buchen!
          </Button>
        </Row>
        <Spacing top={20} />

        <Row id="contact" className="p-4">
          <h4 className="col-primary p-0">Reach out!</h4>
          <Spacing top={20} />

          <Form className="p-0">
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
              <textarea className="form-control" id="form-message" rows={6}></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Absenden
            </Button>
          </Form >
          <Spacing top={50} />

        </Row>
      </Container>

    </div>
  );
}

export default AboutMe;
