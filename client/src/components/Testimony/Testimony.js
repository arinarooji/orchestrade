import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Testimony extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <br/>                     
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 class="section-heading text-center">Testimony</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <center><i>
                            "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível"
                        </i></center>
                    </Col>
                    <Col md="4">
                    <center><i>
                        "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível"
                    </i></center>
                    </Col>
                    <Col md="4">
                    <center><i>
                        "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível"
                    </i></center>
                    </Col>
                </Row>
            </Container>
        );
    }
}