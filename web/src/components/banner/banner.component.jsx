import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Profile from '../lopesProfile/profile.component';
import firebase from '../../firebase';
import './banner.style.scss';

const Banner = () => {

    const [dados, setDados] = React.useState();
    const [initializing, setInitializing] = React.useState(true);

    React.useEffect(() => {
        firebase.firestore().collection("dadosDinamicos").doc('paginaDevLopes')
            .get().then(doc => {
                if(doc.exists) {
                    const { banner } = doc.data();

                    setDados(banner);
                    setInitializing(false);
                } else {
                    console.error("Documento não foi encontrado!");
                }
            });
    }, [setDados, setInitializing]);

    if(initializing)
        return (
            <Container className="bannerContainer" fluid>
                <Row>
                    <Col sm={12} style={{flex: 1, flexDirection:'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faSpinner} size="5x" spin />
                        <h3>Buscando dados...</h3>
                    </Col>
                </Row>
            </Container>
        )
    else
        return(
            <Container className="bannerContainer" fluid>
                <Row>
                    {
                        dados.map(item => {
                            return(
                                <Col md={6} sm={12}>
                                    <Profile nome={item.title} imagem={item.image} skills={item.skills} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
}

export default Banner;