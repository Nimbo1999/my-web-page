import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../lopesProfile/profile.component';
import gabrielImg from '../../images/Gabriel.png';
import matheusImg from '../../images/matheus.png';
import './banner.style.scss';

const Banner = () => {
    return(
        <Container className="bannerContainer" fluid>
            <Row>
                <Col md={6} sm={12}>
                    <Profile nome="Matheus de Oliveira Lopes" imagem={matheusImg} skills={["React", "Spring", "SQL"]} />
                </Col>
                <Col md={6} sm={12}>
                    <Profile nome="Gabriel de Oliveira Lopes" imagem={gabrielImg} skills={["Spring", "Angular", "React", "Banco Relacional"]} />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;