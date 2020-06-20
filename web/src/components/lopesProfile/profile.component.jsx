import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Divider from '../lopesDivider/divider.component';
import './profile.style.scss';

const Profile = (props) => {
    let skills = '';
    
    for(let i = 0; i < props.skills.length; i++){
        if(props.skills.length > i + 1)
            skills += `${props.skills[i]} - `;
        else
            skills += `${props.skills[i]}`;
    }

    return(
        <Container>
            <Row>
                <Col className="profile-image-container">
                    <Image className="profile-image" src={props.imagem} roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col className="flex-div">
                    <h2 className="text">{props.nome}</h2>
                    <Divider color="white" />
                    <h4 className="text">{skills}</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;