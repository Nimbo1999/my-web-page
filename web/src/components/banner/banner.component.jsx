import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Profile from '../lopesProfile/profile.component';
// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectBanner } from '../../store/banner/banner.selector'
import { getProfileData } from '../../store/banner/banner.actions'
import './banner.style.scss';

const Banner = ({ banner, getProfileData }) => {

    const { profiles, loading } = banner

    useEffect(() => {
        getProfileData()
    }, [getProfileData]);

    if(loading)
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
                        profiles.map((item, key) => {
                            return(
                                <Col md={6} sm={12} key={key}>
                                    <Profile nome={item.title} imagem={item.image} skills={item.skills} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
}

const mapStateToProps = createStructuredSelector({
    banner: selectBanner
})

const mapDispatchToProps = dispatch => ({
    getProfileData: () => dispatch(getProfileData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);