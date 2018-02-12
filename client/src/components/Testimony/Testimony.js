import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Testimony extends React.Component {
  render() {
    return (
      <div className="pb-4 bg-dark text-white">
        <Row>
          <Col>
            <h2 className="section-heading text-center pb-2 display-4">
              Testimony
            </h2>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col xs="12" lg="4" className="pb-4">
            <center>
              <i>
                "É um facto estabelecido de que um leitor é distraído pelo
                conteúdo legível de uma página quando analisa a sua mancha
                gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais
                ou menos normal de letras, ao contrário do uso de "Conteúdo
                aqui, conteúdo aqui", tornando-o texto legível"
              </i>
            </center>
          </Col>
          <Col xs="12" lg="4" className="pb-4">
            <center>
              <i>
                "É um facto estabelecido de que um leitor é distraído pelo
                conteúdo legível de uma página quando analisa a sua mancha
                gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais
                ou menos normal de letras, ao contrário do uso de "Conteúdo
                aqui, conteúdo aqui", tornando-o texto legível"
              </i>
            </center>
          </Col>
          <Col xs="12" lg="4" className="pb-4">
            <center>
              <i>
                "É um facto estabelecido de que um leitor é distraído pelo
                conteúdo legível de uma página quando analisa a sua mancha
                gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais
                ou menos normal de letras, ao contrário do uso de "Conteúdo
                aqui, conteúdo aqui", tornando-o texto legível"
              </i>
            </center>
          </Col>
        </Row>
      </div>
    );
  }
}
